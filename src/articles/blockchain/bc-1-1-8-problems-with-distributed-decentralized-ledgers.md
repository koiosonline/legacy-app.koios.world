# BC-1.1.8 Problems with distributed decentralized ledgers

You can imagine that distributing and decentralizing a ledger will cause several problems. If everybody has an equal say across the globe, it might cause a problem here and there 😉 

>💡 Despite these new problems, the most valuable thing is reducing the three main risk categories. But remain critical. Is the inefficiency worth the benefits of eliminating the TTP? Is the extra inefficiency less than the reduction in exclusion, dishonesty, and loss of records? Do you need censorship resistance? 

In other words: "do I need a blockchain?". As we will discuss further on this is quite a famous question in the blockchain scene.

>💡 The three main challenges distributing a ledger are:
1. Timing
2. Ordering 
3. Failure

>💡 Decentralizing a ledger adds: 
4. Coordinating the State

<blockquote style="border-color: #ff0bac"> ❓ Could you explain these challenges in your own words and provide an example for each? [Check answers🦉](https://twitter.com/JordiJansen101/status/1431300372707041284?s=20)</blockquote>

Where exclusion, dishonesty, and loss of records are downsides of centralized systems, distributed systems have a problem of (1) timing, (2) ordering, and (3) failure. Add (4) the coordination problem in the mix because you don't have a coordinating third party to rely on. The ledger's goal of mimicking the world by recording the transfer of value doesn't change! However, the way to reach that goal, representing the world as best as possible, changed. To mimic the real world, you need to tackle these challenges. A bit more elaborated on the challenges:

1. Arrange the transactions on time. You need to arrange is to record the transactions as fast as possible. Moreover, it needs to represent/mimic the world as best as possible, as seen in our session about the perfect ledger.
2. You need the ordering, the logical sequence of transactions, to be secured as well. It would be best if you connected the storyline. Every node needs to have the same chronological order. Otherwise, the stories don't match up. We will explain later why this is important. 
3. There's a huge problem when nodes start to fail. For example, when nodes run out of power or get corrupted. Also: people will try to arrange the system to their advantage. So whether centralized or decentralized, every distributed system has this problem inherently. The size of distribution often dictates the size of your problem (5 nodes are easier to manage than 50). 
4. Challenges in the protocol, how to reach consensus across the globe 


## Twitter example (distributed, not decentralized) 
Take Twitter, which acts on a centralized but distributed system. Twitter is the TTP in this case. It runs on Twitter nodes. The same goes for Google and Google nodes or WhatsApp on Zuckerberg nodes: all the nodes of these TTP's are spread across the globe to reduce the risk of a single point of failure. Still centralized, I can't become a Twitter node and access the data. So Twitter determines "this transaction is valid, this transaction isn't valid". As painfully shown sometimes when they censor public debates. You can join as a user, as the product. You're not able to join all the data, consensus algorithms, or rules that manage Twitter. And that's how Twitter makes money within this closed-off environment. So Twitter guards the content and is responsible for it. The same goes for the banking system. WhatsApp filters their content. Etc. So we have a trusted third party coordinating this distributed ledger. 

>💡 It is a business model of extract user (TTP/Web2 = current internet) versus ecosystem model of enabling users (no TTP/Web3 = new internet).

So imagine a world where Twitter isn't there as a TTP to prevent the three problems (1) Timing, (2) Ordering, and (3) Failure from happening. So imagine a Twitter feed with no chronological order. Or a Whatsapp conversation, where other people in the group see another chat sequence than you. Although this might make for an interesting WhatsApp conversation, this is probably undesired. We probably want to see the same chat sequence. Preferably in a timely fashion 😉 

The same thing goes for banking transactions: Let's say that I have 200 digital euro's in my bank account. If a node wants to know if a transaction is valid, it must be sure that I still own this money. So if ledger A has a different history than ledger B, the funds might be lost in limbo. Which happens more often than you think when crossing ledgers in the banking system! So let's say I want to send 200 euros to a country in Africa. And the person from Africa will send it towards Russia. Suppose somebody else picks up the transaction from Africa to Russia first before recording my transaction to Africa. In that case, they will never know that it is a valid transaction because they don't have the exact ordering. The ledger doesn't quickly mimic the real world very well. Of course, banks use their consensus mechanisms, called the banking consensus. Still, you can imagine that not every bank in the world uses the same protocol or has their administration entirely up to date. For the accounting nerds like me, the banking system works as an account base accounting. The account is leading instead of the described example of transaction-based accounting, where the transaction is followed. We will later explain why this is important. For now, remember: the sequence, the ordering of transactions, is vital to tell the story in a ledger. 

So it would help if you had your ordering fixed to follow the money through the ledger. Bitcoin works with a transaction-based system, where the transaction is tracked and not the accounts. All the ledger does is follow the transfer of bitcoins between peers across the globe. As mentioned, this is called transaction-based accounting. Let's say I own bitcoin. I do not own bitcoin. I own received transactions which we call bitcoin. If I want to spend bitcoin, I must transfer the transaction (the data) to somebody else. My transaction moves from my account to the next. The miners pick up this transaction, record it, and present the page to the nodes in a decentralized world. All the nodes around the world update their ledger. They are eventually reaching consensus, updating who owns what data. The data, the transaction, the bitcoins are now in the hands of the next person. Once again: in centralized distributed systems, like Twitter, the TTP takes care of this problem. They order transactions. Not data as money, but in their case, data represented as comments and likes. In decentralized distributed systems, there is no TTP to take care of this ordering. So we need to figure out another way. Decentralized solutions are plentiful nowadays. We will describe many later in this course. 


So: 1. Ordering, 2. Timing and 3. Failure

The timing means not all nodes work equally fast. In the WhatsApp example: if I'm chatting, I want to have the same information as everybody else across the globe. Or if I'm sending money, I like the same status: "who owns what". I need to know for sure that that person still has the money. Just imagine a digital chat where you would need to wait for 15 minutes to send your chat to another person. Timing is key. 

Failure is also a very sneaky one: people could try to corrupt the system. They will try to send money in 2-fold. I could send my 200 euro to an African country and America, Germany, Spain, Indonesia. Every time the same amount, because I do not prove that I received the money. But I will tell the different nodes, different persons, to receive my money. A lousy money system. I shouldn't be allowed to cook these books, one of the TTP's critical roles in monetary systems: to prevent ["double spending"](https://www.mycryptopedia.com/double-spending-explained/). Note: this problem does not exist with physical cash. 
Another example of failure is good old-fashioned downtime. For example, if there are no working nodes in Australia, that region would not access the data. Or delayed access, which would result in a prolonged WhatsApp conversation.

>💡 So, these are the three problems you encounter with distributed systems. However, we have a considerable challenge if you add the lack of a trusting coordinating party in the mix. This problem of trustfully sending "messages" (data) between spread-out entities that cannot trust each other is also famously known as the "Byzantine General Problem" (BGP).

We first repeat an essential key element before we start the next session to explain this Byzantine General Problem and why it is crucial for Distributed Decentralized Ledgers. In distributed decentralized ledgers, we remove the TTP and replace it with a consensus protocol we trust. We still need to deal with the three distribution problems, only this time. We don't have the help of a TTP. So by removing the TTP, you decrease efficiency. The design becomes more inefficient because it takes more time, more people, more power to record transactions. Instead of one party maintaining the ledger, we could have a thousand parties supporting it. But the benefits are that you reduce the downsides of 1) loss of records, 2) dishonesty, and 3) exclusion. You need to ask yourself if this reduction of risks outweighs the inefficiency. 

## Portfolio assignment 1.1.8 Problems with distributed decentralised ledgers 
The three main problems of distributing a ledger are:
- timing
- ordering
- failure

Explain how you think Bitcoin could deal with these problems. Remember, there is no coordinating party but a coordinating protocol. 

## Further readings (sources or support) 
* [Double spending problem](https://www.mycryptopedia.com/double-spending-explained/)

## Food for thought 
Post your answers in the class Twitter Thread. You can pretend to help us improve the quality of conversation and help your fellow peers learn. But in the meantime, take a sneak peek at the answers…😉

