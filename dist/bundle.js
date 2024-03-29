/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

class Project {
    constructor() {
        this.name = "My Project";
        this.todos = []
    }

    static projects = [
        {}
    ];


}

class Todo {
    constructor() {
        this.title = "Todo title"
        this.description = "Todo description"
        this.dueDate = "Todo dueDate"
        this.notes = "Todo notes"
        this.priority = "Low"
        this.isDone = false;
    }

    editProperty(property, value) {
        if (property !== priority && property !== isDone) {
            this.property = value
    }   }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        switch(this.Priority) {
            case "Low":
                this.Priority = "Normal"
                break
            case "Normal":
                this.Priority = "High"
                break
            case "High":
                this.Priority = "Low"
                break;
        }
    }



}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTXkgUHJvamVjdFwiO1xuICAgICAgICB0aGlzLnRvZG9zID0gW11cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvamVjdHMgPSBbXG4gICAgICAgIHt9XG4gICAgXTtcblxuXG59XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJUb2RvIHRpdGxlXCJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwiVG9kbyBkZXNjcmlwdGlvblwiXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IFwiVG9kbyBkdWVEYXRlXCJcbiAgICAgICAgdGhpcy5ub3RlcyA9IFwiVG9kbyBub3Rlc1wiXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBcIkxvd1wiXG4gICAgICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZWRpdFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvcGVydHkgIT09IHByaW9yaXR5ICYmIHByb3BlcnR5ICE9PSBpc0RvbmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHkgPSB2YWx1ZVxuICAgIH0gICB9XG5cbiAgICB0b2dnbGVpc0RvbmUoKSB7XG4gICAgICAgIHRoaXMuaXNEb25lID09PSBmYWxzZSA/IHRoaXMuaXNEb25lID0gdHJ1ZSA6IHRoaXMuaXNEb25lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdG9nZ2xlUHJpb3JpdHkoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLlByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Qcmlvcml0eSA9IFwiTm9ybWFsXCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIk5vcm1hbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuUHJpb3JpdHkgPSBcIkhpZ2hcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiSGlnaFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuUHJpb3JpdHkgPSBcIkxvd1wiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9