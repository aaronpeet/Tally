import{i as a,c as s,u as e,d as o,o as r,a as t,b as d}from"./vendor.42495df0.js";import{e as c,A as i,p as l,b as n,P as m}from"./index.4d1ca85d.js";const u={name:"Profile",setup(){const o=e();return a((async()=>{try{await c.getMyHouseholdById(o.params.id),i.activeProfile=await l.getProfileById(o.params.id),await n.getGamesByHouseholdId(i.account.householdId)}catch(a){m.toast(a,"error")}})),{account:s((()=>i.account)),myHousehold:s((()=>i.myHousehold)),games:s((()=>i.games)),profile:s((()=>i.activeProfile))}}},f={class:"container-fluid"},v={class:"row"},y={class:"col-md-6 my-2"},p={class:"row justify-content-center"},g={class:"col-11 p-0"},h={class:"col-md-6 my-2"},P={class:"row justify-content-center"},w={class:"col-11 p-0"};u.render=function(a,s,e,c,i,l){const n=o("Navbar"),m=o("ProfileCard"),u=o("PersonalLeaderboardCard"),b=o("GameCabinetCard");return r(),t("div",f,[d(n),d("div",v,[d("div",y,[d("div",p,[d(m),d("div",g,[d(u)])])]),d("div",h,[d("div",P,[d("div",w,[d(b,{games:c.games},null,8,["games"])])])])])])};export default u;