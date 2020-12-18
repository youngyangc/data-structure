class BinaryHeap{
    /**
     * 构造二叉堆
     * @param {Array} data 
     * @param {Function} compare
     */
    constructor(data,compare){
        this.data = data === void (0) ? null : this.buildBinaryHeap(data.slice());
        this.compare = compare || ((a,b) => a-b)
    }

    /**
     * 构建二叉堆
     * @method buildBinaryHeap()
     * @param {Array} data 
     */
    buildBinaryHeap(data) {
        
    }

    /**
     * 上浮节点
     * @method upAdjust
     * @param {Number} index 
     * @param {Array} data 
     */
    upAdjust(index,data){

    }

    /**
     * 下沉节点
     * @method downAdjust()
     * @param {Number} index 
     * @param {Array} data 
     */
    downAdjust(index,data){

    }


}