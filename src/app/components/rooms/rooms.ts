export interface IRoom{
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number;
}

export interface IRoomList{
    roomNbr : number;
    roomType : string;
    amenties : string;
    price : number;
    photos : string;
    checkInTime : Date;
    checkOutTime : Date;
}