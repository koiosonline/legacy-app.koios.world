# BC-1.1.9 The byzantine general problem 

The Byzantine what? The Byzantine General Problem (BGP)! Don't get lost in the terminology. Remember that BGP is a more visualized example of the problems we encounter when you distribute nodes and remove the controlling party. So we aim to solve the three distribution problems of timing, ordering, and failure of data. But we can't rely on the help of someone coordinating the entire system. In other words: we can't trust the other nodes to do their work correctly. 

>💡 In decentralized systems, we have to assume that every party will misbehave if that is beneficial for them. Actors work for their interests. Working for your interests makes behavior predictable and could mean that if co-operation is valuable, people, in general, will cooperate. If abusing the system is better, they will try to beat the system. 

So nodes can still work together if it is beneficial for them. Good for them. But it would help if you still reached a consensus between them. How are we going to do that? Before we start, realize that this is not a new problem. Scientists and other people have been trying to solve BGP for over more than four decades. In 2008, an anonymous someone(s) managed to bypass this problem in a decentralized fashion (no TTP). A practical approach from an unknown entity named [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto). 

>💡 Satoshi built on the shoulders of many. Bitcoin was not the first attempt at digital money, more like attempt #29, and won’t be the last. So although it might feel that Bitcoin dropped out of nowhere, many scientists and decades of research went before it. Satoshi combined this knowledge and tried out a new mix. And it worked out very well this time.

To transfer value (data) between peers without a TTP on a global scale. This first global, decentralized, distributed system is better known as the Bitcoin Network (network = ledger/blockchain + protocol + ecosystem). The data recorded in the ledger of that network, the blockchain, are better known as "bitcoins". But the data can represent more, like micro-certificates for passing a course, for example. Moreover, the data can be programmed: programmable money! Bitcoins eventually are nothing more than data recorded in a ledger—just zeroes and ones. Just like the money in your bank account exists as zeroes and ones. The difference is that the zeroes and ones from Bitcoin are recorded in an open public blockchain instead of a closed-off centralized ledger. They are resulting in the creation of decentralized money, money controlled by a protocol instead of a TTP. Many are experimenting with different blockchains, ecosystems, or protocols to create other forms of digital money. There are decentralized examples like Litecoin and centralized examples like Central Bank Digital Currencies (CBDC's). 


<blockquote style="border-color: #ff0bac">❓ Do the centralized consensus protocols, like a CBDC, solve the three risks of centralization?[Check answers🦉]( https://twitter.com/JordiJansen101/status/1431303531986817027?s=20)</blockquote>

For now: we've uploaded the original paper [introducing the BGP]( https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf), originating from 1982. So they've been trying to tackle this problem for quite a while! 

>💡Read the famous [Bitcoin Whitepaper]( https://bitcoin.org/en/bitcoin-paper), called "Bitcoin, a peer-to-peer electronic cash system". 

<blockquote style="border-color: #ff0bac">❓ Let us know where you got stuck! Can you explain Bitcoin in your own words? Pro-tip: reread it during this course and witness your progress. [Check answers🦉]( https://twitter.com/JordiJansen101/status/1431304936806133760?s=20)</blockquote>

>💡 Check out the following clip, an excellent [short clip]( https://www.youtube.com/watch?list=PL_tbH3aD86Kt-vJy4Q-rvZtXDmrLMG1Ef&v=R02sBpBY7Ug) explaining BGP in a more visualized manner. Keep in mind that we are not talking about generals. The generals are nodes, a.k.a. bookkeepers who need to choose the state (truth). 

<blockquote style="border-color: #ff0bac">❓ Could you explain the BGP in your own words? Let us know where you got stuck! [Check answers🦉]( https://twitter.com/JordiJansen101/status/1431305943015378946?s=20)</blockquote>

To translate the BGP to the distributed decentralized ledgers: we are all connected thanks to the internet. We are integrated and connected, which we use to send information from person A to person B. That's what the internet does: it sends information packages between entities.

>💡 The internet is very well suited to copy information and send it across the globe. 

But the internet doesn't only send these information packages. It also makes copies and stores them in local places, like a file on your computer sent via email. After sending you an email, the original file remains with me. So, we now have two files. Copying is perfectly fine if you send information. Still, it is a big problem if you want to send value because value often tends to be unique or drop in value if it can be copied with no limits. Just imagine you have a $10 file on your computer to spend as much as you would like. 

From [source]( http://andolfatto.blogspot.com/2015/02/money-and-payments-or-how-we-move.html): We send secure messages from A to B on the internet. Still, we make a copy every time we send something (and keep the original message). Copying works fine with email and documents, but not with money :-) Think of digital cash as a computer file that reads "one dollar, SN 111222333." Suppose I want to email this digital file to you in payment for services rendered. When I take a dollar bill out of my pocket and send it to the merchant, there is no question of that dollar bill leaving my pocket. For the same thing to be true of my digital dollar, I would be required to destroy my computer file "one dollar, SN 111222333 " after sending it to the merchant. The problem is that people are likely to make endless copies of their digital money files. In other words, digital money can be counterfeited costlessly. And this is why we make use of intermediaries to handle payments in a virtual ledger


So information often doesn't have a unique identity, no unique number. I don't send the file from my computer to your computer. As discussed: the original file also remains with me as well. Technically I only sent you a copy. So what if I have 100 digital dollars, and I want to send you that value? Sending value was not possible on the internet because no value transfer mechanism/ledger was available. TTP's like banks, offered digital ledgers, available through the internet. Like a (secured!) door for the world to their closed-off environment. But the open internet itself was left without it. 

Blockchain adds two essential functions to the current internet. In blockchains, you can't make a copy. You need to transfer data to comply with protocol rules. It (a) demonstrates that the sender is the owner of the value (cryptographically secured), and that (b) the receiving party knows for sure that the value is only transferred once (unique asset!). 

Suppose you would send your money twice, the "double spending problem". In that case, one transaction is not valid according to the protocol, and only one transaction will be recorded. By being able to arrange (1) transactions in a timely manner (2) and by thinking of a clever incentive mechanism that motivates and predicts behavior, good and bad (3), it now enables us to share a global ledger: A successful decentralized ledger that allows parties that do not know or trust each other to transact together and transfer unique value online. 

Bitcoin was the first decentralized value transfer mechanism publicly available for all on the internet. Bitcoin initiated a Valhalla of decentralized ledger innovation for the next decade. But remember: although the speedy developments in ledger technology from the past decade, one decade is very young in the realm of ledger technology. Many challenges still exist and need to be solved. But this time, together and in an open-source fashion. Thus, making the innovation process even faster and more efficient, learning from each other. 

In other words: as you will see in the upcoming session, Satoshi Nakamoto solved the three distribution problems without using a coordinating party. Wide range of advantages, most importantly less vulnerable (not invulnerable!) to all the three main risk categories.

>💡 Open public blockchains can act as ledgers for the internet. It enables us to send value via the internet. Across the globe, without intermediaries. Where we use the internet to transfer information, we use blockchain ledgers to communicate value. Combining these two powerful concepts can create new digital infrastructures (like web3). Infrastructures that once again reshape the world like the previous internet (web2) did. 

We can now transfer the value via the internet to another person. Not recorded in a closed-off centralized environment, but in an open, decentralized ledger environment sparkling innovation. Build on the internet as an extra layer for value. 

But who records that value? - The miners & minters. 
And who validates that work and keeps an eye on the status of the book? - The nodes. 
But how do they know what rules there are and when and where to apply them? - The openly available consensus protocol. 
And you can join all of them by downloading and maintaining the software. 



## Portfolio assignment 1.1.9 The Byzantine General Problem 
Explain in your own words, on video (!!), what the Byzantine General Problem is and how this problem relates to a distributed decentralized ledger. 

**This goes for all the video's in future portfolio assignments:**
* Note 1: upload your video on YouTube or another platform of your liking and copy the link in your portfolio. Don't forget to adjust the privacy settings. We suggest opt-in for the unlisted option. We can't see the video if you set it private, and everybody can see it if you put it in public. 
* Note 2: REFRAIN FROM READING A SCRIPT. Explain it, don't read it. 
* Note 3: you should be visible for us to know that it was you.

## Further readings (sources or support) 
* [The Byzantine Generals Problem](Paper:https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf) 
* [BGP explained](https://www.youtube.com/watch?list=PL_tbH3aD86Kt-vJy4Q-rvZtXDmrLMG1Ef&v=R02sBpBY7Ug) 
* [Internet money](https://www.youtube.com/watch?v=_M457oZzyos)
* [Source from the slide](https://andolfatto.blogspot.com/2015/02/money-and-payments-or-how-we-move.html)

## Food for thought
Post your answers in the class Twitter Thread. You can pretend to help us improve the quality of conversation and help your fellow peers learn. But in the meantime, take a sneak peek at the answers…😉

