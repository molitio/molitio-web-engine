export type Background = {
    background?: React.ReactNode;
};

export class KisHalyo {
    Id;
    // getter and setter for this class:
    // get Id() {
    //     return this.Id;
    // }
    // set Id(Id) {
    //     this.Id = Id;
    // }
    constructor(Id: number) {
        this.Id = Id;
        console.info('id: ', Id);
    }
    // get and set for this class:
    // get Id() {
    //     return this.Id;
    // }
    // set Id(Id) {
    //     this.Id = Id;
    // }
    // constructor(Id: number) {
    //     this.Id = Id;
    // }
}
