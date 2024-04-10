"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserPublic", {
    enumerable: true,
    get: function() {
        return UserPublic;
    }
});
const _graphql = require("@nestjs/graphql");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UserPublic = class UserPublic {
};
_ts_decorate([
    (0, _graphql.Field)(()=>_graphql.Int, {
        description: 'Example field (placeholder)'
    }),
    _ts_metadata("design:type", Number)
], UserPublic.prototype, "exampleField", void 0);
UserPublic = _ts_decorate([
    (0, _graphql.ObjectType)()
], UserPublic);

//# sourceMappingURL=user-public.entity.js.map