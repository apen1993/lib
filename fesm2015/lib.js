import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class LibService {
    constructor() { }
}
LibService.ɵfac = function LibService_Factory(t) { return new (t || LibService)(); };
LibService.ɵprov = ɵɵdefineInjectable({ token: LibService, factory: LibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class LibComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibComponent.ɵfac = function LibComponent_Factory(t) { return new (t || LibComponent)(); };
LibComponent.ɵcmp = ɵɵdefineComponent({ type: LibComponent, selectors: [["lib-lib"]], decls: 2, vars: 0, template: function LibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib',
                template: `
    <p>
      lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class LibModule {
}
LibModule.ɵmod = ɵɵdefineNgModule({ type: LibModule });
LibModule.ɵinj = ɵɵdefineInjector({ factory: function LibModule_Factory(t) { return new (t || LibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LibModule, { declarations: [LibComponent], exports: [LibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibModule, [{
        type: NgModule,
        args: [{
                declarations: [LibComponent],
                imports: [],
                exports: [LibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibComponent, LibModule, LibService };
//# sourceMappingURL=lib.js.map
