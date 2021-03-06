namespace Endpoints {
    export interface IEndpoint {
        _verb: string;
        toString(): string;
    }

    export interface IHaveQueryParams {
        getQueryParams(): Object
    }

    function addParameter(parameters: string[], key: string, value: any) {
        if (value == null) {
            return;
        }
    
        if (_.isArray(value)) {
            var encodedItems = _.map(value, (item) => encodeURIComponent(item.toString()));
            parameters.push(`${key}=${encodedItems.join(',')}`);
        }
        else {
            parameters.push(`${key}=${encodeURIComponent(value.toString())}`);
        }
    }

    function addObjectParameters(parameters: string[], obj: IHaveQueryParams) {
        if (obj == null) {
            return;
        }
    
        var params = obj.getQueryParams();
        Object.keys(params).forEach((key) => {
            addParameter(parameters, key, params[key]);
        });
    }

    export namespace Test {
        export interface IGet {
            hole: string;
        }
    
        export interface IGetWithCall extends IGet, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class Get implements IGet, IEndpoint {
            _verb = 'GET';
            hole: string;
        
            constructor(args: IGet) {
                this.hole = args != null ? args.hole : null;
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions/GetAll`;
            }
        }
    
        export interface IGet1 {
            id: string;
            hole: string;
        }
    
        export interface IGet1WithCall extends IGet1, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class Get1 implements IGet1, IEndpoint {
            _verb = 'GET';
            id: string;
            hole: string;
        
            constructor(args: IGet1) {
                this.id = args != null ? args.id : null;
                this.hole = args != null ? args.hole : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'id', this.id);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions` + this.getQueryString();
            }
        }
    
        export interface IGetSomething {
            hole: string;
            id: number;
            y?: Enums.DummyEnum;
        }
    
        export interface IGetSomethingWithCall extends IGetSomething, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class GetSomething implements IGetSomething, IEndpoint {
            _verb = 'GET';
            hole: string;
            id: number;
            y: Enums.DummyEnum;
        
            constructor(args: IGetSomething) {
                this.hole = args != null ? args.hole : null;
                this.id = args != null ? args.id : null;
                this.y = args != null ? args.y : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'y', this.y);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions/getSomething/${this.id}/ha` + this.getQueryString();
            }
        }
    
        export interface IGetSomethingElse {
            id: number;
            hole: string;
            y?: Interfaces.DummyClass;
        }
    
        export interface IGetSomethingElseWithCall extends IGetSomethingElse, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class GetSomethingElse implements IGetSomethingElse, IEndpoint {
            _verb = 'GET';
            id: number;
            hole: string;
            y: Interfaces.DummyClass;
        
            constructor(args: IGetSomethingElse) {
                this.id = args != null ? args.id : null;
                this.hole = args != null ? args.hole : null;
                this.y = args != null ? args.y : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'id', this.id);
                addObjectParameters(parameters, this.y);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions/GetSomethingElse` + this.getQueryString();
            }
        }
    
        export interface IPost {
            hole: string;
        }
    
        export interface IPostWithCall extends IPost, IEndpoint {
            call<TView>(value: Interfaces.IDummyClass): ng.IPromise<TView>;
        }
    
        export class Post implements IPost, IEndpoint {
            _verb = 'POST';
            hole: string;
        
            constructor(args: IPost) {
                this.hole = args != null ? args.hole : null;
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions`;
            }
        }
    
        export interface IPut {
            id: number;
            hole: string;
        }
    
        export interface IPutWithCall extends IPut, IEndpoint {
            call<TView>(value: string): ng.IPromise<TView>;
        }
    
        export class Put implements IPut, IEndpoint {
            _verb = 'PUT';
            id: number;
            hole: string;
        
            constructor(args: IPut) {
                this.id = args != null ? args.id : null;
                this.hole = args != null ? args.hole : null;
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions/${this.id}`;
            }
        }
    
        export interface IDelete {
            id: number;
            hole: string;
        }
    
        export interface IDeleteWithCall extends IDelete, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class Delete implements IDelete, IEndpoint {
            _verb = 'DELETE';
            id: number;
            hole: string;
        
            constructor(args: IDelete) {
                this.id = args != null ? args.id : null;
                this.hole = args != null ? args.hole : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'id', this.id);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/Test/${this.hole}/actions` + this.getQueryString();
            }
        }
    }

    export namespace Thingy {
        export interface IGetAll {
        }
    
        export interface IGetAllWithCall extends IGetAll, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class GetAll implements IGetAll, IEndpoint {
            _verb = 'GET';
        
            constructor(args?: IGetAll) {
            }
        
            toString = (): string => {
                return `/api/thingy`;
            }
        }
    
        export interface IGet {
            id: number;
            x?: string;
            c?: Interfaces.MegaClass;
        }
    
        export interface IGetWithCall extends IGet, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class Get implements IGet, IEndpoint {
            _verb = 'GET';
            id: number;
            x: string;
            c: Interfaces.MegaClass;
        
            constructor(args: IGet) {
                this.id = args != null ? args.id : null;
                this.x = args != null ? args.x : null;
                this.c = args != null ? args.c : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'x', this.x);
                addObjectParameters(parameters, this.c);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/thingy/${this.id}` + this.getQueryString();
            }
        }
    
        export interface IGetty {
            y: number;
            x?: string;
        }
    
        export interface IGettyWithCall extends IGetty, IEndpoint {
            call<TView>(): ng.IPromise<TView>;
        }
    
        export class Getty implements IGetty, IEndpoint {
            _verb = 'GET';
            y: number;
            x: string;
        
            constructor(args: IGetty) {
                this.y = args != null ? args.y : null;
                this.x = args != null ? args.x : null;
            }
        
            private getQueryString = (): string => {
                var parameters: string[] = [];
                addParameter(parameters, 'x', this.x);
                addParameter(parameters, 'y', this.y);
            
                if (parameters.length > 0) {
                    return '?' + parameters.join('&');
                }
            
                return '';
            }
        
            toString = (): string => {
                return `/api/thingy` + this.getQueryString();
            }
        }
    
        export interface IPost {
        }
    
        export interface IPostWithCall extends IPost, IEndpoint {
            call<TView>(value: Interfaces.IMegaClass): ng.IPromise<TView>;
        }
    
        export class Post implements IPost, IEndpoint {
            _verb = 'POST';
        
            constructor(args?: IPost) {
            }
        
            toString = (): string => {
                return `/api/thingy`;
            }
        }
    }
}
