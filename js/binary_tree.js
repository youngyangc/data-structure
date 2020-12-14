/**
 * 树节点类
 * @class Node
 * @constructor
 */
class Node {
    /**
     * 初始化构造
     * @param {Object} data 节点本身数据 未定义则为null
     * @param {Node} leftChild 左节点 未定义则为null
     * @param {Node} rightChlid 右节点 未定义则为null
     */
    constructor(data, leftChild, rightChlid) {
        //此处由于存在dataw为0的情况故只判断undefined
        this.data = data === void (0) ? null : data;
        this.leftChild = leftChild || null;
        this.rightChlid = rightChlid || null;
    }
}

/**
 * 二叉树数据结构
 * @class BinaryTree
 * @constructor
 */
class BinaryTree {
    /**
     * 初始化构造
     * @param {Node} node 节点类
     * @param {Function} compare 定义二叉树的排序规则默认排序数据为node.data
     */
    constructor(node, compare) {
        this.root = node || null;
        this.compare = compare || ((a, b) => a - b)
    }
    /**
     * 向二叉树中插入数据
     * @method insert
     * @param {Object} data 待插入得数据 
     */
    insert(data) {
        //一个新的节点类
        let newNode = new Node(data);
        //如果没有根节点 直接赋予根节点
        if (!this.root) {
            this.root = newNode;
        } else {
            //插入节点
            this._insertNode(this.root, newNode);
        }
    }

    /**
     * 在当前节点中插入对应值
     * @method _insertNode
     * @param {Node} node 待插入节点目录
     * @param {Node} newNode 待插入节点
     */
    _insertNode(node, newNode) {
        //判断新节点应该在当前节点的左边还是右边，如果是相同的树则直接return
        if (this.compare(newNode.data, node.data) < 0) {
            if (!node.leftChild) {
                node.leftChild = newNode
            } else {
                this._insertNode(node.leftChild, newNode)
            }
        } else if (this.compare(newNode.data, node.data) > 0) {
            if (!node.rightChlid) {
                node.rightChlid = newNode
            } else {
                this._insertNode(node.rightChlid, newNode)
            }
        }
        else {
            return;
        }
    }

    /**
     * 删除指定值
     * @method remove
     * @param {Object} data 需要删除得数据
     */
    remove(data) {
        this.root = this._removeNode(this.root, data)
    }

    /**
     * 删除指定节点中的值
     * @method #removeNode()
     * @param {Node} node 待删除的节点目录
     * @param {Object} data 待删除的数据
     * @returns {Node} 返回删除后的节点信息
     */
    _removeNode(node, data) {
        if (!node) return null;
        if (this.compare(data, node.data) < 0) {
            //如果删除数据比当前节点小则从左边递归
            node.leftChild = this._removeNode(node.leftChild, data)
            return node;
        } else if (this.compare(data, node.data) > 0) {
            //如果删除数据比当前节点大则从右边递归
            node.rightChlid = this._removeNode(node.rightChlid, data)
            return node;
        } else {
            //如果删除数据和当前节点一样则当前节点为需要删除的节点
            if (!node.leftChild && !node.rightChlid) {
                //如果左右子节点都不存在则直接删除
                return null
            } else if (!node.rightChlid) {
                //如果没有右子节点 则直接把左节点替换掉当前节点即可
                return node.leftChild;
            } else if (!node.leftChild) {
                //如果没有左子节点 则直接把右节点替换掉当前节点即可
                return node.rightChlid;
            } else {
                //如果左右节点都有 则需要找到右节点中最小值 将其删除并将最小值得data替换到当前节点上
                let minNode = this._findMinNode(node.rightChlid);
                node.data = minNode.data;
                //删除节点
                node.rightChlid = this._removeNode(node.rightChlid, minNode.data)
                //赋值
                return node;
            }

        }
    }

    /**
     * 获取最小值 找到二叉树最左边的叶子节点
     * @method min()
     * @returns {Node} 找到根节点下的最左边节点
     */
    min() {
        return this._findMinNode(this.root);
    }

    /**
     * 找到当前节点中得最左边的叶子节点
     * @method _findMinNode()
     * @param {Node} node 查询节点
     * @returns {Node} 当前节点下最左边的子节点
     */
    _findMinNode(node) {
        return node ? (node.leftChild ? this._findMinNode(node.leftChild) : node) : null;
    }

    /**
     * 获取最大值 找到二叉树最右边的叶子节点
     * @method max()
     * @returns {Node} 找到根节点下的最右边节点
     */
    max() {
        return this._findMaxNode(this.root)
    }

    /**
     * 找到当前节点中最大节点
     * @method _findMaxNode()
     * @param {Node} node 查询节点
     * @returns {Node} 当前节点下最右边的子节点
     */
    _findMaxNode(node) {
        return node ? (node.rightChlid ? this._findMaxNode(node.rightChlid) : node) : null;
    }

    /**
     * 中序遍历
     */
    inOrderTraverse(){

    }

    /**
     * 先序遍历
     */
    preOrederTraverse(){

    }

    /**
     * 后序遍历
     */
    postOrderTraverse(){

    }

    /**
     * 广度优先遍历
     */
    breadthFirstSearch(){

    }

    /**
     * 判断检索值是否存在
     * @param {Object} data 被检索值
     * @returns {Boolean}
     */
    search(data){
        return true;
    }

    /**
     * 判断二叉树是否为空
     * @method isEmpty()
     * @returns {Boolean}
     */
    isEmpty(){
        return this.root === null;
    }

}