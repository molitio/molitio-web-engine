"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _userpublicservice = require("./user-public.service");
describe('UserPublicService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _userpublicservice.UserPublicService
            ]
        }).compile();
        service = module.get(_userpublicservice.UserPublicService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=user-public.service.spec.js.map