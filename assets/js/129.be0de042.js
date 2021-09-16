(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{629:function(t,e,o){"use strict";o.r(e);var a=o(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"liquidity-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-module"}},[t._v("#")]),t._v(" Liquidity Module")]),t._v(" "),o("p",[t._v("The liquidity module, known on the Cosmos Hub as Gravity DEX, enables users to create liquidity pools and swap tokens.")]),t._v(" "),o("h2",{attrs:{id:"use-liquidity-pools-to-trade-tokens"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-liquidity-pools-to-trade-tokens"}},[t._v("#")]),t._v(" Use Liquidity Pools to Trade Tokens")]),t._v(" "),o("p",[t._v("When using your Cosmos SDK-based blockchains, you want to enable users to trade tokens. You can have multiple tokens on your blockchain or have tokens from external blockchains sent to your blocking using inter-blockchain communication protocol (IBC).")]),t._v(" "),o("p",[t._v("The liquidity module allows users to use pools to trade those tokens on your blockchain. Each pool represents a token pair and allows the user to swap from one token to the other token.")]),t._v(" "),o("p",[t._v("In this tutorial, you create your own blockchain, send tokens to another blockchain, create a pool, deposit to a pool, withdraw from a pool, and swap tokens.")]),t._v(" "),o("p",[t._v("You can follow the "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=GxaqpzMk0jk&t=978s",target:"_blank",rel:"noopener noreferrer"}},[t._v("code with us session"),o("OutboundLink")],1),t._v(" for hands-on experience")]),t._v(" "),o("p",[o("strong",[t._v("Important")]),t._v(" In the code examples throughout this tutorial, when you see username be sure to substitute your username.")]),t._v(" "),o("p",[o("strong",[t._v("You will learn how to:")])]),t._v(" "),o("ul",[o("li",[t._v("Create a blockchain with Starport")]),t._v(" "),o("li",[t._v("Create your own token on your blockchain")]),t._v(" "),o("li",[t._v("Connect your blockchain to the testnet")]),t._v(" "),o("li",[t._v("Send your own token with IBC to the testnet")]),t._v(" "),o("li",[t._v("Create a pool with your token")]),t._v(" "),o("li",[t._v("Use the pool with your token")])]),t._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),o("p",[t._v("Before you start the tutorial, install the prerequisite software.")]),t._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/starport/"}},[t._v("Install Starport")]),t._v(" v0.16.2")],1),t._v(" "),o("p",[o("strong",[t._v("Important")]),t._v(" This tutorial uses "),o("a",{attrs:{href:"https://github.com/tendermint/starport",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starport"),o("OutboundLink")],1),t._v(" v0.16.2. The tutorial is based on this specific version of Starport and is not supported for other versions.")])]),t._v(" "),o("li",[o("p",[t._v("Install the Gravity DEX binary")]),t._v(" "),o("ul",[o("li",[t._v("Clone the repo:")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9iLWhhcnZlc3QvZ3Jhdml0eS1kZXguZ2l0Cg=="}}),t._v(" "),o("ul",[o("li",[t._v("Move into the directory and install software to the right location:")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgZ3Jhdml0eS1kZXggJmFtcDsmYW1wOyBtYWtlIGluc3RhbGwK"}}),t._v(" "),o("ul",[o("li",[t._v("Verify the gaiad version:")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdmVyc2lvbgo="}}),t._v(" "),o("p",[t._v("The output of "),o("code",[t._v("gaiad version")]),t._v(" prints something like:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3Jhdml0eS1kZXgtZmE2NDdiMGZlZmU1NTA4ZTljOTc1YjNkNGYwOTVkYjJkM2QyMGExMwo="}})],1)]),t._v(" "),o("h2",{attrs:{id:"create-the-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-blockchain"}},[t._v("#")]),t._v(" Create the Blockchain")]),t._v(" "),o("p",[t._v("Scaffold a new blockchain called "),o("code",[t._v("myblockchain")]),t._v(":")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3RhcnBvcnQgYXBwIGdpdGh1Yi5jb20vdXNlcm5hbWUvbXlibG9ja2NoYWluCg=="}}),t._v(" "),o("p",[t._v("Change to the blockchain directory:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgbXlibG9ja2NoYWluCg=="}}),t._v(" "),o("h2",{attrs:{id:"add-your-token-in-the-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-your-token-in-the-configuration"}},[t._v("#")]),t._v(" Add Your Token in the Configuration")]),t._v(" "),o("p",[t._v("Navigate to the top-level folder of your app directory "),o("code",[t._v("myblockchain")]),t._v(" and use any text editor to edit the "),o("code",[t._v("config.yml")]),t._v(" file.")]),t._v(" "),o("p",[t._v("For the "),o("code",[t._v("accounts")]),t._v(" parameter, add your username and your new token:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"YWNjb3VudHM6CiAgLSBuYW1lOiB1c2VybmFtZQogICAgY29pbnM6IFsmcXVvdDsxMDAwMHRva2VuJnF1b3Q7LCAmcXVvdDs1MDAwMDAwMHN0YWtlJnF1b3Q7LCAmcXVvdDsxMDAwMDAwMDAwMDAwbXl0b2tlbiZxdW90O10K"}}),t._v(" "),o("p",[o("strong",[t._v("Tip")]),t._v(" To add your coins, use a list of strings for the initial coins with denominations. You can follow the "),o("code",[t._v(".yml")]),t._v(" syntax for the auto-generated users "),o("code",[t._v("alice")]),t._v(" and "),o("code",[t._v("bob")]),t._v(".")]),t._v(" "),o("p",[t._v("The minimum reserve coin amount for a pool in the liquidity module is 1,000,000. Make sure you create enough tokens for your liquidity pools. This entry creates enough tokens to create 10 liquidity pools (1000000000000).")]),t._v(" "),o("h2",{attrs:{id:"start-your-blockchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-your-blockchain"}},[t._v("#")]),t._v(" Start Your Blockchain")]),t._v(" "),o("p",[t._v("To start your blockchain, run this command in your local terminal:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3RhcnBvcnQgc2VydmUK"}}),t._v(" "),o("p",[t._v("You see output similar to the following output, but with different account passphrases and addresses:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Q29zbW9zIFNESydzIHZlcnNpb24gaXM6IFN0YXJnYXRlIHYwLjQwLjAgKG9yIGxhdGVyKQoK8J+UhCBSZXNldHRpbmcgdGhlIGFwcCBzdGF0ZS4uLgrwn5ug77iPICBCdWlsZGluZyBwcm90by4uLgrwn5OmIEluc3RhbGxpbmcgZGVwZW5kZW5jaWVzLi4uCvCfm6DvuI8gIEJ1aWxkaW5nIHRoZSBibG9ja2NoYWluLi4uCvCfkr8gSW5pdGlhbGl6aW5nIHRoZSBhcHAuLi4K8J+ZgiBDcmVhdGVkIGFjY291bnQgJnF1b3Q7YWxpY2UmcXVvdDsgd2l0aCBhZGRyZXNzICZxdW90O2Nvc21vczFxdXI2dHZ1N3A0a2h0cjV6emN4MHVrNWZxMDZoZms1eGZsdzgzZSZxdW90OyB3aXRoIG1uZW1vbmljOiAmcXVvdDt0YW5rIGZpbG0gaWNvbiBoZWxtZXQgbXl0aCBkZXZvdGUgdmVsdmV0IHJpYiBiZWhpbmQgZXhoYXVzdCBtb3ZlIHBhc3MgZW5kbGVzcyBjb21iaW5lIGJhZyBjb25ncmVzcyBwb29sIGJlYW4gc2hvdWxkZXIgaXNzdWUgdHJvdWJsZSBiYW5uZXIgYmVzdCBuaWNlJnF1b3Q7CvCfmYIgQ3JlYXRlZCBhY2NvdW50ICZxdW90O2JvYiZxdW90OyB3aXRoIGFkZHJlc3MgJnF1b3Q7Y29zbW9zMXc4dzN0OHJodjV6cHZkc2N5OTMzMndwNHR1Z2tnMGV6c2tmOTV1JnF1b3Q7IHdpdGggbW5lbW9uaWM6ICZxdW90O2F0dHJhY3Qgc2hvdWxkZXIgcGVyc29uIHVwc2V0IGRyZWFtIGNhdGVnb3J5IGZpbmlzaCBkZXRlY3QgY291bnRyeSB0cmFjayBlZGdlIHBsYW5ldCBjcmFjayBnbG9vbSBzb2xkaWVyIHRvZ2V0aGVyIGhvY2tleSBhcmVuYSBwYW5lbCBob3JuIHJhcGlkIHplcm8gY29tbW9uIG1hcnJpYWdlJnF1b3Q7CvCfmYIgQ3JlYXRlZCBhY2NvdW50ICZxdW90O3VzZXJuYW1lJnF1b3Q7IHdpdGggYWRkcmVzcyAmcXVvdDtjb3Ntb3MxbXIzc3M1N3hleHpnN2ozNzd2ZmQyNGQzdnYzdnkwZTNtcHVqNnkmcXVvdDsgd2l0aCBtbmVtb25pYzogJnF1b3Q7cGFyZW50IGJ1dHRlciBwaWVjZSBwaWNuaWMgbm9ydGggdGh1bWIga25pZmUgZGVuaWFsIHRveSBzaWxrIGp1aWNlIGRpYXJ5IGNydWlzZSBpZGxlIHBpbmsgcmVwYWlyIHJhZGFyIGJyaXNrIGRlY2lkZSBzdWdhciBnYXAgam9rZSBwYWxtIGRheSZxdW90OwpHZW5lc2lzIHRyYW5zYWN0aW9uIHdyaXR0ZW4gdG8gJnF1b3Q7L1VzZXJzL2pveTIwLy5teWJsb2NrY2hhaW5kL2NvbmZpZy9nZW50eC9nZW50eC0yZThhNmE2ODBiNGY5YWRhZWNmYWZiYzZlY2FkOGI5NmVmOGI5MTU3Lmpzb24mcXVvdDsK8J+MjSBUZW5kZXJtaW50IG5vZGU6IGh0dHA6Ly8wLjAuMC4wOjI2NjU3CvCfjI0gQmxvY2tjaGFpbiBBUEk6IGh0dHA6Ly8wLjAuMC4wOjEzMTcK8J+MjSBUb2tlbiBmYXVjZXQ6IGh0dHA6Ly8wLjAuMC4wOjQ1MDAK"}}),t._v(" "),o("p",[t._v("Be patient, using the "),o("code",[t._v("starport serve")]),t._v(" command is powerful and takes a few minutes. You are starting your sovereign application-specific blockchain in development and this command is doing all the work for you. Everything you need is being scaffolded so you can focus on business logic.")]),t._v(" "),o("h2",{attrs:{id:"configure-the-relayer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-relayer"}},[t._v("#")]),t._v(" Configure the Relayer")]),t._v(" "),o("p",[t._v("A relayer is software to connect two blockchains. Configure the relayer with your endpoints to create a connection between your blockchain and the testnet. After the connection is established, you can send tokens from one blockchain to the other blockchain.")]),t._v(" "),o("h3",{attrs:{id:"remove-existing-relayer-and-starport-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remove-existing-relayer-and-starport-configurations"}},[t._v("#")]),t._v(" Remove Existing Relayer and Starport Configurations")]),t._v(" "),o("p",[t._v("If you previously used the relayer, follow these steps to remove exiting relayer and Starport configurations:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Delete previous configuration files:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cm0gLXIgJEhPTUUvLnN0YXJwb3J0LyoK"}})],1)]),t._v(" "),o("p",[t._v("If existing configurations do not exist, the command returns "),o("code",[t._v("no matches found")]),t._v(" and no action is taken.")]),t._v(" "),o("h3",{attrs:{id:"create-your-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-your-connection"}},[t._v("#")]),t._v(" Create Your Connection")]),t._v(" "),o("p",[t._v("Configure the relayer to create a connection between your local chain and the chain you want to connect to. In this example, the chain you want to connect to is the Gravity DEX testnet.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"markdown",base64:"c3RhcnBvcnQgcmVsYXllciBjb25maWd1cmUK"}}),t._v(" "),o("ul",[o("li",[o("p",[t._v("For the local "),o("code",[t._v("source")]),t._v(" chain, use the default values.")])]),t._v(" "),o("li",[o("p",[t._v("For the testnet "),o("code",[t._v("target")]),t._v(" chain, use the following values.")])]),t._v(" "),o("li",[o("p",[t._v("Target RPC: "),o("a",{attrs:{href:"https://rpc.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rpc.testnet.cosmos.network:443"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Target Token Faucet: "),o("a",{attrs:{href:"https://faucet.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://faucet.testnet.cosmos.network:443"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Target Gas Price (0.025uatom): 0.025stake")])])]),t._v(" "),o("p",[t._v("When everything runs successfully, you see the following output with a different account address:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"8J+UkCAgQWNjb3VudCBvbiAmcXVvdDtzb3VyY2UmcXVvdDsgaXMgJnF1b3Q7Y29zbW9zMTc0bjI2ZDhuMjIzYWplNTNkem5sZmFocHY1NG5wOTcwd3IzYWU3JnF1b3Q7CiAKIHzCtyByZWNlaXZlZCBjb2lucyBmcm9tIGEgZmF1Y2V0CiB8wrcgKGJhbGFuY2U6IDEwMDAwMHN0YWtlLDV0b2tlbikKCvCflJAgIEFjY291bnQgb24gJnF1b3Q7dGFyZ2V0JnF1b3Q7IGlzICZxdW90O2Nvc21vczE3NG4yNmQ4bjIyM2FqZTUzZHpubGZhaHB2NTRucDk3MHdyM2FlNyZxdW90OwogCiB8wrcgcmVjZWl2ZWQgY29pbnMgZnJvbSBhIGZhdWNldAogfMK3IChiYWxhbmNlOiAxMDAwMDAwMHN0YWtlLDEwMDAwMDAwdXBob3RvbikKCuKbkyAgQ29uZmlndXJlZCBjaGFpbnM6IG15YmxvY2tjaGFpbi1jb3Ntb3NodWItdGVzdG5ldAo="}}),t._v(" "),o("p",[t._v("Connect the chains:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"markdown",base64:"c3RhcnBvcnQgcmVsYXllciBjb25uZWN0Cg=="}}),t._v(" "),o("p",[t._v("As your two blockchains start to connect, you see output like:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"4pejIExpbmtpbmcgcGF0aHMgYmV0d2VlbiBjaGFpbnMuLi4gCg=="}}),t._v(" "),o("p",[t._v("When successful, your output shows:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Ci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQpMaW5raW5nIGNoYWlucwotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCuKckyBMaW5rZWQgY2hhaW5zIHdpdGggMSBwYXRocy4KICAtIG15YmxvY2tjaGFpbi1jb3Ntb3NodWItdGVzdG5ldAoKQ29udGludWluZyB3aXRoIDEgcGF0aHMuLi4KCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQpDaGFpbnMgYnkgcGF0aHMKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgpteWJsb2NrY2hhaW4tY29zbW9zaHViLXRlc3RuZXQ6CiAgICBteWJsb2NrY2hhaW4gICAgICAmZ3Q7IChwb3J0OiB0cmFuc2ZlcikgKGNoYW5uZWw6IGNoYW5uZWwtMCkKICAgIGNvc21vc2h1Yi10ZXN0bmV0ICZndDsgKHBvcnQ6IHRyYW5zZmVyKSAoY2hhbm5lbDogY2hhbm5lbC05KQoKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCkxpc3RlbmluZyBhbmQgcmVsYXlpbmcgcGFja2V0cyBiZXR3ZWVuIGNoYWlucy4uLgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0K"}}),t._v(" "),o("h2",{attrs:{id:"get-token-from-the-faucet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-token-from-the-faucet"}},[t._v("#")]),t._v(" Get Token From the Faucet")]),t._v(" "),o("p",[t._v("From the terminal output that "),o("code",[t._v("starport serve")]),t._v(" created for you, use the "),o("code",[t._v("username")]),t._v(" account address to claim tokens from the faucet.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"markdown",base64:"Y3VybCAtWCBQT1NUIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzogJnF1b3Q7Y29zbW9zeHh4eHgmcXVvdDt9JyBodHRwczovL2ZhdWNldC50ZXN0bmV0LmNvc21vcy5uZXR3b3JrCgotIE1ha2Ugc3VyZSB0byBhZGQgeW91ciBhY2NvdW50IGFkZHJlc3MgaW50byB0aGUgYGFkZHJlc3NgIGZpZWxkCi0gUmVwbGFjZSBgY29zbW9zeHh4eHhgIHdpdGggdGhlIGFkZHJlc3MgeW91IHNhdyBpbiB5b3VyIHVzZXIgYWNjb3VudCBvbiBydW5uaW5nIGBzdGFycG9ydCBzZXJ2ZWAuCg=="}}),t._v(" "),o("p",[t._v("After you see the success message, you can check your balance.")]),t._v(" "),o("p",[t._v("See your balance at "),o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/"),o("OutboundLink")],1),t._v(". Make sure to replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address from the previous step.")]),t._v(" "),o("h2",{attrs:{id:"send-your-own-token-to-the-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-your-own-token-to-the-testnet"}},[t._v("#")]),t._v(" Send Your Own Token to the Testnet")]),t._v(" "),o("p",[t._v("Now that your account on testnet is funded with testnet tokens, you can send your own token to the testnet.")]),t._v(" "),o("p",[t._v("At your local terminal, enter the IBC module command to transfer your token to the testnet.\nMake sure to replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address, "),o("code",[t._v("mytoken")]),t._v(" with your token name, "),o("code",[t._v("username")]),t._v(" with your username and "),o("code",[t._v("channel-0")]),t._v(" with channel")]),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" Make sure to use "),o("em",[t._v("channel")]),t._v(" as shown in terminal when you run "),o("code",[t._v("starport relayer connect")])]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXlibG9ja2NoYWluZCB0eCBpYmMtdHJhbnNmZXIgdHJhbnNmZXIgdHJhbnNmZXIgY2hhbm5lbC0wIGNvc21vc3h4eHh4ICZxdW90OzE1MDAwMDAwbXl0b2tlbiZxdW90OyAtLWZyb20gdXNlcm5hbWUK"}}),t._v(" "),o("p",[t._v("After your transaction is complete, check your balance on the Gravity DEX testnet to confirm your token transfer.")]),t._v(" "),o("p",[t._v("Make sure to replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address.")]),t._v(" "),o("p",[o("strong",[t._v("Tip:")]),t._v(" Sometimes transactions don't go through on the first try. Make sure you check the terminal window that shows the relayer process and verify that you see output similar to the following output:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"markdown",base64:"UmVsYXkgMSBwYWNrZXRzIGZyb20gbXlibG9ja2NoYWluID0mZ3Q7IGNvc21vc2h1Yi10ZXN0bmV0ClJlbGF5IDEgcGFja2V0cyBmcm9tIG15YmxvY2tjaGFpbiA9Jmd0OyBjb3Ntb3NodWItdGVzdG5ldApSZWxheSAxIGFja3MgZnJvbSBjb3Ntb3NodWItdGVzdG5ldCA9Jmd0OyBteWJsb2NrY2hhaW4KUmVsYXkgMSBhY2tzIGZyb20gY29zbW9zaHViLXRlc3RuZXQgPSZndDsgbXlibG9ja2NoYWluCg=="}}),t._v(" "),o("p",[t._v("See your balance at "),o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Take a closer look at the "),o("code",[t._v("ibc/denomhash")]),t._v(" denominator. When you create a new pool, you in put this denom to make a pair with one of the existing native token. On the testnet, create a pair with "),o("code",[t._v("uphoton")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"create-a-pool-with-my-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pool-with-my-token"}},[t._v("#")]),t._v(" Create a Pool with My Token")]),t._v(" "),o("p",[t._v("With the liquidity module and gaiad binary installed, use these links to explore your app:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("RPC "),o("a",{attrs:{href:"https://rpc.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rpc.testnet.cosmos.network:443"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("API "),o("a",{attrs:{href:"https://api.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network:443"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("gRPC "),o("a",{attrs:{href:"https://grpc.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://grpc.testnet.cosmos.network:443"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Token faucet "),o("a",{attrs:{href:"https://faucet.testnet.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://faucet.testnet.cosmos.network:443"),o("OutboundLink")],1)])])]),t._v(" "),o("h3",{attrs:{id:"verify-your-token-supply"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-your-token-supply"}},[t._v("#")]),t._v(" Verify Your Token Supply")]),t._v(" "),o("p",[t._v("You can view all available tokens. You can see your token, because your token is now listed!")]),t._v(" "),o("p",[t._v("Check the following resources to get an overview of the activity on the testnet and find your token.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/supply")])]),t._v(" "),o("li",[o("p",[t._v("https://api.testnet.cosmos.network/ibc/applications/transfer/v1beta1/denom_traces")])])]),t._v(" "),o("h2",{attrs:{id:"add-your-starport-blockchain-account-to-gaiad"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-your-starport-blockchain-account-to-gaiad"}},[t._v("#")]),t._v(" Add your Starport blockchain account to gaiad")]),t._v(" "),o("p",[t._v("To access Starport "),o("code",[t._v("username")]),t._v(" account on "),o("code",[t._v("gaiad")]),t._v(", add the "),o("code",[t._v("username")]),t._v(" account to the keychain:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgdXNlcm5hbWUgLS1yZWNvdmVyCg=="}}),t._v(" "),o("p",[t._v("You are prompted for your passphrase:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Jmd0OyBFbnRlciB5b3VyIGJpcDM5IG1uZW1vbmljCg=="}}),t._v(" "),o("p",[t._v("Remember, you can see the "),o("code",[t._v("username")]),t._v(" mnemonic passphrase in the terminal window where you ran the "),o("code",[t._v("starport serve")]),t._v(" command on your "),o("code",[t._v("myblockchaind")]),t._v(".")]),t._v(" "),o("p",[t._v("After you successfully enter your mnemonic, you see output similar to:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"LSBuYW1lOiB1c2VybmFtZQogIHR5cGU6IGxvY2FsCiAgYWRkcmVzczogY29zbW9zMTc4MHQ0ZXJ6d3J2cjl4Nmp2cWp4ZHV3a3VrM2V4M2ZuaHF6emE1CiAgcHVia2V5OiBjb3Ntb3NwdWIxYWRkd25wZXBxZnMwNXlxY2pnaHF6Y3Q1eTM5cjMzcjVldzQ3cGpxa3Zjajdlem5ndWZhenkwZXFzeXg2NXZ0dXQwaAogIG1uZW1vbmljOiAmcXVvdDsmcXVvdDsKICB0aHJlc2hvbGQ6IDAKICBwdWJrZXlzOiBbXQo="}}),t._v(" "),o("h2",{attrs:{id:"create-a-liquidity-pool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-liquidity-pool"}},[t._v("#")]),t._v(" Create a Liquidity Pool")]),t._v(" "),o("p",[t._v("To: create a liquidity pool with the "),o("code",[t._v("gaiad tx liquidity create-pool")]),t._v(" command:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggbGlxdWlkaXR5IGNyZWF0ZS1wb29sIDEgMTEwMDAwMHVwaG90b24sMTUwMDAwMGliYy9sb25naWJjaGFzaCAtLWZyb20gdXNlcm5hbWUgLS1jaGFpbi1pZCBjb3Ntb3NodWItdGVzdG5ldCAtLWdhcy1wcmljZXMgJnF1b3Q7MC4wMjVzdGFrZSZxdW90OyAtLW5vZGUgaHR0cHM6Ly9ycGMudGVzdG5ldC5jb3Ntb3MubmV0d29yazo0NDMgLS1nYXMgMjAwMDAwMAo="}}),t._v(" "),o("p",[t._v("For this example command, be sure to:")]),t._v(" "),o("ul",[o("li",[t._v("Replace "),o("code",[t._v("longibchash")]),t._v(" with the hash denom that you received on the previous step")]),t._v(" "),o("li",[t._v("Replace "),o("code",[t._v("username")]),t._v(" with your account username")])]),t._v(" "),o("p",[t._v("To confirm the pool has been created:")]),t._v(" "),o("ul",[o("li",[t._v("Visit "),o("a",{attrs:{href:"https://api.testnet.cosmos.network/tendermint/liquidity/v1beta1/pools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/tendermint/liquidity/v1beta1/pools"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"swap-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#swap-token"}},[t._v("#")]),t._v(" Swap Token")]),t._v(" "),o("p",[t._v("You are ready to swap tokens! You now have uphoton token in your account and want to swap for the new IBC coin:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggbGlxdWlkaXR5IHN3YXAgMSAxIDEwMDAwMHVwaG90b24gaWJjL2xvbmdpYmNoYXNoIDAuMSAwLjAwMyAtLWZyb20gdXNlcm5hbWUgLS1jaGFpbi1pZCBjb3Ntb3NodWItdGVzdG5ldCAtLWdhcy1wcmljZXMgJnF1b3Q7MC4wMjVzdGFrZSZxdW90OyAtLW5vZGUgaHR0cHM6Ly9ycGMudGVzdG5ldC5jb3Ntb3MubmV0d29yazo0NDMK"}}),t._v(" "),o("p",[t._v("Check the balance on the new account that made the trade:")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Make sure to replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address.")]),t._v(" "),o("h2",{attrs:{id:"deposit-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposit-token"}},[t._v("#")]),t._v(" Deposit Token")]),t._v(" "),o("p",[t._v("You can deposit tokens to the pool you have created.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggbGlxdWlkaXR5IGRlcG9zaXQgMSAxMDB1cGhvdG9uLDEwMGliYy9sb25naWJjaGFzaCAtLWZyb20gdXNlcm5hbWUgLS1jaGFpbi1pZCBjb3Ntb3NodWItdGVzdG5ldCAtLWdhcy1wcmljZXMgJnF1b3Q7MC4wMjVzdGFrZSZxdW90OyAtLW5vZGUgaHR0cHM6Ly9ycGMudGVzdG5ldC5jb3Ntb3MubmV0d29yazo0NDMK"}}),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" Deposits must be the same coin denoms as the reserve coins.")]),t._v(" "),o("p",[t._v("Check the balance on the new deposit that you made:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("Make sure to replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address.")]),t._v(" "),o("h2",{attrs:{id:"withdraw-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#withdraw-token"}},[t._v("#")]),t._v(" Withdraw Token")]),t._v(" "),o("p",[t._v("You can also withdraw tokens from the pool you have created.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggbGlxdWlkaXR5IHdpdGhkcmF3IDEgMTAwcG9vbC1pZCAtLWZyb20gdXNlcm5hbWUgLS1jaGFpbi1pZCBjb3Ntb3NodWItdGVzdG5ldCAtLWdhcy1wcmljZXMgJnF1b3Q7MC4wMjVzdGFrZSZxdW90OyAtLW5vZGUgaHR0cHM6Ly9ycGMudGVzdG5ldC5jb3Ntb3MubmV0d29yazo0NDMK"}}),t._v(" "),o("ul",[o("li",[t._v("Replace "),o("code",[t._v("pool-id")]),t._v(" with your pool id that you can see on "),o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Replace "),o("code",[t._v("cosmosxxxxx")]),t._v(" with your address")])]),t._v(" "),o("p",[t._v("Check the balance on the new withdrawal that you made:")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.testnet.cosmos.network/cosmos/bank/v1beta1/balances/cosmosxxx"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"🎉-congratulations-🎉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🎉-congratulations-🎉"}},[t._v("#")]),t._v(" 🎉 Congratulations 🎉")]),t._v(" "),o("p",[t._v("By completing this tutorial you have learned how to use liquidity module.")]),t._v(" "),o("p",[t._v("Here’s what you accomplished in this tutorial:")]),t._v(" "),o("ul",[o("li",[t._v("Created a blockchain with Starport and connecting to testnet")]),t._v(" "),o("li",[t._v("Created a liquidity pool with IBC token")]),t._v(" "),o("li",[t._v("Swapped tokens within the pool")]),t._v(" "),o("li",[t._v("Deposited tokens to the pool")]),t._v(" "),o("li",[t._v("Withdrew tokens from the pool")])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);