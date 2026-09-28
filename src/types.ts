export type NetworkCode="ERC20"|"BEP20"|"TON";
export interface Wallet{usdt:number;coins:number;frozen:number}
export interface Withdrawal{network:NetworkCode;amount:number;address:string;status:"pending"|"approved"|"rejected"}
export interface Referral{userId:string;joinedAt:string;rewardCoins:number;giftGranted:boolean}
