---
layout: post
title: "Donsker Class"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  For our investigation of empirical processes, we now discuss an important property that a function class can possess with respect to an unknown distribution. Suppose \(X_1, \dots, X_n\) is an i.i.d. sample drawn from an unknown distribution \(\mathbf P\,\,\!\!\).
---
{% raw %}
<span id="sec:donsker"></span>

<p>For our investigation of empirical processes, we now discuss an
important property that a function class can possess with respect to an
unknown distribution. Suppose <span class="math inline">\(X_1, \dots,
X_n\)</span> is an i.i.d. sample drawn from an unknown distribution
<span class="math inline">\(\mathbf P\,\,\!\!\)</span>. As before,
define the empirical process <span class="math display">\begin{equation}\label{eq:empirical-process}\begin{aligned}

    \mathbb G_n f \triangleq \sqrt{n} (\widehat P_n - \mathbf P\,\,\!\!)
(f)
\end{aligned}\end{equation}</span> for any <span class="math inline">\(f \in
\mathcal F\)</span>, where <span class="math inline">\(\mathcal
F\)</span> is a class of measurable functions. By definition, <span
class="math inline">\(\mathbb G_n f\)</span> is a stochastic process. We
can systematically impose that this definition satisfy a number of
properties, but we will need to define first what it means for these
functions to satisfy properties.</p>
<p>We first fall back on the definitions from the study of stochastic
processes. Fix an underlying probability space <span
class="math inline">\((\Omega, \mathfrak F, \mathbf P\,\,\!\!)\)</span>,
a metric space <span class="math inline">\((T,d)\)</span> (where <span
class="math inline">\(d\)</span> is a (semi-)metric), and a function
class <span class="math inline">\(\mathcal F\)</span>. We say <span
class="math inline">\(\{\mathbb G_n f : f \in \mathcal F\}\)</span> is
<em>sample bounded</em> if, for all <span class="math inline">\(\omega
\in \Omega\)</span>, <span class="math inline">\(\sup_{f \in \mathcal F}
|\mathbb G_n f| &lt; \infty\)</span>, where <span
class="math inline">\(\mathbb G_n\)</span> depends on the realization
<span class="math inline">\(\omega\)</span> (so some texts denote this
condition as <span class="math inline">\(\sup_{f \in \mathcal F}
|\mathbb G_n (\omega, f)| &lt; \infty\)</span>). A <em>random
element</em> is a map <span class="math inline">\(X : \Omega \to
T\)</span>. A random element <span class="math inline">\(X\)</span> is
<em>Borel measurable</em> if, as a map, <span
class="math inline">\(X\)</span> is Borel-measurable with respect to
<span class="math inline">\(\mathfrak F\)</span> on <span
class="math inline">\(\Omega\)</span> <em>and</em> <span
class="math inline">\(\mathcal B(\ell^\infty(\mathcal F))\)</span>. We
say a Borel measurable random element is <em>tight</em> its image
measure is tight on <span class="math inline">\(\mathcal
B(\ell^\infty(\mathcal F))\)</span>. A remarkable fact is there is a way
to characterize tight random elements, as the limit of a sequence of
random elements—which need not be defined on the same probability
space.</p>
<div id="thm:tight-random-element-iff-result" class="theorem">
<p><strong>Theorem 1</strong>. Let <span class="math inline">\(\Omega_n
= (\Omega_n, \mathfrak F_n, \widehat P_n)\)</span> denote a sequence of
probability spaces. Let <span class="math inline">\((T,d)\)</span> be a
metric space. A sequence of arbitrary maps <span
class="math inline">\(X_n : \Omega_n \to \ell^\infty (T)\)</span>
converges weakly to a tight random element if and only if <em>both</em>
of the following conditions are satisfied:</p>
<ol>
<li><p>(Convergence in distribution on <span
class="math inline">\(\mathbb R^m\)</span>) For all <span
class="math inline">\((t_1, \dots, t_m) \in T^m\)</span>, the random
vector <span class="math inline">\((X_n(t_1), \dots, X_n(t_m))\)</span>
converges in distribution in <span class="math inline">\(\mathbb
R^m\)</span>.</p></li>
<li><p>(Asymptotic stochastic equicontinuity) There exists a semi-metric
<span class="math inline">\(d\)</span> such that <span
class="math inline">\((T,d)\)</span> is totally bounded and that, for
all <span class="math inline">\(\varepsilon &gt; 0\)</span>, <span
class="math display">\[\begin{aligned}
            \lim\limits_{\delta \to 0} \limsup_{n\to\infty} \mathbf
P\,\,\!\!^* \left( \sup_{s,t \in T : d(s,t) &lt; \delta} |X_n (s) - X_n
(t)| &gt; \varepsilon \right) = 0 ~.
        
\end{aligned}\]</span></p></li>
</ol>
</div>
<p>Equipped with these understanding, we can then understand the
following class of functions. In the setup as above, we say <span
class="math inline">\(\mathcal F\)</span> is <em><span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker</em> if <span
class="math inline">\(\{\mathbb G_n f : f \in \mathcal F\}
\xrightarrow{d} T\)</span>, where <span class="math inline">\(T\)</span>
is a tight random element in <span class="math inline">\(\ell^\infty
(\mathcal F)\)</span>. In other words, an empirical process maps from an
underlying probability space to <span class="math inline">\(\ell^\infty
(\mathcal F)\)</span>, i.e. its sample paths are bounded. And, if some
functions <span class="math inline">\(f_1, \dots, f_m \in \mathcal
F\)</span> are such that <span class="math inline">\(P f_i^2 &lt;
\infty\)</span> for all <span class="math inline">\(i \in \{1, \dots,
m\}\)</span>, we have <span class="math display">\[\begin{aligned}
    (\mathbb G_n f_1, \dots, \mathbb G_n f_m) \xrightarrow{d} (\mathbb
G_P f_1, \dots, \mathbb G_P f_m) ~,
\end{aligned}\]</span> where the limiting random vector follows a normal
distribution with mean zero and variance given by <span
class="math inline">\(\mathbb E[\mathbb G_P f_i \mathbb G_P
g_j]\)</span>. We say a stochastic process <span
class="math inline">\(\mathbb G_P\)</span> is <em>Gaussian</em> if, for
all <span class="math inline">\(f_1, \dots, f_m \in \mathcal F\)</span>,
<span class="math inline">\((\mathbb G_P f_1, \dots, \mathbb G_P
f_m)\)</span> is multivariate normal.</p>
<p>From Theorem <a href="#thm:tight-random-element-iff-result"
data-reference-type="ref"
data-reference="thm:tight-random-element-iff-result">1</a>, we can
easily deduce the following.</p>
<div id="thm:tight-random-element-iff-result-for-functions"
class="theorem">
<p><strong>Theorem 2</strong>. Let <span class="math inline">\(\mathcal
F\)</span> denote the class of real-valued, measurable functions <span
class="math inline">\(f: \mathscr X \to \mathbb R\)</span>, such that
<span class="math inline">\(\mathbf P\,\,\!\!f^2 &lt; \infty\)</span>
for all <span class="math inline">\(f \in \mathcal F\)</span>. Suppose
<span class="math inline">\(\sup_{f \in \mathcal F} |f - \mathbf
P\,\,\!\!f| &lt; \infty\)</span> for all <span class="math inline">\(x
\in \mathscr X\)</span>. Then, <span class="math inline">\(\{\mathbb G_n
f : f \in \mathcal F\}\)</span> converges weakly to a tight random
element if and only if there exists a semi-metric <span
class="math inline">\(d\)</span> on <span class="math inline">\(\mathcal
F\)</span> such that <span class="math inline">\((\mathcal F,
d)\)</span> is totally bounded, and if, for all <span
class="math inline">\(\varepsilon &gt; 0\)</span>, the following
asymptotic stochastic equicontinuity condition is satisfied: <span
class="math display">\[\begin{aligned}
        \lim\limits_{\delta \to 0} \limsup_{n\to\infty} \mathbf
P\,\,\!\!^* \left( \sup_{f,g \in \mathcal F : d(f,g) &lt; \delta}
|\mathbb G_n (f - g)| &gt; \varepsilon \right) = 0 ~.
    
\end{aligned}\]</span></p>
</div>
<p>A <em><span class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker
class</em> deserves a close study because not all random elements are
tight, and it is unclear that this condition is satisfied for classes of
measurable functions we might be interested in (for example, for the
class of continuous functions). Fortunately, there are two ways we can
characterize a <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>-Donsker class, using the tools we have discussed so
far.</p>
<div id="thm:donsker-bracketing-entropy" class="theorem">
<p><strong>Theorem 3</strong> (Donsker). Let <span
class="math inline">\(\mathcal F\)</span> be the class of measurable
functions with square-integrable envelope function <span
class="math inline">\(F\)</span>. Suppose <span
class="math inline">\(J_{[\:]} (1, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2}) &lt; \infty\)</span>. Then, <span
class="math inline">\(\mathcal F\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker.</p>
</div>
<div class="proof">
<p><em>Proof.</em> <span class="math inline">\(J_{[\:]} (1, \mathcal F,
\lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) &lt; \infty\)</span> implies
the integrand is finite, i.e. <span class="math inline">\(N_{[\:]}
(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})
&lt; \infty\)</span> for all <span class="math inline">\(\varepsilon
&gt; 0\)</span>. Therefore, for <span class="math inline">\(d(f,g) =
\lVert f-g \rVert_{\mathbf P\,\,\!\!, 2}\)</span>, <span
class="math inline">\((\mathcal F, d)\)</span> is totally bounded.</p>
<p>Set <span class="math inline">\(\mathcal G \triangleq \{ f-g : f,g
\in \mathcal F \}\)</span> and <span class="math inline">\(N =
N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2})\)</span>. Let <span class="math inline">\(\{[l_i, u_i]\}_{1 \leq i
\leq N}\)</span> be an <span
class="math inline">\(\varepsilon\)</span>-bracket. We can then
construct the <span class="math inline">\(2\varepsilon\)</span>-bracket
<span class="math inline">\(\{[l_i - u_i, u_i - l_i]\}_{1 \leq i \leq
N}\)</span>. This implies <span class="math display">\[\begin{aligned}
        N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) \leq N \left( \frac{\varepsilon}{2}, \mathcal F, \lVert
\cdot \rVert_{\mathbf P\,\,\!\!, 2} \right)^2 ~.
    
\end{aligned}\]</span> Taking logs of both side, we see that there is a
constant <span class="math inline">\(2\)</span> on the right-hand side
of the inequality. This implies <span class="math inline">\(G =
2F\)</span> is an envelope function for <span
class="math inline">\(\mathcal G\)</span>; furthermore, <span
class="math inline">\(G\)</span> is square-integrable and measurable
because <span class="math inline">\(F\)</span> is square-integrable and
measurable.</p>
<p>Now, set <span class="math inline">\(\mathcal G_\delta \triangleq \{
f-g : f,g \in \mathcal F \text{ and } \lVert f-g \rVert_{\mathbf
P\,\,\!\!, 2} &lt; \delta \}\)</span>. By an application of the maximal
inequality in Theorem <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#thm:maximal-inequality-bracketing-integral-prelim-behaviour"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">[thm:maximal-inequality-bracketing-integral-prelim-behaviour]</a>,
we have that, for <span class="math inline">\(a(\delta) =
\frac{\delta}{\sqrt{\log N_{[\:]} (\delta, \mathcal G_\delta, \lVert
\cdot \rVert_{\mathbf P\,\,\!\!, 2})}}\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f,g : \lVert f-g \rVert_\infty \leq \delta}
|\mathbb G_n (f-g)| &amp;\lesssim J_{[\:]}(\lVert F \rVert_{\mathbf
P\,\,\!\!, 2}, \mathcal G_\delta, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) + \sqrt{n} \mathbf P\,\,\!\!F \mathbb 1 \{ F &gt;
\sqrt{n} a(\delta) \} \\
        &amp;\leq J_{[\:]}(\lVert F \rVert_{\mathbf P\,\,\!\!, 2},
\mathcal G, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) + \sqrt{n}
\mathbf P\,\,\!\!F \mathbb 1 \{ F &gt; \sqrt{n} a(\delta) \} ~,
    
\end{aligned}\]</span> from which we can apply Markov’s inequality to
conclude that asymptotic stochastic equicontinuity is satisfied.
Applying Theorem <a
href="#thm:tight-random-element-iff-result-for-functions"
data-reference-type="ref"
data-reference="thm:tight-random-element-iff-result-for-functions">2</a>
concludes the proof. ◻</p>
</div>
<p>We can also characterize a <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>-Donsker class via uniform covering numbers.</p>
<div id="thm:donsker-uniform-covering" class="theorem">
<p><strong>Theorem 4</strong> (Donsker). Let <span
class="math inline">\(\mathcal F\)</span> be a class of pointwise
measurable functions with a measurable envelope function <span
class="math inline">\(F\)</span>. Suppose <span
class="math inline">\(\mathbf P\,\,\!\!F^2 &lt; \infty\)</span> and
<span class="math inline">\(J(1, \mathcal F, F) &lt; \infty\)</span>.
Then, <span class="math inline">\(\mathcal F\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker.</p>
</div>
<div class="proof">
<p><em>First Proof of Theorem <a href="#thm:donsker-uniform-covering"
data-reference-type="ref"
data-reference="thm:donsker-uniform-covering">4</a>.</em> A more
straightforward proof of Theorem <a href="#thm:donsker-uniform-covering"
data-reference-type="ref"
data-reference="thm:donsker-uniform-covering">4</a> is via a clever use
of a maximal inequality. Observe the class of functions <span
class="math display">\[\begin{aligned}
        G_\delta \triangleq \{ f-g : f,g \in \mathcal F \text{ and }
\lVert f-g \rVert_\infty &lt; \delta \}
    
\end{aligned}\]</span> is bounded by a multiple of <span
class="math inline">\(J(\delta, \mathcal F, F)\)</span>, by an analogous
argument as before. To see this, note that <span
class="math inline">\(G_\delta \subset \{f-g : f,g \in \mathcal
F\}\)</span>, where the latter class has the envelope function <span
class="math inline">\(2F\)</span>. Therefore, <span class="math display">\begin{equation}\label{eq:finite-uniform-covering-entropy}\begin{aligned}

        \sup_R N(\varepsilon \lVert 2F \rVert_{R,2}, \mathcal G_\delta,
\lVert \cdot \rVert_{R,2}) \leq \left( \sup_R N(\varepsilon \lVert F
\rVert_{R,2}, \mathcal F, \lVert \cdot \rVert_{R,2}) \right)^2 ~,
    
\end{aligned}\end{equation}</span> where the suprema are taken over all probability
measures such that <span class="math inline">\(R F^2 &gt; 0\)</span>.
Taking logs of both sides, we have that the right-hand side carries a
factor of <span class="math inline">\(2\)</span>, implying the desired
conclusion. Therefore, we can apply the maximal inequality in Theorem <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#thm:maximal-inequality-uniform-entropy" data-reference-type="ref"
data-reference="thm:maximal-inequality-uniform-entropy">[thm:maximal-inequality-uniform-entropy]</a>,
and readily conclude <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal G_\delta} |\mathbb G_n f|
\lesssim \mathbb E [ \lVert F \rVert_{\widehat P_n, 2} J(m_n, G_\delta,
2F)] \leq \lVert F \rVert_{\mathbf P\,\,\!\!, 2} \mathbb E [J(m_n,
G_\delta, 2F)^2] ~,
    
\end{aligned}\]</span> where <span class="math inline">\(m_n \triangleq
\sup_{f \in \mathcal G_\delta} \frac{\lVert f \rVert_{\widehat P_n,
2}}{\lVert F \rVert_{\widehat P_n, 2}}\)</span>, and the second
inequality follows from an application of Cauchy-Schwarz. By the
dominated convergence theorem, the right-hand side of the rightmost term
in the inequality above converges to zero (as <span
class="math inline">\(n \to \infty\)</span>) if <span
class="math inline">\(m_n \xrightarrow{\mathbf P\,\,\!\!} 0\)</span>. We
claim this is indeed the case.</p>
<p>To see why, note that it is without loss to assume <span
class="math inline">\(F \geq 1\)</span>. Then, clearly, <span
class="math inline">\(m_n^2 \leq \sup_{f \in \mathcal G_\delta} \widehat
P_n f^2\)</span>. If <span class="math inline">\(\sup_{f \in \mathcal
G_\delta} | \widehat P_n f^2 - \mathbf P\,\,\!\!f^2 |
\xrightarrow{\mathbf P\,\,\!\!} 0\)</span>, then the desired conclusion
follows because <span class="math inline">\(\sup_{f \in \mathcal
G_\delta} \widehat P_n f^2\)</span> converges to zero as <span
class="math inline">\(\delta \to 0\)</span>. To show the <span
class="math inline">\(\mathcal G_\delta\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Glivenko-Cantelli, we
observe that the function class <span class="math inline">\(\mathcal G =
\{ f^2-g^2 : f,g \in \mathcal F \}\)</span> has the envelope function
<span class="math inline">\((2F)^2\)</span>, so for all <span
class="math inline">\(f,g \in \mathcal F\)</span>, we certainly have
<span class="math display">\[\begin{aligned}
        \widehat P_n |f^2 - g^2| \leq \widehat P_n \{ 4F |f-g| \} \leq
\lVert f-g \rVert_{\widehat P_n, 2} \lVert 4F \rVert_{\widehat P_n, 2}
~,
    
\end{aligned}\]</span> where the second inequality above follows from
squaring the result after applying Cauchy-Schwarz. Therefore, we have
<span class="math inline">\(N(\varepsilon \lVert 2F \rVert_{\widehat
P_n, 2}^2, \mathcal G, \lVert \cdot \rVert_{\widehat P_n, 2}) \leq
N(\varepsilon \lVert F \rVert_{\widehat P_n, 2}, \mathcal F, \lVert
\cdot \rVert_{\widehat P_n, 2})\)</span>. By identical arguments as
before, we have that the uniform entropy integral of <span
class="math inline">\(\mathcal G\)</span> is bounded. Therefore, <span
class="math inline">\(\mathcal G\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Glivenko-Cantelli, and
the desired conclusions follow. ◻</p>
</div>
<div class="proof">
<p><em>Second Proof of Theorem <a href="#thm:donsker-uniform-covering"
data-reference-type="ref"
data-reference="thm:donsker-uniform-covering">4</a>.</em> This is a more
elementary proof, in the sense that we check the conditions required for
applying Theorem <a
href="#thm:tight-random-element-iff-result-for-functions"
data-reference-type="ref"
data-reference="thm:tight-random-element-iff-result-for-functions">2</a>.</p>
<p>First, let <span class="math inline">\(d(f,g) = \lVert f-g
\rVert_{\mathbf P\,\,\!\!, 2}\)</span> for any <span
class="math inline">\(f,g \in \mathcal F\)</span>. We claim that <span
class="math inline">\((\mathcal F, d)\)</span> is totally bounded; in
particular, this conclusion follows because the uniform entropy integral
of the class <span class="math inline">\(\mathcal F\)</span> is finite.
To see this, fix <span class="math inline">\(\varepsilon &gt;
0\)</span>, and set <span class="math inline">\(N = N(\varepsilon,
\mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})\)</span>. Let
<span class="math inline">\(f_1, \dots, f_N \in \mathcal F\)</span> be
such that <span class="math inline">\(\lVert (f_i - f_j)^2
\rVert_{\mathbf P\,\,\!\!, 2}^2 &gt; \varepsilon^2 \lVert F^2
\rVert_{\mathbf P\,\,\!\!, 2}^2\)</span> for all <span
class="math inline">\(i \neq j\)</span>, and <span
class="math inline">\(i,j \in \{1, \dots, N\}\)</span>. By the law of
large numbers, observe that <span class="math inline">\(\widehat P_n
(f_i-f_j)^2 \xrightarrow{\rm a.s.} \mathbf P\,\,\!\!(f_i-f_j)^2\)</span>
and <span class="math inline">\(\widehat P_n F^2 \xrightarrow{\rm a.s.}
\mathbf P\,\,\!\!F^2\)</span>. This means there exists a realization of
<span class="math inline">\(\widehat P_n\)</span>, denoted <span
class="math inline">\(P_n\)</span>, such that <span
class="math inline">\(P_n (f_i-f_j)^2 &gt; \varepsilon^2 \mathbf
P\,\,\!\!F^2\)</span> for all <span class="math inline">\(i \neq
j\)</span>, and <span class="math inline">\(0 &lt; P_n F^2 &lt; 2
\mathbf P\,\,\!\!F^2\)</span>. Therefore, <span
class="math inline">\(P_n (f_i - f_j)^2 &gt; \frac{\varepsilon^2}{2}
\widehat P_n F^2\)</span>, and we clearly have, by Lemma <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#lem:covering-packing-comparisons" data-reference-type="ref"
data-reference="lem:covering-packing-comparisons">[lem:covering-packing-comparisons]</a>,
<span class="math display">\[\begin{aligned}
        N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) \leq D \left( \frac{\varepsilon}{\sqrt{2}} \lVert F
\rVert_{P_n, 2}, \mathcal F, \lVert \cdot \rVert_{P_n, 2} \right) ~.
    
\end{aligned}\]</span> Since <span class="math inline">\(P_n\)</span> is
discrete and finitely supported, the right-hand side of the inequality
above is bounded by the supremum over <span
class="math inline">\(R\)</span> (as defined before), implying the
right-hand side is bounded in <span class="math inline">\(n\)</span>.
Therefore, <span class="math inline">\(D ( \varepsilon \lVert F
\rVert_{\mathbf P\,\,\!\!, 2}, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2} )\)</span> is bounded for any <span
class="math inline">\(\varepsilon &gt; 0\)</span>, and the desired
totally boundedness follows.</p>
<p>It remains to check asymptotic stochastic equicontinuity. Repeating
the arguments leading up to \eqref{eq:finite-uniform-covering-entropy},
we can apply the maximal inequality in Theorem <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness"
data-reference-type="ref"
data-reference="thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness">[thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness]</a>
to conclude that <span class="math display">\begin{equation}\label{eq:donsker-uniform-covering-final-inequality}\begin{aligned}
        \nonumber &amp;\quad \mathbb E \sup_{f \in \mathcal G_\delta}
|\mathbb G_n f| \\
        &amp; \lesssim J
\left( \frac{\delta}{2 \lVert F \rVert_{\mathbf P\,\,\!\!, 2}}, \mathcal
G_\delta, F \right) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} +
\frac{\sqrt{\mathbb E \sup_{1 \leq k \leq n} F(X_i)^2} J(\frac{\delta}{2
\lVert F \rVert_{\mathbf P\,\,\!\!, 2}}, \mathcal G_\delta,
F)^2}{\sqrt{n}} \left( \frac{\delta}{2 \lVert F \rVert_{\mathbf
P\,\,\!\!, 2}} \right)^{-2} \\
         &amp;
\leq C \left( J \left(
\frac{\delta}{2 \lVert F \rVert_{\mathbf P\,\,\!\!, 2}}, \mathcal
G_\delta, F \right) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} + \frac{A_n
J(\frac{\delta}{2 \lVert F \rVert_{\mathbf P\,\,\!\!, 2}}, \mathcal
G_\delta, F)^2}{\sqrt{n}} \left( \frac{\delta}{2 \lVert F
\rVert_{\mathbf P\,\,\!\!, 2}} \right)^{-2} \right) ~,
    
\end{aligned}\end{equation}</span> where <span class="math inline">\(A_n = 2
\sqrt{\mathbb E \sup_{1 \leq k \leq n} F(X_i)^2}\)</span>. Because for
<span class="math inline">\(n\)</span> many i.i.d. random variables
<span class="math inline">\(X_1, \dots, X_n\)</span>, <span
class="math inline">\(\mathbb E |X_1| &lt; \infty\)</span>, <span
class="math inline">\(\max_{1 \leq i \leq n} \frac{|X_1|}{n}
\xrightarrow{\rm a.s.} 0\)</span>, and <span
class="math inline">\(\mathbb E \sup_{1 \leq i \leq n} |X_i| =
o(n)\)</span> are equivalent, it follows that <span
class="math inline">\(A_n = o(\sqrt{n})\)</span>. As such, given some
<span class="math inline">\(\eta &gt; 0\)</span>, there exists some
small <span class="math inline">\(\delta &gt; 0\)</span> such that <span
class="math inline">\(J(\frac{\delta}{2 \lVert F \rVert_{\mathbf
P\,\,\!\!, 2}}, \mathcal G_\delta, F) &lt; \eta\)</span>, and there
exists <span class="math inline">\(n\)</span> large enough such that the
second term in the bracket of \eqref{eq:donsker-uniform-covering-final-inequality}
is strictly less than <span class="math inline">\(\eta\)</span>. It
follows that <span class="math display">\[\begin{aligned}
        \limsup_{n\to\infty} \mathbb E \sup_{f \in \mathcal G_\delta}
|\mathbb G_n f| \leq \eta (C \lVert F \rVert_{\mathbf P\,\,\!\!, 2} + 1)
~,
    
\end{aligned}\]</span> which verifies the asymptotic stochastic
equicontinuity condition. ◻</p>
</div>
{% endraw %}
