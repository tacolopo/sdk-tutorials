---
title: "Technical Background of Blockchain Technology - Ledgers"
order: 4
description: Blockchain - a distributed ledger
tag: fast-track
---

# Technical Background of Blockchain Technology - Ledgers

<HighlightBox type="note">

There are many different ways to look at blockchain. For a complete view and a thorough understanding, do not restrict yourself to one definition but keep in mind the various different conceptualizations of this technology.

</HighlightBox>

It is time to dive into how blockchain and the concept of a distributed ledger are linked.

<ExpansionPanel title="Open Systems Interconnection (OSI) model">

The Open Systems Interconnection (OSI) model, developed by the International Organization for Standardization, is a generalized seven-layer architecture concept for communication in a telecommunications or computing system. Each layer represents a particular functionality:

* **Layer 1 - the physical layer:** responsible for the physical connection between devices.
* **Layer 2 - the data link layer:** responsible for message delivery between nodes.
* **Layer 3 - the network layer:** responsible for data transmission between devices in different networks, by dealing with packet routing to determine data routing paths and addressing to identify the sender and receiver.
* **Layer 4 - the transport layer:** responsible for end-to-end delivery of messages, acknowledgments of successful data transmissions, and re-transmissions of data in case of errors, by relying on services from the network layer and providing services to the application layer.
* **Layer 5 - the session layer:** responsible for establishing a connection, maintaining and terminating sessions, and for ensuring synchronization with checkpoints.
* **Layer 6 - the presentation layer:** responsible for translation, encryption, decryption, and compression of data.
* **Layer 7 - the application layer:** implemented by the network's application and responsible for interacting directly with the application.

Whereas layers 1 to 3 are hardware layers, the transport layer (layer 4) is the heart of the OSI, and layers 5 to 7 are software layers.

Want to review the OSI model in more detail? Take a look at this [overview from GeeksforGeeks](https://www.geeksforgeeks.org/layers-of-osi-model/).

</ExpansionPanel>

In the OSI network model fashion, blockchain technology can be broken down in the following manner:

![Blockchain layers](/onboarding/1-introduction-blockchain/images/blockchain-layers.png)

Transactions are recorded on the _transaction ledger_. A **ledger** is _a book or file that records and totals economic transactions_.

After you are comfortable with both transactions and ledgers, you will better understand the relevance of ledgers for blockchain technology.

## Transactions and ledgers

A **transaction** is _an **atomic event**_. The word "atomic" comes from the Greek for _indivisible_. In the present context, it means that the components of a transaction will make no sense in isolation.

If the word "transaction" conjures up a financial transaction in your mind, this is indeed appropriate. A single transaction might look like the following:

* Reduce account A by $10.
* Increase account B by $9.
* Increase account C by $1.

It is easy to understand that this transaction is a payment. The payment is comprised by three components, which must remain conjoined for it to be coherent. _Why is this?_

If you were told only "Reduce account A by $10", you could rightfully ask: where did the $10 go? Both the following instructions above are required to explain where the $10 went. This is what is meant by transactions being atomic: you need every component of the transaction to exist for it to make sense, and therefore, for it to take place.

Transactions contain an **arbitrary set of data** depending on their purpose and structure. For instance, financial ledgers usually contain the following data:

* Sender
* Recipient
* Amount
* Credit/debit
* Reference

Processing each transaction in the ledger enables us to derive all kinds of meta-information, such as the number of transactions, activity per account, and individual account balances. Account balances are abstract representations of a list of transactions.

If the word "transaction" also reminds you of database management systems, this too is appropriate. Transactions happen in databases too. For instance, technology permitting, a single transaction might look like this:

* Charge customer $10.
* Ship one widget.
* Add one en-route shipment for the customer.
* Reduce widget stock by one.

In the context of blockchain, a **transaction** is _any atomic event that is allowed by the underlying **protocol**_. They are recorded as they are proposed by the "lottery winner". The order of transactions is extremely important here, and is one of the reasons why blockchain protocols are designed the way they are.

To better understand the significance of the ledger order, imagine the following situation:

* You have an account balance of `3`.
* You transfer `3` to member A and `3` to member B in quick succession.

If the ledger is not **well-ordered**, both transactions could be issued even though your account balance would be insufficient. The correct ordering of execution prevents "double-spending" like this. To get a picture of the state of accounts at any given moment, all transactions until that point in time have to be added up. One by one, each transaction record alters the state of the ledger.

<ExpansionPanel title="Ledger keeper and trusted authority">

Traditionally, ledgers are maintained by a trusted authority called a **ledger keeper**. Ledger keepers include insurance companies, banks, tax collectors, and many other entities.

![Trusted authority controls entries to the ledger](/onboarding/1-introduction-blockchain/images/authority.png)

Carrying out a transaction in a system with trusted authorities entails the following steps:

1. Identify yourself to the ledger keeper.
2. Request data, like your account balance, from the ledger keeper.
3. Request the recording of a new transaction.
4. The ledger keeper checks the validity of the transaction: do you have sufficient balance? Is your account active, inactive, or frozen?
5. The ledger keeper enters the transaction into the ledger and informs other ledger keepers of the transaction if necessary (for example, if the transaction's recipient has an account with another bank).
6. The recipient can now identify themself to their ledger keeper and ascertain their updated balance.

This system works well, as long as ledger keepers can be trusted, or mechanisms are in place to ensure the ledger keeper's compliance.

</ExpansionPanel>

The advantages and disadvantages of traditional ledgers compared to decentralized ledgers like blockchains are highly dependent on the degree of centralization of authority.

![Ledger types - advantages and disadvantages between traditional/centralized ledgers and decentralized ledgers](/onboarding/1-introduction-blockchain/images/table-ledger-type.png)

In a highly centralized traditional ledger, data reliability, information control, execution of transactions, and consensus on transactions depend on the trustworthiness of the central authority. Participation and transaction execution are restricted by oversight and/or intermediation in centralized ledgers, usually requiring third-party involvement.

Further, power asymmetries favoring the central authority can lead to deviant behavior and/or unintended consequences. For example, an authority in charge of updating the ledger could alter it maliciously. Centralized, "traditional" ledgers are also more prone to be affected by malicious attacks due to their centralized point of failure and data storage compared to distributed ledgers.

On the other hand, distributed ledgers have a higher degree of transparency and security, as well as lower transaction time and transaction costs for participants.

<HighlightBox type="info">

There is reason to believe that the development of the Bitcoin protocol, the first successful implementation of blockchain technology, was in part motivated by the financial crisis in 2008. The financial crisis shook overall trust in traditional financial institutions and mechanisms, including the functioning of central authorities and, therefore, their _raison d'être_.

Blockchain's decentralization can be seen as a way to avoid unintended results due to moral hazards and asymmetric information.

</HighlightBox>

## Blockchain as a distributed ledger

To understand blockchain as a distributed ledger, remember:

* A **transaction** is an atomic event.
* A **blockchain** is an ordered list of all transactions since inception.

Banks are especially prone to identify blockchain as a distributed ledger, as this definition aligns with their world models. Traditional financial institutions have realized the utility of distributed ledgers both as a threat to their centralized authority and as an opportunity to lower costs, decrease transaction times, and facilitate settlement processes, not to mention seeing cryptocurrencies as a new investment opportunity.

Instead of each bank relying exclusively on their table of accounts in their siloed (SQL) databases, blockchain could enable them to consolidate their tables of accounts and facilitate transactions between accounts. Without the shared nature of blockchain, inter-bank transactions are done through netting and settlement via a central bank or corresponding accounts. The non-blockchain process is more expensive and time-consuming, especially if the banks are located in different countries.

![Distributed Ledger](/onboarding/1-introduction-blockchain/images/blockchain-as-distributed-ledger.png)

In the elegant blockchain solution, a single transaction updates separate tables of accounts for the entire network (of all participating banks). For this reason, banks see blockchain as an opportunity to reduce operational costs by distributing a common ledger between their peers.

## Next up

To better understand blockchain technology and how an immutable ledger is created, dive into the [cryptographic fundamentals of blockchain technology](./cryptographic-fundamentals.md).
