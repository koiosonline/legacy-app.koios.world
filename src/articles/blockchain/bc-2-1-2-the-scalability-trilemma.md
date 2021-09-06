# BC-2.1.2 The scalability Trilemma / a game of trade-offs

## A blockchain is a tool, not the end goal

Before you decide which tool you need, it might be wise to check what the problem is. You don't want to use a hammer when you are working with screws. Other tools, like a screwdriver, might do a better job. The better the fit, the better your solution. If you have a nail that needs to get into the wood, you can still drive this nail through wood with a screwdriver by hammering on it, but it isn't optimal. And even if you select the right tool, which would be a hammer, in this case, there are a multitude of different hammers 😉

The same thing goes for selecting digital tools: you first need to check the problem/use-case, and then determine the tool you need. Just as with the nail and hammer example, when you decide you'll use a blockchain, you still have many different types of blockchains. And just as with hammers: it is a game of trade-offs. A big and heavy hammer with a hard end will do the job as well. Still, a small lighter version is way more efficient and has more "cost-efficiency" (less effort/energy/friction). The same goes that you don't want to use a public blockchain when you record in-class student attendance. Where private ledgers offer more of [incremental innovation]( https://searchcio.techtarget.com/definition/incremental-innovation), open public blockchains offer [radical innovation]( https://techblog.constantcontact.com/software-development/types-of-innovation/).

## The capabilities of the tool

So, in general, we've got three types of capabilities when we talk about ledgers. We've got (1) decentralized, (2) secure, (3) scalable. These relate to each other, and you can't score a perfect grade in each part. The necessity to chose properties and characteristics for a blockchain and match them with your use case is also known as the [scalability trilemma]( https://medium.com/@aakash_13214/the-scalability-trilemma-in-blockchain-75fb57f646df).

![Scalability Trilemma](https://miro.medium.com/max/1400/1*Ue3oqEFsf7vN0TFSCJl_WQ.png)
[Source]( https://medium.com/@aakash_13214/the-scalability-trilemma-in-blockchain-75fb57f646df)

As mentioned before, it's just like being a consultant: It's either cheap, high quality, or fast. Of course, you can't have all three of them. So in the best case, you have two out of three and perhaps a bit out of all three—a design challenge. But every time you shift deeper in one of the components, you move towards a more specialized version of your ledger. Read more about it in the source of the article, but you probably get the gist of it already.

## The use case/problem determines the optimum
That you can't score a "perfect" on all three components isn't necessarily a problem. It all depends on your use case. So in the case of Bitcoin, for example, its current use case demands that it is more secure than scalable. If you want to apply it to other use cases, like a payments system, you want it to scale and be more private. For example, you don't want your boss to find out where you spend your salary. Or that the cashier can see how much compensation you receive each period. Therefore, if we switch use cases, we switch across the spectrum in the trilemma triangle. For example, when you talk about implementing the Lightning Network (LN), you offer a bit of decentralization for more speed of transactions. Paying via the lightning layer is fine as long as you buy your cup of coffee via Lightning. Still, perhaps it is wise to transfer the valuable transactions via the core layer.

More about this in level 3, for now: the problem/use-case determines the type of trade-off you make in selecting the type of blockchain(tools). You can't have all three of the database capabilities (scale, security, decentralization).


>💡 Some claim that we should aim for the middle and find a balance between all three capabilities, where you have decentralization, security, and scalability all in one. As you now understand, this all depends on the use case.

>💡 Picking a blockchain is, therefore, a game of balancing out the trade-offs!


## The current status quo might not hold in future
The question remains whether there will ever be a "perfect" solution or if somebody figures out another route bypassing the trilemma but still reaching the goals. Just like Satoshi bypassed the Byzantine general problem and did not technically solve it, but still enabled a decentralized ledger. Many protocols are currently testing new solutions in the field, possibly offering a one-size-fits-all solution.  
In the next session, we'll explain the different properties to tweak, enabling us to move between this scalability spectrum. So by tweaking the properties, you change the capabilities. So, by adding more iron to your hammer, you change the properties (iron), changing the capabilities (enabling you to hammer down bigger nails, but making the hammer heavier as well). So what properties are there in the digital ledger realm? That you will find out in the next session: the crypto flower 😊!


## Conclusion


**Remember that more decentralized blockchains are secure (no TTP risks) and therefore less efficient (locally). More efficient globally because of using one slower public ledger instead of many faster local centralized ledgers.**

It is a game of trade-offs where different blockchains can have other goals. If you cannot trust the current (or future!) TTP's or if the interests are too great to be in the hands of one party like with money and the web, for example, decentralization is the way to go. But if you want to improve a supply chain and aim to create and divide synergy with competitors you don't fully trust. Perhaps a lighter hybrid version is suited. Suppose you want to close off your ledger for everybody. Still, you want a cryptographically more secure ledger to store records. In that case, the private blockchain might be the way to go. Do keep in mind that, for example, a private ledger is more personal, faster, and cheaper, but also less secure and prone for the three risk categories.

Picking a blockchain is, therefore, a game of balancing out the trade-offs!
Different blockchains = different goals = different use cases (= “games” in our analogy)

**Concluding remarks from "[A systematic literature review of blockchain-based applications: Current status, classification, and open issues:]( https://www.sciencedirect.com/science/article/pii/S0736585318306324?via%3Dihub)**
"While blockchain applications are being widely deployed, many issues have yet to be addressed. By doing so, blockchains will become not only more scalable and efficient but more durable as well. The features they offer are not unique if judged individually, and the bulk of the mechanisms they are based on are well-known for years. However, the combination of all these features makes them ideal for many applications, justifying several industries' intense interest.

As blockchains become more mature, their applications are expected to penetrate more industries/domains than those covered in our survey. However, while many try to propose blockchains as a panacea and an alternative to databases, this is far from true. As already discussed, there are many scenarios where traditional databases should be used instead. Moreover, we identified the individual characteristics that are mostly required per each application domain. This facilitates the choice of the proper blockchain and the corresponding mechanisms to tailor the blockchain to the actual needs of the application."

>💡 Blockchain are not a solution for all the problems in the world, but do offer a lot of new capabilities.  

## Further readings

* [Incremental innovation](https://searchcio.techtarget.com/definition/incremental-innovation)
* [Types of innovation](https://techblog.constantcontact.com/software-development/types-of-innovation/)
* [Scalability trilemma](https://medium.com/@aakash_13214/the-scalability-trilemma-in-blockchain-75fb57f646df)


