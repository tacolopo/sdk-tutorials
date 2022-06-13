---
title: "Blockchain Technology in More Detail - Smart Contracts"
order: 9
description: 
tag: fast-track
---

# Blockchain Technology in More Detail - Smart Contracts

A contract is commonly known as a _formalization of a relationship and/or transaction_. In common law a contract is understood as a "meeting of minds" - a meeting that entails an intricate play of trust building and relies on a legal system evolved through centuries with deep underlying traditions and understandings. Smart contracts cannot be understood synonymously to a common law contract.

<ExpansionPanel title="Code as contract?">

Joel Reidenberg was the first to introduce the term [**Lex informatica**](https://ir.lawnet.fordham.edu/cgi/viewcontent.cgi?article=1041&context=faculty_scholarship). This term is inspired by a recent tradition of conceptualizing smart contracts for legal scholars in the following sense: **"code is law"**. With it the paradigm of **"code as contract"** has been debated equally by legal scholars and smart contract developers.

![Code as contract](images/codeascontract.png)

Smart contracts are not equal to contracts in the realm of traditional, non-digital law. It is essential to differentiate smart contracts from existing contract forms and to be mindful of this to avoid unintended consequences and the transfer of misconceptions.

**Trust mechanisms** in traditional contract law are based on human agents, institutions with authority to enforce contracts, and the concept of intent. Smart contracts in contrast operate on trust mechanism based on their source code and rely on signalling transparency. Smart contracts, even if part of the digital world, are not free from public constraints, as well as under the influence of economic and societal norms.

</ExpansionPanel>

Essentially, smart contracts are automated agreements between contract creators and recipients written in code. They are baked into blockchains. Therefore, smart contracts are immutable and irreversible.

Virtual-machine blockchains like Ethereum addressed the demand for more programmability because, at the time, the options available for building decentralized applications (dApps) were limited. Before Ethereum introduced smart contracts, most developers would build on top of the complex and limited Bitcoin scripting language, or fork the Bitcoin codebase which was hard to work with and customize. With Ethereum's Virtual Machine (EVM), the state machine brought the possibility of interpreting Turing-complete programs, smart contracts. These contracts are suited for use cases like one-time events such as initial coin offerings (ICOs).

Smart contracts are a main application area in blockchain technology. Understanding what a smart contract is and how it can be deployed, as well as knowing what important aspects to keep in mind when developing and deploying a smart contract is of essence to understand blockchain technology’s possible areas of application and current developments.

## What is a smart contract?

<ExpansionPanel title="The beginnings of smart contracts">

Let us backtrack to the 1990's when Nick Szabo first used the term smart contract in his [*Formalizing and Securing Relationships on Public Networks*](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469). In his paper, Szabo introduces the possibility of efficiently transferring automated traditional contracts from common law into distributed protocols, especially in conjunction with digital transactions. He uses the example of a vending machine to break his proposition down into a real-life scenario.

The vending machine is a contract with bearer: those with a sufficient amount of coins can engage in an exchange and receive the goods offered without the need for an actual person to take the money and hand over the item. Smart contracts in blockchain serve that same purpose but are much more versatile.

<HighlightBox type="docs">

Feel free to take a closer look at Nick Szabo's paper [Formalizing and Securing Relationships on Public Networks. In: First Monday 2 (9)](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469).

</HighlightBox>

Szabo envisioned a world where contracts could be embedded in all kinds of property with value and be controlled digitally. The main argument is that software could minimize human involvement therefore lowering costs and creating a more efficient relationships by automating contract performance, monitoring, and enforcement. This is where the "smart" comes in: These type of contracts are "self-enforcing".

Since Szabo’s article, we use the term **smart contract** to describe the transfer from a common law contract to computer code or programs. It can be understood as a legally binding contract in digital form, or as others put it, a computerised protocol that executes the terms of a common contract.

Later, Szabo propsed a digital currency called BitGold. While the asset was never actually launched, this Bitcoin predecessor argumented in faovor of the use of smart contract as they could allow trustless transactions on the internet.

Smart contracts later resurfaced with **distributed ledger technology (DLT)**. DLT revitalised the debate surrounding their advantages and usefulness, as well as potentials for application of smart contracts.

</ExpansionPanel>

<!-- After video edit, include: Title: Smart contracts, URL:  https://www.youtube.com/watch?v=SirFQ4WIkDY -->

The term smart contract is often misused and/or misunderstood. There are two main concepts regarding smart contracts. Smart contract can be viewed either from **theoretical perspective** or in the **context of the Ethereum protocol**.

When taking a **theoretical approach**, the focus lies on two questions:

* What is a contract?
* And respectively, what is a smart contract?

When taking the more **practical approach** by looking at the concept of smart contracts in the **Ethereum protocol**, one focuses on the application of smart contracts. Ethereum is a special case because code storing and execution are possible on its distributed ledger network. Smart contracts in Ethereum are called this way because they partially achieve what Szabo envisioned as one can transfer and hold funds to secure and enforce predefined transactions and relationships.

<HighlightBox type="tip">

For more on smart contracts and Ethereum specifically, take a look at the [previous section on deployment patterns](deployment.md) and the included introduction to Ethereum.

</HighlightBox>

Just as Nick Szabo envisioned, the contract itself contains the enforcement of its terms as the execution of the agreement is clear at the moment it is deployed. This leads to **third parties** playing a much smaller role. Smart contract advocates expect that by automating contracting, human error is eliminated and with it, lower error rates can be expected. Intermediaries are expected to pay a secondary role in the future; it is often argued that they would only come into play when addressing performance evaluation and in dispute resolution. For now, smart contracts are mainly used in making fund transfers possible through the blockchain, but they could be used for all processes in which a reliable record is necessary.

Before diving further, let's define smart contracts in the context of blockchains.

You can understand smart contracts as automated agreements. Due to their automation, the need to resolve disputes through legal means is expected to be reduced.

Simplistically speaking, a smart contract is a coded "if-then" statement. **Smart contracts** are computer protocols that are:

* **Self-executing:**
* **Self-enforcing:**
* **Self-verifying:** 

As such, smart contracts allow developers to write custom logic on blockchains.

Smart contracts are account holding objects that contain code functions, usually deployed on blockchains that have a virtual machine (VM) as part of their application layer. They are generally developed with specific programming languages, which are interpreted by the underlying VM. Developers are limited to the programming language of the VM and can only choose from a limited set of functions for their cryptographic operations.

At the same time, smart contracts, like in Ethereum, are all run by the same virtual machine. Thus, they share the same underlying environment and compete for resources. This can severely restrain performance. Even if the state machine is able to split in multiple subsets with for example sharding, the contracts still need to be interpreted by a VM, which would limit performance.

## Pros and cons of smart contracts





<HighlightBox type="reading">

* [CapGemini Consulting (2016): Smart Contracts in Financial Services: From Hype to Reality](https://www.capgemini.com/consulting/wp-content/uploads/sites/30/2017/07/smart-contracts.pdf)
* [Cointelegraph: What are smart contracts in blockchain and how do they work?](https://cointelegraph.com/ethereum-for-beginners/what-are-smart-contracts-a-beginners-guide-to-automated-agreements)
* [Cosmos SDK Documentation: Application-Specific Blockchains](https://docs.cosmos.network/master/intro/why-app-specific.html)
* [Getting Smart (2016): Contracts on the Blockchain](https://www.iif.com/Publications/ID/582/Getting-Smart-Contracts-on-the-Blockchain)
* [Shadab, H. (2014): What are Smart Contracts, and What Can We do with Them?. In: Coincenter.](https://coincenter.org/entry/what-are-smart-contracts-and-what-can-we-do-with-them)
* [Szabo, N. (1997): Formalizing and Securing Relationships on Public Networks. In: First Monday 2 (9)](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469)


</HighlightBox>




# Legal Considerations




--> add more on limitations and difficulties and sub-section on Gas


## Next up
