
class Index {
    static show(req, res) {
        res.send(`It's ALIVE!`);
        return;
    }
}

module.exports = Index;