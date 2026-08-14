/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {

    // STEP 1: Find whether any node has two parents
    let parent = new Map();

    let candidate1 = null; // first parent edge
    let candidate2 = null; // second parent edge

    for (let [u, v] of edges) {

        if (parent.has(v)) {

            // v already has a parent.
            // So [u, v] is the second parent edge.

            candidate1 = [parent.get(v), v];
            candidate2 = [u, v];

        } else {

            parent.set(v, u);
        }
    }


    // STEP 2: Union-Find
    let uf = Array.from(
        { length: edges.length + 1 },
        (_, i) => i
    );

    function find(x) {
        if (uf[x] === x) {
            return x;
        }

        uf[x] = find(uf[x]);
        return uf[x];
    }

    function union(x, y) {

        let rx = find(x);
        let ry = find(y);

        if (rx === ry) {
            // Cycle found
            return false;
        }

        uf[rx] = ry;
        return true;
    }


    // STEP 3: Process every edge
    for (let [u, v] of edges) {

        // If candidate2 exists, temporarily ignore it
        if (
            candidate2 &&
            u === candidate2[0] &&
            v === candidate2[1]
        ) {
            continue;
        }

        // Try to connect u and v
        if (!union(u, v)) {

            // Cycle found
            if (candidate1) {

                // Two-parent case + cycle
                return candidate1;

            } else {

                // Only cycle exists
                return [u, v];
            }
        }
    }


    // No cycle after removing candidate2
    // Therefore candidate2 is the redundant edge.
    return candidate2;
};