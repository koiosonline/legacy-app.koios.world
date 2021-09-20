# BC-1.3.1 Satoshi's cheat

We already discussed how Satoshi solved the consensus problem: by structuring rules so that nodes need to follow the longest chain. **But did Satoshi solve the Byzantine General Problem?** That's what we will discuss, plus Satoshi's new invention: the decentralized digital time "stamping". So let's dive into the next slide!

As you know, a ledger can be seen as a set of recordings with a historical background, structured by rules. Rules used to be imposed by centralized parties. So the centralized entities/the people controlling those entities. The "Ruler" sets limitations on the ledger and people. We replaced the ruler and brought forward a mathematical software protocol. We invented a new form of governance and created a new form of trust. 


>💡  Thanks to blockchain technology, we don't trust a higher authority anymore. Instead, we trust in mathematical principles. It's a new trust model. Hence, a blockchain is sometimes called a trust machine. Note: if you believe we are programmed to trust a higher power, we now rely on mathematics instead of people. 


> 💡  This enables us to scale our institutions and perhaps create even new, decentralized institutions. Antonopoulos describes this well in [this video]( https://www.youtube.com/watch?v=wSRN8PUhHX0). 

Since a blockchain can offer trust in transactions, I can interact with somebody without trusting that person. Furthermore, it is neutral: no gender preferences, no skin color, no religion, sexual preferences, etc. Thus, we've got a new form of the ledger with new rules without authority, which can also program itself! 


>💡  Open blockchains offer (a mix of) the properties: open, borderless, neutral, censorship-resistant, and public. [Read more about it]( https://coinbet.com/news/what-are-the-5-pillars-of-open-blockchain-292) or check out Antonopoulos, his famous idealistic, inspirational spins [here]( https://www.youtube.com/watch?v=qlAhXo-d-64). 


>💡  The properties can differ per blockchain. So a different set of rules, protocols can lead to another blockchain. Because if you tweak the rules a bit, you will change the blockchain. Sometimes a bit, sometimes a lot. Described well [here](https://www.youtube.com/watch?v=JIJbPoofaWA). 


When you see a blockchain as a vast machine, if you add some new stuff, for example, impose new rules on it, it can and most likely will do different things! It might not be able to do the things it previously could, but perhaps it can now do other things. An example is the Ethereum blockchain. It was created in 2014 as a new type of blockchain with a lot more flexibility. It records transactions differently. But because it changed, it can't do other things as well anymore. So it has more flexibility, but therefore more opportunities for attack and less security per transaction. As mentioned before: different blockchains, different use cases.

## About Satoshi
Satoshis rule, the trick to solve BGP, was to follow the longest chain! So we now have the "longest chain principle", where Satoshi states that the truth is: that chain is the "longest" (highest block number!) But is that truly a solution of the BGP? 

**Think about it for a second.**

The node doesn't know what eventually the truth will be when two or more chains are presented. Nor when a new page is shown because there might be another chain somewhere else in the world. It would be best if you waited it out as a general/node. In Bitcoins case for at least 10 minutes on average. After 10 minutes, chances are you will know if you followed the longest chain. Waiting for one block is not sufficient to be sure of what the truth is. The best practice for you as a user is to wait for three to six blocks. Six blocks are primarily from the past because the hash power has grown tremendously per block. Not a lot of miners will try to catch up with three blocks or more. It hardly occurs that three blocks get erased, and nodes shift to another longer chain. 


**Quick Question** - Why is the purple block's hash ALWAYS different from the hash of the black block? What is done differently in the block mined by Miner A versus the block from Miner B?


Indeed the "Coinbase" transaction. The transaction where the miner will send the mining reward (bitcoins) to their wallet. 


>💡 So Satoshi didn't solve the Byzantine General Problem. The longest chain is just a mere practical bypass of the decision dilemma. By introducing a time frame of 10 minutes, the node can buy some time and see other longer chains / other truths out there. Thus, they have time to reach a consensus and update the ledger. This is one of the reasons why Satoshi added the mathematical puzzle which needs to be solved per page. Recording the transactions does not take 10 minutes. Solving the puzzle does! This puzzle is known as proof of work. Proof of Work deliberately slows down this process. One of the reasons is to offer nodes time to reach consensus and prevent multiple truths before the next block starts. 

An example: somebody transfers me 10,000 bitcoin for two pizzas. Fun fact: this happened on 22 May 2010, called [pizza day]( https://www.investopedia.com/news/bitcoin-pizza-day-celebrating-20-million-pizza-order/). So let's say if somebody sent me 10,000 BTC now and said: "Jordi, bake me a pizza". At that moment, I don't know if I received the 10.000 BTC and if that transaction will be recorded in the final SSOT. So I need to wait it out. And even then, I'm not entirely sure. Will the chain last? Is it a purple block, or is the transaction (tx) in the main chain in a black block? There is a double-spending risk.  The customer sends the 10,000 bitcoin to another address just before sending it to mine. One tx would be accepted in the purple chain, the other in the black chain. A manifestation of the double-spending problem. 

Usually, Satoshi's most extended chain offers that you can wait out. So wait for three blocks and see what transaction would have finality (be in the final chain that won the race). It is a practical solution. But not a perfect mathematical one. It is still very inconvenient. So with small payments, it's OK to accept this risk of double-spending. So a balance needs to be found. The waiting time for the customer versus the risk of double-spending for me as the recipient. In this scenario, this person most likely would like to have the pizza as fast as possible and doesn't want to wait for 30 minutes. Note: the ecosystem is working hard. Multiple solutions to this challenge are tested at this very moment by tweaking either the consensus rules and changing the blockchain ('layer 1'). Or adding additional layers (layer 2) to the blockchain, like faster side-channels (sort of mini-ledgers in contract format called lightning network) or bridges towards other faster ledgers or settling methods. Just like the internet did, blockchains will prove to scale. The challenge is to scale without sacrificing decentralization. The internet started decentralized, and look how that ended up with all the centralized MegaCorps.

In the end, it's all about a matter of perspectives. So when you start using peer-to-peer money for buying your groceries: yes, waiting 30 minutes is a very long time. So don't wait and accept the risk of double-spending. But another perspective: when you send money to your mother in Cameroon, 10 or 30 minutes is speedy! So the current use case for bitcoin is mainly cross-border sound money and not so much p2p grocery money. And this is fine because money tends to start as collectible (hard to acquire). Then starts to move towards a store of value (SoV), something that protects purchase power. Later it also plays the function of a medium of exchange (MoE). Bitcoin seems to be a bit between SoV and MoE. The last phase of money is as a unit of account when prices are denominated. History shows us that money needs to build trust first in a particular stage before growing into the next phase. Much progress has been made, but time is required to build up trust. And to build and test solutions for the challenges of today and tomorrow. So it might not move as fast as the cryptocurrency armies tend to believe. Still, cryptocurrencies seem to be the future of money and are entering the realm of money quickly. More about all of this later! 


Regarding these improvements over time, the bitcoin of 2019 isn't like the bitcoin in 2009 anymore. Many developments have been over a decade. If you find this interesting, you can peek at the further reading, which presents an entertaining and detailed timeline for the first five years of development. A visualized history of Bitcoin: from the whitepaper being published in October 2008 and the first block, the "Genesis Block", was mined, which was 3 January of 2009 (actually mined/finished the 9th to gradually see new things happening, e.g., the increase in the difficulty of the proof of work. After half a year, the first Bitcoin transactions, on 22 May 2010, the pizzas passed by, etc. An exciting further reading! 


>💡 Satoshi et co. created a new network (Bitcoin) and local currency (bitcoin). Increasing transaction cost efficiency. It now costs you ten cents and ten minutes to send transactions across the world, instead of 3-5 working days (if you're lucky!) and the 10- 15% fees when sending remittances.  

** Satoshi didn't do this all alone, and much work needs to be done.** Satoshi combined several techniques like cryptographic security, which already existed. So the proof of work already existed, used in the Internet Protocol to prevent spam. Satoshi did add its own set of "consensus rules". The most known was probably the capped supply of bitcoins: you can't make more than 21 million bitcoins. Each block, new bitcoins are created for rewards for miners. Bitcoins are born per page. The production is halving every four years. The consensus is encoded in the software, replacing the ruler with software (rules based on math). If you don't agree with the rules or have other opinions, you are free to copy the entire Bitcoin blockchain and create your blockchain. This process is called forking. Bitcoin cash began a fork in 2018, and more Bitcoin Protocols arose last decade. There is even a Bitcoin Jezus. Since 2008, thousands of new projects, new experiments have been popping up everywhere in the world. Some are focussing on money, some focusing on other use-cases entirely. Innovation is accelerating fast due to the open-source approach of many parties.


## Digital time-stamping (reason for this class)
When you have the longest chain, you need to have a sequence of pages to determine the length. Check out the current page number ("block height) at https://www.blockchain.info. Each block bears a time-stamp from the physical world, done by the miner. But this time is not leading: the time is determined by the sequence of transactions. They determine how the story of who owns what progresses. The series of transactions is determined by the block height, the page numbers. Hence time in blockchains is represented by block height instead of the time from our physical realm. You can not alter the past in blockchains, as discussed in the Anders example. And more about this later. This time element does perhaps not sound significant. But this means that we have a unique digital time per blockchain!  A decentralized and unalterable timeline! A clock and a blockchain can both tell you the time (based on its past).  

> 💡 **BLOCK SEQUENCE = (decentralized digital) IMMUTABLE TIME
PROOF OF WORK = DECENTRALIZED [CLOCK](https://grisha.org/blog/2018/01/23/explaining-proof-of-work/)**

We already had immutable time in the real world. Time is a human [institution]( https://en.wikipedia.org/wiki/Institution), a story we tell each other. It is practically impossible to alter time in the real world (nuclear clocks, different time zones, etc.), and it enabled us to build great stuff in the real world. Imagine how important it was for the industrial revolution (for example, the time-stamping of labor hours made by people in the factory). Of course, centralized parties have the power to rewind the past and therefore alter the state (time).  So until 2008, we had no decentralized digital trustless time. But with the sequence of immutable blocks, recording the transfer of digital data, we now have. Once again: note that the block numbering is leading, not the real-world time. 

> 💡 So you order transactions in a block, you then arrange the blocks --> you make history! You create a storyline for the present. Do realize that we invented digital time by inventing this gathering and ordering transactions in a sequence of blocks.


<blockquote style="border-color: #ff0bac">❓ So what? Why is this so important? [Check answers 🦉](https://twitter.com/JordiJansen101/status/1432329799834406913?s=20) </blockquote>


It now makes time available in digital space: because it is immutable, nobody can alter history. You can use that to create scarcity or use it to pinpoint receiving or transferring value. You can tell a piece of code when to execute something. However, the code can't read human time. And human time can be tempered with input (called the oracle problem, will tell you all about it later). For example, you can tell the Bitcoin protocol to stop producing bitcoins after 21 million are created. Or to halve the rewards every 210.000 blocks. Fun fact: check out the graph [here]( https://en.bitcoin.it/wiki/Controlled_supply) for the controlled supply over block sequence. Not based on our human time, which can be manipulated, but based on the immutable blocks.  Still not convinced? The order of blocks tells us the sequence of transactions. This is important for money, who owns what, but also for many other use cases. Try to play the ready player one game without time in that digital realm (more later!). 

The block sequence allows us to prove who owns what and when for digital goods. So goodbye to copying data (web2), and hello copying and/or transferring data (web3). We can transfer ownership of digital goods, like bitcoins. Or digital [paintings]( https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html) worth $69 million. You can copy the picture and store it locally (web2), but also move the original image via the ledger (web3). The "only" difference is that only one entity can hold the original, worth this amount of money. Personal opinion: a bit insane while children still starve of hunger. But this does show a lot of potential because you can create liquid property rights of creations. How cool would it be if you could own a scene from your favorite movie? This type of value transfer is using non-fungible tokens (NFT). More about those tokens later! All made possible thanks to block sequence & immutable time. 

In other words: you can pinpoint a moment in digital time to where you either refer to "there I received the value" or "there I spend the value". It is an immutable time. Protected in bitcoin by the bitcoin mining hash rate. So you now have a moment in time where you can say: "here I received the bitcoins, everybody agreed. Also, everybody agrees that I still haven't spent them and I therefore still have them". A story everybody in the world agrees upon, without anybody dictating the truth (other than the protocol we all use). 


Of course, you do have a time clock on your screen or your phone somewhere. But that's the centralized time which you, or the TTP, can alter. An exciting example of decentralized time is given in the movie [Ready Player One]( https://www.youtube.com/watch?v=cSp1dM2Vj48). In that movie, you see what digital time can do where the main character rewinds time. This costs a tremendous amount of energy because this would mean reordering the blocks and catching up with the other miners to become the longest chain again. Immutable time, protected by vast amounts of computing power with proof-of-work and cryptographic hashes spread across independent nodes worldwide. You can't alter time. You can't change history. Of course: nothing is forever. You can try to steer the future with some form of attacks, like the infamous 51% attack, but this is for later. For now, relax. We'll see you in 2 - 2.5 hours when you have watched this fantastic movie ;-) 

<blockquote style="border-color: #ff0bac"> ❓  Watch RP1. Best schoolwork ever. Wade Watts rewinds time in a scene. How can someone alter the last few minutes (sequence of transactions, in their case: I shoot, you die). And why not more than a few minutes? What's happening there 😊? If you know the answer, let us know! [Check answers 🦉](https://twitter.com/JordiJansen101/status/1432331408396193805?s=20) </blockquote>

## Portfolio assignment 1.3.1 Satoshi's cheat  

Prove that you achieve the learning goals (free of format!) 
1. Explain in your own words how Satoshi invented a practical bypass of the BGP while incorporating the distributed decentralized ledger and the concept of a protocol in my answer 
2. Illustrate how this solution is not a mathematical solution, but a practical solution to the problem 
3. Evaluate the impact of the downsides of this practical solution 
 
2. **OPTIONAL**
We concluded that creating blocks' 10-minute time frame interval is needed in the Bitcoin protocol. To verify if other longer chains/other truths exist to bypass the BGP and reach consensus. Explain why a short (e.g., 1 sec) time frame would not work in Bitcoins protocol, or what the downsides would be. 

## Further readings (sources or support) 
* [Decentralization and the architecture of trust, Antonopoulos](https://www.youtube.com/watch?v=wSRN8PUhHX0)

* [The five pillars of open blockchains described](https://coinbet.com/news/what-are-the-5-pillars-of-open-blockchain-292)

* [Five pillars in short (hyped)](https://www.youtube.com/watch?v=Qkjm5E5BeB8&feature=youtu.be)

* [The five pillars of open blockchain explained, Antonopoulos](https://www.youtube.com/watch?v=qlAhXo-d-64)

* [Picking the suitable blockchain](https://www.youtube.com/watch?v=JIJbPoofaWA)

* [Pizza day](https://www.investopedia.com/news/bitcoin-pizza-day-celebrating-20-million-pizza-order/)

* [Bitcoin Timeline](http://historyofbitcoin.org/)

* [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf)

* [Explanation Genesis block](https://en.bitcoin.it/wiki/Genesis_block)

* [Solved block 1](https://www.blockchain.com/btc/block/1) 

* [Fee’s remittances/international money transfers](https://bruegel.org/2018/04/the-cost-of-remittances/)

* [Explaining remittances](https://www.youtube.com/watch?v=OBkRwU_qqjk)

* [Proof of work is a decentralized clock](https://grisha.org/blog/2018/01/23/explaining-proof-of-work/)

* [What is an institution? ](https://en.wikipedia.org/wiki/Institution)

* [Example use case decentralized time, the monetary supply of Bitcoin](https://en.bitcoin.it/wiki/Controlled_supply)

* [Trailer Ready Player One](https://www.youtube.com/watch?v=cSp1dM2Vj48)
