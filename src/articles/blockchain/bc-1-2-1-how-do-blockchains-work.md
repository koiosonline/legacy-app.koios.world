# BC-1.2.1 How do blockchains work? 

So we now know that blockchains are (1) distributed, (2) decentralized, (3) ledgers. What we haven't discussed so far is **how** they work: how do they record transactions? Nor the new methods we use to record transactions: from manual accounting to nearly fully automatic computing! With the use of computer code, transactions execute themselves. In other words: instead of a bookkeeper, a piece of code does the work for us. The transaction can follow its route based on the instructions from the code. We call these pieces of code ''smart contracts'', but more about those in later sessions. The first one up: how do blockchains work! 


Let's start with the definition. We did a deep dive regarding the official description, but we can't give you one single solid answer. It might be because the technology is very multidisciplinary, or we are still in the beginning phase. So you will most likely receive a different response from somebody with an IT background than when you ask somebody with legal experience.

To give you a showcase, we copied two definitions:


1. One from [Wikipedia]( https://en.wikipedia.org/wiki/Blockchain ) 
2. As well as from the [Bitcoin source code](https://github.com/bitcoin/bitcoin/blob/master/src/primitives/block.h) 


You might recognize the red line between them. The definitions are similar but nuanced from a different perspective. For example, the Bitcoin source code talks about "nodes collecting new transactions, hashing's, proof of work, hash trees, etc." (= a primarily technical perspective). Where Wikipedia talks about more general terms (better suited for big general audiences). 

>💡 The definition of a blockchain depends on who and when you ask. It is a multidisciplinary domain. There's most likely an available angle for you that suits your needs and expertise, where you can start contributing and earn based upon your specialism.

We know what blockchains are, distributed decentralized ledgers, but we don't exactly know how they work. Let me get to the next slide, where we see a geographical overview of the world.With beautiful pasted nodes, or in this case, five nodes across the globe. 

![Node World map](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level1/bc-1-2-1-how-do-blockchains-work-image1.png) 

[Source books]( https://topreviews-magdalenedacruz.blogspot.com/2013/11/about-books-free-as-far-as-he-was.html) 

As you can see, this image represents a distributed ledger. The nodes spread across the world. They are in North America, South America, Europe, Africa, and Asia/Australia in our case. So this is an image of a distributed ledger. Still, you can instantly see that this is not specifically a decentralized ledger. Because it seems like it's the same node everywhere, this image could also be a centralized distributed ledger. For now: just imagine that each node is a different entity. So we have six nodes in six other locations. 
That's the first explanatory version, version 0.1, and there's nothing new here on the horizon. So let's go to the second session, version 0.2. Imagine these nodes record transactions between people around the world. Borderless (!): 

Transactions that don't care about legal jurisdictions.
Which are neutral and don't care who you are.
And are censorship-resistant and, therefore, can't be altered.
Without an intermediary controlling party.
Transactions containing all the properties of open public blockchains.


Let's introduce a new concept: [the single source of truth]( https://en.wikipedia.org/wiki/Single_source_of_truth). You might remember this term from the previous chapter as the “state of the ledger”. As you know, miners record and validate transactions and present their mined pages (blocks) to nodes. Nodes only select valid blocks, creating a chain of blocks (book). 

Take a look at this [visualized example for dummies](https://en.wikipedia.org/wiki/Blockchain):

![image 2 block race](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level1/bc-1-2-1-how-do-blockchains-work-image2.png)



>💡  It could be possible that node A selects a different mined block than node C. Miners create individual pages that differ. Different transactions lead to different pages, where different pages lead to different stories (different stories = different states = different truths). In other words: two chains. 


Let’s imagine that we record transactions in the Bitcoin Blockchain (the Bitcoin Book). Since there can only be one truth, either party A has the bitcoins or party B. But both chains are valid, so nodes need to select a truth/chain. If two chains arise, it becomes a race between these two truths. Because there can only be a single source of truth, only one owner of the bitcoin, one chain survives. The other won’t be recorded in the transaction history. This concept is represented by a purple block and a black block in this Wikipedia picture in the slides. So what do the nodes need to do now? There are two valid truths!


>💡  As you now know, this is a visualized expression of the Byzantine General Problem. The general, a.k.a. the node, needs to choose the [truth](https://en.wikipedia.org/wiki/Blockchain#/media/File:Blockchain.svg). 


There are two valid blocks, and the nodes need to decide because they can only select one SSOT as a node. So the node needs to pick: whether to go with the purple block or go with the black one. The first thing the node will do is check the validity of the presented blocks. Most likely, both are valid. Otherwise, the miner wouldn't have shown the block to the world. The miner knows that if the block 
isn't correct, the nodes won't accept it. So let's assume both blocks are valid and presented at the same time to the node. So if we skip back to the previous example, South America mined the block simultaneously with Africa. Mined and presented it at precisely the same time. The South American miner communicates the block to the American nodes. The African miner transmits it to the European nodes. The node in Asia needs to pick one of the two presented blocks, but remember: both pages (blocks) are valid.  

The Asian node: "Do I go for mined block Africa or the mined block South America"?

> 💡 Both pages are valid, so the node in Asia has a problem (BGP). There can only be one SSOT, so the node needs to pick one block to continue the story! **Now, because of the BGP the protocol rules need to kick in to guide the node and solve the problem.** In the example of Bitcoin, the protocol uses a rule called '[the longest chain principle]( https://medium.com/swlh/the-philosophy-of-the-longest-chain-is-everywhere-a06537453220)'. So the Asian node needs to pick the block which is the furthest up ahead in the chain. Hence, which story has the most pages and is the furthest up along in the storyline. The reason: this book contains the most amount of work, is furthest up ahead in time, and therefore probably the closest to mimic the real world. 

The Asian node needs to pick a block based on the most extended chain. For example, suppose somebody presents page 11 or block 11, and somebody else presents page 13. In that case, the node needs to pick page 13 (according to consensus protocol). The selection is also quite logical from a game theory perspective with incentives for the nodes and miner. Imagine that if you are mining the next block following page 11 and manage to mine block 12. Page 12 already exists! And all the other nodes already accepted page 12! So why would you start mining page 12? 

You would want to start as fast as possible with the newest block in the blockchain, which nobody currently has. This is because you want to write the future and not rewrite the past (you earn bitcoin for reporting the current state). So you (as a miner) will start with the furthest block ahead, the "longest chain".

> 💡 Keep in mind that different blockchains have different consensus rules. But in the case of Bitcoin: nodes need to follow the longest chain. 

So only one miner will produce the winning page and wins the mining race. It's either the purple block in South America or the black block from Africa. Let's say that the Asian node picks the African Black block. It arrived milliseconds faster than the South American block. Note that both are of equal length (same page number), so the longest chain is not applicable yet! 

So the Asian node picks the black block because that block was presented first, and there was no longer chain available. This means that the other purple blockchain and the black blockchain enter the mining race. The first chain that finds the next block will get ahead and attract more nodes and miners. This increases the calculation power and the chance to find the following page. This decreases the chance for the other chain—resulting in more nodes and miners joining the winning chain. Once more: this is done differently in other blockchains, but Satoshi's consensus uses the most extended chain principle. So half the nodes go for the American part (purple block), the other half goes for the African part (black block). 

<blockquote style="border-color: #ff0bac"> ❓ Describe the “mining race” in your own words? [Check answers 🦉]( https://twitter.com/JordiJansen101/status/1432295624754536448?s=20) </blockquote> 

The race goes relatively quickly: the first chain creates the longest by mining the new block (page with transactions). Then, they will communicate their block to all the other nodes (purple and black alike). But, then, the other miners and nodes will realize: "I'm still working at page 14, but in the other chain, they managed to mine page 14 already". So, from that moment on, the miners and nodes in the lacking chain need to make a decision: 

As a miner: "Am I going to finish page 14 and try to catch up with them on page 15 (which they already started mining)? Will I give up and start anew in their chain and accept their version of the SSOT. This way, I could start mining page 15 as well?" The costs for regular miners in one of the chains are energy costs for creating a block. But the costs for the winning miner are higher. They will lose the rewards if their page isn't in the winning chain. They are therefore more committed to their chain. But there will be a moment in time where the majority has joined the longest chain, and the miner needs to face the music and give up. 

A node: a node will follow the longest chain, which is the story that mimics the network as far as possible. Because others will realize this and join with their resources, it also has the most significant chance of writing the next block/future. It is stated in the consensus protocol to do so, and an honest node doesn't have any interest in acting otherwise. Therefore the longest chain attracts more and more nodes and miners. It results in a drop in writing power (called 'hash power') because there are fewer and fewer miners. Thus, making the decision easier for other miners and nodes to join the other chain as well. Eventually, all nodes and miners migrate to the longest chain. This situation is represented by the black blocks (Africa wins the race). Fun fact: the race is usually solved within one to three blocks. The creation of a Bitcoin block takes on average +/- 10 minutes, so uncertainty about the truth exists no longer than 10-30 minutes. Not so long for some use cases, too long for other use cases. This is one of the reasons why other people started experimenting with other consensus protocols (also called 'consensus algorithms'). 

> 💡 Important to realize is that this is how Satoshi Nakamoto solved the BGP. It is not a clean solution but a practical one. There is still 10-30 minutes of possible uncertainty of who owns what. But by delaying the time to produce a block by 10 minutes, the nodes (generals) have time to check out what the longest chain is. And determine what the truth is with the occasional mining race causing uncertainty. But you as a user often don't notice this because your transaction is probably mined by both miners. 



> 💡 Not everybody likes the solution where the winning block takes it all. This also was a reason to adjust the consensus protocol and try out other methods. Many different sets of rules are applied to other blockchains—a zoo of consensus. Time will prove which one offers the best solution for a particular use case. 



> 💡 A valid block, but lost the race, is called an orphan block. The parent went on with another block (more later). 



<blockquote style="border-color: #ff0bac"> ❓ Not everybody liked the longest chain principle where winner takes all. People experimented and adjusted the consensus rules, creating a zoo of new protocols and different blockchains. Why would you change the blockchain use case if you adjust the consensus rules? [Check answers 🦉]( https://twitter.com/JordiJansen101/status/1432298560549183492?s=20) </blockquote> 


<blockquote style="border-color: #ff0bac">❓ Check out this timeline of the computing power [here]( https://bitinfocharts.com/comparison/bitcoin-hashrate.html#2y). The graph represents the amount of energy the miners need to create a block. What are your first thoughts? There is no wrong answer here 😉 [Check answers 🦉]( https://twitter.com/JordiJansen101/status/1432299043842048003?s=20) </blockquote> 


 
What's mainly different between the purple and the black block is the fee for the miners. The winning miner receives a reward for their mined block. In addition, they are allowed to add one transaction for themselves, called the [coinbase transaction]( https://bitcoin.org/en/glossary/coinbase-transaction). According to the protocol, they are allowed to record the transaction fee received per transaction. Plus the block reward fee, which is a juicy 6.25 bitcoins at the moment. This started out at 50 bitcoins in 2009, but the block reward halves every four years. The previous halving was in May 2020. 

**That was explanatory version 0.2. Let's go to version 0.3 now!**


## Version 0.3

How does this recording and validating technically work? What does it look like? Before going into the nitty-gritty part, you need to realize that all transactions are open and public. For all to see. 

> 💡 You can join and watch the blockchain live! This is done via so-called blockchain explorers. Nothing more than websites (front-end) connected to a node (back-end). It allows you to search through the blockchain. 


But even better. You can download the entire blockchain yourself. Let's stick with Bitcoin for now. Bitcoin is a software application. Just like a regular app, you can download it. Go to [Bitcoin.org](https://www.bitcoin.org), and download either the entire blockchain (full node) or the summary per page / the block header (light node). The full node download will take you approximately one to two weeks with a decent computer and internet. You will download the entire ledger, all the way back to the first transactions from Satoshi in 2009. >200 GB nowadays. If you chose to keep up with the network and add the newfound pages, you would be one of the nodes. You will be one of the 12,000 nodes currently active in the Bitcoin Network. 

**So why would you do that?**
For example, if you want to start to mine, you need to know the current block. But also, if you're accepting bitcoins in high amounts. If you're going to sell stuff and get bitcoins for it, you need to know the SSOT, the world state. If you receive large sums of money, you want to know as best as possible: "did I actually receive it?" before handing over the goods. Of course, you can use explorers like blockchain.info. But you would be trusting an intermediary instead of on your own information. Which might bite you up in the arse later. The explorer can be hacked, for example, displaying misleading information. 

## The Bitcoin blockchain, high-level overview, starting from scratch



1. Buy something that can store at least 200GB, like a Raspberry Pi (tiny computer). 


2. Or download the lite version online (without the entire ledger). Then, download the app or ledger via bitcoin.org. It takes you one or two weeks, and you're up to speed. **You don't need to join with a passport, which many people in the world don't have access to. Nor do you need to set up an account. Just download the app, and that's it!**



3. Users will transact in the meantime: approximately 2,000 transactions per block. So on average, every 10 minutes, a page is formed. In this block, the peer-to-peer transactions get recorded. 


4. The miner collects global transactions from something we call the "mempool", which holds all the peer-to-peer transactions. Then, the miners put them into a new block, solve the mining puzzle, and then. Taaaaaadaaaaaa! We've got a new block!


5. "Hey, node! Wake up over there at The Hague! We've got a new block! Please check whether it's valid".  The node will check: "are these peer-to-peer transactions indeed valid". The node audits 22 things, sort of a protocol checklist. The transaction is probably valid already, due to the face that most software wallets only allow for valid transactions to be sent. But it is an open network in which you can trust nobody. **Don't trust, verify**. Interesting [source](https://medium.com/nervosnetwork/dont-trust-verify-7c866ad1ed5b ) about different nodes.


7. Suppose my node approves the block as valid. Then, I will add the page to the chain (book). 


8. And then this process starts all over again. So another batch of p2p transactions was sent to the mempool. Start at step 3. 

This way, we set up a decentralized ledger, where everybody can be a node. And where we use a protocol to validate. Therefore, without an intermediary, we can send value across borders. A network that is open, neutral, and can't be altered. In the case of Bitcoin, it also has a limited money supply, but more about that later. 

So we have an entirely new form of an open ledger recording data. Data representing bitcoins. Keep in mind that we're not sending bitcoins from A to B. We're just sending pieces of data from person A to person B. We will show you later that we can transform that data and let the transaction do things independently. Done via so-called "smart contracts". So not only is the ledger without intermediaries, but it's also intelligent data that we're transacting. In Bitcoin (network with capital B), we call this data bitcoins (the money with a small b). You can program bitcoins to represent other things or to contain messages. Bitcoin is what they call a 'dumb protocol'. It is very monotonous, which makes it very secure. Its current use case seems to be somewhere money, but more about that later. Other blockchains offer more flexibility and aim to solve different challenges. For example, Ethereum allows for more programming and focuses on new forms of governance (build decentralized applications). 

<blockquote style="border-color: #ff0bac"> ❓ Remember the use case that you would like to solve with more decentralization (previous assignment)? What type of properties does the blockchain need for that: speed, flexibility, security? Does any of the live blockchains out there fit that task already? [Check answers 🦉]( https://twitter.com/JordiJansen101/status/1432301692557594633?s=20) </blockquote> 


For the next version, how does it work and looks like, we will fly in some specialists! We've watched many clips on "how does a blockchain work?". Way too many. We selected a clip that best explains how a blockchain works and also provides excellent visualization. It is a great clip with the right amount of details at a high level. We linked it in the following video and the further reading. 

> 💡 Watch this video if you would like to see and learn how a blockchain works. It is explanation V1.0. You must see this video if you want to continue with this course. We will often refer to it. It explains core elements. So do yourself a huge favor: grab at least 34 minutes. It's 17 minutes for the clip, but you need to watch it at least twice because then it will all start to make sense. 

<blockquote style="border-color: #ff0bac"> ❓ Where did you get stuck watching the video? </blockquote> 

I will see you as a more enlightened person in the next class. There we will discuss Satoshi Nakamoto.

Arigato! 
 
## Conclusion
If you want to understand how a blockchain works, watch the video clips on https://andersbrownworth.com/blockchain/. 

## Portfolio assignment 1.2.1 How do blockchains work 
1. You just learned how blockchains work. Explain in your very own (!) video (!) that you now understand how a blockchain works on a high level by using the [Blockchain Demo]( https://andersbrownworth.com/blockchain/blockchain). 

2. Chapter check: can you accomplish the chapter learning goals? Free of format.
* Explain in my own words what a blockchain is (understand)
* Explain why the explanation of what a blockchain is could differ per perspective (understand)
* Illustrate how a blockchain works on a very high non-programming level by using an online web-based tool (analyze)



## Further readings (sources or support) 

* [What is a blockchain](https://en.wikipedia.org/wiki/Blockchain)

* [Bitcoin source code explaining blockchain](https://github.com/bitcoin/bitcoin/blob/master/src/primitives/block.h)  

* [Single Source of Truth](https://en.wikipedia.org/wiki/Single_source_of_truth) 

* [Representation of two truths in a blockchain](https://en.wikipedia.org/wiki/Blockchain#/media/File:Blockchain.svg)

* [The longest chain principle explained in detail](https://medium.com/swlh/the-philosophy-of-the-longest-chain-is-everywhere-a06537453220)

* [Computation power Bitcoin](https://bitinfocharts.com/comparison/bitcoin-hashrate.html#2y)

* [Explanation Coinbase transaction](https://bitcoin.org/en/glossary/coinbase-transaction)

* [What is a Raspberry Pi?](https://en.m.wikipedia.org/wiki/Raspberry_Pi)

* [What is the mempool?](https://99bitcoins.com/bitcoin/mempool/)
