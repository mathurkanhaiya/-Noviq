import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Home,Gift,Users,UserRound,Wallet,ArrowUpRight,Sparkles,Zap,ChevronRight,Copy,Share2,Clock3,ShieldCheck,Globe2} from 'lucide-react';
import './styles.css';

type Tab='home'|'trade'|'friends'|'gifts'|'account';
const nav=[['trade',Zap,'Trade'],['friends',Users,'Friends'],['home',Home,'Home'],['gifts',Gift,'Gifts'],['account',UserRound,'Account']] as const;
function App(){
 const [tab,setTab]=useState<Tab>('home'); const [notice,setNotice]=useState('');
 const notify=(s:string)=>{setNotice(s);setTimeout(()=>setNotice(''),1800)};
 const copy=()=>{navigator.clipboard?.writeText('https://t.me/NoviqAI_bot?start=ref_demo');notify('Referral link copied')};
 return <div className="app">
  <header className="top"><div className="brand"><div className="logo">N</div><div><b>NoviqAI</b><span>Smart rewards</span></div></div><div className="avatar">K</div></header>
  <main>{tab==='home'&&<HomePage on={notify}/>} {tab==='trade'&&<TradePage on={notify}/>} {tab==='friends'&&<FriendsPage on={notify} copy={copy}/>} {tab==='gifts'&&<GiftsPage on={notify}/>} {tab==='account'&&<AccountPage on={notify}/>}</main>
  {notice&&<div className="toast">{notice}</div>}
  <nav className="bottom">{nav.map(([id,I,label])=><button className={tab===id?'active':''} onClick={()=>setTab(id as Tab)} key={id}><I size={20}/><span>{label}</span></button>)}</nav>
 </div>
}
const Card=({children,className='' }:{children:React.ReactNode,className?:string})=><section className={'card '+className}>{children}</section>;
function HomePage({on}:{on:(s:string)=>void}){return <>
 <div className="hello"><div><small>Welcome back</small><h1>Hi, Kanhaiya 👋</h1></div><div className="level">Lv. 3</div></div>
 <Card className="balance"><div className="label">Total balance <span>USDT</span></div><div className="big">12.48 <small>USDT</small></div><div className="sub">≈ $12.48</div><div className="stats"><div><b>1,280</b><span>🔷 NQ Coins</span></div><div><b>0.42</b><span>Estimated today</span></div></div></Card>
 <div className="grid2"><button className="action primary" onClick={()=>on('Profit claimed')}><Sparkles/>Claim profit</button><button className="action" onClick={()=>on('How to earn opened')}><Zap/>How to earn?</button></div>
 <div className="sectionTitle"><b>Quick actions</b></div><div className="grid2"><button className="mini" onClick={()=>on('Top up flow opened')}><Wallet/>Top up<ChevronRight/></button><button className="mini" onClick={()=>on('Withdraw flow opened')}><ArrowUpRight/>Withdraw<ChevronRight/></button></div>
 <Card className="ref"><div><span className="pill">Invite & earn</span><h3>Bring friends, unlock gifts</h3><p>Get 🔷 10 coins + 1 gift box when a friend opens NoviqAI.</p></div><button onClick={()=>on('Invite flow opened')}><Share2/></button></Card>
 </>}
function TradePage({on}:{on:(s:string)=>void}){return <><div className="pageTitle"><small>NoviqAI engine</small><h1>Trade & earn</h1><p>Use AI missions to collect NQ Coins and unlock USDT rewards.</p></div><Card className="ai"><div className="aiIcon"><Sparkles/></div><div><b>AI Daily Boost</b><p>Complete today's 3-step mission</p></div><strong>+120 🔷</strong></Card><div className="sectionTitle"><b>Today's missions</b><span>2/3</span></div>{['Open AI insight','Check market pulse','Claim daily boost'].map((x,i)=><Card className="mission" key={x}><div className="dot">{i<2?'✓':i+1}</div><div><b>{x}</b><p>{i<2?'Completed':'Ready to complete'}</p></div><button onClick={()=>on(i<2?'Already completed':'Mission started')}>{i<2?'Done':'Start'}</button></Card>)}</>}
function FriendsPage({on,copy}:{on:(s:string)=>void,copy:()=>void}){return <><div className="pageTitle"><small>Referral program</small><h1>Friends</h1><p>Invite friends and grow your reward stream.</p></div><Card className="invite"><div className="inviteNum">10 🔷</div><b>+ 1 Gift Box</b><p>For every friend who opens NoviqAI through your invite.</p><div className="refbox">t.me/NoviqAI_bot?start=ref_demo<button onClick={copy}><Copy size={17}/></button></div><div className="grid2"><button className="action primary" onClick={()=>on('Share sheet opened')}><Share2/>Share invite</button><button className="action" onClick={copy}><Copy/>Copy link</button></div></Card><div className="statsRow"><Card><b>8</b><span>Friends invited</span></Card><Card><b>2.40</b><span>Referral income</span></Card></div><div className="sectionTitle"><b>Friends list</b></div><Card className="empty"><Users/><b>Your friends will appear here</b><p>Invite your first friend to start.</p></Card></>}
function GiftsPage({on}:{on:(s:string)=>void}){return <><div className="pageTitle"><small>Reward boxes</small><h1>Gifts</h1><p>Open boxes earned from activity and referrals.</p></div><Card className="giftHero"><div className="gift">🎁</div><div><span className="pill">1 available</span><h2>Starter Gift</h2><p>Guaranteed NQ Coins, with a chance of bonus USDT.</p></div><button onClick={()=>on('Gift opened')}>Open</button></Card><div className="giftGrid"><Card><div className="gift muted">🎁</div><b>Invite Gift</b><p>Unlock with a new referral.</p></Card><Card><div className="gift muted">🎁</div><b>Daily Gift</b><p>Coming after streak unlock.</p></Card></div></>}
function AccountPage({on}:{on:(s:string)=>void}){return <><div className="profile"><div className="avatar bigAvatar">K</div><div><h1>Kanhaiya</h1><p>Level 3 · Noviq member</p></div></div><Card className="accountStats"><div><b>12.48</b><span>Total USDT</span></div><div><b>1,280</b><span>NQ Coins</span></div><div><b>8</b><span>Invited</span></div></Card>{[['Wallet & Withdraw',Wallet],['Operations / History',Clock3],['Language',Globe2],['Security',ShieldCheck]].map(([x,I])=><button className="setting" key={x as string} onClick={()=>on((x as string)+' opened')}><I/><span>{x as string}</span><ChevronRight/></button>)}<div className="legal">Terms · Privacy · FAQ</div></>}
createRoot(document.getElementById('root')!).render(<App/>);
