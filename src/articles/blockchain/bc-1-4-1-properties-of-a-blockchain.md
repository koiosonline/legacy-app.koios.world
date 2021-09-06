# BC-1.4.1 Properties of a blockchain

## Introduction

The goal of this entire chapter is to motivate you a bit. Tackling an immense topic like this can be draining, so you might need it during your studies 😊. On the other hand, this section also introduces fundamental blockchain properties and showcases a few global challenges we all face. Remember that these are our motivations, so our criteria do not have to be your reasons. Instead, we want to challenge you to find your reasons for "why you think blockchain technology is important?". 

This chapter will end with an overview of the technology and its importance, viewed from a macro scale. To see what type of influence this technology might have on the entire world, instead of only your situation.

Before we start, we describe ten different properties of blockchain technology. If you change between blockchains, you most likely have a different trade-off in these properties. It is therefore crucial that you understand these properties. The different combination of properties is a good thing because other use cases will need a different set of properties. Nor is this a static process: blockchains, as well as their properties, evolve. So please don't neglect innovation: Bitcoin now is different from Bitcoin in 2010.

> 💡  Each blockchain has some mix of the following properties. Some properties are more present than others. Bottom line: different blockchains = different trade-offs between these properties = different use cases.  

## Overview of the properties

* #1 immutable 
* #2 decentralized 
* #3 open and public 
* #4 transparent 
* #5 censorship resistant 
* #6 secure 
* #8 neutral 
* #9 smart programmable data 

## The properties 


#1 we have an immutable ledger. You can't alter the blockchain, also known as "append-only". Anders showed us already: if we change history, we change the hash. So the hash of our node will be different from the hash of other nodes. This allows us to efficiently and securely compare our history with the history of all the other nodes.

#2 It is decentralized, which means there is no single party in control: the more decentralization, the less centralized risks of dishonesty, loss of records, or exclusion. 

#3 Third one is that blockchains are open to the public. Anybody can join the network. It doesn't matter who you are or where you are from etc. You can download the software, become a node or do peer-to-peer transactions. You can even become a miner! In the case of Bitcoin, it's pretty challenging to become a miner. Becoming a miner is relatively easy. However, becoming a profitable miner is complex as a solo artist because there's a lot of competition. We will discuss this later on!

#4 Blockchains can be transparent. **The only private thing in a public blockchain is your private key**. All the other stuff, like your tx's, is shared because it is a public ledger. There are no "walls". You can see everything. What you can't see is the personal private key. That is a good thing because that's how you retain ownership of your data. Do note that cryptographic techniques like ZK-snarks improve the privacy of your data. 

#5 it's censorship-resistant. Often, each block has a certain amount of cryptographical security surrounding it, in the case of Bitcoin by using proof of work (computational power) & Ethereum with proof of stake (used to be PoW as well). It's very hard, theoretically possible, though, to attack a decent blockchain. You would need an immense amount of computational power. So basically, you have a "censorship-resistant" blockchain. You can't exclude anybody. You can't force things on anybody—an important property, more about this later. 

#6 It is secure. Security depends on the blockchain as well and is often a trade-off with speed or decentralization. **Also known as the scaling trilemma: where security, speed, and decentralization compete**. You can't have all three of them. Some claim it, though, but need to prove this claim overtime. For now, pick two out of three: it's either secure, fast, or decentralized. Antonopoulos makes a good comparison: if you compare this trilemma with being a consultant, you can either do something cheap, fast, or very high quality. Try to combine these three factors. A design challenge! 

#7 It's private. As mentioned before: you can make as many accounts as you want, as many private keys as you want, enabling you to interact in a pseudonymous way. There are also rising technologies like ZK-snarks that can hide parts of your data. Blockchains like Mina Protocol are testing them in real life. 

#8 It's neutral. The color of your skin is not essential. Your religion is not important. The region where you're active doesn't matter. In a public blockchain, you're nothing more than bits and bytes. A public key represents you.

#9 Smart (programmable) data! Pieces of code that can execute them need flexibility. See comment earlier about security. More flexibility often goes hand in hand with less security

<blockquote style="border-color: #ff0bac">❓  Remember the challenge you would like to solve with more decentralization? What properties do you deem necessary for the blockchain to solve your challenge? </blockquote> 

## The end goal 

> 💡 All these properties combined aim to solve a specific challenge (like reducing tx cost efficiency).

## An example

Remember that not all overseeing blockchain tackles it all ("one blockchain to rule them all"). So in the case of Bitcoin: it's working great for sound money and security. In the case of Ethereum, it is well-suited for new forms of governance and flexibility. Different blockchains = different properties = different use cases. Just like a shark and a lion are not competing, Bitcoin and Ethereum are not competing. Different use case. 

> 💡  So keep in mind: **if you are looking for a blockchain, determine the use-case first**. Are we talking about a consort of entities aiming to improve their collaboration? Go team centralization! If you are looking to build global commons, solutions for the greater good: gooooo team decentralization! 

In subsequent sessions, we will discuss a few use cases. We believe that centralized solutions are not desirable for those cases. This is because they might create an unhealthy or unstable situation. After all, the three risk categories pose too high of a risk in their case. But also because the decentralized solution has no intermediary and is better-suited (= more tx cost efficiency for users!). Therefore, we mainly focus on open public blockchains. 


## Conclusion 
“Tamper-proof, shared distributed digital ledger that records transactions in a decentralized peer-to-peer network”. It stores permanently the history of asset exchanges between the peers(participants) in the network. Other than distributing the power, you also have the ability to program the data and allow machines to own their own data.  The aim is to increase tx cost & computational cost efficiency.


Ask yourself this when confronted with the question “do I need a blockchain?” The answer is simple: does this truly need decentralization (public blockchain), only partly (hybrid blockchain) or none (private blockchain)? Because of the inefficiencies and the open public character of true decentralization demands, you don’t use a public blockchain unless you really need it (which is the case with important foundations of our society, like our money and freedom of speech). 

Different blockchains each have a different trade-off between the properties. You can’t have them all. Remember: despite some of the hype, blockchains are “incredibly inefficient,” (remember all the power in the lost power in blocks that did not get published in the miner race?). It’s worth paying the cost when you need the decentralization, but it’s not when you don’t need properties of decentralization. If trust in a third party > cost of inefficiency = no blockchain. Note: on a global scale the efficiency often turns around and is one public blockchain often more efficient then all the separate centralized ledgers.
But what then are examples where we do need more decentralization? Why should I bother with blockchains?! Read up about it in the next chapters. 

## Portfolio assignments 1.4.1 Properties of a blockchain  
No blockchain currently covers it all. This might change in the future, but for now: each blockchain has its properties and, therefore, its use-cases. Make a comparison between the Bitcoin, Ethereum, and Monero blockchains. Use the characteristics we used in this video and grade each blockchain per property; 


1. Immutable
2. Decentralized
3. Open & public
4. Transparent
5. Censorship resistant
6. Secure
7. Private
8. Neutral
9. Smart programmable data

## Further readings (sources or support) 
* No sources this time 

