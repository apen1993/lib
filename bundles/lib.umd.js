(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.lib = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var LibService = /** @class */ (function () {
        function LibService() {
        }
        return LibService;
    }());
    LibService.ɵfac = function LibService_Factory(t) { return new (t || LibService)(); };
    LibService.ɵprov = i0.ɵɵdefineInjectable({ token: LibService, factory: LibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var LibComponent = /** @class */ (function () {
        function LibComponent() {
        }
        LibComponent.prototype.ngOnInit = function () {
        };
        return LibComponent;
    }());
    LibComponent.ɵfac = function LibComponent_Factory(t) { return new (t || LibComponent)(); };
    LibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LibComponent, selectors: [["lib-lib"]], decls: 2, vars: 0, template: function LibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " lib works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-lib',
                        template: "\n    <p>\n      lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var LibModule = /** @class */ (function () {
        function LibModule() {
        }
        return LibModule;
    }());
    LibModule.ɵmod = i0.ɵɵdefineNgModule({ type: LibModule });
    LibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LibModule_Factory(t) { return new (t || LibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LibModule, { declarations: [LibComponent], exports: [LibComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LibComponent],
                        imports: [],
                        exports: [LibComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LibComponent = LibComponent;
    exports.LibModule = LibModule;
    exports.LibService = LibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib.umd.js.map
