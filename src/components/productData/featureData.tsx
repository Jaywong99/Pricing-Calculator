import React, {useState} from "react"
import icon1 from "../../image/icon1.png"
import icon2 from "../../image/icon2.png"
import icon3 from "../../image/icon3.png"
import uuid from "uuid";

const featureData=[
      {
        id:parseInt("1"),
        iconName:icon1,
        productName:"Virtual Machines",
        title: "1 D2 v3 (2 vCPU(s), 8 GB RAM) x 730 Hours; Windows – (OS Only); Pay as you go; 0 managed OS disks – S4, 100 transaction units",
        content:"Provision Windows and Linux virtual machines in seconds",
        isCollapse:false,
        price: Number("152.62"),
      },
      {
        id:"2",
        iconName:icon2,
        productName:"Storage Accounts",
        title: "Block Blob Storage, General Purpose V2, LRS Redundancy, Hot Access Tier, 1,000 GB Capacity -",
        content:"Durable, highly available, and massively scalable cloud storage",
        isCollapse:false,
        price: Number("21.84"),
      },
      {
        id:"3",
        iconName:icon3,
        productName:"Azure SQL Database",
        title:"Managed Instance, vCore Purchase Model, General Purpose Tier, Provisioned, Gen 4, 1 8 vCore instance(s) x 730 Hours, 32 GB Storage, 0 GB Backup Storage",
        content:"Managed, intelligent SQL in the cloud",
        isCollapse:false,
        price: Number("1472.75"),
      },
]
export default featureData