---
title: "Blockchain Technology in More Detail - Smart Contracts"
order: 9
description: 
tag: fast-track
---

# Blockchain Technology in More Detail - Smart Contracts

A contract is commonly known as a _formalization of a relationship and/or transaction_. In common law a contract is understood as a "meeting of minds" - a meeting that entails an intricate play of trust building and relies on a legal system evolved through centuries with deep underlying traditions and understandings. Smart contracts cannot be understood synonymously to a common law contract.

<ExpansionPanel title="Code is law?">

Joel Reidenberg was the first to introduce the term [**Lex informatica**](https://ir.lawnet.fordham.edu/cgi/viewcontent.cgi?article=1041&context=faculty_scholarship). This term is inspired by a recent tradition of conceptualizing smart contracts for legal scholars in the following sense: **"code is law"**. With it the paradigm of **"code as contract"** has been debated equally by legal scholars and smart contract developers.

![Code as contract](images/codeascontract.png)

Smart contracts are not equal to contracts in the realm of traditional, non-digital law. It is essential to differentiate smart contracts from existing contract forms and to be mindful of this to avoid unintended consequences and the transfer of misconceptions.

**Trust mechanisms** in traditional contract law are based on human agents, institutions with authority to enforce contracts, and the concept of intent. Smart contracts in contrast operate on trust mechanism based on their source code and rely on signalling transparency. Smart contracts, even if part of the digital world, are not free from public constraints, as well as under the influence of economic and societal norms.

</ExpansionPanel>

Essentially, smart contracts are automated agreements between contract creators and recipients written in code. They are baked into blockchains; smart contracts exist across a distributed, decentralized networks (i.e. blockchains). Therefore, smart contracts are immutable and irreversible. These contracts allow for the execution, enforcement, and verification of agreements among anonymous parties, without needing a central authority, legal system, or external enforcement system. 

Virtual-machine blockchains like Ethereum addressed the demand for more programmability because, at the time, the options available for building decentralized applications (dApps) were limited. Before Ethereum introduced smart contracts, most developers would build on top of the complex and limited Bitcoin scripting language, or fork the Bitcoin codebase which was hard to work with and customize. With Ethereum's Virtual Machine (EVM), the state machine brought the possibility of interpreting Turing-complete programs, smart contracts. These contracts are suited for use cases like one-time events such as initial coin offerings (ICOs).

Smart contracts are a main application area in blockchain technology. Understanding what a smart contract is and how it can be deployed, as well as knowing what important aspects to keep in mind when developing and deploying a smart contract is of essence to understand blockchain technology’s possible areas of application and current developments.

## What is a smart contract?

<ExpansionPanel title="The beginnings of smart contracts">

Let us backtrack to the 1990's when Nick Szabo first used the term smart contract in his paper [Formalizing and Securing Relationships on Public Networks](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469). In his paper, Szabo introduces the possibility of efficiently transferring automated traditional contracts from common law into distributed protocols, especially in conjunction with digital transactions. He uses the example of a vending machine to break his proposition down into a real-life scenario.

The vending machine is a contract with bearer: those with a sufficient amount of coins can engage in an exchange and receive the goods offered without the need for an actual person to take the money and hand over the item. Smart contracts in blockchain serve that same purpose but are much more versatile.

<HighlightBox type="docs">

Feel free to take a closer look at Nick Szabo's paper [Formalizing and Securing Relationships on Public Networks. In: First Monday 2 (9)](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469).

</HighlightBox>

Szabo envisioned a world where contracts could be embedded in all kinds of property with value and be controlled digitally. The main argument is that software could minimize human involvement therefore lowering costs and creating a more efficient relationships by automating contract performance, monitoring, and enforcement. This is where the "smart" comes in: these type of contracts are "self-enforcing".

Since Szabo’s article, we use the term **smart contract** to describe the transfer from a common law contract to computer code or programs. More specificallz, smart contracts are defined by Szabo as transaction protocols executing the terms of a contract as understood in common law. It can be understood as a legally binding contract in digital form, or as others put it, a computerised protocol that executes the terms of a common contract.

Later, Szabo propsed a digital currency called Bit Gold in 1998. While the asset was never actually launched, this Bitcoin predecessor argumented in faovor of the use of smart contract as they could allow trustless transactions on the internet.

Smart contracts later resurfaced with **distributed ledger technology (DLT)**. DLT revitalized the debate surrounding their advantages and usefulness, as well as potentials for application of smart contracts.

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

> A **smart contract** represents _a computer protocol intended to provide a self-executing, self-enforcing, and self-verifying contract._

Simplistically speaking, a smart contract is a coded "if/when-then" statement executed when a trigger condition is fulfilled - as soon as pre-determined terms and conditions are met. **Smart contracts** are computer protocols that are:

* **Self-executing** 
* **Self-enforcing** 
* **Self-verifying** 

As such, smart contracts allow developers to write custom logic on blockchains.

<HighlightBox type="info">

Below you can find a longer explanation of what is meant when one says: "smart contracts are self-executing, self- enforcing, and self-verifying."

</HighlightBox>

Smart contracts are account holding objects that contain code functions, usually deployed on blockchains that have a virtual machine (VM) as part of their application layer. They are generally developed with specific programming languages, which are interpreted by the underlying VM. Developers are limited to the programming language of the VM and can only choose from a limited set of functions for their cryptographic operations.

At the same time, smart contracts, like in Ethereum, are all run by the same virtual machine. Thus, they share the same underlying environment and compete for resources. This can severely restrain performance. Even if the state machine is able to split in multiple subsets with for example sharding, the contracts still need to be interpreted by a VM, which would limit performance.

### Smart contracts are self-executing

Smart contracts automate the established "contractual" terms - as specified in the code. These contracts carry out the terms they are programmed to execute as the code controls the implementation of the agreement.

Generally speaking: after the contract is coded, it is deployed. As soon as the trigger, the terms and conditions that need to be fulfilled, occurs, the code of the smart contract is executed. This does not require the developer to set any type of flag or any type of further interaction with the smart contract. The contract itself is coded in a way that it can run and execute its operations as coded **without** any further involvement of a user or developer. For this reason, smart contracts are viewed as self-executing.

<HighlightBox type="note">

As we are in realm of blockchain networks, the action a smart contract executes is conducted through a transaction.

</HighlightBox>

The process of forming self-executing contracts is facilitated through the use of protocols and user interfaces.

### Smart contracts are self-enforcing

Since smart contracts are coded to be self-executing, they also contain the enforcement of their terms: the stipulated actions are automated and thus, self-enforcing.

Furthermore, like other forms of software, smart contracts tend to do precisely what they are programmed to do. This can, at times, stand in stark contrast to what the author of a contract intended the contract to do. Smart contracts require that contingencies and outcomes are specified in great detail to ensure proper functioning as well as to prevent unintended consequences - in a common law setting, these would be disputed in court. The self-enforcing nature of smart contracts implies that unintended outcomes may be non-trivial. Importantly, smart contracts do not include the concept of intent or context.

Smart contracts cannot be changed once deployed as immutability in blockchain networks also holds for smart contracts. This makes the self-enforcing stipulations transparent but can also lead to potential risks because they are self-enforcing: once a contract is deployed and the trigger is met, the code is executed without the possibility of interference - even by the contract's author.

### Smart contracts are self-verifying

Since the smart contracts exist on the blockchain, as soon as the contract terms are met, transactions are automatically carried out and data is recorded securely as it cannot be altered nor deleted. Thus, there is no need for verification outside the contract - assuming the code leads to no unintended consequences.

The smart contract itself can verify proper execution with the conditions specified in the code because all actions are conducted in form of a transaction, and these transactions are trackable and permanent.

In the end, the immutability of blockchain networks combined with the automation of a deployed smart contract lead to smart contracts being self-verifying.

## Pros and cons of smart contracts

Now that you have a solid understanding of what a smart contract is, a closer look at the benefits and potential disadvantages of smart contracts is advisable.

Once a triggering condition is met, a smart contract immediately begins executing. The smart contract is completely automated as it is self-executing and completely digital. This makes smart contracts **faster, more efficient, and accurate** compared to only partly-automated or completely manual processes. The potential for errors due to manual data and document handling is eliminated with the automation of contracts. In comparison with common law contracts, smart contracts are more time-efficient. They do not have to go through the different stages of contracting, which include intermediaries and are determined by the legal framework that applies. Smart contracts are often viewed as an opportunity to bypass the legcay of centralized inefficiencies.

In addition, there is no need for third party involvement  as smart contracts are deployed in blockchain networks and all transactions on the network are recorded in a immutable, tamper-proof, and shared ledger. This leads to **increased trust** in the contract itself due to the **transparent and immutable** nature of (public) blockchain networks. Contract compliance and enforcement are completely independent of any third parties and ruled by the smart contract code.

The potential for automation combined with the reduced need for intermediaries results in **cost-effectiveness**. Involving intermediaries, third parties assisting in a process, does not only increase the amount of time a process requires but also the amount of costs for that process to be conducted due to additional fees, for example. The reduced role of intermediaries translates to lower fix costs and fees, as well as faster transaction times.

Smart contracts are **secure** because the blockchain's ledger is encrypted and all records are interconnected cryptographically to establish immutability. A malicious participant would have to alter the entire chain to change a single detail on the ledger and then get the new version successfully approved through the validation consensus. This prevents tampering and makes it very difficult to hack a blockchain network and of course, also a smart contract running on a blockchain.

Higher **precision/accuracy** is often also named when talking about smart contract benefits. A smart contract is more flexibel compared to a common law contract because:

* Smart contracts do not have to be compliant to a legal framework - one could opt for legal compliance but one does not have to.
* Smart contracts are only limited by their code and the network they are running in - they are built with "if-then" statements, which makes a great number of operations for execution possible.

It can account for any level of detail in its code and thus, for different scenarios. The contract will execute as defined in the code. Unlike common law contracts, smart contracts are not subject to interpretation and exist without context. As long as the contract is coded taking into account unintended consequences and with an eye to detail when it comes to potential loopholes, the **potential of a deviating contract implementation is minimized**.

The characteristics that make smart contracts actractive at the same time can also be seens as causing the shortcomings of smart contracts.

The self-execution of smart contracts leads to automation but also makes it **impossible to change** the process case-by-case. Thus, before implementing a smart contract code-wise, developers should think about the following questions:

* What is the general process flow that will be implemented by the code?
* What is the trigger to start execution?
* How is the execution be enforced by the code?
* What conditions need to be met to verify proper functioning?
* What are potential unintended consequences? And, how could they be mitigated?
* Are there any loopholes that could be exploited?

As code is also written by a human being, **human error** might not be an issue in reagrd to execution but even more so when the code is being written. Errors in smart contracts can lead to the contract wrongly executing and having unintended consequences. This type of errors can be costly and would require optimizing the code again and deploying the smart contract with updates to the chain a second time as most protocols do not have a mechanism to update a smart contract. Such errrors in the code become extremely costly when they lead to a loophole, which could be **exploited** by malicious nodes.

Another disadvantage of relying completely on smart contracts relates to **regulatory clarity**. Legal certainty is an issue in many use cases when it comes to blockchain technology. Although regulatory agencies and institutions have worked on adapting to the changed technological landscape of the 21st century, there is still much that remains in grey areas. For example, smart contracts are not legally-binding contracts. So they can represent a contractual relationship but are not one per se. When it comes to transactions on blockchain networks of cryptocurrencies and tokens holding value, general regulation, especially taxation, has also been a pressing issue. This makes any type of litigation difficult. It can be assumed that regulatory clarity will be achieved in the upcomming years as the technology is still maturing and so is the legal framework.

Smart contracts are limited when it comes to their functionality. They exist in a blockchain universe. Therefore, the smart contract can only base its execution on the information and data included on-chain. For any **external data/information**, an **oracle** is needed.

<HighlightBox type="info">

Similar to how an oracle in ancient times provided insights and counsel based on its predicitions, an oracle in blockchain is a third-party service providing information to smart contracts and other on-chain mechanisms from outside the blockchain. Oracles can also be used to provide off-chain services with information from the chain.

To be able to fulfill its role, oracles query, verify, and authenticate data sources. This is often achieved with an API endpoint.

</HighlightBox>

Relying on an oracle can be problematic as the quality of data and reliability is determined by the oracle. If you pick the wrong oracle, you might end up with faulty or even maliciously-intended, wrong data. This holds especially through for oracles based on a single source of truth. As with centralization in general, such a single source of truth could be attacked or altered by those managing the data source. Thus, using a decentralized oracle that queries multiple data sources, helps counter the issue of potentially unreliable data.

<HighlightBox type="note">

As oracles are not part of blockchain networks but external to them, the information provided is not part of the blockchain's consensus and does not benefit from the security architecture of blockchains.

</HighlightBox>

Lastly, a persisting challenge in blockchain environments remains **scalability**. Sometimes scaling by adding more machines to a network is done to counter scalability issues. With more machines, more nodes can be accepted and then participate in state replication and consensus. This only helps counter the issue to a certain point.

<HighlightBox type="info">

You will dive deeper into scalability and the scalability issue in blockchain technology, in the [Introduction to Cosmos](2-introduction-cosmos/introduction.md). The scalability issue is one of the main pressure points Cosmos envisioned to address.

</HighlightBox>

The amount of resources available for smart contract execution are limited to the network the contract is running on. All operations in a blockchain that are to be conducted, share the pooled network's resources. This can lead to a very tight competition after a certain network size is reached. Furthermore, transaction finality in blockchain networks can be a challenge. Some use cases require transaction finality and thus, are not suited to public blockchain networks that allow forking. Common challenges of blockchain technology are often also common issues in smart contracting.


Vertical scalability: scaling by improving the network's components to increase its computational power. When "scaling up", the network can accept more transactions and any activity that modifies the state.
- difficult to change --> almost imposible, need to deploy new contract --> errors can be time-consuming and expensive to counter
- Loophole possibility
- How much 3rd party is really eliminated
- privacy
- performance issues
- Code bugs + lack of context
Reliance on the Code


 



<HighlightBox type="reading">

**Further readings:**

* [CapGemini Consulting (2016): Smart Contracts in Financial Services: From Hype to Reality](https://www.capgemini.com/consulting/wp-content/uploads/sites/30/2017/07/smart-contracts.pdf)
* [Cointelegraph: What are smart contracts in blockchain and how do they work?](https://cointelegraph.com/ethereum-for-beginners/what-are-smart-contracts-a-beginners-guide-to-automated-agreements)
* [Cosmos SDK Documentation: Application-Specific Blockchains](https://docs.cosmos.network/master/intro/why-app-specific.html)
* [Getting Smart (2016): Contracts on the Blockchain](https://www.iif.com/Publications/ID/582/Getting-Smart-Contracts-on-the-Blockchain)
* [IBM: What are smart contracts on blockchain?](https://www.ibm.com/topics/smart-contracts)
* [Shadab, H. (2014): What are Smart Contracts, and What Can We do with Them?. In: Coincenter.](https://coincenter.org/entry/what-are-smart-contracts-and-what-can-we-do-with-them)
* [Szabo, N. (1997): Formalizing and Securing Relationships on Public Networks. In: First Monday 2 (9)](https://journals.uic.edu/ojs/index.php/fm/article/view/548/469)

</HighlightBox>

## Next up

You mastered the overview of smart contracts, next you can dive into an introduction to the term "crypto economy" and 
