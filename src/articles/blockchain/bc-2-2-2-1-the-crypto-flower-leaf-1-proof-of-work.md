# BC-2.2.2.1 Proof of Work



## Efficient calculation
We use hashes to verify data. The verification is the validation of transferred information: is the data unaltered/ matches the expected outcome, and can we recalculate it. So now, we have the availability to put vast amounts of texts into concise outputs. So a cryptographic hash algorithm does nothing more than translating all these numbers resulting from the input (for example, from the word Koios as done in the previous session). The hash function keeps altering the input in a function (formula) until it arrives at a 256-bit output in the case of SHA-256. We will show you later how that's done. But by altering it with the function, you create the same fixed length of the output. This makes it efficient to verify data. But, also very important, you can't alter the information.

>💡 So, it's a sort of a stamp, a digital fingerprint. As soon as you change this input, you change the output.

## Introducing Proof of Work calculations

We can use this, for example, to communicate something, as shown in the introductory clip cryptography crash course. But also to calculate something. And why do you want to calculate something? Here Proof of Work introduces itself: we use the hash function as a basis for the proof-of-work consensus. A computer can calculate a hash in an instant. You can check this via [Anders his website]( https://andersbrownworth.com/blockchain/blockchain). As you will see, by entering random data in the field "data", you will instantly change the hash.

As you now know, the hash changes because of the new total number that comes out of your input. So you change the information by adding data in the data field (= your start number for the formula). And, therefore, the output, compressed and represented by the SHA256 hash. So this shows that to calculate one hash, you only need a split second.

>💡 Satoshi thought: a split second is not enough time for 10,000 nodes across the globe to reach a consensus. Satoshi needed to add complexity to this calculation process to buy time for nodes to reach an agreement. For this, Satoshi used Proof of Work.

The goal is to (1) delay the process and (2) encourage people to put in the effort to secure the network. These two points lead to "proof-of-work," where the miners need to score below a specific numeric outcome when they try out a number. Everything is a number for your computer, so the output as well. We read a hash, the computer a number. So every time you hash input/data, you will receive an outcome. The same input will lead to the same output, which translates to a readable hash. The hash, the digital fingerprint, is nothing more than a visual representation of a 256-bit number. But two hundred fifty-six bits, either 0 or 1, will lead to 2^256 possible combinations. Approximately 10^70, an insanely huge number. Nearly as large as the number of atoms in the known universe ([10^82]( https://www.universetoday.com/36302/atoms-in-the-universe/)). The main goal of the proof-of-work puzzle is to calculate the hash and reach an output number that lies below the [difficulty target]( https://en.bitcoinwiki.org/wiki/Difficulty_in_Mining) (= outcome of a puzzle). Read more about it [here]( https://en.bitcoin.it/wiki/Difficulty) as well. As you can imagine, scoring below a specific number is quite challenging. It keeps getting more complex when you lower the target.

## The mining race
 
With mining and hashing, it is the same concept as with a wheel of fortune. The more tickets you buy (more mining power), the more you increase your chance of winning (finding hash below target = solve puzzle = present block to nodes and win reward). Only this time, the wheel of fortune is tremendously large (10^70 versus 100 in our example). Luckily you can influence the amount of spins in the rotation you can do per second. By buying better mining hardware, you increase the computing power. Increasing the computing power increases the number of hashes you can calculate per second (= spins on the wheel of fortune). But your competition doesn't sit idle either. So if you all buy more power, you will get luckier and have an output number below the target (the wheel of fortune spins out your number). If everybody keeps buying more power, which they do, the target becomes too easy.

For this reason, the protocol adjusts the targets for every 2016 blocks. If the average time to solve a puzzle is below ten minutes, the difficulty adjusts accordingly. The difficulty target is made humanly readable as the "amounts of zeroes'' a hash needs to start with. Currently, the block's hash needs to begin with 18 zeros, but remember: this is just a visual representation of a difficulty number. In this example, you see 19 zeroes + the first transaction in the block, a.k.a. the "coinbase transaction" paying out the reward for solving the puzzle. The coinbase transaction is the first transaction in the Merkle tree. It is the transaction in which the miner sends the mining rewards and block rewards to their address. Or it is sometimes used for additional calculation space mining puzzles.

## An example
So let's go back to [Anders example]( https://andersbrownworth.com/blockchain/blockchain). This website works with a difficulty target represented by four zeroes, like Bitcoin in the Genesis block. It is an easy target, so a very high output number that is easy to score. If you change the data in the field, so, for example, select a different transaction as a miner, you change the outcome. It is impractical, of course, and perhaps not always possible (like in the beginning of Bitcoin when there were no transactions), so we don't change the transactions. Still, we add a random number called "the nonce". So try it out yourself: change the data and recalculate the nonce. For example, adding the text "hello world" will lead to a new nonce of 85,640. So by adding the bits of bytes behind number 85,640, we finally have a hash output that scores low enough that the difficulty is solved (and represented visually with four zeroes).


In short: proof-of-work uses the hash algorithm by adding a difficulty number where the output of the hash formula must be under (visually represented by 18 zeros). Unfortunately, this is a minimal number. Therefore, miners need a lot of trials before they finally score below the target. This is done because otherwise, it would be too easy to mine blocks. As a result, too many truths would be created, plus the blocks would be too easy to rewrite because it is not difficult to make a block. Thus, opening up the history of transactions for malleability would enable people to alter the Bitcoin story of who owns what. Therefore the miners succeed, on average, every 10 minutes because if they get better at calculating hashes, the difficulty rises. The target number drops (making it more challenging to score below. Like limbo dancing 😉

Side note: PoW is designed so that there are no shortcuts other than trial and error. You can only solve this faster by buying computational power, increasing the chances versus your competitors—a very complex game with all kinds of strategies, but more about this later.

Note the following:
Check out [this block]( https://www.blockchain.com/btc/block/613713). Block 613713 is 14,776,367,535,688.64 times harder to solve than Genesis block 0!! The more complicated the block is to solve, the harder it is to rewrite history. This is also known as the [hash rate]( https://coinsutra.com/hash-rate-or-hash-power/). The hash rate has risen [tremendously]( https://bitinfocharts.com/comparison/bitcoin-hashrate.html) over the last few years (for Bitcoin and other PoW based blockchains), mainly caused by the introduction of ASIC mining. Some ASIC-resistance blockchains see a lesser increase (ASIC resistance = hard to calculate the hash, so they use another hashing algorithm than SHA-256). (Bitcoin, 2019) (Bitinfocharts, n.d.)

If you want to change the past, you need to solve ALL the block puzzles since that past. So you would also need to solve in the Anders Example the blocks 2,3,4,5. This is doable with such a low difficulty in the Anders example, but in Bitcoin's case, you need to solve five blocks while out-competing the rest of the world. Even if you did succeed and rewrite this history, WE ALL SEE! Because you have a different hash than us all.

We already all agreed that our truth was the SSOT, so you would also need to convince us by forming the longest chain. The longest chain is only possible if you act according to protocol, so play by the rules. If you don't, you would have wasted vast amounts of energy. So rewriting the past and doing something invalid is possible, but you won't reach a consensus with the rest. We honest nodes would not accept your different block. We would analyze the change compared without blocks, find out that the transaction is invalid, and we would ignore your block because we don't want to risk building our block and energy power on your new false blockchain. In addition: not only is this economically not profitable, we might also have principles on building on your fraud ledger.

 
Best protection: if we did build on your ledger, all would know that there is a new chain, a new SSOT. This time it includes a fraudulent transaction, and everybody will know. What would happen with our mining rewards, you think?

See the guiding video in further readings for a more in-depth of PoW and how the hashing puzzle works. An important note is a beautiful design in which proof-of-work operates: it is tough to reach an outcome below the target, but if a target is reached based on the data (transactions between entities) and the nonce, it is straightforward to verify. Just recalculate the hash with the same input data (transactions) and nonce, and you should derive the same output number.

>💡 Just like a Sudoku, the PoW puzzle is hard to solve but easy to check.

![Sudoku Example]( https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F1881100%2F31103734-93298ffe-a7a6-11e7-8dcc-b0fdabf4f72a.png&f=1&nofb=1)
[Source Sudoku example]( https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F1881100%2F31103734-93298ffe-a7a6-11e7-8dcc-b0fdabf4f72a.png&f=1&nofb=1)

## How does it work – in detail

But how does the proof of work algorithm work? It's nothing more than translating all the transactions in binary code and other block header info like previous hash, block number, etc. Set nonce to number 1 and hash it. Most likely not a number that results below the target/hash that starts with 18 zeros. Don't rearrange the transaction. Change some bits and bytes by changing the nonce to 2 and calculate the new hash. Once again, no 18 zeroes? Try 3, try four, etc. Eventually, in block 613713 from the previous example, it was a solution at 1,558,455,829. Side note: the nonce can only go up to 4,5 billion, so after you have tried all the nonces, you will need to rearrange the coinbase transaction (that's your transaction of a miner, the easiest one which you can alter).
Final remark: how does the hash work / how can a different size of text result in a 256-bit string in, for example, SHA256? We have a vast number as input in bits and bytes, which need to result in a series of 256 bits (which equals a number between 10^70, as you now know). This means we need to chop up the considerable input number and compress it. We, therefore, chop up the bits and bytes of the input in pieces of 512 bits. We then compress these 512 bits into 256 bits (delete half of the zeroes and ones) and then add the next 512 bits to these 256 bits and once again delete all the zeros and ones until you have a new piece of 256 bits. Every time you compress it, you delete bits, and you change the output. If you do this often enough, you will result in a 256 output, totally untraceable to its core but recalculable from the start.

This picture from an epic, but bit outdated Coursera course from Princeton shows the hash function and compression visualized.

![Image Sha Princeton](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-2-2-1-the-crypto-flower-leaf-1-proof-of-work-image1.png)
[Source Princeton Course](https://www.coursera.org/learn/cryptocurrency)


Find all you need to know for now about the SHA formula in [this video](https://www.youtube.com/watch?v=DMtFhACPnTY). [This second more in-depth video]( https://www.youtube.com/watch?app=desktop&v=fOMVZXLjKYo) is the origin of the above image, and discusses cryptography in general.  

## Finding a hash is not easy anymore
Calculating one hash doesn't cost that much energy. But finding a hash that starts with 18 zeros is an insane challenge that takes entire mining farms across the globe approximately 10 minutes. This calculation costs money and uses energy, which, as mentioned, brings up a lot of debate. More about this later!

Interesting reads about PoW can be found [here]( https://medium.com/@laurentmt/gravity-10e1a25d2ab2),  here [POW explained]( https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-proof-of-work) or here [value of Proof of Work]( https://www.youtube.com/watch?v=ZDGliHwstM8).

## Concluding remark


>💡 Not many people realize this, but for the first time in human history, we now use (crypto)currency backed by energy. Energy money.

So we directly use energy to create this monetary value. It is the energy money that Thomas Edison and Henry Ford [proposed more than a century ago]( https://energybackedmoney.com/chapter5.html). Energy money on a global scale. Since our entire universe exists out of energy, you would think that might be worth something. If not: remember that because it's expensive to calculate, it makes it very hard to attack a page and presents a unique fingerprint per block, producing an immutable ledger.


Wow! Have you made it 😊 Hard times keeping up? Just remember that you start growing, and learning outside your comfort zone is hard. Reread this chapter, ask questions, and do the hard work to grow.  Challenges and new things create new brain connections 😊
Also possible: didn't we dazzle your mind? Let us try again with the ECDSA in the next session!


## Further readings

* [Blockchain Demo Anders](https://andersbrownworth.com/blockchain/blockchain)
* [Universe Today, amount of atoms](https://www.universetoday.com/36302/atoms-in-the-universe/)
* [Mining difficulty one](https://en.bitcoinwiki.org/wiki/Difficulty_in_Mining)
* [Mining difficulty two](https://en.bitcoin.it/wiki/Difficulty)
* [Block rewards](https://www.investopedia.com/terms/b/block-reward.asp)
* [Coinbase company](https://en.wikipedia.org/wiki/Coinbase)
* [Explaining Hash rate](https://coinsutra.com/hash-rate-or-hash-power/)
* [Bitcoin hash rate](https://bitinfocharts.com/comparison/bitcoin-hashrate.html)
* [SHA 256 explained](https://www.youtube.com/watch?v=DMtFhACPnTY)
* [Princeton, intro to crypto](https://www.youtube.com/watch?v=fOMVZXLjKYo)
* [Use of PoW](https://medium.com/@laurentmt/gravity-10e1a25d2ab2)
* [PoW explained](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-proof-of-work)
* [The value of PoW](https://www.youtube.com/watch?v=ZDGliHwstM8)
* [Energy backed money](https://energybackedmoney.com/chapter5.html)


