---
title: "Blockchain Technology in More Detail - Historic Overview"
order: 7
description: From the first public blockchains to smart contracting 
tag: fast-track
---

# Blockchain Technology in More Detail - Historic Overview

<HighlightBox type="learning">

In the next sections, you are going to dive deeper into the blockchain technology with:

* [A brief overview of how blockchain technology developed over time from the first public chain, Bitcoin, to public general-purpose chains like Ethereum](./blockchain-tech-details.md)
* [Details on the different deployment patterns of blockchains](./deployment.md)
* [A high-level introduction to smart contracts](./smart-contracts.md)

</HighlightBox>

In this section, you take a look at blockchain technology in more detail. Beginning with an historic overview to understand how the technology has been developing to then continue with a closer look at [deployment patterns](./deployment.md) of public and managed/private chains, and [smart contracts](./smart-contracts.md) and the possibilities that came with them.

If you feel confident about your blockchain knowledge so far and the above sounds like something you already mastered, feel free to go ahead into the sections on [the crypto economy](./crypto-economy.md) and [cryptocurrencies](./cryptocurrencies.md).

It is now time to dive into the origins of blockchain technology. This section is only meant as a short overview that helps contextualize the development of Cosmos - to build a solid basis for our [next chapter on Cosmos](../2-introduction-cosmos/index.md).

<HighlightBox type="synopsis">

Just as a short recap of the _Technical Background of Blockchain Technology_ chapter: blockchain protocols define programs that hold a state and describe how to modify the state according to the received inputs. The inputs are called transactions.

The consensus mechanism ensures that a blockchain has a canonical transaction history. Blockchain transactions must be deterministic, meaning there is only one correct interpretation. The blockchain state is also deterministic. If you begin with the same genesis state and replicate all changes, you always achieve the same state.

A blockchain architecture can be **split into three layers**:

* The network layer: tasked with discovering nodes and propagating transactions and consensus-related messages between single nodes.
* The consensus layer: runs the consensus protocol between the single nodes of a peer-to-peer (P2P) network.
* The application layer: running a state machine that defines the application's state and updates it with the processing of transactions implementing the network's consensus.

This layered model can be applied to blockchains generally.

</HighlightBox>

## The world of blockchains — from public general-purpose chains to application-specific chains

You can find the building blocks of blockchain technology in the 1980s and 1990s, when breakthroughs in computer science and cryptography laid the necessary groundwork. Although the technology itself was not created until 2008, researchers from different fields in computer science and cryptography proposed solutions to many problems regarding security, transparency, and trust. All of them contributed to the development of the first large-scale, successful public blockchain network, Bitcoin.

<ExpansionPanel title="The groundwork of the 1990s">

Sometimes a look in the past tells us a lot about the present.

In 1991, two research scientists, Stuart Haber and W. Scott Stornetta, identified a problem: how can it be ensured that digital documents are authentic and changes to them are tracked in an immutable time-stamped manner? In "How to time-stamp a digital document", they worked on the concept of append-only, cryptographically secured logs. With their work, the foundations of what much later becomes blockchain technology were laid.

Haber and Stornetta's work was later followed and elaborated on by Ross J. Anderson in 1996 when he described the creation of [The Eternity Service](https://www.cl.cam.ac.uk/~rja14/Papers/eternity.pdf) - a storage medium resistant to DoS attacks by using redundancy and scattering techniques, as well as anonymity mechanisms.

In 1998, [Bruce Schneier](https://www.schneier.com/crypto-gram/) and [John Kelsey](https://www.nist.gov/people/john-m-kelsey) proposed a computationally cheap way to safeguard sensitive information and allow for computer forensics with secure audit logs by using hashing, authentication keys, and encryption keys (see: [Schneier, B. & Kelsey, J. (1998): Secure Audit Logs to Support Computer Forensics](https://www.schneier.com/academic/paperfiles/paper-auditlogs.pdf)).

Another significant work arose in 1994 when computer scientist Nick Szabo first described the concept of [smart contracts](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html). Although we will discuss smart contracts in depth later in the course, it is important to recognize Szabo's intent was to minimize the need for trusted intermediaries. In 1998 he proposed BitGold, a conceptual predecessor to Bitcoin as he argued for a decentralized digital currency. In both PoW is used as a consensus algorithm to solve cryptographic puzzles in a P2P network with BFT. The solutions are also linked together by a "hash chain" (See: [Moskoy, Phillip (2018): What Is Bit Gold? The Brainchild of Blockchain Pioneer Nick Szabo](https://coincentral.com/what-is-bit-gold-the-brainchild-of-blockchain-pioneer-nick-szabo/)). Although BitGold was never implemented, many perceive it as being the direct ancestor to BitCoin.

As we can see, these intellectual predecessors identified elements that are essential to blockchain technology.

</ExpansionPanel>

The necessary breakthroughs included:

* Append-only, provably correct transaction logs using built-in error checking
* Strong authentication and encryption using public keys
* Mature theories of fault-tolerant systems
* A widespread understanding of peer-to-peer (P2P) systems
* The advent of the internet and ubiquitous connectivity
* Powerful client-side computers

### Blockchain begnnings - The first public blockchain and cryptocurrency

On October 31, 2008, an individual or group calling itself Satoshi Nakamoto proposed a **P2P network for a digital currency**, calling it **Bitcoin**. Bitcoin introduced a novel consensus mechanism, now referred to as Nakamoto Consensus, that uses Proof-of-Work (PoW) to enable nodes to reach agreement in a decentralized network. It became possible to send online payments directly between parties **independent of financial institutions and trusted third parties**. Bitcoin became the first public, decentralized payment application.

<HighlightBox type="docs">

Want to look closer at the initial proposition of Bitcoin? See the original [Bitcoin whitepaper - Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf).

</HighlightBox>

### The second generation - Ethereum as the first general-purpose chain and the beginning of private chains

As soon as it became clear that the technology presents a very attractive base infrastructure for payments, other groups and organizations began adapting the technology for their purposes or developed new approaches using the same basic principles but adopting them to more traditional use cases. After the introduction of Bitcoin, several so-called "public chains" came into being - Ethereum was the first, many followed. These general-purpose blockchains aim to provide a decentralized network that allows the implementation of a variety of use cases.

![Blockchain timeline](/onboarding/1-introduction-blockchain/images/timeline.png)

The development of decentralized applications built on blockchain networks began shortly after Bitcoin's debut. In the early days, developing dApps could be done only by forking or building on the Bitcoin codebase. However, Bitcoin's monolithic codebase and limited scripting language made dApp development a tedious and complex process for developers. Thus, Vitalik Buterin started what is now known as the second wave of blockchain technology by publishing the paper underlying the Ethereum blockchain protocol. Beyond being a distributed ledger, the Ethereum whitepaper proposed the development of a distributed computation platform.

<HighlightBox type="docs">

Have a closer look at the [Ethereum whitepaper: A Next Generation Smart Contract and Decentralised Application Platform](https://ethereum.org/whitepaper/).

</HighlightBox>

Ethereum is a public blockchain with smart contract functionality that enables applications based on self-executing, self-enforcing, and self-verifying account holding objects. It can be seen as a response to the difficulties of developing applications on Bitcoin. With Ethereum, the application layer of the chain took the form of a virtual machine called the **Ethereum Virtual Machine (EVM)**. The EVM runs smart contracts, providing a single chain on which to deploy all sorts of programs. Despite its many benefits, the EVM is a sandbox that delineates the range of implementable use cases. Simplistic (and sometimes complex) use cases can be implemented with it but are nonetheless **limited regarding design and efficiency by the limitations of the sandbox**. Additionally, developers are limited to programming languages that are tailored to the EVM.

Even though the launch of Ethereum with its EVM was a big step forward, **some issues of public, general-purpose blockchains remained**: low flexibility for developers, and difficulties with speed, throughput, scalability, state finality, and sovereignty.

In the world of blockchains, "speed" means **transaction speed**. You can understand transaction speed as the time it takes to confirm a transaction. Speed is naturally impacted by the target delay between blocks, which is 10 minutes in Bitcoin and 15 seconds in Ethereum. Speed is also impacted by the backlog of equally worthy pending transactions all competing to be included in new blocks.

**Throughput** describes how many transactions the network can handle per unit of time. Throughput can be limited for reasons of physical network bandwidth, computer resources, or even by decisions embedded in the protocol. Not all dApps have the same throughput requirements, but they all have to make do with the _average_ resulting throughput of the platform itself if they are implemented on a general-purpose blockchain. This impacts the **scalability** of dApps.

**State finality** is an additional concern. Finality describes whether and when committed blocks with transactions can no longer be reverted/revoked. It is important to differentiate between *probabilistic* and *absolute finality*.

<HighlightBox type="tip">

In case you want to revisit finality in blockchains, head to the previous section on [consensus](./consensus.md).

</HighlightBox>

When developing on Ethereum, the developer needs to contend with **two layers of governance**: The chain's governance and the application's governance. Independently of the dApp's governance needs, developers must come to terms with the underlying chain's governance.

As soon as it became clear that the technology presents a very attractive base infrastructure for payments, other groups and organizations adapted the technology for their purposes or developed new approaches using the same basic principles but adapting them to more traditional use cases. Given the features of existing public blockchain projects and the requirements for privacy in certain industries, a push towards **private, or managed, chains** followed. Private distributed ledgers are blockchains with access barriers and sophisticated permission management. Examples include platforms for permissioned networks, such as R3's [**Corda**](https://www.r3.com/) and the [Hyperledger Project](https://www.hyperledger.org/)'s [**Hyperledger Fabric**](https://www.hyperledger.org/use/fabric) from the [Linux Foundation](https://linuxfoundation.org/).

Late 2015 saw the establishment of the [Hyperledger Project](https://www.hyperledger.org/) from the [Linux Foundation](https://www.linuxfoundation.org/), an industry consortium with a focus on enterprise blockchain technology for managed networks and business applications. Following the Hyperledger endeavors, R3, first a bank consortium that later became an enterprise software company, launched Corda, an open-source blockchain platform.

In August 2014, L.M. Goodman published the [Tezos position paper](https://tezos.com/static/position_paper-841a0a56b573afb28da16f6650152fb4.pdf) followed by the [Tezos whitepaper](https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf) in September of the same year. By the Fall of 2014, a group of developers tasked with developing the protocol had produced a crude but functional network shell. In 2017, the Tezos Foundation raised $232 million in one of the biggest initial coin offerings (ICO) that year. The network launched in June 2018 its Betanet and later in September its Mainnet.

Early in 2016, R3CEV, later renamed R3, announced it was working on a distributed ledger "that might otherwise be considered a blockchain, but which the company made perfectly clear was anything but." As we will see, in summary, Corda has many blockchain-like properties as well as distinctive properties.

The eventual development of more complex applications required a more flexible environment. This led to the launch of multiple **purpose-built/application-specific blockchains**, each providing a platform tailored to the necessities of use cases and applications. Each of these blockchains acted as self-contained environments limited by the use cases they were envisioned for.

**General-purpose chains are limited to simplistic use case applications, while application-specific chains only fit certain use cases.** This provokes the question: _is it possible to build a platform for all use cases that does away with the limitations of general-purpose chains?_

<HighlightBox type="info">

As you might already expect, the answer is: yes, with an ecosystem of interconnected, application-specific blockchains, or in short, Cosmos. If you want to dive right into Cosmos, just head to the [next chapter](../2-introduction-cosmos/index.md).

</HighlightBox>

<HighlightBox type="reading">

**Further readings:**

* [Anderson, R. J. (1996): The Eternity Service](https://www.cl.cam.ac.uk/~rja14/Papers/eternity.pdf)
er Nick Szabo](https://coincentral.com/what-is-bit-gold-the-brainchild-of-blockchain-pioneer-nick-szabo/)
* [Hyperledger Foundation](https://www.hyperledger.org/)
* [Nakamoto, S. (2008): Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)
* [A Next-Generation Smart Contract and Decentralized Application Platform - the Ethereum Whitepaper](https://ethereum.org/whitepaper/)
* [Schneier, B. &amp; Kelsey, J. (1998): Secure Audit Logs to Support Computer Forensics](https://mikemabey.com/cse469s19/papers/04_Secure_Audit_Logs.pdf)
* [Szabo, N. (1994): Smart Contracts](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)
* [Moskov, P. (2018): What Is Bit Gold? The Brainchild of Blockchain Pioneer Nick Szabo](https://coincentral.com/what-is-bit-gold-the-brainchild-of-blockchain-pioneer-nick-szabo/)
* [The Ethereum Enterprise Alliance](https://entethalliance.org/")

</HighlightBox>

## Next up

Today we can see two broader trends in the development and adoption of blockchain technology - public blockchains and managed/private blockchains. Have a closer look at both types in the [next section on deployment patterns](./deployment.md).
