import React, { useState, useEffect } from "react";
import {
    User,
    Calendar,
    Clock,
    ArrowRight,
    X,
    Share2,
    ExternalLink,
    Download,
    BookOpen,
    Sparkles,
    Users,
} from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
    linkedin?: string;
}

const Blog: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(
        null
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Why is FAST so famous for its CS?",
            excerpt:
                "Exploring the history, culture, and legacy that makes FAST one of Pakistan's most respected computer science institutions. From its foundation by Agha Hasan Abedi to the 'ragra' culture and Silicon Valley connections.",
            content: `I first heard about FAST when I was in my second year of college. It was my biology teacher who mentioned it casually in class. He talked about FAST and GIKI, and at that time both names were completely new to me. I remember telling him, "Sir, this is very interesting stuff and our field is kinda boring." I didn't know what computer science really was, but something about that conversation stuck with me.

After that day, whenever someone mentioned computer science, FAST would almost always come up. People spoke about it like it was the gold standard. Everyone had something to say about how strong FAST's computer science program is, and I started to wonder what made it so special.

Before I actually stepped into the world of computer science, I went deep into researching FAST. I wanted to know what this university really is, why it gets so much respect, and what makes its graduates stand out. So here's what I found and what I've experienced since then.

## The Foundation

FAST was the first university in Pakistan to introduce computer science as a proper degree. It all began back in the early 80s with a small setup in Karachi. At that time it was affiliated with Karachi University and had only a handful of students, but the vision was clear even then. This wasn't someone's personal venture or a business setup.

FAST was started as a foundation university by Agha Hasan Abedi, a man whose name not many people know today, but whose contribution to education in Pakistan is beyond incredible. With just some donation money and a vision to bring advanced science and technology to the country, he laid the roots of what would become one of the top tech institutions in Pakistan. From that small beginning, FAST now has campuses in six major cities and continues to grow stronger every year.

## The Ragra Culture

FAST is known for producing some of the most skilled and hardworking computer science graduates in the country. But it's not just luck. The secret behind this is something every FAST student knows too well. It's the ragra. Yes, the grind, the struggle, the non-stop pressure that defines student life here.

Maybe I'll write a full blog on what ragra really means, but for now just know that FAST doesn't let you relax. The exams are difficult, the grading is strict, and the deadlines never end. But this is exactly what builds resilience and real-world skills.

## Silicon Valley Connection

There was a time when companies like Microsoft would come directly to FAST for hiring. They would visit the campus, take interviews, and pick students straight from there. The university became known for sending many of its graduates to big tech firms in Silicon Valley. Even though that direct hiring pipeline isn't active anymore, the impact it left still echoes in the tech circles of Pakistan.

The alumni network of FAST is huge and powerful. You'll find FAST graduates in companies like Google, Meta, Amazon and so many others. I was listening to a podcast where a FASTian, now working at Google, shared a story about his flight to the US. He found other FASTians on the same plane. And when he reached Google, there were even more FASTians already working there, not recent graduates, but people from the early batches who had already made their mark.

That's what amazed me. Even back then, FAST had found its way into Silicon Valley. It wasn't some recent phenomenon. The university had been quietly producing talent that made it to the top long before social media started hyping things up.

## Alumni Stories

I once interviewed a FASTian from one of the early batches, Nauman Anwar, and he shared a lot of his experiences from those initial days, how FAST shaped his mindset, and how the university's culture back then built the foundation for so many future success stories.

And it's not just the tech industry. Many people in Pakistan's entertainment world are also FAST graduates. You'll find them leading teams, building startups, launching products, and even creating viral content. FASTians are everywhere. From classrooms to boardrooms.

## Engineering Over Research

One thing I always found interesting is how FAST focuses more on producing strong engineers than chasing research. Unlike some other universities in Pakistan that are all about papers and publications, FAST's main goal has always been clear: Train students so well that they can step into the industry and start contributing from day one.

It's about preparing real-world problem solvers. People who can build startups, work under pressure, and adapt to tough environments. The four years at FAST are not easy. Surviving the program itself is an achievement. But that's what makes the graduates different. It's hard, and that's the point. If it were easy, everyone would have done it.

## The Legacy Continues

Today, even after so many years, the name still stands strong. The Foundation for Advancement of Science and Technology, known widely as FAST, and its computing school NUCES, continues to be the top choice for students who are serious about computer science.

If you've ever wondered why people talk about FAST with such respect, this is why. It's not about hype. It's about the results. The students, the alumni, the grind, the culture. All of it comes together to create something that's honestly hard to describe unless you've experienced it yourself.

And maybe that's what makes FAST so different.`,
            category: "Education",
            author: "CS Connect Pakistan",
            date: "May 22, 2025",
            readTime: "8 min read",
            featured: true,
            linkedin: "csconnectpk",
        },
        {
            id: 2,
            title: "Transitioning from Pre-Medical to FAST",
            excerpt:
                "A comprehensive guide for pre-medical students who want to switch to Computer Science at FAST - covering the Additional Mathematics exam, preparation strategies, and practical advice from someone who made the transition.",
            content: `## How a Pre-Med Student Can Get Into FAST for Computing Programs?

If you are a pre-medical student thinking about switching to Computer Science at FAST, the first thing you need to do is pause and ask yourself one simple question: Do I really want to do this?

Because this decision changes everything.

Shifting from pre-med to Computer Science is not just about choosing another degree. It is about starting fresh with a completely different mindset. If your answer is yes, and you are fully ready to commit, then do not waste any more time. Start now.

## The Additional Mathematics Exam

The very first requirement is the Additional Mathematics exam. If you are from a pre-med background, FAST makes this exam compulsory for admission into CS. Passing it is not optional. If you fail, your admission will be cancelled, even if you get a great score on the entry test.

This is the point where many pre-med students feel a wave of doubt. It is natural. You have spent the past two years with biology, chemistry, and physics. Now suddenly you are expected to solve trigonometry, algebra, functions, and calculus within a few months.

It feels unfair. You start comparing yourself with students who have been doing maths for years. But here is the truth: It is not about how much time others had. It is about how well you use your time now.

## How to Study Smart

The best approach is not to study just for the sake of passing. Learn the concepts deeply. Every topic, every example, and every exercise from your textbook matters. These same concepts will return in your first-year university courses like Calculus, Digital Logic Design, and Programming.

Some exercises are more important than others. I remember one teacher casually saying:

"I would recommend solving this particular exercise twenty times."

He did not expect anyone to actually do that. But I did. I repeated each question in that exercise so many times that my hands started solving them automatically. It felt like I had trained my muscle memory.

That is the level of focus and repetition you need when you are short on time.

## Resources You Should Use

When it comes to preparation, you might hear people say things like, "Join KIPS" or "Go to an academy."

But honestly, you can prepare much more effectively at home.

**→ Watch the full Hashim Zia playlist on YouTube.** It is one of the best and most complete resources for the FAST entry test.

**→ Practice from KIPS books.**

**→ Solve FAST past papers** to get familiar with the paper style.

**→ Keep your FSc books close,** because they form your base.

**→ If you ever get stuck on a question,** especially from KIPS books, use the Maqsad App (Not a paid promotion; it was genuinely helpful for me). Its doubt-solve feature is extremely helpful. You just take a picture of your question, and it gives you a clear and fast solution.

It can save hours of confusion.

## Discipline Matters More Than Hours

Another thing that really helps is having a routine. If you find it hard to stay focused at home, study at a teacher's place or somewhere outside your room. What matters is consistency. You do not need to study all day, but you do need to study every day.

## Entry Test Options

Once your Additional Maths exam is cleared, you can apply to FAST through one of three options:

**→ SAT**

**→ NAT** 

**→ NU Entry Test**

For most students, especially those from a pre-med background, the NU Entry Test is the most suitable. It is designed with FAST's own format and is the easiest to prepare for using Hashim Zia's videos.

## Final Advice

In the end, remember this. Just because you did not study maths in college does not mean you cannot succeed in CS. You are not behind. You are just coming from a different starting point. What matters now is how committed you are and how well you manage your time and energy.

The road is not easy, but it is clear. Stay consistent. Practice with purpose. Use the right resources. Believe that you can catch up. And once you do, you will not just pass the test. You will walk into FAST with confidence, knowing you earned your seat in one of the top CS programs in Pakistan.

*Writer: Azan Waseem*`,
            category: "Career Transition",
            author: "Azan Waseem",
            date: "May 1, 2025",
            readTime: "10 min read",
            linkedin: "azanw",
        },
        {
            id: 3,
            title: "Building a Strong GitHub Portfolio: Projects That Get You Hired",
            excerpt:
                "Your GitHub profile is often the first thing recruiters and hiring managers look at when evaluating your technical skills. In Pakistan's competitive tech job market, a well-crafted GitHub portfolio can be the difference between landing an interview at your dream company or being overlooked.",
            content: "This comprehensive guide will be available soon. It covers how to create an outstanding GitHub portfolio that showcases your skills effectively to potential employers in Pakistan's tech industry.",
            category: "Portfolio Guide",
            author: "Sara Ahmed",
            date: "December 10, 2024",
            readTime: "18 min read",
            linkedin: "sara-ahmed-dev",
        },
        {
            id: 4,
            title: "Top 10 Programming Languages to Learn in 2024: A Pakistani Student's Perspective",
            excerpt:
                "The programming landscape is constantly evolving, and choosing the right languages to learn can significantly impact your career trajectory in Pakistan's growing tech industry. After analyzing job market trends, salary data, and talking to hiring managers at top Pakistani tech companies, here are the 10 programming languages that will give you the best opportunities in 2024.",
            content: "This detailed analysis of programming languages for Pakistani market will be available soon. It includes market trends, salary insights, and career opportunities for each language.",
            category: "Tech Trends",
            author: "Fatima Khan",
            date: "December 15, 2024",
            readTime: "10 min read",
            linkedin: "fatima-khan-tech",
        },
    ];

    const openArticle = (article: BlogPost) => {
        setSelectedArticle(article);
        document.body.style.overflow = "hidden";
    };

    const closeArticle = () => {
        setSelectedArticle(null);
        document.body.style.overflow = "unset";
    };

    const shareArticle = (article: BlogPost, platform: string) => {
        const url = `https://csconnect.pk/blog/${article.id}`;
        const text = `Check out this article: ${article.title}`;

        switch (platform) {
            case "twitter":
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        text
                    )}&url=${encodeURIComponent(url)}`
                );
                break;
            case "linkedin":
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                    )}`
                );
                break;
            case "whatsapp":
                window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                        `${text} ${url}`
                    )}`
                );
                break;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
                    <div className="text-center max-w-6xl mx-auto">
                        
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6 sm:mb-8 shadow-sm">
                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                            <span className="text-xs sm:text-sm font-bold text-blue-700 tracking-wide">Knowledge Hub</span>
                        </div>

                        {/* MUCH LARGER main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
                            CS Connect
                            <br />
                            <span className="relative inline-block ml-3">
                                <span className="text-blue-600">Blog & Resources</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>

                        {/* Better subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                            Insights, tutorials, and success stories from Pakistan's brightest computer science students and industry professionals
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
                            <a href="#featured">
                                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                    <BookOpen className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Read Articles
                                </button>
                            </a>
                            
                            <a href="/join">
                                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                                    <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                                    Join Community
                                </button>
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    10+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Articles
                                </div>
                            </div>
                            
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    100+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Topics Covered
                                </div>
                            </div>

                            <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    24/7
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Free Access
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                    <section key={post.id} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                                <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6 sm:mb-8 shadow-sm">
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                                    <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">Featured Article</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                                    Latest from our community
                                </h2>
                            </div>

                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer max-w-4xl mx-auto"
                                onClick={() => openArticle(post)}
                            >
                                <div className="p-6 sm:p-8 lg:p-12">
                                    <div className="mb-4 sm:mb-6">
                                        <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 mb-6 sm:mb-8">
                                        <div className="flex items-center">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <button className="group inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        <span>Read Full Article</span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

            {/* All Blog Posts */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                            All Articles
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Explore our collection of guides, tutorials, and insights from Pakistan's tech community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {blogPosts
                            .filter((post) => !post.featured)
                            .map((post, index) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                                    onClick={() => openArticle(post)}
                                >
                                    <div className="p-6 sm:p-8">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                                            <div className="flex items-center">
                                                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Read More Button */}
                                        <button className="group inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            <span>Read Article</span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Article Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[110] flex items-start justify-center p-1 sm:p-4 lg:p-6 pt-20 sm:pt-20 pb-4">
                    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl w-full max-w-4xl max-h-[calc(100vh-6rem)] sm:max-h-[85vh] overflow-hidden shadow-2xl relative mx-1 sm:mx-0">
                        {/* Modal Header */}
                        <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200 flex-shrink-0">
                            <div className="flex items-start justify-between">
                                <div className="flex-1 mr-2 sm:mr-3 lg:mr-4">
                                    <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                            <span>{selectedArticle.author}</span>
                                        </div>
                                        {selectedArticle.linkedin && (
                                            <a
                                                href={`https://linkedin.com/in/${selectedArticle.linkedin}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-300"
                                            >
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                LinkedIn
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={closeArticle}
                                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 min-w-[32px] min-h-[32px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center flex-shrink-0"
                                    aria-label="Close article"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                            <div className="p-3 sm:p-4 lg:p-6">
                                <div className="max-w-none">
                                    {/* Full Article Content */}
                                    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-800 leading-relaxed">
                                        {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                                            if (paragraph.startsWith('## ')) {
                                                return (
                                                    <h2 key={index} className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0">
                                                        {paragraph.replace('## ', '')}
                                                    </h2>
                                                );
                                            } else if (paragraph.startsWith('**→')) {
                                                return (
                                                    <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                                                        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800">
                                                            {paragraph.replace(/\*\*/g, '')}
                                                        </p>
                                                    </div>
                                                );
                                            } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                                                return (
                                                    <div key={index} className="text-center italic text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                                                        {paragraph.replace(/\*/g, '')}
                                                    </div>
                                                );
                                            } else if (paragraph.includes('→') && paragraph.includes('**')) {
                                                return (
                                                    <div key={index} className="mb-2">
                                                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                                                            {paragraph.split('**').map((part, i) => 
                                                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                                            )}
                                                        </p>
                                                    </div>
                                                );
                                            } else if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
                                                return (
                                                    <blockquote key={index} className="border-l-4 border-blue-500 pl-4 sm:pl-6 italic text-gray-700 my-4 sm:my-6 text-sm sm:text-base lg:text-lg">
                                                        {paragraph}
                                                    </blockquote>
                                                );
                                            } else if (paragraph.trim()) {
                                                return (
                                                    <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                                                        {paragraph}
                                                    </p>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>

                                    {/* Article metadata */}
                                    <div className="border-t border-gray-200 pt-4 sm:pt-6 mt-6 sm:mt-8">
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                                <span>{selectedArticle.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                                <span>{selectedArticle.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                                    Share this article:
                                </div>
                                <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3">
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "whatsapp")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "linkedin")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        LinkedIn
                                    </button>
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "twitter")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        Twitter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
