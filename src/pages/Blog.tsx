import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, User, ArrowRight, X, Share2, Linkedin } from 'lucide-react'

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "FAST & CS: Why is FAST so famous for its CS?",
      excerpt: "I first heard about FAST when I was in my second year of college. It was my biology teacher who mentioned it casually in class. He talked about FAST and GIKI, and at that time both names were completely new to me. I remember telling him, 'Sir, this is very interesting stuff and our field is kinda boring.' I didn't know what computer science really was, but something about that conversation stuck with me.",
      fullContent: `I first heard about FAST when I was in my second year of college. It was my biology teacher who mentioned it casually in class. He talked about FAST and GIKI, and at that time both names were completely new to me. I remember telling him, "Sir, this is very interesting stuff and our field is kinda boring." I didn't know what computer science really was, but something about that conversation stuck with me.

After that day, whenever someone mentioned computer science, FAST would almost always come up. People spoke about it like it was the gold standard. Everyone had something to say about how strong FAST's computer science program is, and I started to wonder what made it so special.

Before I actually stepped into the world of computer science, I went deep into researching FAST. I wanted to know what this university really is, why it gets so much respect, and what makes its graduates stand out. So here's what I found and what I've experienced since then.

FAST was the first university in Pakistan to introduce computer science as a proper degree. It all began back in the early 80s with a small setup in Karachi. At that time it was affiliated with Karachi University and had only a handful of students, but the vision was clear even then. This wasn't someone's personal venture or a business setup. FAST was started as a foundation university by Agha Hasan Abedi, a man whose name not many people know today, but whose contribution to education in Pakistan is beyond incredible. With just some donation money and a vision to bring advanced science and technology to the country, he laid the roots of what would become one of the top tech institutions in Pakistan. From that small beginning, FAST now has campuses in six major cities and continues to grow stronger every year.

FAST is known for producing some of the most skilled and hardworking computer science graduates in the country. But it's not just luck. The secret behind this is something every FAST student knows too well. It's the ragra. Yes, the grind, the struggle, the non-stop pressure that defines student life here. Maybe I'll write a full blog on what ragra really means, but for now just know that FAST doesn't let you relax. The exams are difficult, the grading is strict, and the deadlines never end. But this is exactly what builds resilience and real-world skills.

There was a time when companies like Microsoft would come directly to FAST for hiring. They would visit the campus, take interviews, and pick students straight from there. The university became known for sending many of its graduates to big tech firms in Silicon Valley. Even though that direct hiring pipeline isn't active anymore, the impact it left still echoes in the tech circles of Pakistan.

The alumni network of FAST is huge and powerful. You'll find FAST graduates in companies like Google, Meta, Amazon and so many others. I was listening to a podcast where a FASTian, now working at Google, shared a story about his flight to the US. He found other FASTians on the same plane. And when he reached Google, there were even more FASTians already working there, not recent graduates, but people from the early batches who had already made their mark. That's what amazed me. Even back then, FAST had found its way into Silicon Valley. It wasn't some recent phenomenon. The university had been quietly producing talent that made it to the top long before social media started hyping things up.

And it's not just the tech industry. Many people in Pakistan's entertainment world are also FAST graduates. You'll find them leading teams, building startups, launching products, and even creating viral content. FASTians are everywhere. From classrooms to boardrooms.

One thing I always found interesting is how FAST focuses more on producing strong engineers than chasing research. Unlike some other universities in Pakistan that are all about papers and publications, FAST's main goal has always been clear. Train students so well that they can step into the industry and start contributing from day one. It's about preparing real-world problem solvers. People who can build startups, work under pressure, and adapt to tough environments. The four years at FAST are not easy. Surviving the program itself is an achievement. But that's what makes the graduates different. It's hard, and that's the point. If it were easy, everyone would have done it.

Today, even after so many years, the name still stands strong. The Foundation for Advancement of Science and Technology, known widely as FAST, and its computing school NUCES, continues to be the top choice for students who are serious about computer science.

If you've ever wondered why people talk about FAST with such respect, this is why. It's not about hype. It's about the results. The students, the alumni, the grind, the culture. All of it comes together to create something that's honestly hard to describe unless you've experienced it yourself.

And maybe that's what makes FAST so different.`,
      author: "Azan Waseem",
      linkedin: "azan-waseem",
      date: "May 22, 2025",
      readTime: "12 min read",
      category: "University Guide",
      featured: true,
      slug: "fast-cs-famous"
    },
    {
      id: 2,
      title: "Transitioning from Pre-Medical to FAST",
      excerpt: "How a Pre-Med Student Can Get Into FAST for Computing Programs? If you are a pre-medical student thinking about switching to Computer Science at FAST, the first thing you need to do is pause and ask yourself one simple question: Do I really want to do this? Because this decision changes everything.",
      fullContent: `How a Pre-Med Student Can Get Into FAST for Computing Programs?

If you are a pre-medical student thinking about switching to Computer Science at FAST, the first thing you need to do is pause and ask yourself one simple question: Do I really want to do this?

Because this decision changes everything.

Shifting from pre-med to Computer Science is not just about choosing another degree. It is about starting fresh with a completely different mindset. If your answer is yes, and you are fully ready to commit, then do not waste any more time. Start now.

The Additional Mathematics Exam

The very first requirement is the Additional Mathematics exam. If you are from a pre-med background, FAST makes this exam compulsory for admission into CS. Passing it is not optional. If you fail, your admission will be cancelled, even if you get a great score on the entry test.

This is the point where many pre-med students feel a wave of doubt. It is natural. You have spent the past two years with biology, chemistry, and physics. Now suddenly you are expected to solve trigonometry, algebra, functions, and calculus within a few months.

It feels unfair. You start comparing yourself with students who have been doing maths for years. But here is the truth: It is not about how much time others had. It is about how well you use your time now.

How to Study Smart

The best approach is not to study just for the sake of passing. Learn the concepts deeply. Every topic, every example, and every exercise from your textbook matters. These same concepts will return in your first-year university courses like Calculus, Digital Logic Design, and Programming. Some exercises are more important than others. I remember one teacher casually saying:

"I would recommend solving this particular exercise twenty times."

He did not expect anyone to actually do that. But I did. I repeated each question in that exercise so many times that my hands started solving them automatically. It felt like I had trained my muscle memory.

That is the level of focus and repetition you need when you are short on time.

Resources You Should Use

When it comes to preparation, you might hear people say things like, "Join KIPS" or "Go to an academy."

But honestly, you can prepare much more effectively at home.

- Watch the full Hashim Zia playlist on YouTube. It is one of the best and most complete resources for the FAST entry test.
- Practice from KIPS books.
- Solve FAST past papers to get familiar with the paper style.
- Keep your FSc books close, because they form your base.
- If you ever get stuck on a question, especially from KIPS books, use the Maqsad App (Not a paid promotion; it was genuinely helpful for me). Its doubt-solve feature is extremely helpful. You just take a picture of your question, and it gives you a clear and fast solution.

It can save hours of confusion.

Discipline Matters More Than Hours

Another thing that really helps is having a routine. If you find it hard to stay focused at home, study at a teacher's place or somewhere outside your room. What matters is consistency. You do not need to study all day, but you do need to study every day.

Entry Test Options

Once your Additional Maths exam is cleared, you can apply to FAST through one of three options:

- SAT
- NAT  
- NU Entry Test

For most students, especially those from a pre-med background, the NU Entry Test is the most suitable. It is designed with FAST's own format and is the easiest to prepare for using Hashim Zia's videos.

Final Advice

In the end, remember this. Just because you did not study maths in college does not mean you cannot succeed in CS. You are not behind. You are just coming from a different starting point. What matters now is how committed you are and how well you manage your time and energy.

The road is not easy, but it is clear. Stay consistent. Practice with purpose. Use the right resources. Believe that you can catch up. And once you do, you will not just pass the test. You will walk into FAST with confidence, knowing you earned your seat in one of the top CS programs in Pakistan.`,
      author: "Azan Waseem",
      linkedin: "azan-waseem",
      date: "May 01, 2025", 
      readTime: "8 min read",
      category: "Pre-Med & Entry Test",
      featured: false,
      slug: "pre-med-to-fast"
    },
    {
      id: 3,
      title: "Signal as alternative of WhatsApp",
      excerpt: "A comprehensive comparison of Signal and WhatsApp for secure messaging. Signal offers several advantages over WhatsApp in terms of privacy and security: End-to-end encryption by default for all communications, open-source code that can be audited by security experts, minimal data collection and storage, no ties to large tech companies, and independent security audits.",
      fullContent: `A comprehensive comparison of Signal and WhatsApp for secure messaging:

Privacy and security features

Signal offers several advantages over WhatsApp in terms of privacy and security:

- End-to-end encryption by default for all communications
- Open-source code that can be audited by security experts
- Minimal data collection and storage
- No ties to large tech companies
- Independent security audits

User experience comparison

While Signal provides excellent security, it also offers a great user experience:

- Clean and intuitive interface
- Similar features to WhatsApp (text, voice, video calls)
- Group chats and media sharing
- Disappearing messages
- Cross-platform availability

Making the switch to Signal

Transitioning to Signal is straightforward:

1. Download Signal from your app store
2. Register with your phone number
3. Import your contacts
4. Start messaging securely

Additional benefits of using Signal:

- No advertisements
- No data mining
- Regular security updates
- Community-driven development
- Commitment to privacy

By switching to Signal, you're not only protecting your own privacy but also contributing to a more secure messaging ecosystem.`,
      author: "Talha Asghar",
      linkedin: "talha-asghar",
      date: "March 21, 2025",
      readTime: "5 min read", 
      category: "Privacy & Messaging",
      featured: false,
      slug: "signal-whatsapp-alternative"
    },
    {
      id: 4,
      title: "Why piracy should be avoided?",
      excerpt: "Is it moral to pirate stuff? I have been wondering about this question since early 2020. I never encouraged piracy (may be I did unintentionally and I seek Allah's forgiveness) even before 2020 but I used to pirate books and software prior to that myself (May Allah forgive me for this as well). But once I got familiarised with open source and linux world I started to question my past.",
      fullContent: `Is it moral to pirate stuff?

I have been wondering about this question since early 2020. I never encouraged piracy (may be I did unintentionally and I seek Allah's forgiveness) even before 2020 but I used to pirate books and software prior to that myself (May Allah forgive me for this as well). But once I got familiarised with open source and linux world I started to question my past.

In fact, I reached out to my teachers as well because I was in this cognitive dissonance. I could not digest the fact that whatever I am learning is by stealing the works (books) of other humans and whether any earning based on this knowledge can be classified as halal rizq or not.

Today, If you are feeling the same and want to learn more about this issue then you should continue reading this article. I would like to add a disclaimer here that I am not an expert on the subject of Islamic Jurisprudence so take my opinions with a pinch of salt.

Is piracy stealing?

Yes, Piracy is stealing. What's stealing? In my view, stealing is to take or use any possession (material or immaterial) of a person without his / her explicit permission. Material possessions can be things like books or software written by someone and immaterial possessions can be things like ideas of a person.

So, when you are downloading some software or book which is an intellectual property of that person; are you doing so with his / her explicit permission? If the answer to this question is NO then my friend you have been doing stealing intentionally or unintentionally. What should you do now? Taubah: a) Recognize that what you were doing was wrong. b) Don't do it again and if you can then undo the damage. c) A firm resolution with yourself that you will not get back to it again.

What does Muslim scholars say about piracy?

Almost all Ulema would agree that a person should not mass distribute material or immaterial possession of a person without his / her explicit permission irrespective of that fact whether you acquired that possession by purchase or not with one exception; that is if they agreed upon this during purchase.

The Contract

If during purchase it was agreed upon by both parties a) buyer and b) seller that the buyer has the right to mass produce it then obviously its fine to share it (again depending on the exact contract terms). Buying something from someone is basically a form of a contract. So the terms of the contract must be respected and if there is an ambiguity then it should be rectified by discussion rather than exploiting that ambiguity for your advantage.

Can I share a book or software that I purchased with some of my friends?

If during purchase it was decided then yes you can. If it was not decided then there is an ambiguity and you should contact the owner and clarify the situation and ask for explicit permission before doing so.

Does me buying a book or software makes me the owner?

Depends on the contract of purchase. Again, if there is an ambiguity you should ask the person you bought it from. Ideally, this should be discussed before the purchase to avoid such inconveniences and problems.

Mass distribution is unethical and immoral

So far, we have established that mass distributing someone's work (for both commercial or non-commercial purposes) without his / her explicit permission even if you have purchased it, is not a moral thing to do.

Personal non-commercial use of pirated stuff

The trickier part where Muslim scholars are divided is whether or not can you download something that is available for free publicly on internet for non-commercial personal use?

Some Muslim Scholars that allow downloading books and software from internet for personal use argue that you were not the one who stole those books and published them on internet. So as long as you are not mass distributing them the proof of burden on the Judgement Day will not be on you but instead on the person who put them on internet at the first place. It is to be noted that these scholars allow only non-commercial personal use with the condition that you will not be mass distributing or sharing them in any shape or form.

There are Muslim Scholars which discourage downloading pirated books and software from internet even for personal use. They argue that your downloading of such material encourages the person running such piracy sites to publish more of such material and content because he is getting attraction and traffic on his site which he can then monetize.

In short, according to some scholars you can download books or softwares from internet that are pirated copies of someone's else work as long as you dont mass distribute or share them with anyone else and use them personally in non-commercially way only. There are other scholars who totally discourage this because your downloading of pirated stuff encourages the site owner to continue piracy or do more piracy. So, by downloading such material you are also contributing your part in this sin.

So, if you are pirating stuff for personal please don't encourage others to do the same and if someone is asking for a resource make sure you point him to a legitimate sources and let him decide if he wants to pirate it or purchase it. Don't do the devil's work of sharing pirated links! You might get questioned about this on the Day of Judgement. So be mindful of the actions you do.

Why pirate stuff when there are free alternatives available?

Why at the first place you need to pirate something that has a free legitimate alternative available that you can download for free? Why go down the wrong path? Ask yourself this next time when you are about to pirate something.

Don't sail the black ship

Here are some tips that can help you live a life that is free of piracy:

- Use Linux instead of Windows. Linux is a free and open source operating system and by switching to it you will be saving yourself from a lot of trouble of pirating stuff.
- Pirated software most of the times have malwares in them that can cause harm to your system. By switching to open source softwares not only you will be avoiding this potential harm but in fact you will get much better performance as proprietary software has too much bloatware and adware in it.
- Try to find books with Creative Commons license. These are the books that author has explicitly given permission for to use for free. There are many types of Creative Commons licenses some even allow commercial use. Learn about these licenses.
- For tutorials there are tons of MOOC (Massive Open Online Courses) sites that offer free quality content with some limitation. For example you might have to pay if you want to get a certificate but content itself would be free. YouTube is also a great platform to learn new stuff.
- When purchasing an item especially digital ones .i.e. softwares & ebooks ask explicitly from the author whether he is transferring ownerships rights to you or not? This will save you from a lot of problems down the line in future.`,
      author: "Talha Asghar",
      linkedin: "talha-asghar",
      date: "February 23, 2025",
      readTime: "10 min read",
      category: "Free and Open Source Software", 
      featured: false,
      slug: "avoid-piracy"
    }
  ]

  const openArticle = (article: any) => {
    setSelectedArticle(article)
    document.body.style.overflow = 'hidden'
  }

  const closeArticle = () => {
    setSelectedArticle(null)
    document.body.style.overflow = 'unset'
  }

  const shareArticle = (article: any, platform: string) => {
    const url = `${window.location.origin}/blog/${article.slug}`
    const text = `Check out this article: ${article.title}`
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      default:
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-black text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CS Connect <span className="text-gray-300">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Insights, guides, and stories from Pakistan's computer science community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Latest from our community
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => openArticle(post)}
            >
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* All Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              All Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of guides, tutorials, and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openArticle(post)}
              >
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-semibold mb-2">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl font-bold text-black">{selectedArticle.title}</h2>
                                 <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                   <div className="flex items-center">
                     <User className="w-4 h-4 mr-1" />
                     <span>{selectedArticle.author}</span>
                   </div>
                   {selectedArticle.linkedin && (
                     <a 
                       href={`https://linkedin.com/in/${selectedArticle.linkedin}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center hover:text-blue-600 transition-colors"
                     >
                       <Linkedin className="w-4 h-4 mr-1" />
                       <span>LinkedIn</span>
                     </a>
                   )}
                   <div className="flex items-center">
                     <Calendar className="w-4 h-4 mr-1" />
                     <span>{selectedArticle.date}</span>
                   </div>
                   <div className="flex items-center">
                     <Clock className="w-4 h-4 mr-1" />
                     <span>{selectedArticle.readTime}</span>
                   </div>
                 </div>
              </div>
              <button
                onClick={closeArticle}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

                         {/* Modal Content */}
             <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
               <div className="prose prose-lg max-w-none">
                 {selectedArticle.fullContent.split('\n\n').map((paragraph: string, index: number) => (
                   <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                     {paragraph}
                   </p>
                 ))}
               </div>
               
               {/* Share Section */}
               <div className="mt-8 pt-6 border-t border-gray-200">
                 <div className="flex items-center justify-between">
                   <h4 className="text-lg font-semibold text-gray-900">Share this article</h4>
                   <div className="flex gap-3">
                     <button
                       onClick={() => shareArticle(selectedArticle, 'whatsapp')}
                       className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                       title="Share on WhatsApp"
                     >
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                       </svg>
                     </button>
                     <button
                       onClick={() => shareArticle(selectedArticle, 'facebook')}
                       className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                       title="Share on Facebook"
                     >
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                       </svg>
                     </button>
                     <button
                       onClick={() => shareArticle(selectedArticle, 'twitter')}
                       className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                       title="Share on Twitter"
                     >
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                       </svg>
                     </button>
                     <button
                       onClick={() => shareArticle(selectedArticle, 'linkedin')}
                       className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                       title="Share on LinkedIn"
                     >
                       <Linkedin className="w-5 h-5" />
                     </button>
                     <button
                       onClick={() => shareArticle(selectedArticle, 'copy')}
                       className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                       title="Copy Link"
                     >
                       <Share2 className="w-5 h-5" />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Blog 