const paths = require('./all-paths.json')

function getTwoStatePath(state1, state2) {
    let paths1 = paths.filter(p => p.STATE_1_ABBR == state1);
    let final_path = paths1.find(path => path.STATE_2_ABBR == state2);
    return final_path;
}

module.exports = { getTwoStatePath }