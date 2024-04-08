"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserPublicResolver", {
    enumerable: true,
    get: function() {
        return UserPublicResolver;
    }
});
const _graphql = require("@nestjs/graphql");
const _userpublicservice = require("./user-public.service");
const _userpublicentity = require("./entities/user-public.entity");
const _createuserpublicinput = require("./dto/create-user-public.input");
const _updateuserpublicinput = require("./dto/update-user-public.input");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UserPublicResolver = class UserPublicResolver {
    createUserPublic(createUserPublicInput) {
        return this.userPublicService.create(createUserPublicInput);
    }
    findAll() {
        return this.userPublicService.findAll();
    }
    findOne(id) {
        return this.userPublicService.findOne(id);
    }
    updateUserPublic(updateUserPublicInput) {
        return this.userPublicService.update(updateUserPublicInput.id, updateUserPublicInput);
    }
    removeUserPublic(id) {
        return this.userPublicService.remove(id);
    }
    constructor(userPublicService){
        this.userPublicService = userPublicService;
    }
};
_ts_decorate([
    (0, _graphql.Mutation)(()=>_userpublicentity.UserPublic),
    _ts_param(0, (0, _graphql.Args)('createUserPublicInput')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createuserpublicinput.CreateUserPublicInput === "undefined" ? Object : _createuserpublicinput.CreateUserPublicInput
    ]),
    _ts_metadata("design:returntype", void 0)
], UserPublicResolver.prototype, "createUserPublic", null);
_ts_decorate([
    (0, _graphql.Query)(()=>[
            _userpublicentity.UserPublic
        ], {
        name: 'userPublic'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], UserPublicResolver.prototype, "findAll", null);
_ts_decorate([
    (0, _graphql.Query)(()=>_userpublicentity.UserPublic, {
        name: 'userPublic'
    }),
    _ts_param(0, (0, _graphql.Args)('id', {
        type: ()=>_graphql.Int
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], UserPublicResolver.prototype, "findOne", null);
_ts_decorate([
    (0, _graphql.Mutation)(()=>_userpublicentity.UserPublic),
    _ts_param(0, (0, _graphql.Args)('updateUserPublicInput')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _updateuserpublicinput.UpdateUserPublicInput === "undefined" ? Object : _updateuserpublicinput.UpdateUserPublicInput
    ]),
    _ts_metadata("design:returntype", void 0)
], UserPublicResolver.prototype, "updateUserPublic", null);
_ts_decorate([
    (0, _graphql.Mutation)(()=>_userpublicentity.UserPublic),
    _ts_param(0, (0, _graphql.Args)('id', {
        type: ()=>_graphql.Int
    })),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], UserPublicResolver.prototype, "removeUserPublic", null);
UserPublicResolver = _ts_decorate([
    (0, _graphql.Resolver)(()=>_userpublicentity.UserPublic),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userpublicservice.UserPublicService === "undefined" ? Object : _userpublicservice.UserPublicService
    ])
], UserPublicResolver);

//# sourceMappingURL=user-public.resolver.js.map