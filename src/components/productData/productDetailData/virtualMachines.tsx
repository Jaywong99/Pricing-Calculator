import React, {useState} from "react"

const regions = [
{id:1 , value:"asia-pacific-east", label:'EastAsia'},
{id:2 , value:"asia-pacific-southeast",label:'SoutheastAsia'},
{id:3 , value:"australia-central",label:'AustraliaCentral'},
{id:4 , value:"australia-central-2",label:'AustraliaCentral2'},
{id:5 , value:"australia-east",label:'AustraliaEast'},
{id:6 , value:"australia-southeast",label:'AustraliaSoutheast'},
{id:7 , value:"brazil-south",label:'BrazilSouth'},
{id:8 , value:"canada-central",label:'CanadaCentral'},
{id:9 , value:"canada-east",label:'CanadaEast'},
{id:10 , value:"central-india",label:'CentralIndia'},
{id:11 , value:"south-india",label:'SouthIndia'},
{id:12 , value:"west-india",label:'WestIndia'},
{id:13 , value:"europe-north",label:'NorthEurope'},
{id:14 , value:"europe-west",label:'WestEurope'},
{id:15 , value:"france-central",label:'FranceCentral'},
{id:16 , value:"france-south",label:'FranceSouth'},
{id:17 , value:"germany-central",label:'GermanyCentral'},
{id:18 , value:"germany-north",label:'GermanyNorth'},
{id:19 , value:"germany-northeast",label:'GermanyNortheast'},
{id:20 , value:"germany-west-central",label:'GermanyWestCentral'},
{id:21 , value:"japan-east",label:'JapanEast'},
{id:22 , value:"japan-west",label:'JapanWest'},
{id:23 , value:"korea-central",label:'KoreaCentral'},
{id:24 , value:"korea-south",label:'KoreaSouth'},
{id:25 , value:"south-africa-north",label:'SouthAfricaNorth'},
{id:26 , value:"south-africa-west",label:'SouthAfricaWest'},
{id:27 , value:"united-kingdom-south",label:'UKSouth'},
{id:28 , value:"united-kingdom-west",label:'UKWest'},
{id:29 , value:"us-central",label:'CentralUS'},
{id:30 , value:"us-east",label:'EastUS'},
{id:31 , value:"us-east-2",label:'EastUS2'},
{id:32 , value:"us-north-central",label:'NorthCentralUS'},
{id:33 , value:"us-south-central",label:'SouthCentralUS'},
{id:34 , value:"us-west",label:'WestUS'},
{id:35 , value:"us-west-2",label:'WestUS2'},
{id:36 , value:"usgov-arizona",label:'USGovArizona'},
{id:37 , value:"usgov-iowa",label:'USGovIowa'},
{id:38 , value:"usgov-texas",label:'USGovTexas'},
{id:39 , value:"usgov-virginia",label:'USGovVirginia'},
{id:40 , value:"switzerland-north",label:'SwitzerlandNorth'},
{id:41 , value:"switzerland-west",label:'SwitzerlandWest'},
{id:42 , value:"uae-central",label:'UAECentral'},
{id:43 , value:"uae-north",label:'UAENorth'},
{id:44 , value:"norway-east",label:'NorwayEast'},
{id:45 , value:"norway-west",label:'NorwayWest'},
];

const operatingSystems = [
{id:1 , label:"Window"},
{id:2 , label:"Linux"},
];

const types = [
{ id:1  ,value:"os-only ", label:"(OS Only)                                        "},
{ id:2  ,value:"biztalk ", label:"Biztalk                                          "},
{ id:3  ,value:"sql ", label:"SQL Server                                           "},
{ id:4  ,value:"centos ", label:"CentOS                                            "},
{ id:5  ,value:"redhat ", label:"Red Hat Enterprise Linux                          "},
{ id:6  ,value:"rhel-ha ", label:"Red Hat Enterprise Linux with HA                 "},
{ id:7  ,value:"rhel-sap-business ", label:"RHEL for SAP Business Applications     "},   
{ id:8  ,value:"rhel-sap-hana ", label:"RHEL for SAP HANA                          "},
{ id:9  ,value:"rhel-sap-hana-ha ", label:"RHEL for SAP HANA with HA               "},
{ id:10 ,value:"sql-redhat ", label:"SQL Server Red Hat Enterprise Linux           "},
{ id:11 ,value:"sql-sles-priority ", label:"SQL Server SUSE Priority               "},
{ id:12 ,value:"sql-linux ", label:"SQL Server Ubuntu Linux                        "},
{ id:13 ,value:"sles-enterprise ", label:"SUSE Linux Enterprise                    "},
{ id:14 ,value:"sles-hpc ", label:"SUSE Linux Enterprise for HPC                   "},
{ id:15 ,value:"sles-sap-priority ", label:"SUSE Linux Enterprise for SAP Priority "},
{ id:16 ,value:"ubuntu ", label:"Ubuntu                                            "},
{ id:17 ,value:"ubuntu-advantage ", label:"Ubuntu Advantage                        "},
];

const licenses = [
{id : "1 " , value:"biztalk-enterprise" , label:"Biztalk Enterprise                                "},
{id : "2 " , value:"biztalk-standard" , label:"Biztalk Standard                                    "},
{id : "3 " , value:"sql-enterprise" , label:"SQL Enterprise                                        "},
{id : "4 " , value:"sql-standard" , label:"SQL Standard                                            "},
{id : "5 " , value:"sql-web" , label:"SQL Web                                                      "},
{id : "6 " , value:"sql-redhat-enterprise" , label:"SQL Server Enterprise Red Hat Enterprise Linux "},  
{id : "7 " , value:"sql-redhat-standard" , label:"SQL Server Standard Red Hat Enterprise Linux     "},
{id : "8 " , value:"sql-redhat-web" , label:"SQL Server Web Red Hat Enterprise Linux               "},
{id : "9 " , value:"sql-sles-priority-enterprise" , label:"SQL Server Enterprise SUSE Priority     "},
{id : "10" , value:"sql-sles-priority-standard" , label:"SQL Server Standard SUSE Priority         "},
{id : "11" , value:"sql-sles-priority-web" , label:"SQL Server Web SUSE Priority                   "},
{id : "12" , value:"sql-linux-enterprise" , label:"SQL Server Enterprise Ubuntu Linux              "},
{id : "13" , value:"sql-linux-standard" , label:"SQL Server Standard Ubuntu Linux                  "},
{id : "14" , value:"sql-linux-web" , label:"SQL Server Web Ubuntu Linux                            "},
{id : "15" , value:"sles-enterprise-basic" , label:"SUSE Linux Enterprise Basic                    "},
{id : "16" , value:"sles-enterprise-standard" , label:"SUSE Linux Enterprise Standard              "},
{id : "17" , value:"sles-hpc-priority" , label:"SUSE Linux Enterprise for HPC Priority             "},
{id : "18" , value:"sles-hpc-standard" , label:"SUSE Linux Enterprise for HPC Standard             "},
{id : "19" , value:"ubuntu-advantage-essential" , label:"Ubuntu Advantage Essential                "},
{id : "20" , value:"ubuntu-advantage-standard" , label:"Ubuntu Advantage Standard                  "},
{id : "21" , value:"ubuntu-advantage-advanced" , label:"Ubuntu Advantage Advanced                  "},
];

const billingOptions = [
{id: 1, label:"Pay as you go", discount: 0 },
{id: 2, label:"1 year reserved", discount: 0 },
{id: 3, label:"3 year reserved", discount: 0 },
];

const tier = [
{id:1 , label:"Basic"},
{id:2 , label:"Low Priority"},
{id:3 , label:"Standard"},
];
const instance = [
{id:1  , value:"a0", label:"A0: 1 Cores(s), 0.75 GB RAM, 20 GB Temporary storage, $0.02                    "},
{id:2  , value:"a1", label:"A1: 1 Cores(s), 1.75 GB RAM, 70 GB Temporary storage, $0.09                    "},
{id:3  , value:"a2", label:"A2: 2 Cores(s), 3.5 GB RAM, 135 GB Temporary storage, $0.18                    "},
{id:4  , value:"a3", label:"A3: 4 Cores(s), 7 GB RAM, 285 GB Temporary storage, $0.36                      "},
{id:5  , value:"a4", label:"A4: 8 Cores(s), 14 GB RAM, 605 GB Temporary storage, $0.72                     "},
{id:6  , value:"a5", label:"A5: 2 Cores(s), 14 GB RAM, 135 GB Temporary storage, $0.36                     "},
{id:7  , value:"a6", label:"A6: 4 Cores(s), 28 GB RAM, 285 GB Temporary storage, $0.72                     "},
{id:8  , value:"a7", label:"A7: 8 Cores(s), 56 GB RAM, 605 GB Temporary storage, $1.44                     "},
{id:9  , value:"b1s", label:"B1S: 1 vCPU(s), 1 GB RAM, 4 GB Temporary storage, $0.0186                     "},
{id:10 , value:"b2s", label:"B2S: 2 vCPU(s), 4 GB RAM, 8 GB Temporary storage, $0.0664                     "},
{id:11 , value:"b1ms", label:"B1MS: 1 vCPU(s), 2 GB RAM, 4 GB Temporary storage, $0.0332                   "},
{id:12 , value:"b2ms", label:"B2MS: 2 vCPU(s), 8 GB RAM, 16 GB Temporary storage, $0.125                   "},
{id:13 , value:"b4ms", label:"B4MS: 4 vCPU(s), 16 GB RAM, 32 GB Temporary storage, $0.25                   "},
{id:14 , value:"b8ms", label:"B8MS: 8 vCPU(s), 32 GB RAM, 64 GB Temporary storage, $0.499                  "},
{id:15 , value:"b12ms", label:"B12MS: 12 vCPU(s), 48 GB RAM, 96 GB Temporary storage, $0.749               "},
{id:16 , value:"b16ms", label:"B16MS: 16 vCPU(s), 64 GB RAM, 128 GB Temporary storage, $0.998              "},
{id:17 , value:"b20ms", label:"B20MS: 20 vCPU(s), 80 GB RAM, 160 GB Temporary storage, $1.248              "},
{id:18 , value:"a1v2", label:"A1 v2: 1 vCPU(s), 2 GB RAM, 10 GB Temporary storage, $0.076                  "},
{id:19 , value:"a2v2", label:"A2 v2: 2 vCPU(s), 4 GB RAM, 20 GB Temporary storage, $0.159                  "},
{id:20 , value:"a4v2", label:"A4 v2: 4 vCPU(s), 8 GB RAM, 40 GB Temporary storage, $0.333                  "},
{id:21 , value:"a8v2", label:"A8 v2: 8 vCPU(s), 16 GB RAM, 80 GB Temporary storage, $0.7                   "},
{id:22 , value:"a2mv2", label:"A2m v2: 2 vCPU(s), 16 GB RAM, 20 GB Temporary storage, $0.27                "},
{id:23 , value:"a4mv2", label:"A4m v2: 4 vCPU(s), 32 GB RAM, 40 GB Temporary storage, $0.567               "},
{id:24 , value:"a8mv2", label:"A8m v2: 8 vCPU(s), 64 GB RAM, 80 GB Temporary storage, $1.191               "},
{id:25 , value:"d1", label:"D1: 1 Cores(s), 3.5 GB RAM, 50 GB Temporary storage, $0.185                    "},
{id:26 , value:"d2", label:"D2: 2 Cores(s), 7 GB RAM, 100 GB Temporary storage, $0.37                      "},
{id:27 , value:"d3", label:"D3: 4 Cores(s), 14 GB RAM, 200 GB Temporary storage, $0.741                    "},
{id:28 , value:"d4", label:"D4: 8 Cores(s), 28 GB RAM, 400 GB Temporary storage, $1.481                    "},
{id:29 , value:"d11", label:"D11: 2 Cores(s), 14 GB RAM, 100 GB Temporary storage, $0.352                  "},
{id:30 , value:"d12", label:"D12: 4 Cores(s), 28 GB RAM, 200 GB Temporary storage, $0.703                  "},
{id:31 , value:"d13", label:"D13: 8 Cores(s), 56 GB RAM, 400 GB Temporary storage, $1.407                  "},
{id:32 , value:"d14", label:"D14: 16 Cores(s), 112 GB RAM, 800 GB Temporary storage, $2.814                "},
{id:33 , value:"d1s", label:"D1s: 1 Cores(s), 3.5 GB RAM, 7 GB Temporary storage, $0.185                   "},
{id:34 , value:"d2s", label:"D2s: 2 Cores(s), 7 GB RAM, 14 GB Temporary storage, $0.37                     "},
{id:35 , value:"d3s", label:"D3s: 4 Cores(s), 14 GB RAM, 28 GB Temporary storage, $0.741                   "},
{id:36 , value:"d4s", label:"D4s: 8 Cores(s), 28 GB RAM, 56 GB Temporary storage, $1.481                   "},
{id:37 , value:"d11s", label:"D11s: 2 Cores(s), 14 GB RAM, 28 GB Temporary storage, $0.352                 "},
{id:38 , value:"d12s", label:"D12s: 4 Cores(s), 28 GB RAM, 56 GB Temporary storage, $0.703                 "},
{id:39 , value:"d13s", label:"D13s: 8 Cores(s), 56 GB RAM, 112 GB Temporary storage, $1.407                "},
{id:40 , value:"d14s", label:"D14s: 16 Cores(s), 112 GB RAM, 224 GB Temporary storage, $2.814              "},
{id:41 , value:"d1v2", label:"D1 v2: 1 vCPU(s), 3.5 GB RAM, 50 GB Temporary storage, $0.167                "},
{id:42 , value:"d2v2", label:"D2 v2: 2 vCPU(s), 7 GB RAM, 100 GB Temporary storage, $0.333                 "},
{id:43 , value:"d3v2", label:"D3 v2: 4 vCPU(s), 14 GB RAM, 200 GB Temporary storage, $0.667                "},
{id:44 , value:"d4v2", label:"D4 v2: 8 vCPU(s), 28 GB RAM, 400 GB Temporary storage, $1.333                "},
{id:45 , value:"d5v2", label:"D5 v2: 16 vCPU(s), 56 GB RAM, 800 GB Temporary storage, $2.666               "},
{id:46 , value:"d11v2", label:"D11 v2: 2 vCPU(s), 14 GB RAM, 100 GB Temporary storage, $0.352              "},
{id:47 , value:"d12v2", label:"D12 v2: 4 vCPU(s), 28 GB RAM, 200 GB Temporary storage, $0.704              "},
{id:48 , value:"d13v2", label:"D13 v2: 8 vCPU(s), 56 GB RAM, 400 GB Temporary storage, $1.407              "},
{id:49 , value:"d14v2", label:"D14 v2: 16 vCPU(s), 112 GB RAM, 800 GB Temporary storage, $2.814            "},
{id:50 , value:"d15v2", label:"D15 v2: 20 vCPU(s), 140 GB RAM, 1000 GB Temporary storage, $3.518           "},
{id:51 , value:"d15iv2", label:"D15i v2: 20 vCPU(s), 140 GB RAM, 1000 GB Temporary storage, $3.518         "},
{id:52 , value:"ds1v2", label:"DS1 v2: 1 vCPU(s), 3.5 GB RAM, 7 GB Temporary storage, $0.167               "},
{id:53 , value:"ds2v2", label:"DS2 v2: 2 vCPU(s), 7 GB RAM, 14 GB Temporary storage, $0.333                "},
{id:54 , value:"ds3v2", label:"DS3 v2: 4 vCPU(s), 14 GB RAM, 28 GB Temporary storage, $0.667               "},
{id:55 , value:"ds4v2", label:"DS4 v2: 8 vCPU(s), 28 GB RAM, 56 GB Temporary storage, $1.333               "},
{id:56 , value:"ds5v2", label:"DS5 v2: 16 vCPU(s), 56 GB RAM, 112 GB Temporary storage, $2.666             "},
{id:57 , value:"ds11-1-v2", label:"DS11-1 v2: 1 vCPU(s), 14 GB RAM, 28 GB Temporary storage, $0.352        "},
{id:58 , value:"ds11v2", label:"DS11 v2: 2 vCPU(s), 14 GB RAM, 28 GB Temporary storage, $0.352             "},
{id:59 , value:"ds12-1-v2", label:"DS12-1 v2: 1 vCPU(s), 28 GB RAM, 56 GB Temporary storage, $0.704        "},
{id:60 , value:"ds12-2-v2", label:"DS12-2 v2: 2 vCPU(s), 28 GB RAM, 56 GB Temporary storage, $0.704        "},
{id:61 , value:"ds12v2", label:"DS12 v2: 4 vCPU(s), 28 GB RAM, 56 GB Temporary storage, $0.704             "},
{id:62 , value:"ds13-2-v2", label:"DS13-2 v2: 2 vCPU(s), 56 GB RAM, 112 GB Temporary storage, $1.407       "},
{id:63 , value:"ds13-4-v2", label:"DS13-4 v2: 4 vCPU(s), 56 GB RAM, 112 GB Temporary storage, $1.407       "},
{id:64 , value:"ds13v2", label:"DS13 v2: 8 vCPU(s), 56 GB RAM, 112 GB Temporary storage, $1.407            "},
{id:65 , value:"ds14-4-v2", label:"DS14-4 v2: 4 vCPU(s), 112 GB RAM, 224 GB Temporary storage, $2.814      "},
{id:66 , value:"ds14-8-v2", label:"DS14-8 v2: 8 vCPU(s), 112 GB RAM, 224 GB Temporary storage, $2.814      "},
{id:67 , value:"ds14v2", label:"DS14 v2: 16 vCPU(s), 112 GB RAM, 224 GB Temporary storage, $2.814          "},
{id:68 , value:"ds15v2", label:"DS15 v2: 20 vCPU(s), 140 GB RAM, 280 GB Temporary storage, $3.518          "},
{id:69 , value:"ds15iv2", label:"DS15i v2: 20 vCPU(s), 140 GB RAM, 280 GB Temporary storage, $3.518        "},
{id:70 , value:"d2v3", label:"D2 v3: 2 vCPU(s), 8 GB RAM, 50 GB Temporary storage, $0.224                  "},
{id:71 , value:"d4v3", label:"D4 v3: 4 vCPU(s), 16 GB RAM, 100 GB Temporary storage, $0.448                "},
{id:72 , value:"d8v3", label:"D8 v3: 8 vCPU(s), 32 GB RAM, 200 GB Temporary storage, $0.896                "},
{id:73 , value:"d16v3", label:"D16 v3: 16 vCPU(s), 64 GB RAM, 400 GB Temporary storage, $1.792             "},
{id:74 , value:"d32v3", label:"D32 v3: 32 vCPU(s), 128 GB RAM, 800 GB Temporary storage, $3.584            "},
{id:75 , value:"d48v3", label:"D48 v3: 48 vCPU(s), 192 GB RAM, 1200 GB Temporary storage, $5.376           "},
{id:76 , value:"d64v3", label:"D64 v3: 64 vCPU(s), 256 GB RAM, 1600 GB Temporary storage, $7.168           "},
{id:77 , value:"d2sv3", label:"D2s v3: 2 vCPU(s), 8 GB RAM, 16 GB Temporary storage, $0.224                "},
{id:78 , value:"d4sv3", label:"D4s v3: 4 vCPU(s), 16 GB RAM, 32 GB Temporary storage, $0.448               "},
{id:79 , value:"d8sv3", label:"D8s v3: 8 vCPU(s), 32 GB RAM, 64 GB Temporary storage, $0.896               "},
{id:80 , value:"d16sv3", label:"D16s v3: 16 vCPU(s), 64 GB RAM, 128 GB Temporary storage, $1.792           "},
{id:81 , value:"d32sv3", label:"D32s v3: 32 vCPU(s), 128 GB RAM, 256 GB Temporary storage, $3.584          "},
{id:82 , value:"d48sv3", label:"D48s v3: 48 vCPU(s), 192 GB RAM, 384 GB Temporary storage, $5.376          "},
{id:83 , value:"d64sv3", label:"D64s v3: 64 vCPU(s), 256 GB RAM, 512 GB Temporary storage, $7.168          "},
{id:84 , value:"e2v3", label:"E2 v3: 2 vCPU(s), 16 GB RAM, 50 GB Temporary storage, $0.259                 "},
{id:85 , value:"e4v3", label:"E4 v3: 4 vCPU(s), 32 GB RAM, 100 GB Temporary storage, $0.518                "},
{id:86 , value:"e8v3", label:"E8 v3: 8 vCPU(s), 64 GB RAM, 200 GB Temporary storage, $1.036                "},
{id:87 , value:"e16v3", label:"E16 v3: 16 vCPU(s), 128 GB RAM, 400 GB Temporary storage, $2.072            "},
{id:88 , value:"e20v3", label:"E20 v3: 20 vCPU(s), 160 GB RAM, 600 GB Temporary storage, $2.59             "},
{id:89 , value:"e32v3", label:"E32 v3: 32 vCPU(s), 256 GB RAM, 800 GB Temporary storage, $4.144            "},
{id:90 , value:"e48v3", label:"E48 v3: 48 vCPU(s), 384 GB RAM, 1200 GB Temporary storage, $6.216           "},
{id:91 , value:"e64iv3", label:"E64i v3: 64 vCPU(s), 432 GB RAM, 1600 GB Temporary storage, $7.754         "},
{id:92 , value:"e64v3", label:"E64 v3: 64 vCPU(s), 432 GB RAM, 1600 GB Temporary storage, $7.754           "},
{id:93 , value:"e2sv3", label:"E2s v3: 2 vCPU(s), 16 GB RAM, 32 GB Temporary storage, $0.259               "},
{id:94 , value:"e4-2s-v3", label:"E4-2s v3: 2 vCPU(s), 32 GB RAM, 64 GB Temporary storage, $0.518          "},
{id:95 , value:"e4sv3", label:"E4s v3: 4 vCPU(s), 32 GB RAM, 64 GB Temporary storage, $0.518               "},
{id:96 , value:"e8-2s-v3", label:"E8-2s v3: 2 vCPU(s), 64 GB RAM, 128 GB Temporary storage, $1.036         "},
{id:97 , value:"e8-4s-v3", label:"E8-4s v3: 4 vCPU(s), 64 GB RAM, 128 GB Temporary storage, $1.036         "},
{id:98 , value:"e8sv3", label:"E8s v3: 8 vCPU(s), 64 GB RAM, 128 GB Temporary storage, $1.036              "},
{id:99 , value:"e16-4s-v3", label:"E16-4s v3: 4 vCPU(s), 128 GB RAM, 256 GB Temporary storage, $2.072      "},
{id:100, value:"e16-8s-v3", label:"E16-8s v3: 8 vCPU(s), 128 GB RAM, 256 GB Temporary storage, $2.072      "},
{id:101, value:"e16sv3", label:"E16s v3: 16 vCPU(s), 128 GB RAM, 256 GB Temporary storage, $2.072          "},
{id:102, value:"e20sv3", label:"E20s v3: 20 vCPU(s), 160 GB RAM, 320 GB Temporary storage, $2.59           "},
{id:103, value:"e32-8s-v3", label:"E32-8s v3: 8 vCPU(s), 256 GB RAM, 512 GB Temporary storage, $4.144      "},
{id:104, value:"e32-16s-v3", label:"E32-16s v3: 16 vCPU(s), 256 GB RAM, 512 GB Temporary storage, $4.144   "},
{id:105, value:"e32sv3", label:"E32s v3: 32 vCPU(s), 256 GB RAM, 512 GB Temporary storage, $4.144          "},
{id:106, value:"e48sv3", label:"E48s v3: 48 vCPU(s), 384 GB RAM, 768 GB Temporary storage, $6.216          "},
{id:107, value:"e64-16s-v3", label:"E64-16s v3: 16 vCPU(s), 432 GB RAM, 864 GB Temporary storage, $7.754   "},
{id:108, value:"e64-32s-v3", label:"E64-32s v3: 32 vCPU(s), 432 GB RAM, 864 GB Temporary storage, $7.754   "},
{id:109, value:"e64isv3", label:"E64is v3: 64 vCPU(s), 432 GB RAM, 864 GB Temporary storage, $7.754        "},
{id:110, value:"e64sv3", label:"E64s v3: 64 vCPU(s), 432 GB RAM, 864 GB Temporary storage, $7.754          "},
{id:111, value:"f1", label:"F1: 1 Cores(s), 2 GB RAM, 16 GB Temporary storage, $0.129                      "},
{id:112, value:"f2", label:"F2: 2 Cores(s), 4 GB RAM, 32 GB Temporary storage, $0.259                      "},
{id:113, value:"f4", label:"F4: 4 Cores(s), 8 GB RAM, 64 GB Temporary storage, $0.518                      "},
{id:114, value:"f8", label:"F8: 8 Cores(s), 16 GB RAM, 128 GB Temporary storage, $1.036                    "},
{id:115, value:"f16", label:"F16: 16 Cores(s), 32 GB RAM, 256 GB Temporary storage, $2.072                 "},
{id:116, value:"f1s", label:"F1s: 1 Cores(s), 2 GB RAM, 4 GB Temporary storage, $0.129                     "},
{id:117, value:"f2s", label:"F2s: 2 Cores(s), 4 GB RAM, 8 GB Temporary storage, $0.259                     "},
{id:118, value:"f4s", label:"F4s: 4 Cores(s), 8 GB RAM, 16 GB Temporary storage, $0.518                    "},
{id:119, value:"f8s", label:"F8s: 8 Cores(s), 16 GB RAM, 32 GB Temporary storage, $1.036                   "},
{id:120, value:"f16s", label:"F16s: 16 Cores(s), 32 GB RAM, 64 GB Temporary storage, $2.072                "},
{id:121, value:"f2sv2", label:"F2s v2: 2 vCPU(s), 4 GB RAM, 16 GB Temporary storage, $0.2                  "},
{id:122, value:"f4sv2", label:"F4s v2: 4 vCPU(s), 8 GB RAM, 32 GB Temporary storage, $0.4                  "},
{id:123, value:"f8sv2", label:"F8s v2: 8 vCPU(s), 16 GB RAM, 64 GB Temporary storage, $0.8                 "},
{id:124, value:"f16sv2", label:"F16s v2: 16 vCPU(s), 32 GB RAM, 128 GB Temporary storage, $1.6             "},
{id:125, value:"f32sv2", label:"F32s v2: 32 vCPU(s), 64 GB RAM, 256 GB Temporary storage, $3.2             "},
{id:126, value:"f48sv2", label:"F48s v2: 48 vCPU(s), 96 GB RAM, 384 GB Temporary storage, $4.8             "},
{id:127, value:"f64sv2", label:"F64s v2: 64 vCPU(s), 128 GB RAM, 512 GB Temporary storage, $6.4            "},
{id:128, value:"f72sv2", label:"F72s v2: 72 vCPU(s), 144 GB RAM, 576 GB Temporary storage, $7.2            "},
{id:129, value:"m64", label:"M64: 64 vCPU(s), 1024 GB RAM, 7168 GB Temporary storage, $15.7688             "},
{id:130, value:"m128", label:"M128: 128 vCPU(s), 2048 GB RAM, 14336 GB Temporary storage, $31.5375         "},
{id:131, value:"m32ls", label:"M32ls: 32 vCPU(s), 256 GB RAM, 1024 GB Temporary storage, $6.1495           "},
{id:132, value:"m64ls", label:"M64ls: 64 vCPU(s), 512 GB RAM, 2048 GB Temporary storage, $11.8025          "},
{id:133, value:"m64m", label:"M64m: 64 vCPU(s), 1792 GB RAM, 7168 GB Temporary storage, $24.4413           "},
{id:134, value:"m128m", label:"M128m: 128 vCPU(s), 3892 GB RAM, 14336 GB Temporary storage, $59.7838       "},
{id:135, value:"m8ms", label:"M8ms: 8 vCPU(s), 219 GB RAM, 256 GB Temporary storage, $3.4979               "},
{id:136, value:"m16-8ms", label:"M16-8ms: 8 vCPU(s), 438 GB RAM, 256 GB Temporary storage, $6.9959         "},
{id:137, value:"m16ms", label:"M16ms: 16 vCPU(s), 438 GB RAM, 512 GB Temporary storage, $6.9959            "},
{id:138, value:"m32ms", label:"M32ms: 32 vCPU(s), 875 GB RAM, 1024 GB Temporary storage, $13.9916          "},
{id:139, value:"m64-16ms", label:"M64-16ms: 16 vCPU(s), 1750 GB RAM, 2048 GB Temporary storage, $24.4413   "},
{id:140, value:"m64-32ms", label:"M64-32ms: 32 vCPU(s), 1750 GB RAM, 2048 GB Temporary storage, $24.4413   "},
{id:141, value:"m64ms", label:"M64ms: 64 vCPU(s), 1792 GB RAM, 2048 GB Temporary storage, $24.4413         "},
{id:142, value:"m128-32ms", label:"M128-32ms: 32 vCPU(s), 3800 GB RAM, 4096 GB Temporary storage, $59.7838 "},
{id:143, value:"m128-64ms", label:"M128-64ms: 64 vCPU(s), 3800 GB RAM, 4096 GB Temporary storage, $59.7838 "},
{id:144, value:"m128ms", label:"M128ms: 128 vCPU(s), 3892 GB RAM, 4096 GB Temporary storage, $59.7838      "},
{id:145, value:"m64s", label:"M64s: 64 vCPU(s), 1024 GB RAM, 2048 GB Temporary storage, $15.7688           "},
{id:146, value:"m128s", label:"M128s: 128 vCPU(s), 2048 GB RAM, 4096 GB Temporary storage, $31.5375        "},
{id:147, value:"m32ts", label:"M32ts: 32 vCPU(s), 192 GB RAM, 1024 GB Temporary storage, $5.9005 hour      "},
];

export default regions