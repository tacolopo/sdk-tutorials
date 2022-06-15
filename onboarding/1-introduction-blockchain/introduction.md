---
title: "Introduction to Blockchain"
order: 2
description: What is blockchain?
tag: fast-track
---

# Introduction to Blockchain Technology

There are many different ways to understand blockchain technology and grasp all that the Cosmos ecosystem has to offer. To give you a thorough understanding and a complete view, you cannot restrict yourself to one single definition and understanding. Instead, you will be presented with a vast spectrum of conceptualizations throughout the first chapter.

<HighlightBox type="learning">

Begin your journey into Cosmos with a short introduction to blockchain technology, how it came into being, and the problem it promised to solve.

You will revisit:

* The double-spending problem and how it relates to blockchain.
* The imminent problem of digital artifacts which blockchain technology solves.
* How an immutable chain of blocks is created.
* Why consensus is vital for a blockchain network.

</HighlightBox>

To begin with, here is an overall introduction to this exciting and sometimes intangible technology everybody is talking about.

**Blockchain** is a complex and rapidly evolving technology. It took many bright minds and many years of development, plus a combination of advances in cryptography, distributed computing, and economics, to reach its current state. Grasping blockchain requires serious effort.

The blockchain journey begins with a problem... the **double-spending problem**.

The double-spending problem refers to a potential flaw in any cryptocurrency or other digital cash scheme: _What if the same single digital token can be spent more than once, regardless of the available account balance?_

Satoshi Nakamoto, whose identity remains shrouded in mystery, published a solution to this problem his seminal whitepaper [*Bitcoin: A Peer-to-Peer Electronic Cash System*](https://bitcoin.org/bitcoin.pdf) in October 2008.

<HighlightBox type="docs">

Satoshi Nakamoto's *[Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)* is a reasonably straightforward paper to read, even for a non-expert. Feel free to have a look at the first whitepaper for a blockchain protocol.

</HighlightBox>

Satoshi Nakamoto presented a **solution to the double-spending problem** for digital currencies in the form of a simple, then hypothetical implementation called **Bitcoin**. By doing so, he revealed the first workable example of a blockchain application.

Bitcoin has of course become an actuality and gained widespread attention since then. The world has discovered the underlying technology of blockchain and its usefulness across many contexts and use case implementations.

## What does blockchain solve?

Digital artifacts can be copied with ease. This presents obvious problems if you want digital artifacts to represent assets with value. When considering digital cash schemes, a very pressing issue is the possibility of someone duplicating a token meant to represent a discrete monetary unit. _What prevents someone from making copies and spending the same money twice?_

In the **current economic system**, currencies rely on **central authorities** such as central banks, **third parties that manage and control financial transactions**, as well as **physical safeguards on banknotes** to prevent double-spending and counterfeiting. A third party such as a bank, credit card company, or payment service is used as a **trusted ledger keeper**. They keep digital ledgers containing comprehensive records of past transactions to prevent double-spending. Consequently, it has generally not been possible for two parties to exchange value online without involving a trusted third party to handle the settlement process.

![Regular transaction](/onboarding/1-introduction-blockchain/images/regular-transaction.png)

However, the world of digital currency is not the same as simply "spending money online". To gain a clear grasp of the double-spending problem with regard to digital currencies, consider the following scenario:

* Alice sends some digital coins to Bob in exchange for goods or services.
* Alice maliciously sends the _same_ coins to Charlie in exchange for other goods or services.
* Both Bob and Charlie deliver the goods or services, but only one of them will be able to spend the received coins.

![Double-spending problem: conflicting transaction](/onboarding/1-introduction-blockchain/images/double-spending-problem-2.png)

Double-spending is important for digital tokens because they _could_ theoretically be spent more than once. Double-spending refers in the blockchain context to a situation in which **one** token is spent **twice or more** times.

<HighlightBox type=note>

<!--ANDREW: It isn't really clear to me how the following paragraph is meant to be interpreted. It first uses the phrase "duplication and/or falsification" without attaching it to a context (duplication and/or falsification *of what* can lead to inflation etc... of traditional/physical currency?), but then we use the same phrase to talk about how central authorities deal with the problem for digital cash systems (but this was already stated in the second paragraph, wasn't it?).

It sounds like this is important, but I think the nuance is being lost. On a basic level, isn't "duplication and/or falsification" what we're saying Alice is doing in the double-spend example? Too many phrasings either ARE the same or sound the same (digital currencies... digital cash systems... not the same? I'm getting lost here).-->

The double-spending problem _in blockchain technology_ should be clearly distinguished from double-spending problems related to duplication and/or falsification, which can lead to inflation, currency devaluation, and distrust among currency holders. Problems from duplication and/or falsification are more related to digital cash systems and solved with a trusted central authority.

</HighlightBox>

![Double-spending problem: transaction via blockchain](/onboarding/1-introduction-blockchain/images/double-spending-problem-3.png)

At a high level, blockchain solves the problem by **replacing the trusted central ledger-keeper with a network of ledger-keepers**. Each member of the network has an exact replica of the ledger and no one can append the ledger without achieving network consensus about it first, which requires at least a majority of nodes agreeing on the state of the ledger.

It is as though each transaction is observed by a *large crowd of witnesses* who reach consensus about proposed changes. They also prohibit events that should not occur, such as spending non-existent funds (i.e. double-spending). 

<HighlightBox type="info">

If the concept of consensus in blockchain is something completely new to you, do not worry: you will dive deeper into consensus and the consensus algorithms used in blockchain protocols in this chapter's [Consensus](./consensus.md) section.

</HighlightBox>

Bitcoin and its underlying technology convincingly demonstrate that a network of participants _that do not necessarily trust each other_ can form a consensus about the validity of a transaction, its history, and the resulting state of the ledger. This is interesting because simple ledgers of account balances and simple protocols for moving funds are far from the only use cases for shared data consensus.

## How does blockchain work?

Imagine you want to **retain and monitor changes to a file**, for example, a log file. Now, imagine you also want a verifiable, unbroken history of all changes ever made to the file. How can you proceed?

A well-understood solution is to use cryptographic [hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function). A hash can be used to prove an input exactly matches the original, but importantly the original cannot be reconstructed from its hash.

The ideal cryptographic hash function has **five main properties**:

* **Deterministic:** the same message always results in the same hash.
* **Fast:** the hash value for any given message is computed quickly.
* **Resistant:** it is infeasible to generate a message from its hash value except by trying all possible messages.
* **Avalanche effect:** a small change to a message should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value.
* **Unique:** it is infeasible to find two different messages with the same hash value.

There are many different hashing algorithms. Each algorithm consistently produces hashes of the same size regardless of the size of the input.

<HighlightBox type="tip">

You can find a more detailed explanation of hash functions in the [Cryptographic Fundamentals](./cryptographic-fundamentals.md) section.

</HighlightBox>

What about subsequent changes to the file?

Suppose new entries will only be appended to the end of the file.

You can make a rule stating that in addition to the new content, the previous hash will also be an input of the next hash. The (pseudo-)code would look like this: 

```javascript
version2Hash = hash(version2Changes + version1Hash)
```

The above allows you to examine proposed changes and confirm the previous file while making sure subsequent changes are accurately disclosed. With the method presented it is possible to create a chain of hashes, and with it a cryptographic secure history by repeating it for all subsequent versions.

<!--ANDREW: I've tried to reduce some language repetition here, but please check to make sure the meaning of the first sentence remains correct-->Since knowing the hash of the latest valid version is a required input to the next version's hash function, making any changes to a preceding version will produce a different, and therefore invalid, "latest" hash. This means changes can only be appended to a previous valid version. As a result, any version of the file contents can be shown to be part of an **unbroken chain of changes** all the way back to the file's inception. This is pure mathematics. Any deviance from the system (meaning a hash that does not compute as expected) proves a break in the history and is therefore invalid.

Blockchain functions in a similar way. **Blocks of transactions** are appended using the hashes of previous blocks as inputs into the hashes of subsequent blocks. Any participant can quickly verify an unbroken chain of blocks and with it the **correct order**.

![A chain of blocks: from the genesis block to the last version](/onboarding/1-introduction-blockchain/images/genesis_block.png)

In blockchain, cryptographic hash functions are instrumental to empower participants and assure them that they possess an undistorted history of everything.

## Why is order so important in blockchain?

**Blocks** are _logical units that wrap up **a set of transactions in a specific order**_. While the implementation details are somewhat more subtle, for now, think of a block as the set of transactions that occurred during a set time interval and in a specific order.

Transaction ordering is surprisingly challenging in a distributed system due to design goals and constraints. Looking closer at Bitcoin and its solution helps understand how order and consensus about the order are possible in a distributed network:

* **Everyone** has a little bit of authority. For example, all nodes can propose transactions and then announce that information to other nodes.
* No one's clock is considered more authoritative than anyone else's clock, so blockchain is a distributed **timestamp** server **without a central network time**.
* Theoretically, **anyone** can listen to transaction proposals and create a valid block containing an _opinion_ about the correct order of events (transactions).
* Everyone in the network will learn about transaction proposals in a slightly different order due to **physics and network latency**.
 
So how is the **order of transactions** determined?

Even assuming all members of the network mean well and participate honestly, each node will arrive at a slightly different opinion about the ordering of transactions. This is simply a result of network latencies.

Although there is no obvious way to then settle on the correct order, **transaction order must be resolved** because processing transactions out of order would produce non-trivial differences in outcomes. Such a non-trivial difference would be, for example, an instance of double-spending. Without agreement about the transaction order, there can be no agreement about the balances of accounts. Thus, order is essential for the correct functioning of a blockchain like Bitcoin.

## Blockchain as a lottery

A (ledger) **state** with a disambiguated transaction order is called **consensus**. The consensus process happens independently of an authoritative time source in blockchains. Consensus mechanisms established and implemented by protocols are called **consensus algorithms**.

Bitcoin uses a consensus algorithm called **Proof-of-Work** (PoW), which can be (simplistically) thought of as a lottery: the lucky winner gets the privilege of being the authority on one block of transactions. The winning lottery ticket, called the **nonce**, is used as the next input for the hash function. 

This is easily verifiable for other participants, who recognize this unlikely combination - unlikely because of the probability each participant has of owning the winning lottery ticket. The lottery winner can generate a block containing a certain transaction order, which is then valid. And the other participants accept the block as a de facto correct opinion about the order of transactions.

<HighlightBox type="info">

In blockchain networks, participants are often referred to with the term **node**.

In general, a node is a _point of connection in a network that serves as a (data) redistribution point or communication endpoint_. Nodes are connected through communication channels that enable them to exchange data and share resources.

</HighlightBox>

It is important to note that a valid block does not mean this block represents some form of absolute "truth". **The "truth" in blockchain is often defined as the longest chain of valid blocks.**

To summarize:

* A valid block is a **well-ordered set of transactions**.
* The block contains the **hash of the previous block**.
* The block includes a "winning lottery ticket", the **nonce**.

A well-ordered set of blocks of well-ordered transactions is, in the end, a well-ordered set of all transactions.

Since **all nodes can verify the chain independently**, the nodes can proceed on the assumption that all other nodes will eventually come into agreement about the history of everything.

<HighlightBox type="info">

All participants accept the new blocks being created only as long as there is no "fork" from the main chain - a second chain that splits off from the main chain because two or more miners found a block almost at the same time. In this situation, both blocks have the same block height and represent competing versions of the "truth". After a fork occurs, the efforts of the network to extend the rival chains will be split unevenly between the two; eventually the longest chain rule will apply to one of them, and consensus on the order of transactions and blocks will be regained.

</HighlightBox>

## Quick recap

A blockchain starts with the **genesis block**. This is a simple matter of an initialized universe in which nothing has happened yet. Think of it as a pre-Big Bang universe. As soon as the first block of transactions is generated, the Big Bang occurs and the universe starts expanding.

The blockchain proceeds by constructing a verifiable and widely agreed history of every transaction that has ever occurred. Nodes have a copy of the present state (ledger) with the ordered history of every single change (the transactions). The history of everything that has ever occurred moves forward in time as "lottery winners" (nodes that discover a nonce) announce new transaction blocks. Each new block must be verified to achieve network consensus.

## Next up

In the [next section](./tech-background-blockchain.md), you get to dive further into the technological advances that led to blockchain being developed and some of the most important technical concepts, such as consensus, hash functions, and distributed ledgers.
