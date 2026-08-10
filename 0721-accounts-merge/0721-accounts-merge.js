/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let n = accounts.length
    let emailid = new Map();
    let emailtoname = new Map();
    let count = 0;
    for (let account of accounts) {
        for (let i = 1; i < account.length; i++) {
            if (!emailid.has(account[i])) {
                emailid.set(account[i], count)
                count++
            }
        }
    }
    for (let account of accounts) {
        for (let i = 1; i < account.length; i++) {

            emailtoname.set(account[i], account[0])


        }
    }
    // console.log(emailid)
    // console.log(emailtoname)
    let parent = Array.from({ length: count }, (_, i) => i)
    // console.log(parent)

    function find(x) {
        if (parent[x] == x) {
            return x;
        }
        parent[x] = find(parent[x]);
        return parent[x]
    }
    for (let account of accounts) {
        let first = emailid.get(account[1]);

        for (let i = 2; i < account.length; i++) {
            let curr = emailid.get(account[i]);

            union(first, curr);
        }
    }
    function union(x, y) {
        let rx = find(x);
        let ry = find(y);
        if (rx === ry) {
            return
        }
        parent[rx] = ry
    }

    let group = new Map();
    for(let [email,id] of emailid){
        let root = find(id);
        if(!group.has(root)){
            group.set(root,[]);
        }
        group.get(root).push(email);
    }

    let result = [];
    for(let [root,emails] of group){
        emails.sort();
        //get name from first email
        let name = emailtoname.get(emails[0]);
        result.push([name,...emails])
    }
    return result;

};