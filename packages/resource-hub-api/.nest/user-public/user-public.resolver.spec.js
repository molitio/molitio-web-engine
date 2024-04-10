"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _userpublicresolver = require("./user-public.resolver");
const _userpublicservice = require("./user-public.service");
describe('UserPublicResolver', ()=>{
    let resolver;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _userpublicresolver.UserPublicResolver,
                _userpublicservice.UserPublicService
            ]
        }).compile();
        resolver = module.get(_userpublicresolver.UserPublicResolver);
    });
    it('should be defined', ()=>{
        expect(resolver).toBeDefined();
    });
});

//# sourceMappingURL=user-public.resolver.spec.js.map