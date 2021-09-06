# BC-1.1.7 Distributed decentralized ledgers 

The centralized entities in control and responsible for the trust and efficiency are also the root of the downside. So, suppose we can remove that centralized entity. In that case, we can reduce these risk categories significantly. Possibly even eliminate them in the long run! So, therefore, the less centralization, the more these three downsides decrease.

But we have never been able to do transactions with each other globally without using an intermediary. History has shown us that we can do peer-to-peer transactions without an intermediary, but that was always on regional or local scales. It is all about trusting the other party, which was doable on a local scale in the past. But we now operate globally, which keeps increasing thanks to new technologies like digitalization and the internet. But we don't trust other people and need the confidence to transact. 

In other words: if I don't know you, if I can't trust you, we both appoint someone that we can trust. Hence, the TTP entered the scene and provided trust. You are probably familiar with the model: that person or entity will manage our transactions for a small fee. And other benefits that arise from controlling the ledger! The role of the TTP resulted in more efficient transactions. Otherwise, if I don't trust you as my peer, I would have needed to check on you, do a background check, etc. By appointing a TTP, we bypassed this process, creating a more efficient way and, unfortunately, initiating/enabling centralization of power and introducing the world to the three main risk categories.


>💡 And here is where decentralization kicks in. The more power spreads over multiple entities, the more decentralized the ledger is. Decentralization removes the single controlling entity. It opens up the ledger for all. Not only to access and see the data (called a public ledger) but also open for all to record transactions (called a permissionless ledger). In a decentralized ledger, there is no entity in control. So the less power lies with one entity, the more decentralized it is. Therefore, increasing decentralization means decreasing power for one single entity.

Keep in mind for now that we removed you as the bookkeeper from the friend example. No hard feelings. But how do we record these transactions then? The exact details on how we will explain later. 

<blockquote style="border-color: #ff0bac"> ❓ Explain in your own words the image below? [Check answers🦉]( https://twitter.com/JordiJansen101/status/1431295756925812738?s=20)
</blockquote>

![Overview distributed systems](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level1/BC-1-1-6-problems-with-centralized-ledgers-image1.png)
[Source](https://en.wikipedia.org/wiki/Distributed_economy) 


## So, what does distributed mean? 

>💡 Distributed implies that the ledgers are "distributed" (spread out) across certain regions. So instead of being in just one location, a distributed ledger is spread out over multiple areas. For example, across the globe or certain parts of the country. Or in certain digital places. 

Imagine once more the example where you are the TTP entity, registering your friends with their transactions. Suddenly, it is not only you recording the transactions, but let's say you copied your DNA and cloned yourself 100 fold. So there are 100 versions of you. What a world that would be…😉. All of you are still in the room but spread across the sidelines of the room. So in every corner, there are a bunch of you's. You are recording the transactions, which don't change. Your friends and their transactions are not influenced by the fact that there are now 100 bookkeepers instead of one. This new version of the ledger, where you have spread out over 99 other places along the sidelines, is what we call the distribution—a distributed ledger.

>💡 So, a distributed ledger means that multiple entities are recording the transactions. We call these entities " nodes " in the blockchain realm, viewing and presenting the transactions, the 100 versions of you, we call "[nodes](https://en.wikipedia.org/wiki/Node_(networking))" in the blockchain realm. The entities recording transactions are called ["miners"]( https://www.danielefavi.com/blog/what-is-the-mining-who-is-the-miner) in the blockchain realm. So miners [validate and record transactions](https://www.youtube.com/watch?v=GmOzih6I1zs). They check if every transaction is valid, and nobody cheats. Nodes collect and check miners' work and update the ledger by adding the page to the book. In other words: the node is the book, the miner writes the pages. 

 So multiple miners recording and nodes are maintaining the ledger. If one of your friends wants to know what the current truth is / the current state is, "who owns what", they need to ask one of these versions of you. They act as nodes spread across the sidelines of the room. For a great comparison with Harry Potter books, read [blockchain for dummies – gentle intro]( https://www.danielefavi.com/blog/blockchain-for-dummies-a-gentle-intro/).

Distribution means that you make a copy of yourself and spread it across the room. Or, in the real world, spread it across the globe. Decentralization means that you make a copy of yourself and remove yourself as the sole ledger controlling entity. It won't be only you recording the transactions, but other people can join as a node. So not only will there be multiple variances of you, recording and maintaining the ledger, but other people as well. So not only are you in control, but the other equally maintain the ledger as well. So, for example, you can ask your family members to join and check the ledger, which would still partly be centralized. Or you could let everybody join and start recording and updating the ledger. That would be more of a decentralized ledger because you are not the only one in control anymore. In that case, you all have equal rights. You are all responsible for the ledger, maintaining the representation of the current state of truth (who owns what at this moment in time).

Ladies and gentlemen...
Take a few seconds here and enjoy...
...you know now what a distributed, decentralized ledger is and what it does. 
**It records transactions without the use of a trusted third party!**


**Check, you now got that important concept in the pocket :-)!**
You understand what it does and why it is beneficial to remove the TTP, but how does it exactly work? How do we reach an agreement on what transactions are valid and when to record them? How do we achieve a" consensus" of the current "state of the truth"? Reaching agreement isn't easy between the 100 versions of myself, which is still centralized—but even more complicated between family members, which is partially decentralized. Reaching decentralized consensus was impossible, until 2008, to do in a fully open fashion where everybody could join. 


>💡 Note that consensus means nothing more than the parties reaching an agreement about the status of the ledger. As you know, it aims to mimic the real world. It seeks to reflect the truth. So when you have a consensus between all the parties, you all agree. "This is the truth" / "this is the current state of truth we are in now". 

In other words, if many entities are maintaining the ledger, we all need to be sure that we are working with the same state and data. So we aren't in a room with only 10 of your friends. We replace the room and maintain a ledger for the entire world. People still transfer value between each other. The only thing that changed is we went from local to global transactions (and from 10 to 7,500,000,000).

## The Bitcoin example
The above might sound strange, but this network of open ledger technology is running since 2009 and is called Bitcoin. It is a distributed, decentralized ledger that is maintained by multiple entities spread across the world. Miners record the transactions, nodes will tell you the state of the book (where are we in the story / who owns what bitcoins). The Bitcoin blockchain is maintained by 10,000 nodes spread across the globe. 

![Node distribution](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level1/BC-1-1-6-problems-with-centralized-ledgers-image2.png)
[Source Bitfalls – Node Distribution](https://bitfalls.com/wp-content/uploads/2017/11/01-4.png)

If you run a decentralized ledger across the globe, you encounter several new problems. You can imagine that it takes time to reach a consensus on transactions. And what if you don't get a consensus at all? One node could see a transaction in South Africa first and one in Russia later. Another node could see Russia first and South Africa later. Both nodes have a different sequence and, therefore, a different story. Ergo: no consensus. Many more things can go wrong. You need to co-operate with others that you can't trust. But without a coordinating party that provides the trust. You do need a set of rules because you do not know what transactions are 'valid' or 'not valid' without rules. So, you need to replace this trusted party with a new set of rules. You need to create a game of trust with the variables and incentives in order. Which would mean that playing the game would benefit you as a player, and cheating would hurt players. And that is what Satoshi Nakamoto solved in 2008 and tested in production in 2009. A distributed decentralized ledger with a new set of rules for players across the world to corporate. Not a TTP but mathematical rules, also known as a 'protocol'. Not magic, but math and ledgers. 

So, by removing a controlling third party, we create a new problem: How do we reach a consensus? Who determines what the truth is? This is the reason we created a protocol, which all the nodes need to follow. You can see it as a sort of checklist of rules. We call this in a fancy way the "consensus algorithm". What this means is that all the miners have agreed to the protocol. Every miner and node knows what is valid and what is not. Incorporated compliance before registering a transaction! If you download the Bitcoin blockchain, which is an application, you download the ledger. You download the Bitcoin book, the story, with a history of all the transactions. But also the set of rules, which are automatically incorporated in the software. Every node installs that set of rules in the software. Imagine this as a real-life physical bookkeeper. You would have the ledger in one hand and the checklist with all the rules in the other. Every new page the miners present to you as bookkeepers will be checked with the protocol before adding it to the book. Every bookkeeper keeps the same checklist, the same consensus protocol, so all the pages abide by the same rules. See here the regulations with a description of different topics that are agreed upon. If you can't wait for the next level, where we discuss the protocol in more detail, here is a glimpse already. 

>💡 So, there is not one party determining the rules. There are no external and internal rules anymore. There are just rules between all these nodes across the world. Like mentioned: we call this the consensus protocol. It is algorithmic, which means something like math-based. This is an important distinction because it is not human-based. We removed the TTP with human flaws and repressive audits. And replaced it with a formula with mathematical precision and preventive checks before entering something in the ledger. It determines what transactions are valid and how to reach a consensus with others. This has all kinds of benefits, but more about that later! 

So once more, to be sure: you are removed, no more TTP. We each do the validation work individually instead of only you. And we check each other's work because we each use the same set of rules. So I think it suffices to say that this consensus protocol plays a crucial role in distributed ledger technology. 

<blockquote style="border-color: #ff0bac"> ❓ If you check the distribution of nodes across the world, what do you notice? [Check answers🦉]( https://twitter.com/JordiJansen101/status/1431297821777567750?s=20)
 
 </blockquote>

## A high-level overview
What happens when entities transfer value, for example, person A to person B? When a transaction occurs, the ledgers need an update because there is a new state. When we mention 'state', we mean who owns what. Miners individually construct the transaction, independently (!!), on a new page. This means that when a miner finishes a page with recent transactions, the miner presents the page to the nodes. If the nodes all agree, the page is added to the book. A.k.a. the block (page) to the blockchain (book). And the show starts all over again with the miners creating the next page (for which they receive rewards). Finally, everybody (nearly) simultaneously turns on to the new page and starts recording recent transactions.

Note: as soon as one of the miners finished a page, they present it to all the nodes. When they are finished, they will show their page: "hey nodes on the other side of the world, I am finished". This also tells the other miners that they can stop their work. You did the job already. The only thing the others need to do on the other side of the world is validating your page. They validate by using the protocol/validation checklist: "did this miner correctly recorded all the transactions? If not, don't accept the page. If yes, do accept". 

This continuously keeps on happening. It is as easy as that. Miners will keep on creating pages because they are rewarded when their page is included in the ledger. Also known as the mining race. As soon as the first miner finishes the page, they will present it to the nodes. After that, the other nodes will update their ledger. And they will start all over again. Meanwhile, people keep on transacting, and the miners select from their transactions and record them in the ledger.

No single entity, no TTP determining what the status of the ledger is or what valid is. Everybody can become a miner and record transactions according to a shared set of rules (protocol). So, a TTP needs to follow internal and external constraints. A decentralized ledger abides by a consensus protocol. 

>💡 It is a shift in trust, from centralized trust to ecosystem protocol trust. Blockchains can be seen as a ledger + protocol + ecosystem of entities. The blockchain provides trust, not the TTP. We rearranged trust!! We always needed a centralized TTP in a closed-off environment. In a decentralized world, we use a shared protocol in an open environment. This enables us to do peer-to-peer transactions (direct from one person to another person) without an intermediary, allowing us to create entirely new infrastructures! 



>💡 We currently use peer-intermediate TTP – peer in older systems. This new way of recording is not only more cost-efficient. It also allows the peers to own their data, with no TTP to take all the profit. Imagine all the applications on your phone, but without the intermediaries. So, an Uber application without Uber between you and the cab driver. Or whatsapping without Mark and where the profits of advertising flow to you. For the first time in human history, the ledgers not only stand between us, it is actually from us. Owned by nobody, owned by everybody. We rearranged trust and now have, just like the air we breathe, also the ledger as a Common.

<blockquote style="border-color: #ff0bac"> ❓ What is a Common? </blockquote>

<blockquote style="border-color: #ff0bac"> ❓ Far from perfect, but an exciting development is receiving rewards for surfing the web. Go check out the Brave Browser and see how they reward users with tokens. They are still very much centralized and not always act ethically, but it provides insight into how the new internet could look. What applications or ideas would you like to see improved with these new possibilities? </blockquote>

The final slide from this class gives you a decent overview of centralized, decentralized, and distributed ledgers. Read the source from Vitalik. If you didn't fully understand what we just explained, re-watch the clip or read the source. Or ask us for help via the Twitter Thread or Discord! It is not a problem if you don't fully grasp the idea. We will discuss all of the details in upcoming classes. 

KABOOM!
Take a second here…

>💡 For the first time in human history, we can actually send value to the other side of the world without trusting an intermediary party. Directly connecting me to persons in China, Brasilia, New Zealand, wherever you are from. I can transfer value globally, and as you know, value can be anything. This is insane and opens up many new possibilities. This value, this data we send back and forth, can be programmed. It can represent physical things, but it can also automatically follow a fixed programmed route ("smart contracts"). Later on, we will show you that we can do all kinds of awesome things with "transferrable value".

A long class…sorry for this…but an important one. Take your time to digest everything we just told you. We will wait for you in the next class. There we will describe the problems you encounter when a ledger is decentralized and distributed 😊 

## Portfolio assignment 1.1.7 Distributed decentralized ledgers 
We touched upon what distribution and decentralization mean in the context of ledgers. Investigate the level of distribution and decentralization of Bitcoin as of today. Take your time answering this question. Try to refrain from empty claims, support your opinion as well as possible! 
The minimum amount of words: 500. 


## Further readings (sources or support) 
* [Distributed systems Wiki](https://en.wikipedia.org/wiki/Distributed_economy)
* [Distributed systems simply explained](https://www.youtube.com/watch?v=Fy8BfVrj4dk) 
* [What is a node](https://en.wikipedia.org/wiki/Node_(networking))
* [What is a Bitcoin node](https://www.youtube.com/watch?v=sVeolsQ3cvU)
* [What is a miner](https://www.danielefavi.com/blog/what-is-the-mining-who-is-the-miner/)
* [What is Bitcoin mining](https://www.youtube.com/watch?v=GmOzih6I1zs)
* [Immutability explained (in short) ](https://www.danielefavi.com/blog/blockchain-for-dummies-a-gentle-intro/)
* [The meaning of decentralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)
* [Peer-to-peer transactions](https://en.wikipedia.org/wiki/Peer-to-peer_transaction)
* [Overview protocol rules](https://en.bitcoin.it/wiki/Protocol_rules)
* [Overview documentation protocol](https://en.bitcoin.it/wiki/Protocol_documentation)
* [Deep dive bitcoin protocol (level 2)](http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/)

##  Food for thought
Post your answers in the class Twitter Thread. You can pretend to help us improve the quality of conversation and help your fellow peers learn. But in the meantime, take a sneak peek at the answers…😉

