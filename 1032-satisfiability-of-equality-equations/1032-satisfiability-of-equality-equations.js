/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    let parent = Array.from({ length: 26 }, (_, i) => i);
    // console.log(parent)

    //step 1 first find == 
    for (let equation of equations) {
        let a = equation.charCodeAt(0) - 97;
        let b = equation.charCodeAt(3) - 97;
        if (equation[1] == '=') {
            //equality
            union(a, b)
        }

    }
    //step 2 find !== 
    for (let equation of equations) {
        let a = equation.charCodeAt(0) - 97;
        let b = equation.charCodeAt(3) - 97;
        if (equation[1] == "!") {

            if (find(a) === find(b)) {
                return false;
            } else {
                continue;
            }
        }
    }



    return true;


    function union(a, b) {
        let rx = find(a);
        let ry = find(b);
        if (rx === ry) {
            return;
        }
        parent[rx] = ry;
    }
    function find(x) {
        if (parent[x] == x) {
            return x;
        }
        parent[x] = find(parent[x]);
        return parent[x]
    }


};