# BC-2.2.2 The crypto flower leaf 1: cryptography

In this session, we describe the cryptography leaf. Cryptography is all about numbers, and might prove difficult. Luckily for you, you are still watching/reading the introductory blockchain course, so we won't spin your head off and remain on a decent level of mathematics. However, the deep dive remains for the die-hards in level 3. Can't wait? Check some of the further readings at the end of this session.

## Bits & Bytes
>💡 Before we start, you need to realize something: everything you see on a screen of "digital," is a collection of 0's and 1's. You are reading a text. The computer is reading a sequence of bits (0 or 1).

![Source]( https://primedisclosure.com/wp-content/uploads/2019/04/The-Matrix.jpg)
[Source Image Matrix]( https://primedisclosure.com/wp-content/uploads/2019/04/The-Matrix.jpg)

Whether we see letters, a movie, move our computer mouse, or touch a screen, it is just a representation of these zeroes and ones. The computer either collects them, computes the following action, and acts. For example, ticking your phone screen will lead to opening an app. Or clicking on a play button will show you the movie). It is why, for example, a video contains more bits and bytes (a lot more visual representation than an image).

>💡 This core language the computer uses is known as [binary code]( https://en.m.wikipedia.org/wiki/Binary_code), which consists of bits and bytes. A bit is a "0" or "1". A byte is 8 bits, so a combination of 8 "0"'s or "1"s (for example, 00110101 or 00000001 or 11111111).

## Counting bits
And from there, you can start counting: a kilobyte is a bit more than 1000 bits, a megabyte is 1000 kilobytes, a gigabyte is 1000 megabytes, a terabyte is 1000 gigabytes. Etc. The more storage you have on a computer, the more zeroes, and ones you can store. The computer uses the Core Processing Unit (CPU) to calculate the following steps to compute all these zeroes and ones. So a laptop with a massive storage capacity can "remember" many zeroes and ones, also helping to perform the computer better.

>💡 But why does a computer needs these things? Because the 0 and 1's not only represent bits and bytes, they also represent a number that can be used for calculation and a computer needs this to calculate the next step. So how does it all work? In more detail, you can find it [here]( https://www.makeuseof.com/tag/cpu-technology-explained/).

For example this byte 0 1 0 0 1 0 1 1 represents a number. An easy one: let's say if you have 8 zero's. This sequence equals the number of zero. If you change the last number, 0 0 0 0 0 0 0 1, you will create a new bye. The computer knows this as a bit at the number 1. If we change 0 0 0 0 0 0 1 0 we make it 2, where 0 0 0 0 0 1 0 makes it 4. [Here, you can play with the numbers yourself]( https://www.calculator.net/binary-calculator.html?b2dnumber1=00000110&calctype=b2d&x=95&y=11#binary2decimal).

>💡 By changing the bits, you change the sequence and the outcome of the number that the computer will use to its next step. So different input leads to a different output.

This is the rawest form of computer language. To talk directly with your computer, you can use your [RAM]( https://www.digitaltrends.com/computing/what-is-ram/). Still, nowadays we made it more user-friendly. You can talk with your computer by clicking your mouse (so you don't need to remember all the computer commands).

Perhaps a good example of directly talking with the software, is the character Neo from the Matrix. Like the pieces of computer code active in the Matrix, he too can see the world of zeroes and ones. He speaks the same language and can directly alter the output and do stuff other participants can't do. Because they don't see or know the command/language to talk with the operating system. Some of his friends can do it because they only know some commands, but only Neo directly sees the zeroes. If you have no idea what we are talking about, [have fun watching]( https://www.youtube.com/watch?v=ggFKLxAQBbc) .

So take, for example, the letter "K" (with a capital). [Converters]( https://www.convertbinary.com/text-to-binary/) will show you that we see a "K", whereas a computer sees 01001011. If you [calculate]( https://www.calculator.net/binary-calculator.html?b2dnumber1=01001011+&calctype=b2d&x=0&y=0#binary2decimal ) this byte, you'll get 75. The letter "k" (no capital) converts to 01101011, which is 107. So a K and k are, as you would expect, different outputs with different calculations. So if you change the input, the K to k, you change the outcome respectively 75 or 107. Other texts will lead to different numbers.


<blockquote style="border-color: #ff0bac">❓ Exercise: try to computer the word KOIOS. </blockquote>

What's convenient about numbers is that you can calculate them. A computer can multiply them etc. And here [cryptography]( https://en.wikipedia.org/wiki/Cryptography) kicks in.

>💡 Before you read any further, watch [this short clip]( https://www.youtube.com/watch?v=jhXCTbFnK8o). It is a crash course in cryptography. Suppose the second part of this clip goes too fast. In that case, we will discuss the materials in the elliptic curve & digital signature session as well.
 
## The hash function

Let's start with the first one, a function we encountered a few times already. The [hash function]( https://en.wikipedia.org/wiki/Cryptographic_hash_function#/media/File:Cryptographic_Hash_Function.svg). It is nothing more than a formula, where a certain input will always lead to a certain output.

Check out this picture for some examples.
![Source Hash function]( https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/1280px-Cryptographic_Hash_Function.svg.png)
[Source Hash function]( https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/1280px-Cryptographic_Hash_Function.svg.png)


The blue input represents the input, in this case a text. It could also be a button, a click, or any other sequence of bits. Because the computer reads a number and puts that number through a mathematical formula. In this formula the number is multiplied and divided into new bytes, resulting in a different outcome (number). An output number that translates into something readable again, or an action. In this example a text, the digest in the pink column.

As you see, the word Fox has an individual output based on the hash formula you use (different hash functions, are different formulas, and therefore will lead to different digests). So same input, different hash function = different output / digest. The `digest` is sometimes also known as 'the hash output'. The computer only uses the word 'Fox', turns it into bytes, calculates the total number of all these bytes, and uses this number as a variable input in the `hashing formula' (SHA – 256 in Bitcoin), and present is an output. SHA stands for Secure Hash Algorithm. It can do this in a split second. The output is always a fixed amount of bytes, as shown in the example. No matter how large the input is, the output/digest is the same (whether you wrote: "fox" or "the red fox jumps over the blue dog" 🡪 the digest is the same length.

>💡 Therefore, a hash formula is a very convenient tool to translate huge amounts of text into a fixed output. It doesn't matter if it is one letter or the entire content of the national library.

>💡 The digest is also uniquely tied to the input. If you change the input, you won't get the same digest, so the hash output is a digital fingerprint of the text input.

This makes cryptography a good tool to transfer messages between digital entities. For example, the internet uses SHA-256 in some places to transfer messages. The hash function isn't just shortening the message and creating a unique digital fingerprint. It is also a "one-way function". Easy to calculate in one direction, very hard to do so the other way around. In the video of this chapter, we explain it more visually. Also, see the further readings for good videos explaining the hash function.
As we will show you in further sessions, there are some restrictions on when a hash function can work well (size of text, randomness, etc.).


**We will also show you how the calculation works, but for now, just note the following**:
* **A computer reads numbers to calculate stuff like hashes**.
* **The hash comprises huge texts into a fixed-sized output of a certain amount of bits (256 bits in case of SHA 256).**
* **This output is a unique fingerprint of the particular text.**
* **The hash is a one-way function: easy to calculate but incredibly hard to reverse.**

Suppose somebody manages to reverse a hash function like SHA 256. In that case, you have the power to crack many systems in the world because their messaging system runs on it (like the internet of Bitcoin). An interesting movie about breaking encoded messages is [The imitation game]( https://www.imdb.com/title/tt2084970/?ref_=nv_sr_srsg_3)  about Enigma and the world's very first "computer" that cracked it.

## Cryptography in blockchains

Where do we use cryptographic functions in blockchains? In short: nowhere and everywhere 😊 Don't forget that an open public blockchain transfers open data, which isn't hashed at all.

>💡 **So in its very core, an open blockchain is open, and the only thing private is your private key. Without cryptography, we wouldn't have had blockchains. Miners need to validate transactions, so it does not usually involve encryption at all. ** All the other information is publicly available (in public blockchains). Other than protection for the private key, cryptography is used to relay information across the network. In a secure and efficient fashion.  

>💡 The primary forms of cryptography we encounter in a blockchain:
The cryptographic hash function
Proof of Work, not cryptography directly, but it uses the hash (and plays a vital role in the security of the network)
The public and private key pair (elliptic curve)
Digital signatures


As mentioned: all is openly verifiable and accessible, except the private key. The public/private key pair runs on a different algorithm, the ECDSA (elliptic curve digital signature algorithm). It is still about computing numbers, but in a different way. The formula/"algorithm" differs, but more about that later!  

As you know, we humans can't read bits and bytes (we can, but not very fast). This information needs to be made humanly readable, which the computer visualizes for us. Unfortunately, visualization still isn't very user-friendly. To verify these huge amounts of bits and bytes, we use the hash function, which results in visual public keys and hashes per block as you already know them. We also use the hash function in the proof-of-work algorithm, as we will show you later. If you remember the clip from Anders, we saw hash blocks (needed for PoW). To verify we all have the same history of data, we hash the transactions to make it humanly readable on sites like [Blockchain.info]( https://www.blockchain.com/btc/block/00000000000000000003f3a2b6173691878a18a33e8a76de6487216a44e92b83). Just remember the miners (computers) see zeroes and ones, where you will see hashed data presented as public keys. Remember that if you are using a public key, you are not anonymous but pseudonymous. You are hidden behind your private key and the math protecting it. Still, there are techniques to discover your identity (more about these techniques in later sessions).


## Conclusion
Open blockchains send data without hashing it, where data is publicly available. The only private thing in a public blockchain is your private key (unless you send encrypted data on your own). The private key allows you to access your funds (more later). However, public blockchains use cryptography in different parts to make the data more humanly readable, prove the integrity of data, and transfer data more efficiently. The PoW algorithm is one of the main components of the mining puzzle, which offers security to the network.

**Before we start with the next session, it is of utmost importance that you now understand how computers calculate and the role of a hash function (hide and transfer data). Check the further readings for more info and background to fully grasp these concepts.**

In the following sessions, we will find these use-cases of cryptography in blockchains per topic. So, sit back and enjoy the ride. But, first, get out there for a short, well-deserved break. You might need it because the subsequent sessions might prove a bit tough as "basic" sessions. Next up: essential cryptographic elements in blockchain technology. The first stop is the Proof of Work consensus algorithm.

## Further readings

* [Binary code](https://en.m.wikipedia.org/wiki/Binary_code)
* [Binary converter](https://www.convertbinary.com/text-to-binary/)
* [CPU explained](https://www.makeuseof.com/tag/cpu-technology-explained/)
* [Awesome Matrix scene](https://www.youtube.com/watch?v=ggFKLxAQBbc)
* [Binary calculator](https://www.calculator.net/binary-calculator.html?b2dnumber1=00000110&calctype=b2d&x=95&y=11#binary2decimal)
* [Cryptography](https://en.wikipedia.org/wiki/Cryptography)
* [Cryptography crash course](https://www.youtube.com/watch?v=jhXCTbFnK8o)
* [Cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function#/media/File:Cryptographic_Hash_Function.svg)
* [Movie about Enigma](https://www.imdb.com/title/tt2084970/?ref_=nv_sr_srsg_3)
* [Enigma](https://en.wikipedia.org/wiki/Enigma_machine)
* [Example visual representation of a block in Bitcoin](https://www.blockchain.com/btc/block/00000000000000000003f3a2b6173691878a18a33e8a76de6487216a44e92b83)


