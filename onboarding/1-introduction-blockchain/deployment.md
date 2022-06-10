---
title: "Blockchain Technology in More Detail - Deployment Patters"
order: 8
description: Public and managed chains
tag: fast-track
---

# Blockchain Technology in More Detail - Deployment Patters

Blockchain was developed as a **decentralized technology** that allows the operation of an infrastructure without hierarchy or authority.

<HighlightBox type="tip">

It is important to keep the technical foundations discussed in the previous sections in mind to understand the different deployment patterns and protocols presented in this section.

</HighlightBox> 

Before further looking at blockchain deployment patterns, briefly peek into a few more concepts: decentralized subsystems, multi-dimensional decentralization, and the minimum Nakamoto coefficient. A closer look at decentralization helps understand why it is a main criterion to distinguish deployment patterns.

## Decentralized subsystems & systems

Remember that networks can be decentralized, distributed, centralized, or a mix of both.

![Network types](/onboarding/1-introduction-blockchain/images/PaulBaran.png)

Broken down, a blockchain is a distributed ledger that records all transactions on the chain. Nodes in such a distributed ledger need to have a copy of the said ledger, as well as constantly remain in communication with the network that continuously runs without ever being offline. A blockchain requires a high degree of resilience and scalability due to it being a distributed P2P network with an expected growing number of nodes and processing necessities.

<ExpansionPanel title="Measuring decentralization - the minimum Nakamoto coefficient">

There are serval propositions and methods to measure decentralization. The use of the _**Gini coefficient**_ and _**Lorenz curve**_ are often proposed as means to quantitatively measure decentralization. Another useful tool is the _**minimum Nakamoto coefficient**_, as proposed by Balaji S. Srinivasan and Leland Lee (see: [Quantifying Decentralization](https://news.earn.com/quantifying-decentralization-e39db233c28e)). The authors argue that quantifying decentralization and utilizing a coefficient to measure decentralization is of importance to not only make measurement possible but also optimization.

The _**minimum Nakamoto coefficient**_ quantifies the number of entities that are required to be compromised to compromise the system as a whole, in other words, it is: _the minimum number of entities in a given subsystem required to get the total capacity, aggregated by taking the minimum of the minimum across the subsystems_. The higher the coefficient, the higher the number of entities required to compromise the system is.

</ExpansionPanel>

Balaji S. Srinivasan and Leland Lee argue that **decentralized systems are constituted by decentralized subsystems** and one must take a closer look at the **subsystem decentralization** to understand the degree of decentralization. The underlying assumption is that subsystems of a decentralized system are essential to the decentralization of the overall system. For this reason, decentralization can also be seen as multi-dimensional instead of dichotomous. Multi-dimensionality also encourages us to broaden our view when analyzing decentralization and thinking of possible network vulnerabilities.

To better illustrate the concept of systems and subsystems, **Bitcoin** is a fitting example. Srinivasan and Lee identify six Bitcoin subsystems:

* Mining (by reward)
* Client (by codebase)
* Developers (by commits)
* Exchanges (by volume)
* Nodes (by country)
* Ownership (by addresses)

Subsystems can differ from the ones mentioned above and can be chosen freely as long as they fulfill the criterion of being **essential to the decentralization of the whole system**.

Now, that you revised decentralization conceptually, it is time for deployment patterns in blockchain technology.

## Deployment patterns in blockchain

There are several mechanisms essential to ensure the working of a blockchain, one of these are consensus algorithms used to determine a well-ordered state of transactions and ensure network security. Blockchains cannot be only differentiated by the consensus mechanism included in their protocols but also by the deployment pattern they follow. Whereas, in this context **deployment patterns** are understood as _the general set-up of a blockchain network_.

There are **two basic different deployment patterns** for blockchains: 

* Public
* Managed/private

![Public and managed network comparison](/onboarding/1-introduction-blockchain/images/comparison-public-vs-rivate.png)

**Public blockchains** represent the classic understanding of how a blockchain network is constituted: they are decentralized and allow for public access. **Managed blockchain networks**, as opposed to public networks, rely on the blockchain data structure but unlike public blockchain networks, do not have to mitigate the Byzantine Generals Problem because they operate in a predictable environment with elements of authority and hierarchy. As their name suggests, they are private in a sense because most allow for authentication, authorization, and permission of actions. Therefore, they are often more suitable for traditional businesses that want to make use of the technology for internal or collaborative purposes without operating on public networks.

The **deployment pattern has major implications on the functioning of the network**: what a network is supposed to do and how it is going to fulfill the envisioned tasks depends on its deployment pattern. 

The main way to differentiate between blockchains is to consider their **form of access**. The form of access refers to:

* Whether there is a distinction between users or not.
* Whether the access to the blockchain is open/public or controlled/private.

<ExpansionPanel title="What are permissioned/permissionless blockchains?">

In blockchain literature, one often stumbles across the terms **permissioned** and **permissionless**. The more one reads about it, the more confusing it becomes, and the more difficult it is to grasp what the term refers to. 

In **permissioned blockchains**, *an individual or group of participants hold the authority to validate blocks of transactions or to participate in the consensus mechanism*. Permissioned blockchains restrict the actor's involvement in the consensus state. In addition, it is important to keep in mind that permissioned networks restrict participants' access to smart contract creation and/or transactions. Permissionless blockchains are the opposite. Block verification, smart contract creation, and transactions on permissionless blockchain networks are open to all members.

The terms permissioned and private, and permissionless (also referred to as non-permissioned) and public are often used synonymously, but it is essential to understand the difference between the terms and what they entail.

</ExpansionPanel>

### Public networks

The most obvious way of operating blockchain protocols comes in form of a public network. This is what blockchain technology was originally invented for and remains arguably its most powerful use.

![Public network](/onboarding/1-introduction-blockchain/images/public-network.png)

A public blockchain, compared to a private or managed one, is characterized by **open access**. Every participant has access to data and can validate as well as add blocks in public blockchains. Anyone, without needing the permission of another authority, can write and read data. Because network participants are not vetted and can add to the ledger without needing approval, public blockchains incorporate ways to arbitrate discrepancies and include defense mechanisms against attacks. 
Thus, guarding against malicious participants is not required, i.e. there is no barrier to entry, and no access control system needs to be in place. 
The beauty of the public network lies among others in its **self-defense** attribute. In addition, public blockchains benefit from demand-side economies of scale, also called **network effects**.

A proof-of-work based public blockchain network, such as Bitcoin or Ethereum, has a few **specific attributes**:

* **Accessibility:** All you need to connect to Bitcoin or Ethereum is the client software and an internet connection. No AML, KYC, identity checks, or subscription payment is required.
* **No hierarchy:** All nodes are equal, meaning no individual node has more authority than another. All validators are also equal.
* **Crypto-economic incentives:** The lack of a central authority means there is no absolute defense against malicious behavior. Instead, the network usually incentivizes benevolent behavior and disincentivizes behavior that endangers the network's functioning. It de facto implements prohibitive expenses to attack the network and others, and thus ensures security and proper function.
* **Full decentralization:** Many public networks are completely decentralized because they are non-hierarchical and fully accessible. The playing field for market participants is therefore relatively level, so traditional business models may not work as well.

The two most popular examples of functioning public networks are Bitcoin and Ethereum.

<ExpansionPanel title="Introduction to Bitcoin">

Since 2009, the most successful and popular decentralized public blockchain network has been Bitcoin. Nowadays, Bitcoin is the cryptocurrency with the highest market capitalization.

<HighlightBox type="tip">

For an estimate of the Bitcoin network size, take a look at [Bitnodes](https://bitnodes.earn.com/). Also if you are more of a visual and statistics person, [Bitcoin charts](https://www.blockchain.com/en/charts) can be highly recommended.

</HighlightBox>

Bitcoin was first introduced with the publication of the original paper [*Bitcoin: A peer-to-peer electronic cash system*](https://bitcoin.org/bitcoin.pdf) (2008) by Satoshi Nakamoto. In this paper, Nakamoto describes Bitcoin as a **peer-to-peer (P2P)** version of electronic cash. He suggested that **proof-of-work (PoW)** can be used to find the truth in a partially synchronous system without involving trusted parties. Using this method, the set of participants controlling the majority of the computing power determines the truth.

Nakamoto does not use the term blockchain in his paper but he describes the concept by explaining transactions in Bitcoin. **Transactions** are sent directly from user to user without the need for an intermediary. They are verified by the nodes and then recorded on the blockchain, a distributed ledger. The transaction process requires the signing of the transaction with the **hash of the previous transaction**. This establishes a chain of ownership.

The **chain of ownership** goes back to the essence of blockchain technology. The main argument is that with complete transparency every user can recreate every transaction that has ever been verified back to the genesis block and the corresponding order of the transactions. As the term already implies the ownership of every single cryptocurrency unit can be traced back to each transaction in which ownership was transferred. Thus, every participant can verify a new payment and make sure no double-spending is taking place.

Each Bitcoin is registered to a so-called **Bitcoin address** by picking a random private key and then computing the corresponding address. Computing the address is **practically secure** because computing it might be fast but computing the private key by using the address is *mathematically unfeasible*. It is comparable to the different forms of secrecy that were discussed regarding public-key cryptosystems. In addition, the number of possible private keys which are valid is so high that *brute force attacks* are also seen as unfeasible.

Moreover, Bitcoin tokens can only be spent, if the owner knows the *corresponding key* and *digitally signs* the transaction. The network can verify the signing with a public key.

In the end, one has a chain of ownership.

In Bitcoin, nodes optimize the concept of chain of ownership because they validate a chain once and all unspent transactions are stored. With this, it is avoided that one would have to re-check the validity of the transaction by going back to the genesis block every single time. Without a private key, a Bitcoin user does not have a mean to prove ownership. Therefore, losing the private key equals losing all your coins.

Transactions can contain several **inputs**, a record of the Bitcoin address from which the coins were initially received, and **outputs**, the public key or bitcoin address to where the Bitcoin tokens are meant to be sent.

Each block includes the hash from the previous block and a nonce -a random string of `1`s and `0`s. The protocol calls for a hash beginning with a specific number of 0-bits when hashing the block. An attacker trying to change a transaction in a block would have to mine the block at that point in the chain and the following blocks to reproduce the part of the blockchain that is going to be tampered with.

![Chain of blocks with previous hash](/onboarding/1-introduction-blockchain/images/bitcoin-block-headers.png)

_Reproduced from [Nakamoto, S. (2008): Bitcoin: A peer-to-peer electronic cash system](https://bitcoin.org/bitcoin.pdf)._

To avoid double-spending Bitcoin uses a **timestamp server**. The miner is looking for a nonce, which results in a block hash beginning with the right number of 0-bits. It is difficult to find a nonce that fulfills this condition and it is easy to verify when one has. This becomes more difficult as other blocks are chained after this one because a new nonce has to be found for each block.

<HighlightBox type="note">

The **truth** is the longest chain in which the network is most invested.

</HighlightBox>

There is a residual probability for a slower attacker to catch up, since getting nonces works by brute force. This decreases exponentially with the number of blocks. The higher the number of blocks, the lower the probability of an attacker catching up.

The protocol includes a **reward** for mining. This reward is the first special transaction in the block. It can be expected, that the nodes will use their CPU power honestly to get the reward.

Because transactions are announced publicly, the public key of the parties is not anonymous.

</ExpansionPanel>

<ExpansionPanel title="Introduction to Ethereum">

Ethereum is a public, blockchain-based distributed computing platform and operating system with smart contract features. Ethereum emerged because a range of proposals were refused by the Bitcoin community.

<HighlightBox type="info">

The [next section](./smart-contracts.md) dives into smart contracts So no worries if you feel a little unsure about what smart contracts are and do.

</HighlightBox>

The most important difference compared to Bitcoin is the implementation of distributed code execution through the **Ethereum Virtual Machine (EVM)**. The Ethereum network is a virtual state machine, which enables the deployment of so-called **smart contracts** as part of the data of a transaction. The implementation of such a state machine with blockchain is revolutionary in itself.

In Ethereum, **smart contracts** are stored on every single node - they are public. As smart contracts are stored on the blockchain they are secure in the same sense that all stored information on the blockchain is secure. In practice, a smart contract in the EVM is an autonomous agent with an internal account. The most popular language for writing such a contract is **Solidity**.

Every node calculates all smart contracts. This can lead to performance issues regarding the blockchain’s speed.

**Faster block time**

Ethereum has a much faster block time than Bitcoin - currently, it is around 15 seconds. It implements a variation of Bitcoin's PoW consensus algorithm called **Ethash**, which is intended to be [ASIC-resistant and GPU friendly](https://github.com/ethereum/wiki/wiki/Ethash-Design-Rationale). ASIC resistance is meant to discourage unwanted concentrations of mining power, in other words, to encourage decentralization. Core developers of the Ethereum project plan to switch to the **proof-of-stake (PoS)** consensus algorithm in the future.

However, these useful innovations are not the key innovation that allows Ethereum to operate with faster block times.

A well-understood challenge related to reduced block time stems from network latency. Since nodes do not learn about newly discovered blocks simultaneously, at any given time a portion of the miners will be working on already solved/old blocks. If these miners find a solution, they might not be rewarded and a "fork" of the chain results. This can lead to rival chains with a common true history spreading through the network. The rate at which such transient forks occur increases predictably with shorter block times.

Another way of understanding this is to consider that at any point in time, a predictable percentage of the total mining hardware in the network could be working on the wrong chain because of latency, and this percentage increases with shorter block times. It is not beneficial to the network or the miners to waste hardware resources that are intended to secure the network.

While Bitcoin addresses this efficiency issue with a relatively long block time of 10 minutes, Ethereum addresses this concern with a partial reward strategy: valid blocks that are not ultimately included in the canonical chain, because another chain becomes longer, can still be included on the side. Ethereum includes **uncles** to decrease the average block time. Miners of uncles receive a smaller reward than regular block miners.

![Blockchain with uncles](/onboarding/1-introduction-blockchain/images/ethereum-ghost.png)

<HighlightBox type="remember">

The concept of uncles was introduced in the [section on consensus](./consensus.md) under _Forking - Orphaned blocks - what is an uncle?_.

Uncles are validated blocks, that are propagated too late into the network. Uncles increase the total difficulty of the chain and make smaller block times possible.

</HighlightBox>

This is made possible thanks to Ethereum's implementation of the [GHOST protocol](http://www.cs.huji.ac.il/~yoni_sompo/pubs/15/inclusive_full.pdf). GHOST includes so-called uncles that are propagated into the network too late to rise to the level of network consensus. This increases the total difficulty of the chain (by capturing the "work" that would otherwise be wasted), makes smaller block times possible, and rewards miners of uncles for contributing to the overall strength of the network.

Ethereum's solution to achieve faster block times draws attention to the universal challenges of blockchain technology: performance and throughput.

**Ethereum’s gas**

The code execution platform is [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness). As part of Turing-completeness, frameworks must overcome the [halting problem](https://www.scientificamerican.com/article/why-is-turings-halting-pr/), which is especially difficult in distributed, hierarchy-free computing platforms.


In simple terms, the halting problem describes a scenario in which a program loops forever. Ethereum’s solution is to introduce "gas" as a fee for each computational step. **Gas** is the name for _a unit used in Ethereum to measure how much work is needed to perform an action_. Gas is used to ensure an appropriate fee. 

Every block has a maximum gas limit, which limits the number of computational steps that can be executed per block - just like a combustion engine, if the gas runs out then the program stops. Gas is provided by the transaction creator and is consumed at each computational step. It only exists during the execution of a transaction and the user is free to specify any **gas price** in terms of **Ether**, a value which Ethereum requires to convert **Ether to gas**.

<HighlightBox type="info">

**Ether** is the **native cryptocurrency** of the Ethereum platform, as Bitcoin is the native cryptocurrency of the Bitcoin blockchain.

</HighlightBox>

The protocol defines the **gas cost** for each operation in the EVM. The halting problem is resolved by attaching financial costs to every step in a program and by limiting the funds available. Transactions that do not compute successfully and are not on budget are rejected.

<HighlightBox type="note">

If the computation stops before all the gas is consumed, the consumed gas is collected by the winning miner, and the remaining gas is returned to the transaction creator.

If the gas provided is fully consumed before the computations have been completed, the computation stops, all state changes are dropped, and all gas goes to the winning miner.

</HighlightBox>

Different computational steps have different gas costs and pricing them is an art as much as it is science. The general rationale is: **The more an operation requires computational resources, the more gas is needed to perform it**.

As promising as this sounds, the technology is **not without limitations**. Chief among these limitations is capacity, not only in terms of transactions per second but also in terms of the complexity of transactions that can be handled by the network. Ethereum's virtual machine paradigm places limits on transaction complexity to ensure that a single contract or a single transaction does not overload the shared, distributed computer. This constraint is inherent to the design choice of using a virtual machine model.

<HighlightBox type="info">

The Ethereum blockchain experienced a [denial-of-service attack](https://blog.ethereum.org/2016/09/22/ethereum-network-currently-undergoing-dos-attack/). The fact that a couple of operations had a price in gas that was too low compared to the degree of difficulty was exploited. The attacker, while paying a small gas fee, managed to hold up a large portion of the nodes. The protocol was amended in a way that required [a hard fork](https://blog.ethereum.org/2016/10/13/announcement-imminent-hard-fork-eip150-gas-cost-changes/) and the vulnerable operations were repriced, rendering the attack too expensive to carry on.

</HighlightBox>

</ExpansionPanel>

### Managed networks

Managed networks, just like public networks, rely on blockchain data structures. Unlike public blockchain networks, they do not necessarily need to mitigate the Byzantine Generals Problem because they operate in a predictable environment with elements of authority, hierarchy, and accountability.

![Managed network](/onboarding/1-introduction-blockchain/images/managed-network.png)

Managed networks can be used in cases where elements of trust already exist between the participants. A private or managed blockchain is different from a public network because participants are known and trusted due to **access barriers**. Participants are vetted through an access control layer that governs network access. Thus, a private network does not have to rely on anonymous participants to validate transactions.

<ExpansionPanel title="An example use case - interbank settlement">

For example, consider a network of financial institutions. They could use blockchain technology to **settle inter-bank transactions**. Currently, each bank runs its own legacy infrastructure. When these banks try and settle trades between their customers, their systems need to interact with each other often through several layers of third-party software.

![Bank - Insurer - Central Bank Overview](/onboarding/1-introduction-blockchain/images/private-blockchain-01.png)

Now, consider that all these banks are operating a common blockchain network only they have access to. Rather than keeping their own versions of ledgers, they operate on the **same** ledger.

In that case, there would be no need for public access. Indeed, public access would be undesirable. Instead, the financial institutions might consider a private network with each institution operating exactly one validator. All participants would understand that no operator in a single institution would be able to corrupt the network overall. However, it would be much easier for them as a group to alter history if they found it detrimental since it would only require the coordinated action of a small number of known validators.

</ExpansionPanel>

Managed networks are typically governed through traditional governance processes that are appropriate for the shared goals of the participants.

<HighlightBox type="info">

Many mechanisms vital in public blockchains are not necessary for private blockchain settings. For example, there is no need to discourage 51%-attackers, because 100% of resources for block creation are controlled by the network. Still, the **risk of attacks** against the blockchain creation tools or the private corporate servers is high. An attacker could focus on tools or the corporate servers as an opportunity to control all the network's resources and alter transactions as they wish.

</HighlightBox>

Public networks are based on [**Game Theory**](http://www.dklevine.com/general/whatis.htm) and **economic incentives**, which means that **every action is probabilistic**. There is no guarantee that a transaction will be picked up and even the integrity of the network is merely very likely, not 100% guaranteed.

<HighlightBox type="tip">

To review finality in blockchains, go to the section [Technical Background of Blockchain Technology - Consensus](./consensus.md).

</HighlightBox>

This is often unacceptable, for example with traditional financial institutions. Still, one of the biggest expenses financial and other institutions face is the operation and maintenance of infrastructure and the costs resulting from leaks, hacks, reconciliation with trading partners, errors, and data incompatibility. For this reason, many financial firms have been looking into blockchain technology, especially managed blockchains, to try to mitigate some of their very specific issue areas and investigate them as a viable alternative to existing siloed systems.

Unlike public networks, where the interaction between participants is governed by the protocol and crypto-economic incentives, in managed networks, the blockchain protocol is often a technical enforcement of pre-existing relationships and legally enforceable agreements.

<ExpansionPanel title="Consortium blockchain networks">

A **consortium blockchain network** is an option often preferred by private enterprises and especially financial market players to pool resources to develop a shared blockchain. A consortium might use the same protocol or infrastructure as a public blockchain, but with a few differentiating attributes:

* **Limited access:** unlike public networks, many consortium blockchain models limit access to vetted and approved participants.
* **Different consensus approaches:** because the scope of participants can be limited, crypto-economic incentives might not be necessary for a consortium blockchain network. Alternatively, the creation and verification of blocks may be executed by a limited group of authorized nodes.

</ExpansionPanel>

#### Public vs private/managed

Often private and public blockchain network differences are explained by using an analogy: the difference between the intranet and the internet in the 1990s. Whereas public blockchains are compared to the internet and private ones to the intranet.

The difference between both deployment types becomes visible in direct comparison. It is of importance to understand the differences as well as the implications resulting from this difference to better assess what type of blockchain is useful for what situation and/or task.

![Public and managed network comparison](/onboarding/1-introduction-blockchain/images/public-vs-private-comparison-table.png)

**Private blockchains** can be:

* **Designed for a limited number of vetted and approved participants:** performance challenges and poorly connected nodes are of lesser importance.
* **Designed for optimized performance:** most participants in an enterprise network are capable of running well-connected, high-performance, and high-availability nodes. A group of participants can agree to raise the bar in defining minimum system requirements significantly.
* **Governed by a well-defined agreement between the participants:** such an agreement may codify the decision-making processes used to decide matters such as protocol upgrades, admission requirements, and remedial action. In a private or consortium setting, "who decides?" can (or likely _must_) be determined well in advance of any incident.

In summary, managed networks enable high-performance blockchain networks that can use consensus processes that are not suited for an environment with anonymous users. A group of trading partners can create a small network for their purposes and agree on equitable participation in the block-generation process (e.g. that each participant runs one validator), minimum performance metrics for acceptable validators, and governance, all of which enable fast confirmation and even deterministic transaction finality within their small group. The principal trade-off for this performance improvement is the shunning of permissionless, public access.

Different deployment patterns have their benefits and drawbacks. They are also more or less suited to different intended network functions.

<HighlightBox type="info">

Cosmos can be applied to both public and private settings and, importantly, supports communication between networks following different consensus rules, a seemingly intractable challenge for the predecessors of Cosmos. More details to follow in the upcoming [introduction to Cosmos](../2-introduction-cosmos/index.md).

</HighlightBox>

<ExpansionPanel title="Why managed blockchains?">

It is often argued that managed blockchains are not that different from traditional database networks. Still, we can ascribe them certain merit by pointing out the technical differences between traditional database networks and blockchain-based networks in more detail.

There are good reasons to use a managed network within an organization, even if it does not provide the same level of data integrity and transparency as a public blockchain network. Both deployment types are decentralized P2P networks, which share the distributed ledger with all network participants and synchronize it through the use of a protocol. Also, both guarantee **immutability** to a certain degree.

Managed networks have several **advantages** compared to public blockchains, which often make them seem more fitting for private businesses.

First, all users/participants in managed networks are known. This is fundamentally different from public blockchains, in which the network is open to all participants as soon as they set up the software necessary to interact with the blockchain network. So public networks do not have **entry barriers**, whereas private ones do. Restricting entrance can be especially important to increase network privacy when dealing with sensible information.

How access to the network is granted can vary. Access can be decided by:

* A central authority
* All existing participants
* A consortium
* By other means agreed upon by the owners of the network. 

Moreover, managed networks also allow for restricted access for verification, as the network's owner can decide to only grant verification rights selectively.
  
Second, with network openness comes the problem of **increasing computational power** and with it, high energy consumption. The amount of energy consumption and computational power required to maintain the consensus algorithm and a distributed ledger at a large scale has skyrocketed. This is not only costly but also a major drawback in terms of the environmental sustainability of blockchain technology.

Third, one of the most important aspects of managed blockchains concerns **privacy**. As public blockchain networks are open to all participants, the information stored on them is public too. On the one hand, this degree of "publicness" helps ensure the high degree of security attributed to blockchain networks. On the other hand, there is only a limited degree of privacy. This can be an issue for business activities that work with "sensitive" information. For this reason, private entities often favor managed blockchain networks over public ones.

By being "private", managed blockchains face different implications for their security architecture, as they do not benefit from the same security mechanisms inherent in public blockchains. Security concerns of managed blockchains are comparable to those of traditional database networks. 

<HighlightBox type="tip">

Interested in the security aspects of blockchain technology? Have a look at [this short article]()https://hbr.org/2017/03/how-safe-are-blockchains-it-depends}.

</HighlightBox>

**Auditability and transparency**

In cryptographically secured chains of data, as used in blockchain protocols, once data has been added it cannot be changed without re-computing all the following hashes in the chain. For this reason, we say that blockchain data is **immutable**. This can be a valuable attribute for internal record-keeping, since records cannot be changed after sign-off, either through error or through malice. If we combine this with smart contract execution and the implementation of critical business processes, internal process execution could become auditable.

As data and information are introduced via transactions, it would be easy to establish what was introduced into the network when, and by whom. Thus, blockchain networks are highly transparent. This would be a more cost-efficient and reliable form of bookkeeping than the current one. It would also streamline compliance and auditing, as well as make reporting tasks easier. The high degree of audibility and transparency is a result of the **immutability** of data in a blockchain. It makes managed blockchains, especially appealing for business activities that are strongly regulated, and/or have to conduct regular audits.

**Governance**

Managed blockchains allow for a more tailored governance structure than public blockchain networks. Not only can one limit access for participants and verification authorities, but all other aspects related to **user rights and network governance** can be limited as well. This can be very useful depending on the information you wish to store on a managed blockchain network.

Furthermore, platforms that allow for **smart contract execution** enable organizations to further implement even more blockchain-based business operations. Processes can be encoded and their execution can be guaranteed and enforced. This can be interesting for compliance-critical processes, or within subsidiaries with unreliable staff or operating in corrupt jurisdictions. As information is shared and transactions are signed, it is easier to attribute an action to someone and thereby increase the overall transparency of activities. Companies can analyze processes in near real-time and check for worrisome behavior, enforce company guidelines and rules, and ensure reliable compliance control.

</ExpansionPanel>

<HighlightBox type="reading">

**Further readings:**

* [Berke, A. (2017): How Safe Are Blockchains? It Depends](https://hbr.org/2017/03/how-safe-are-blockchains-it-depends)
* [BlockApps](http://blockapps.net/)
* [Haber, S. & Stornetta, W. S. (1991): How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)
* [Levine, D. K.: What is Game Theory?](http://www.dklevine.com/general/whatis.htm)
* [Srinivasan, B. S. (2017): Quantifying Decentralization](https://news.earn.com/quantifying-decentralization-e39db233c28e)
* [Buterin, V. (2015): On Public and Private Blockchains](https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains/)
* [Buterin, V. (2016): On Settlement Finality](https://blog.ethereum.org/2016/05/09/on-settlement-finality/)

</HighlightBox>

## Next up

In the [next section](./smart-contracts.md), it is all about smart contracts. Discover what smart contracts are and the opportunities they offer.
