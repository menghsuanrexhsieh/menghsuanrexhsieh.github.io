---
layout: post
title: "More on the Uniform Law of Large Numbers"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  The machinery we have developed so far can be applied to study how the uniform law of large number comes about. In particular, we can look at the phenomenon through empirical (metric) entropy.
---
{% raw %}
<span id="sec:ulln"></span>

<p>The machinery we have developed so far can be applied to study
<em>how</em> the uniform law of large number comes about. In particular,
we can look at the phenomenon through <em>empirical (metric)
entropy</em>. As always, we need to place some kind of restrictions on
the function class <span class="math inline">\(\mathcal F\)</span> we
consider. WIth everything we have developed so far, we first look at a
preliminary result in this direction, supposing that <span
class="math inline">\(\mathcal F\)</span> is the class of <em>uniformly
bounded</em> functions.</p>
<div id="lem:ulln-uniformly-bded" class="lemma">
<p><strong>Lemma 1</strong> (ULLN for uniformly bounded function
classes). Let <span class="math inline">\(\mathcal F\)</span> be a
function class of uniformly bounded functions, i.e. <span
class="math inline">\(\sup_{f \in \mathcal F} \lVert f \rVert_\infty
\leq R &lt; \infty\)</span>. Suppose the following <em><span
class="math inline">\(L^2\)</span> random entropy condition</em> holds:
<span class="math display">\begin{equation}\label{eq:random-entropy-condition-ulln}\begin{aligned}

        \frac{\log N(\varepsilon, \mathcal F, \lVert \cdot
\rVert_{\widehat P_n, 2})}{n} \xrightarrow{\mathbf P\,\,\!\!} 0 \quad
\text{for all } \varepsilon &gt; 0 ~.
    
\end{aligned}\end{equation}</span> Then, <span class="math inline">\(\mathcal
F\)</span> satisfies the uniform law of large numbers.</p>
</div>
<div class="proof">
<p><em>Proof.</em> It is clear that the assumptions above implies <span
class="math display">\[\begin{aligned}
        \sup_{f \in \mathcal F} \left| \int f \mathrm{d}\, (\widehat P_n -
\mathbf P\,\,\!\!) \right| \xrightarrow{\rm a.s.} c ~,
    
\end{aligned}\]</span> where <span class="math inline">\(c\)</span> is
some constant. Therefore, it suffices to prove that <span
class="math inline">\(\sup_{f \in \mathcal F} \left| \int f \mathrm{d}\,
(\widehat P_n - \mathbf P\,\,\!\!) \right|\)</span> converges <em>in
probability</em> to zero.</p>
<p>Fix <span class="math inline">\(\eta &gt; 0\)</span>. By standard
symmetrization arguments, picking <span class="math inline">\(n \geq
\frac{8R^2}{\eta^2}\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{f \in \mathcal F} \left| \int f
\mathrm{d}\, (\widehat P_n - \mathbf P\,\,\!\!) \right| &gt; \eta \right) \leq
4 \mathbf P\,\,\!\!\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1
\leq k \leq n} \varepsilon_k f(X_k) \right| &gt; \frac{\eta}{4} \right)
~,
    
\end{aligned}\]</span> where <span class="math inline">\(\varepsilon_1,
\dots, \varepsilon_n\)</span> are i.i.d. Rademacher random variables,
independent of <span class="math inline">\(X_1, \dots, X_n\)</span>. The
rest of the arguments are routine: by Hoeffding’s inequality, for all
<span class="math inline">\(d &gt; 0\)</span> and <span
class="math inline">\(q \in \mathbb R^n\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq k \leq n}
\varepsilon_k q_k \right| \geq d \right) \leq 2 e^{-\frac{d^2}{2 \sum_{1
\leq k \leq n} q_k^2}} ~.
    
\end{aligned}\]</span> So, with judicious choices of constants in Lemma
<a href="#lem:symmetrization-constants" data-reference-type="ref"
data-reference="lem:symmetrization-constants">4</a> (to be proven below,
for it is a little distracting if presented before this point), we have
<span class="math display">\[\begin{aligned}
        \int_{\frac{\eta}{32}}^{R} \sqrt{\log N(\varepsilon, \mathcal F,
\lVert \cdot \rVert_{\widehat P_n, 2})} \mathrm{d} \varepsilon \leq R
\sqrt{\log N \left( \frac{\eta}{32}, \mathcal F, \lVert \cdot
\rVert_{\widehat P_n, 2}\right)} ~.
    
\end{aligned}\]</span> On the set <span
class="math display">\[\begin{aligned}
        E_n \triangleq \left\{ \eta &gt; 0 : \frac{\eta \sqrt{n}}{8}
\geq C \left( R \vee R \sqrt{\log N \left( \frac{\eta}{32}, \mathcal F,
\lVert \cdot \rVert_{\widehat P_n, 2}\right)} \right) \right\} ~,
    
\end{aligned}\]</span> applying Lemma <a
href="#lem:symmetrization-constants" data-reference-type="ref"
data-reference="lem:symmetrization-constants">4</a> conditional on <span
class="math inline">\(X_1, \dots, X_n\)</span>, we then have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{f \in \mathcal F} \left| \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right| &gt; \frac{\eta}{4}
\right) &amp;\leq C \exp  \left( - \frac{n\delta^2}{64 C^2 R^2} \right)
+ \mathbf P\,\,\!\!(A_n^c) \xrightarrow{n \to \infty} 0 ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>We can easily deduce the <em>necessity of the <span
class="math inline">\(L^1\)</span> random entropy condition</em> \eqref{eq:random-entropy-condition-ulln}
from Lemma <a href="#lem:ulln-uniformly-bded" data-reference-type="ref"
data-reference="lem:ulln-uniformly-bded">1</a>. The following result is
the usual condition under which the random entropy condition is
presented, in the context of developing the uniform law of large
numbers.</p>
<div id="prop:ulln-l1-random-entropy" class="proposition">
<p><strong>Proposition 2</strong>. Suppose the following <em><span
class="math inline">\(L^1\)</span> random entropy condition</em> holds:
<span class="math display">\begin{equation}\label{eq:L1-random-entropy}\begin{aligned}

        \frac{\log N(\varepsilon, \mathcal F, \lVert \cdot
\rVert_{\widehat P_n, 1})}{n} \xrightarrow{\mathbf P\,\,\!\!} 0 \quad
\text{for all } \varepsilon &gt; 0 ~,
    
\end{aligned}\end{equation}</span> and that <span class="math inline">\(\int F \mathrm{d}
P &lt; \infty\)</span>, where <span class="math inline">\(F\)</span> is
the envelope function of <span class="math inline">\(\mathcal
F\)</span>. Then, <span class="math inline">\(\mathcal F\)</span>
satisfies the uniform law of large numbers.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Define, for all <span class="math inline">\(R &gt;
0\)</span>, <span class="math display">\[\begin{aligned}
        \mathcal F_R \triangleq \{ f \mathbb 1 \{F \leq R\} : f \in
\mathcal F \} ~.
    
\end{aligned}\]</span> For any <span class="math inline">\(f_1, f_2 \in
\mathcal F\)</span>, <span class="math display">\[\begin{aligned}
        \int_{F \leq R} (f_1 - f_2)^2 \mathrm{d} \widehat P_n \leq 2R \int
|f_1 - f_2| \mathrm{d} \widehat P_n ~.
    
\end{aligned}\]</span> In other words, the <span
class="math inline">\(L^1\)</span> random entropy condition in \eqref{eq:L1-random-entropy} implies
for all <span class="math inline">\(\eta &gt; 0\)</span> and <span
class="math inline">\(R &gt; 0\)</span>, we have <span
class="math display">\[\begin{aligned}
        \frac{\log N(\eta, \mathcal F_R, \lVert \cdot \rVert_{\widehat
P_n, 2})}{n} \xrightarrow{\mathbf P\,\,\!\!} 0 ~.
    
\end{aligned}\]</span> Clearly, because <span
class="math inline">\(\mathcal F_R\)</span> satisfies the hypothesis of
Lemma <a href="#lem:ulln-uniformly-bded" data-reference-type="ref"
data-reference="lem:ulln-uniformly-bded">1</a>, we have that the uniform
law of large numbers holds for each <span class="math inline">\(\mathcal
F_R\)</span>. All we need to do now is to unfix this dependence on <span
class="math inline">\(R\)</span>. To do so, pick an arbitrary <span
class="math inline">\(\eta &gt; 0\)</span>, and set <span
class="math inline">\(R\)</span> sufficiently large such that <span
class="math display">\[\begin{aligned}
        \int_{F &gt; R} F \mathrm{d} P \leq \eta ~.
    
\end{aligned}\]</span> Then, pick a sufficiently large <span
class="math inline">\(n_1\)</span> such that <span
class="math display">\[\begin{aligned}
        \int_{F &gt; R} F \mathrm{d} \widehat P_{n_1} \leq 2 \eta ~,~ \rm a.s.
    
\end{aligned}\]</span> Furthermore, we can also pick a sufficiently
large <span class="math inline">\(n_2\)</span> such that <span
class="math display">\[\begin{aligned}
        \sup_{f \in \mathcal F} \left| \int_{F \leq R} f \mathrm{d} \,
(\widehat P_{n_2} - P) \right| \leq \delta ~,~ \rm a.s.
    
\end{aligned}\]</span> Set <span class="math inline">\(n = \max \{n_1,
n_2\}\)</span>. Then, we have <span
class="math display">\[\begin{aligned}
        \sup_{f \in \mathcal F} \left| \int f \mathrm{d} \, (\widehat P_n -
\mathbf P\,\,\!\!) \right| &amp;\leq \sup_{f \in \mathcal F} \left|
\int_{F \leq R} f \mathrm{d} \, (\widehat P_n - \mathbf P\,\,\!\!) \right| +
\int_{F &gt; R} F \mathrm{d} \widehat P_n + \int_{F &gt; R} F \mathrm{d} P \leq 4
\eta ~,~ \rm a.s. ~,
    
\end{aligned}\]</span> which concludes the proof. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 3</strong>. Note that if <span
class="math inline">\(\mathcal F\)</span> is a bounded subset of <span
class="math inline">\(L^1 (\mathbf P\,\,\!\!)\)</span>, then the
envelope condition <span class="math inline">\(F \in L^1 (\mathbf
P\,\,\!\!)\)</span> and the <span class="math inline">\(L^1\)</span>
random entropy condition \eqref{eq:L1-random-entropy} are
also <em>necessary</em> for the uniform law of large numbers to
hold.</p>
</div>
<p>To close a loose end, we prove the following result.</p>
<div id="lem:symmetrization-constants" class="lemma">
<p><strong>Lemma 4</strong>. Assume that for some constants <span
class="math inline">\(C_1\)</span> and <span
class="math inline">\(C_2\)</span>, we have, for all <span
class="math inline">\(d &gt; 0\)</span> and <span
class="math inline">\(q \in \mathbb R^n\)</span>, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq k \leq n}
\varepsilon_k q_k \right| \geq d \right) \leq C_1 \exp \left( -
\frac{d^2}{C_2^2 \sum_{1 \leq k \leq n} q_k^2} \right) ~.
    
\end{aligned}\]</span> Assume <span class="math inline">\(\sup_{f \in
\mathcal F} \lVert g \rVert_{\widehat P_n, 2} \leq R\)</span>. Then,
there exists a constant <span class="math inline">\(C = C(C_1,
C_2)\)</span> such that, for all <span class="math inline">\(\varepsilon
\in [0,\eta)\)</span> and <span class="math inline">\(K &gt; 0\)</span>
satisfying <span class="math display">\begin{equation}\label{eq:symmetrization-constants-bound1}\begin{aligned}

        \sqrt{n} (\eta - \varepsilon) \geq C \left( R \vee
\int_{\frac{\varepsilon}{4K}}^{R} \sqrt{\log N(r, \mathcal F, \lVert
\cdot \rVert_{\widehat P_n, 2})} \mathrm{d} r \right) ~,
    
\end{aligned}\end{equation}</span> where <span class="math inline">\(\varepsilon_1,
\dots, \varepsilon_n\)</span> are i.i.d. Rademacher random variables, we
have <span class="math display">\[\begin{aligned}
        \mathbf
P\,\,\!\!\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k
\leq n} \varepsilon_k f(X_k) \right| \geq \delta \wedge \left\{ \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k^2 \leq K^2 \right\} \right) \leq C
\exp \left( -\frac{n(\eta - \varepsilon)^2}{C^2 R^2} \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> To start, pick <span class="math inline">\(C\)</span>
sufficient large such that, in \eqref{eq:symmetrization-constants-bound1},
we have <span class="math display">\begin{equation}\label{eq:symmetrization-constants-choice-eta}\begin{aligned}

        \sqrt{n} (\eta -
\varepsilon) \geq \left( 12 C_2 \sum_{1 \leq s \leq S} 2^{-s} R
\sqrt{\log N(2^{-s} R, \mathcal F, \lVert \cdot \rVert_{\widehat P_n,
2})} \right) \vee R C_2 \sqrt{1152 \log 2} ~,
    
\end{aligned}\end{equation}</span> where <span class="math inline">\(S = \min \{s
\geq 1 : 2^{-s} R \leq \rho\}\)</span> for <span
class="math inline">\(\rho &lt; R\)</span>. To continue, pick a
<em>minimal</em> <span class="math inline">\(2^{-s} R\)</span>-covering
set of <span class="math inline">\(\mathcal F\)</span>, denoted <span
class="math inline">\(\{g_j^s\}_{1 \leq j \leq N_s}\)</span>, where
<span class="math inline">\(N_s = N(2^{-s} R, \mathcal F, \lVert \cdot
\rVert_{\widehat P_n, 2})\)</span>. Then, we can apply the
Cauchy-Schwarz ienquality on the set <span class="math inline">\(\left\{
\frac1n \sum_{1 \leq k \leq n} \varepsilon_k^2 \leq K^2
\right\}\)</span> to see that, for <span class="math inline">\(S = \min
\{s \geq 1 : 2^{-s} R \leq \frac{\varepsilon}{K}\}\)</span>, we have
<span class="math display">\[\begin{aligned}
        \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k
(f_\theta(X_k) - f_\theta^S (X_k)) \right| \leq K \lVert f_{\theta} -
f_{\theta}^S \rVert_{\widehat P_n, 2 } \leq \varepsilon ~,
    
\end{aligned}\]</span> where <span class="math inline">\(f_\theta \in
\mathcal F\)</span> (and <span class="math inline">\(\theta\)</span> is
an index that parametrizes functions in <span
class="math inline">\(\mathcal F\)</span>, i.e. <span
class="math inline">\(\mathcal F \triangleq \{f_\theta : \theta \in
\Theta\}\)</span>). By this, it suffices to show that <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq j \leq N_S} \left| \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k  f_j^S (X_k) \right| \geq \eta -
\varepsilon \right)
    
\end{aligned}\]</span> obeys an exponential inequality. To achieve this,
we appeal to the usual chaining arguments. In particular, we write <span
class="math display">\[\begin{aligned}
        f_\theta^S = \sum_{1 \leq s \leq S} f_\theta^s - f_\theta^{s-1}
~.
    
\end{aligned}\]</span> We therefore have, by the triangle inequality,
<span class="math display">\[\begin{aligned}
        \lVert f_\theta^s - f_\theta^{s-1} \rVert_{\widehat P_n, 2}
&amp;\leq \lVert f_\theta^s - f_\theta \rVert_{\widehat P_n, 2} + \lVert
f_\theta - f_\theta^{s-1} \rVert_{\widehat P_n, 2} \\
        &amp;\leq 2^{-s} R + 2^{-s+1} R = 3R 2^{-s} ~.
    
\end{aligned}\]</span> So, if <span
class="math inline">\(\eta_s\)</span> are positive numbers such that
<span class="math inline">\(\sum_{1 \leq s \leq S} \eta_s \leq
1\)</span>, then we have <span class="math display">\[\begin{aligned}
        &amp; \mathbf P\,\,\!\!\left( \sup_{\theta \in \Theta} \left|
\frac1n \sum_{1 \leq s \leq S} \sum_{1 \leq k \leq n} \varepsilon_k
(f_\theta^s (X_k) - f_\theta^{s-1}(X_k)) \right| \geq \eta - \varepsilon
\right) \\
        \leq \:\: &amp; \sum_{1 \leq s \leq S} \mathbf P\,\,\!\!\left(
\sup_{\theta \in \Theta} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k (f_\theta^s (X_k) - f_\theta^{s-1}(X_k)) \right| \geq
(\eta - \varepsilon) \eta_s \right) \\
        \leq \:\: &amp; \sum_{1 \leq s \leq S} C_1 \exp \left( 2 \log
N(2^{-s} R, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2}) -
\frac{n(\eta - \varepsilon)^2 \eta_s^2}{9 C_2^2 R^2 2^{-2s}} \right) ~.
    
\end{aligned}\]</span> The rest of the arguments follow from a judicious
choice of <span class="math inline">\(\eta_s\)</span>. Pick <span
class="math display">\[\begin{aligned}
        \eta_s = \frac{2^{-s} \sqrt{s}}{8} \vee \frac{6 C_2 2^{-s} R
\sqrt{\log N(2^{-s} R, \mathcal F, \lVert \cdot \rVert_{\widehat P_n,
2})} }{\sqrt{n}(\eta - \varepsilon)} ~.
    
\end{aligned}\]</span> By \eqref{eq:symmetrization-constants-choice-eta},
we have <span class="math display">\[\begin{aligned}
        \sum_{1 \leq s \leq S} \eta_s \leq \sum_{1 \leq s \leq S}
\frac{2^{-s} \sqrt{s}}{8} + \frac{6 C_2 2^{-s} R \sqrt{\log N(2^{-s} R,
\mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})} }{\sqrt{n}(\eta -
\varepsilon)} \leq \frac12 + \frac12 = 1 ~.
    
\end{aligned}\]</span> And by the integral comparison test followed by
direct calculations, we have <span
class="math display">\[\begin{aligned}
        \sum_{1 \leq s \leq S} 2^{-s} \sqrt{s} &amp;\leq 1 +
\int_1^\infty 2^{-x} \sqrt{x} \mathrm{d} x \leq 1 + \int_0^\infty 2^{-x}
\sqrt{x} \mathrm{d} x \\
        &amp;= 1 + \sqrt{\frac{\pi}{4 (\log 2)^3}} \leq 4 ~.
    
\end{aligned}\]</span> Since <span
class="math display">\[\begin{aligned}
        \eta_s \geq \frac{6 C_2 2^{-s} R \sqrt{\log N(2^{-s} R, \mathcal
F, \lVert \cdot \rVert_{\widehat P_n, 2})} }{\sqrt{n}(\eta -
\varepsilon)} ~,
    
\end{aligned}\]</span> we have <span
class="math display">\[\begin{aligned}
        \log N(2^{-s} R, \mathcal F, \lVert \cdot \rVert_{\widehat P_n,
2}) \leq \frac{n(\eta - \varepsilon)^2 \eta_s^2}{36 C_2^2 2^{-2s} R^2}
~.
    
\end{aligned}\]</span> Therefore, <span
class="math display">\[\begin{aligned}
        \sum_{1 \leq s \leq S}
C_1 \exp \left( 2 \log N(2^{-s} R, \mathcal F, \lVert \cdot
\rVert_{\widehat P_n, 2}) - \frac{n(\eta - \varepsilon)^2 \eta_s^2}{9
C_2^2 R^2 2^{-2s}} \right) \leq \sum_{1 \leq s \leq S} C_2 \exp \left(
-\frac{n(\eta - \varepsilon)^2 \eta_s^2}{18 C_2^2 R^2 2^{-2s}} \right)
~.
    
\end{aligned}\]</span> Since <span class="math inline">\(\eta_s \geq
\frac{2^{-s} \sqrt{s}}{8}\)</span>, <span
class="math display">\[\begin{aligned}
        &amp; \sum_{1 \leq s \leq S} C_1 \exp \left( -\frac{n(\eta -
\varepsilon)^2 \eta_s^2}{18 C_2^2 R^2 2^{-2s}} \right) \\
        \leq \:\: &amp; \sum_{1 \leq s \leq S} C_1 \exp \left(
-\frac{n(\eta - \varepsilon)^2 s}{1152 C_2^2 R^2} \right) \leq \sum_{s
\in \mathbb N} C_1 \exp \left( -\frac{n(\eta - \varepsilon)^2 s}{1152
C_2^2 R^2} \right) \\
        = \:\: &amp; C_1 \left( 1 - \exp \left( -\frac{n(\eta -
\varepsilon)^2 s}{1152 C_2^2 R^2} \right) \right)^{-1} \exp \left(
-\frac{n(\eta - \varepsilon)^2 s}{1152 C_2^2 R^2} \right) \\
        \leq \:\: &amp; 2 C_1 \exp \left( -\frac{n(\eta - \varepsilon)^2
s}{1152 C_2^2 R^2} \right) ~,
    
\end{aligned}\]</span> where we note that the lats inequality follows
from the bound <span class="math display">\[\begin{aligned}
        \frac{n(\eta - \varepsilon)^2 s}{1152 C_2^2 R^2} \geq \log 2 ~,
    
\end{aligned}\]</span> as afforded by \eqref{eq:symmetrization-constants-choice-eta}.
Combining everything, we have <span
class="math display">\[\begin{aligned}
        \mathbf
P\,\,\!\!\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k
\leq n} \varepsilon_k f(X_k) \right| \geq \delta \wedge \left\{ \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k^2 \leq K^2 \right\} \right) \leq 2
C_1 \exp \left( -\frac{n(\eta - \varepsilon)^2 s}{1152 C_2^2 R^2}
\right) ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>We now look at a series of examples.</p>
<div class="lemma">
<p><strong>Lemma 5</strong> (Monotone, uniformly bounded functions). For
a fixed function <span class="math inline">\(F\)</span>, define <span
class="math display">\[\begin{aligned}
        \mathcal F = \left\{ \widetilde f F : \widetilde f \in
\widetilde{\mathcal F} \right\} ~,
    
\end{aligned}\]</span> where <span
class="math inline">\(\widetilde{\mathcal F}\)</span> is a class of
increasing functions on <span class="math inline">\(\mathbb R\)</span>
such that <span class="math inline">\(\sup_{\widetilde f \in
\widetilde{\mathcal F}} \lVert \widetilde f \rVert_\infty \leq
1\)</span>. Then, for any <span class="math inline">\(p \in
[1,\infty)\)</span> and any probability measure <span
class="math inline">\(Q\)</span>, <span
class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon, \mathcal F, Q) \lesssim \frac{\lVert
F \rVert_{Q,p}}{\varepsilon} \quad \text{for all } \varepsilon &gt; 0 ~.
    
\end{aligned}\]</span> As a consequence, if <span
class="math inline">\(F \in L^1(\mathbf P\,\,\!\!)\)</span>, then <span
class="math inline">\(\mathcal F\)</span> satisfies the uniform law of
large numbers.</p>
</div>
<div class="proof">
<p><em>Proof.</em> We take, for granted, that for the class of monotone,
uniform bounded functions, the bracketing entropy number obeys the upper
bound <span class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon, \widetilde{\mathcal F}, \widetilde
Q) \lesssim \frac{1}{\varepsilon} \quad \text{for all } \varepsilon &gt;
0
    
\end{aligned}\]</span> for any probability measure <span
class="math inline">\(\widetilde Q\)</span> and any <span
class="math inline">\(L^p\)</span> norm (the bound holds up to some
universal constant); this result is nontrivial and the proof of it is
quite intricate (see <span class="citation"
data-cites="van_der_vaart_weak_2000"></span>). Given this result, since
<span class="math display">\[\begin{aligned}
        \int |\widetilde f^U F - \widetilde f^L F|^p \mathrm{d} Q = \lVert F
\rVert_{Q,p}^p \int |\widetilde f^U - \widetilde f^L| \mathrm{d} \widetilde Q
    
\end{aligned}\]</span> for <span class="math inline">\(\mathrm{d} \widetilde Q
= \frac{F^p}{\lVert F \rVert_{Q,p}^p} \mathrm{d} Q\)</span>, so we have <span
class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon \lVert G \rVert_{Q,p}, \mathcal F, Q)
\lesssim \frac{\lVert F \rVert_{Q,p}}{\varepsilon} \quad \text{for all }
\varepsilon &gt; 0 ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<div class="example">
<p><strong>Example 6</strong> (Sobolev classes). Let <span
class="math inline">\(\mathcal F = \{f : [0,1] \to \mathbb R : \lVert f
\rVert_\infty \leq 1 ~,~ \int (f^{(k)})^2 (x) \mathrm{d} x \leq 1 \text{, and
} f^{(k-1)} \text{ is absolutely continuous for some fixed } k \in
\mathbb N \}\)</span>. Then, there exists a universal constant <span
class="math inline">\(K\)</span> such that for all <span
class="math inline">\(\varepsilon &gt; 0\)</span>, <span
class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot
\rVert_\infty) \leq K \left( \frac{1}{\varepsilon} \right)^{\frac1k} ~.
    
\end{aligned}\]</span> The class of functions <span
class="math inline">\(\mathcal F\)</span> is called the Sobolev
class.</p>
</div>
<div class="example">
<p><strong>Example 7</strong> (Functions of bounded variation). Let
<span class="math inline">\(\mathcal F\)</span> denote the class of
monotone functions <span class="math inline">\(f: \mathbb R \to
[-1,1]\)</span>. Then, there exists a universal constant <span
class="math inline">\(K\)</span> such that for all <span
class="math inline">\(r \geq 1\)</span> and probability measure <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>, we have <span
class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2}) \leq \frac{K}{\varepsilon} ~.
    
\end{aligned}\]</span> The class of functions <span
class="math inline">\(\mathcal F\)</span> is called the class of bounded
variation functions. We can also take <span
class="math inline">\(\mathcal F\)</span> to be the set of all functions
such that the differences of pairs of monotone increasing functions
increase at most by 1. By this result, we see that <span
class="math inline">\(\mathcal F\)</span> is <em><span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker</em> for every
<span class="math inline">\(\mathbf P\,\,\!\!\)</span> (this will be
defined in Section <a href="{% post_url 2026-06-16-donsker-class %}#sec:donsker" data-reference-type="ref"
data-reference="sec:donsker">[sec:donsker]</a>). This result is deduced
from <span class="citation"
data-cites="van_der_vaart_weak_2000"></span>.</p>
</div>
<div class="example">
<p><strong>Example 8</strong> (Smooth functions). Let <span
class="math inline">\(\mathcal F\)</span> be the class of real-valued
functions <span class="math inline">\(f: \mathbb R^d \to \mathbb
R\)</span> with partial derivations up to order <span
class="math inline">\(\alpha\)</span>, and are uniformly bounded by some
constants <span class="math inline">\(N_j\)</span> on each unit cube
<span class="math inline">\(I_j\)</span> (where <span
class="math inline">\(\mathbb R^d = \bigcup_j I_j\)</span>). Then, for
every <span class="math inline">\(V \geq \frac{d}{\alpha}\)</span> and
every probability measure <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>, there exists a constant <span
class="math inline">\(K = K(V, r, \alpha, d)\)</span> such that <span
class="math display">\[\begin{aligned}
        \log N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!,r}) \leq K \left( \frac{1}{\varepsilon}
\right)^V \left( \sum_{j \in \mathbb N} (N_j^r \mathbf
P\,\,\!\!(I_j))^{\frac{V}{V+r}} \right)^{\frac{V+r}{r}} ~.
    
\end{aligned}\]</span> The class of functions <span
class="math inline">\(\mathcal F\)</span> is here referred to as the
class of smooth functions. Note that if the series <span
class="math inline">\(\sum_{j \in \mathbb N} (N_j^r \mathbf
P\,\,\!\!(I_j))^{\frac{V}{V+r}}\)</span> converges for some <span
class="math inline">\(V &lt; 2\)</span> and <span
class="math inline">\(r=2\)</span>, then the class <span
class="math inline">\(\mathcal F\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-Donsker.</p>
</div>
<h2 id="uniform-law-of-large-numbers-via-symmetrization">Uniform Law of
Large Numbers Via Symmetrization</h2>
<p>We can also obtain the uniform law through analyzing quantities that
decide the behaviour of uniformity. An important quantity that underlies
the study of uniform laws is the <em>Rademacher complexity</em> of the
function class <span class="math inline">\(\mathcal F = \{f : f:\mathbb
R^n \to \mathbb R\}\)</span> considered. It turns out we ought to look
at the following construction: let <span
class="math display">\[\begin{aligned}
    \mathcal F (x) \triangleq \{ f(x_1, \dots, x_n) : f \in \mathcal F
\}
\end{aligned}\]</span> for some <span class="math inline">\(x = (x_1,
\dots, x_n) \in \mathbb R^n\)</span>. Based on this, we define the
<em>empirical Rademacher complexity</em> as <span
class="math display">\[\begin{aligned}
    \mathcal R \left( \frac{\mathcal F (x)}{n} \right) \triangleq
\mathbb E_{\varepsilon} \sup_{f \in \mathcal F} \left| \frac1n \sum_{1
\leq k \leq n} \varepsilon_k f(X_k) \right| ~,
\end{aligned}\]</span> where <span class="math inline">\(\varepsilon_1,
\dots, \varepsilon_n\)</span> are i.i.d. Rademacher random variables.
The <em>deterministic</em> quantity from taking the expectation of <span
class="math inline">\(\mathcal R(\cdot)\)</span>, i.e. <span
class="math display">\[\begin{aligned}
    \mathcal R_n (\mathcal F) \triangleq \mathbb E_X \mathbb
E_\varepsilon \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq
n} \varepsilon_k f(X_k) \right|
\end{aligned}\]</span> is called the <em>Rademacher complexity of the
function class <span class="math inline">\(\mathcal F\)</span></em>.
Analyzing this quantity is one of the ways we can obtain the uniform
law. The broad heuristic is as follows: any function class <span
class="math inline">\(\mathcal F\)</span> is extremely large; for all
practical (statistical) purposes, it is “too large” if we can
<em>always</em> find a function that has a high correlation with a
randomly drawn noise vector. Conversely, when the Rademacher complexity
decays as a function of sample size, then it is impossible to find a
function that correlates very highly in expectation with a randomly
drawn noise vector. Ideally, we’d want a tight control on the
<em>upper</em> bound of the Rademacher complexity. The reason is as
follows.</p>
<div id="thm:upper-bound-radamacher-on-c-unif-bded-function-class"
class="theorem">
<p><strong>Theorem 9</strong> (Uniformly bounded function class: upper
bound on Rademacher complexity). For any <span
class="math inline">\(c\)</span>-uniformly bounded class of functions
<span class="math inline">\(\mathcal F\)</span>, any positive integer
<span class="math inline">\(n \in \mathbb N\)</span>, and any scalar
<span class="math inline">\(\delta \geq 0\)</span>, we have <span
class="math display">\[\begin{aligned}
        \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \leq
2 \mathcal R_n (\mathcal F) + \delta
    
\end{aligned}\]</span> with <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>-probability at least <span class="math inline">\(1 -
e^{-\frac{n\delta^2}{2c^2}}\)</span>. Consequently, if <span
class="math inline">\(\mathcal R_n (\mathcal F) = o(1)\)</span>, <span
class="math inline">\(\lVert \widehat P_n - \mathbf
P\,\,\!\!\rVert_{\mathcal F} \xrightarrow{\rm a.s.} 0\)</span>.</p>
</div>
<p>To prove this result, we need a preliminary lemma.</p>
<div id="lem:supremum-convexity-bounds" class="lemma">
<p><strong>Lemma 10</strong> (Convex functions and supremum of random
variables). For any function <span class="math inline">\(f \in \mathcal
F\)</span> (any function class), <span class="math inline">\(\sup_{f \in
\mathcal F} \mathbb E f(X) \leq \mathbb E \sup_{f \in \mathcal F}
|f(X)|\)</span>. If <span class="math inline">\(\Phi\)</span> is any
nondecreasing and convex function, then <span
class="math inline">\(\sup_{f \in \mathcal F} \Phi (\mathbb E f(X)) \leq
\mathbb E \Phi( \sup_{f \in \mathcal F} |f(X)| )\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> First, because <span class="math inline">\(f(X) \leq
|f(X)| \leq \sup_{f \in \mathcal F} |f(X)|\)</span> for all <span
class="math inline">\(f \in \mathcal F\)</span>, it follows that <span
class="math inline">\(\mathbb E f(X) \leq \mathbb E \sup_{f \in \mathcal
F} |f(X)|\)</span>. Taking supremum on both sides yields the desired
result. For the second result, since <span
class="math inline">\(\Phi\)</span> is assumed to be nondecreasing, we
have <span class="math display">\[\begin{aligned}
        \Phi (\mathbb E f(X)) \leq \Phi(|\mathbb E f(X)|) \leq \Phi
(\mathbb E |f(X)|) \leq \Phi \left( \sup_{f \in \mathcal F} \mathbb E
|f(X)| \right)
    
\end{aligned}\]</span> for any <span class="math inline">\(f \in
\mathcal F\)</span>. Note the final quantity on the rightmost side is
deterministic. And, by the convexity of <span
class="math inline">\(\Phi\)</span>, we apply Jensen’s inequality to
find that <span class="math inline">\(\sup_{f \in \mathcal F} \Phi
(\mathbb E f(X)) \leq \mathbb E \Phi (\sup_{f \in \mathcal F}
|f(X)|)\)</span>, as desired. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:upper-bound-radamacher-on-c-unif-bded-function-class"
data-reference-type="ref"
data-reference="thm:upper-bound-radamacher-on-c-unif-bded-function-class">9</a>.</em>
The last consequence is straightforward to obtain: if <span
class="math inline">\(\mathcal R_n (\mathcal F) = o(1)\)</span>, then
the almost-sure convergence follows from the bound remaining to be
proved and the Borel-Cantelli lemma. So, it remains to prove the tail
bound in question.</p>
<ol>
<li><p><u>Claim: <span class="math inline">\(\lVert \widehat P_n -
\mathbf P\,\,\!\!\rVert_{\mathcal F}\)</span> admits a concentration
bound if <span class="math inline">\(\mathcal F\)</span> is <span
class="math inline">\(c\)</span>-uniformly bounded.</u> The idea is the
bounded difference inequality can be used to derive a concentration
result. In general, functions in <span class="math inline">\(\mathcal
F\)</span> need not be centred around its mean, so let us define <span
class="math inline">\(\overline f(x) \triangleq f(x) - \mathbb E
f(X)\)</span>. As a shorthand notation, define <span
class="math display">\[\begin{aligned}
        \overline{\mathcal F} &amp;\triangleq \{ \overline f : f \in
\mathcal F \} ~, \\
        G(x_1, \dots, x_n) &amp;\triangleq \sup_{f \in \mathcal F}
\left| \frac1n \sum_{1 \leq k \leq n} \overline f (x_k) \right|  ~.
    
\end{aligned}\]</span> It remains to check the conditions required for
applying the bounded difference <a href="{% post_url 2026-06-15-fundamental-techniques %}#property:bounded-difference">bounded difference property</a>
and Efron-Stein inequality (Theorem <a href="{% post_url 2026-06-15-fundamental-techniques %}#thm:tensorization-bound"
data-reference-type="ref"
data-reference="thm:tensorization-bound">[thm:tensorization-bound]</a>).
In particular, since the coordinates are interchangeable, we perturb the
first coordinate: let <span class="math inline">\(x = (x_1, x_2, \dots,
x_n)\)</span> and <span class="math inline">\(\widetilde x = (\widetilde
x_1, x_2, \dots, x_n)\)</span> (i.e. <span
class="math inline">\(\widetilde x_k = x_k\)</span> for all <span
class="math inline">\(k \geq 2\)</span>). Then, <span
class="math display">\[\begin{aligned}
        \left| \frac1n \sum_{1 \leq k \leq n} \overline f(x_k) \right| -
\sup_{g \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \overline
g (\widetilde x) \right| &amp; \leq \left| \frac1n \sum_{1 \leq k \leq
n} \overline f(x_k) \right| - \left| \frac1n \sum_{1 \leq k \leq n}
\overline f (\widetilde x) \right| \\
        &amp;\leq \left| \frac1n (\overline f(x_1) - f(\widetilde x_1))
\right| \leq \frac{2c}{n} ~,
    
\end{aligned}\]</span> where the first inequality follows from the fact
that <span class="math inline">\(\overline f\)</span> is not the argmax
of the second term, the second inequality follows from the reverse
triangle inequality and related cancellations, and the final inequality
ofllows from the <span class="math inline">\(c\)</span>-uniform
boundedness of <span class="math inline">\(\mathcal F\)</span>. Taking
the supremum of both sides over all functions <span
class="math inline">\(f \in \mathcal F\)</span> gives <span
class="math inline">\(|G(x) - G(\widetilde x)| \leq
\frac{2c}{n}\)</span> for all choices of <span class="math inline">\(x
\in \mathbb R^n\)</span>. Therefore, the bounded difference inequality
implies, for all <span class="math inline">\(t\)</span>, <span
class="math display">\[\begin{aligned}
        \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} -
\mathbb E \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F}
\leq t
    
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-e^{-\frac{nt^2}{2c^2}}\)</span>. Here, the
probability is <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>-probability.</p></li>
<li><p><u>Claim: <span class="math inline">\(\mathbb E \lVert \widehat
P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \leq 2 \mathcal R_n (\mathcal
F)\)</span>.</u> This follows from standard symmetrization arguments.
Let <span class="math inline">\((Y_1, \dots, Y_n)\)</span> denote an
i.i.d. sequence of random variables that is independent of <span
class="math inline">\((X_1, \dots, X_n)\)</span>. It then follows <span
class="math display">\[\begin{aligned}
        \mathbb E \lVert \widehat P_n - \mathbf
P\,\,\!\!\rVert_{\mathcal F} &amp;= \mathbb E_X \sup_{f \in \mathcal F}
\left| \frac1n \sum_{1 \leq k \leq n} \left( f(X_k) - \mathbb E_{Y_k}
f(Y_k) \right) \right| \\
        &amp;= \mathbb E_X \sup_{f \in \mathcal F} \left| \mathbb E_Y
\left[ \frac1n \sum_{1 \leq k \leq n} f(X_k) - f(Y_k) \right] \right| \\
        &amp;\leq \mathbb E_X \mathbb E_Y \sup_{f \in \mathcal F} \left|
\frac1n \sum_{1 \leq k \leq n} f(X_k) - f(Y_k) \right| ~,
    
\end{aligned}\]</span> where the final inequality follows from a direct
application of Lemma \eqref{lem:supremum-convexity-bounds}.
To conclude, use the standard symmetrization trick: let <span
class="math inline">\((\varepsilon_1, \dots, \varepsilon_n)\)</span> be
i.i.d. Rademacher random variables that are independent of <span
class="math inline">\((X_1, \dots, X_n)\)</span> (and therefore
independent of <span class="math inline">\((Y_1, \dots, Y_n)\)</span>).
We then have, by independence, the random vector <span
class="math inline">\((\varepsilon_k (f(X_k) - f(Y_k)))_{1 \leq k \leq
n}\)</span> has the same joint distribution as <span
class="math inline">\((f(X_k) - f(Y_k))_{1 \leq k \leq n}\)</span>.
Therefore, <span class="math display">\[\begin{aligned}
        \mathbb E_X \mathbb E_Y \sup_{f \in \mathcal F} \left| \frac1n
\sum_{1 \leq k \leq n} f(X_k) - f(Y_k) \right| &amp;= \mathbb E_X
\mathbb E_Y \mathbb E_{\varepsilon} \sup_{f \in \mathcal F} \left|
\frac1n \sum_{1 \leq k \leq n} \varepsilon_k (f(X_k) - f(Y_k)) \right|
\\
        &amp;\leq 2 \mathbb E_X \mathbb E_{\varepsilon} \sup_{f \in
\mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k)
\right| = 2 \mathcal R_n (\mathcal F) ~.
    
\end{aligned}\]</span></p></li>
</ol>
<p>Combining the arguments of the preceding steps then concludes the
proof. ◻</p>
</div>
<p>Now, a natural question is: Theorem <a
href="#thm:upper-bound-radamacher-on-c-unif-bded-function-class"
data-reference-type="ref"
data-reference="thm:upper-bound-radamacher-on-c-unif-bded-function-class">9</a>
guarantees an upper bound on the Rademacher complexity; is there a lower
bound to be obtained, at least in the class of <span
class="math inline">\(c\)</span>-uniformly bounded functions? The answer
is yes.</p>
<div id="thm:lower-bound-radamacher-on-c-unif-bded-function-class"
class="theorem">
<p><strong>Theorem 11</strong> (Uniformly bounded function class: lower
bound on Rademacher complexity). For any <span
class="math inline">\(c\)</span>-uniformly bounded class of functions
<span class="math inline">\(\mathcal F\)</span>, any positive integer
<span class="math inline">\(n \in \mathbb N\)</span>, and any scalar
<span class="math inline">\(\delta \geq 0\)</span>, we have <span
class="math display">\[\begin{aligned}
        \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \geq
\mathcal R_n (\mathcal F) - \frac{\sup_{f \mathcal F} |\mathbb E
f|}{2\sqrt{n}} - \delta
    
\end{aligned}\]</span> with <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>-probability at least <span class="math inline">\(1 -
e^{-\frac{n\delta^2}{2c^2}}\)</span>. Consequently, if <span
class="math inline">\(\mathcal R_n (\mathcal F) = o(1)\)</span>, <span
class="math inline">\(\lVert \widehat P_n - \mathbf
P\,\,\!\!\rVert_{\mathcal F} \xrightarrow{\rm a.s.} 0\)</span>.</p>
</div>
<p>We need a preliminary step in order to establish the lower bound of
Rademacher complexity.</p>
<div id="lem:convex-bound-on-F-sup-norm-sandwich" class="lemma">
<p><strong>Lemma 12</strong>. For all convex, nondecreasing real-valued
function <span class="math inline">\(\Phi : \mathbb R \to \mathbb
R\)</span>, we have <span class="math display">\[\begin{aligned}
        \mathbb E_X \mathbb E_\varepsilon \Phi \left( \frac12 \lVert
\mathbb S_n \rVert_{\overline F} \right) \leq \mathbb E_X \Phi ( \lVert
\widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} ) \leq \mathbb E_X
\mathbb E_{\varepsilon} \Phi (2 \lVert \mathbb S_n \rVert_{\mathcal F})
~,
    
\end{aligned}\]</span> where <span class="math inline">\(\mathbb S_n
\triangleq \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k) \right|\)</span> and <span
class="math inline">\(\overline{\mathcal F} \triangleq \{ f - \mathbb E
f : f \in \mathcal F \}\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> By convexity, the nondecreasing property, and Lemma
<a href="#lem:supremum-convexity-bounds" data-reference-type="ref"
data-reference="lem:supremum-convexity-bounds">10</a>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E_X \Phi ( \lVert \widehat P_n - \mathbf
P\,\,\!\!\rVert_{\mathcal F} ) &amp;\leq \mathbb E_X \Phi \left( \sup_{f
\in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} f(X_k) - \mathbb
E_{Y_k} f(Y_k) \right| \right) \\
        &amp;\leq \mathbb E_X \mathbb E_Y \Phi \left( \sup_{f \in
\mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} f(X_k) - f(Y_k)
\right| \right) \\
        &amp;= \mathbb E_X \mathbb E_Y \mathbb E_{\varepsilon} \Phi
\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k ( f(X_k) - f(Y_k) ) \right| \right) ~.
    
\end{aligned}\]</span> Let us analyze the last term. By the i.i.d.
property of <span class="math inline">\((X_1, \dots, X_n)\)</span> and
its independence from <span class="math inline">\((Y_1, \dots,
Y_n)\)</span>, as well as the triangle inequality, we have <span
class="math display">\[\begin{aligned}
        &amp;\quad \mathbb E_X \mathbb E_Y \mathbb E_{\varepsilon} \Phi
\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k ( f(X_k) - f(Y_k) ) \right| \right) \\
        &amp;\leq \mathbb E_X \mathbb E_Y \mathbb E_{\varepsilon} \Phi
\left( \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k) \right| + \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f(Y_k) \right| \right) \\
        &amp;\leq \frac12 \mathbb E_X \mathbb E_{\varepsilon} \Phi
\left( 2 \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k) \right| \right) + \frac12 \mathbb E_Y \mathbb
E_{\varepsilon} \Phi \left( 2 \sup_{f \in \mathcal F} \left| \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k f(Y_k) \right| \right) \\
        &amp;= \mathbb E_X \mathbb E_{\varepsilon} \Phi \left( 2 \sup_{f
\in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k
f(X_k) \right| \right) ~,
    
\end{aligned}\]</span> which gives us the second inequality in the
statement of the result. For the frist inequality: by Jensen’s
inequality and identical arguments as above, we have <span
class="math display">\[\begin{aligned}
        \mathbb E_X \mathbb E_\varepsilon \Phi \left( \frac12 \lVert
\mathbb S_n \rVert_{\overline F} \right) &amp;= \mathbb E_X \mathbb
E_\varepsilon \Phi \left( \frac12 \sup_{f \in \mathcal F} \left| \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k (f(X_k) - \mathbb E_{Y_k} f(Y_k))
\right| \right) \\
        &amp;\leq \mathbb E_X \mathbb E_Y \mathbb E_\varepsilon \Phi
\left( \frac12 \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k
\leq n} \varepsilon_k (f(X_k) - f(Y_k)) \right| \right) \\
        &amp;= \mathbb E_X \mathbb E_Y \Phi \left( \frac12 \sup_{f \in
\mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} f(X_k) - f(Y_k)
\right| \right) ~.
    
\end{aligned}\]</span> Applying the triangle inequality (after adding
and subtracting <span class="math inline">\(\mathbb E f\)</span>), we
have <span class="math display">\[\begin{aligned}
        \frac12 \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k
\leq n} f(X_k) - f(Y_k) \right| \leq \frac12 \sup_{f \in \mathcal F}
\left| \frac1n \sum_{1 \leq k \leq n} f(X_k) - \mathbb E f \right| +
\frac12 \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n}
f(X_k) - \mathbb E f \right| ~,
    
\end{aligned}\]</span> from which we apply <span
class="math inline">\(\Phi\)</span> to both sides, and appeal to the
properties of <span class="math inline">\(\Phi\)</span>, taking
expectations, and using the i.i.d. property <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> to reach the desired conclusion. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:lower-bound-radamacher-on-c-unif-bded-function-class"
data-reference-type="ref"
data-reference="thm:lower-bound-radamacher-on-c-unif-bded-function-class">11</a>.</em>
Clearly, by the notations introduced in Lemma <a
href="#lem:convex-bound-on-F-sup-norm-sandwich"
data-reference-type="ref"
data-reference="lem:convex-bound-on-F-sup-norm-sandwich">12</a>, we have
<span class="math display">\[\begin{aligned}
        \lVert \mathbb S_n \rVert_{\mathcal F} &amp;= \sup_{f \in
\mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) -
\frac1n \sum_{1 \leq k \leq n} \varepsilon_k \mathbb E f \right| \\
        &amp;\geq \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k
\leq n} \varepsilon_k f(X_k) \right| - \frac{\sup_{f \in \mathcal F}
|\mathbb E f|}{n} \left| \sum_{1 \leq k \leq n} \varepsilon_k \right| ~.
    
\end{aligned}\]</span> Because Cauchy-Schwarz impllies <span
class="math display">\[\begin{aligned}
        \mathbb E \left| \sum_{1 \leq k \leq n} \varepsilon_k \right|
\leq \sqrt{\mathbb E \left[ \sum_{1 \leq k \leq n} \varepsilon_k
\right]^2} = \sqrt{\mathbb E \left[\sum_{1 \leq k \leq n}
\varepsilon_k^2 \right]} = \sqrt{n} ~,
    
\end{aligned}\]</span> we then have <span
class="math display">\[\begin{aligned}
        \lVert \mathbb S_n \rVert_{\mathcal F} \geq \sup_{f \in \mathcal
F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right| -
\frac{\sup_{f \in \mathcal F} |\mathbb E f|}{\sqrt{n}} ~,
    
\end{aligned}\]</span> from which the desired conclusion follows because
we have just established <span class="math display">\[\begin{aligned}
        \mathbb E_X \lVert \widehat P_n - \mathbf
P\,\,\!\!\rVert_\mathcal F &amp;\geq \frac12 \mathbb E_X \mathbb
E_\varepsilon \lVert \mathbb S_n \rVert_{\overline{\mathcal F}} \geq
\frac12 \left( \mathcal R_n (\mathcal F) - \frac{\sup_{f \in \mathcal F}
|\mathbb E f|}{\sqrt{n}} \right) ~,
    
\end{aligned}\]</span> therefore the conclusion follows after appealing
to the concentration result from earlier. ◻</p>
</div>
<div class="example">
<p><strong>Example 13</strong> (Vacuous upper bound on the Rademacher
complexity). Let <span class="math inline">\(\mathcal S\)</span> denote
the class of all subsets <span class="math inline">\(S \subset
[0,1]\)</span> for which <span class="math inline">\(S\)</span> has a
finite number of elements. Fix any <span
class="math inline">\(\varepsilon = (\varepsilon_1, \dots,
\varepsilon_n)\)</span> and <span class="math inline">\(x = (x_1, \dots,
x_n)\)</span>. Then, we can define <span
class="math inline">\(I(\varepsilon) = \{ i \in \{1, \dots, n\} :
\varepsilon_i = 1 \}\)</span>. Constructed this way, we can then define
<span class="math inline">\(S(x, \varepsilon) \triangleq \{ x_i : i \in
I(\varepsilon) \}\)</span>, from which it follows directly that <span
class="math display">\[\begin{aligned}
        \mathcal R_n(\mathcal{S})
        \geq \frac{1}{n}
        \mathbb E_X \mathbb E_{\varepsilon} \left[ \sum_{1 \leq k \leq
n}
          \varepsilon_k \mathbb 1 _{S(X, \varepsilon)} (X_k)
        \right]
        = P (\varepsilon_1 = 1)
        = \frac{1}{2} ~.
    
\end{aligned}\]</span> In other words, the uniform law of large numbers
fails for functions defined on <span class="math inline">\(\mathcal
S\)</span>. This is because the calculates above shows <span
class="math inline">\(\mathcal R_n (\mathcal S) \neq o(1)\)</span>. In
particular, this is because the upper bound on the Rademacher
complexity, here, is <span class="math inline">\(2 \mathcal R_n
(\mathcal{S}) + \delta \geq 1\)</span> for any <span
class="math inline">\(\delta \geq 0\)</span>, which is—of course—a
vacuous upper bound.</p>
</div>
<div class="example">
<p><strong>Example 14</strong> (Linear classifiers). Consider the
function class <span class="math inline">\(\mathcal F \triangleq \{ f :
x \mapsto \operatorname{sign}(\langle \theta, x \rangle): \theta \in
\mathbb R^d, ~ \lVert \theta \rVert^2 =1 \}\)</span>, which clearly
corresponds to the <span class="math inline">\(\{-1, 1\}\)</span>-valued
classification rules defined by linear functions in <span
class="math inline">\(\mathbb R^d\)</span>. Supposing <span
class="math inline">\(d \geq n\)</span>, let <span
class="math inline">\(\widetilde x_n = \{x_1, \dots, x_n\}\)</span>
denote a collection of linearly independent vectors in <span
class="math inline">\(\mathbb R^d\)</span>. We can naturally ask about
the Rademacher complexity of this function class.</p>
<p>To start, for any fixed <span class="math inline">\(X = [ x_1, \dots,
x_n ] \in \mathbb R^{n \times d}\)</span> and any vector <span
class="math inline">\(\varepsilon = ( \varepsilon_1 , \dots,
\varepsilon_n ) \in \mathbb R^n\)</span>, because <span
class="math inline">\(d \geq n\)</span>, it must be that <span
class="math inline">\(X \alpha = \varepsilon\)</span> has at least one
solution. The solution to this linear system (denoted <span
class="math inline">\(\alpha\)</span>) cannot be the zero vector,
because all components of <span
class="math inline">\(\varepsilon\)</span> are either <span
class="math inline">\(-1\)</span> or <span
class="math inline">\(1\)</span>. Therefore, we can, without loss, take
<span class="math inline">\(\theta =
\frac{\alpha}{\|\alpha\|_2}\)</span> and have <span
class="math inline">\(\operatorname{sign}(\langle x, \theta \rangle) =
\operatorname{sign}(\langle x , \alpha \rangle)\)</span> for all <span
class="math inline">\(x \in \mathbb R^n\)</span>. It then follows that
<span class="math display">\[\begin{aligned}
        \mathbb E_\varepsilon
        \sup_{f \in \mathscr{F}}
        \left| \frac{1}{n} \sum_{1 \leq k \leq n} \varepsilon_k f(x_k)
\right| =
        \frac{1}{n} \mathbb E_\varepsilon \left[ \sum_{1 \leq k \leq n}
\varepsilon_k \operatorname{sign}(\varepsilon_k) \right]
        = 1 ~.
    
\end{aligned}\]</span> The calculation above implies the class of linear
classifiers is too complicated when we are in the high-dimensional
regime (i.e. <span class="math inline">\(d \geq n\)</span>), and thus
the use of (unpenalised) empirical risk minimisation will lead to
overfitting.</p>
</div>
<h2 id="localization-and-the-uniform-law">Localization and the Uniform
Law</h2>
<p>We can think about the problem of deriving the uniform law of large
numbers in a more systematic way. Namely, we can view the samples drawn
<span class="math inline">\(\{X_i\}\)</span> as random variables, so
that we work with the empirical norm, which is itself a random variable.
The analysis follows from a careful study of the <em>random</em>
quantity called <em>localized Rademacher complexity</em>. The purpose is
to analyze the random quantity <span class="math inline">\(|\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!,
2}|\)</span>, where we have i.i.d. data <span class="math inline">\(X_1,
\dots, X_n \sim \mathbf P\,\,\!\!\)</span>, and <span
class="math inline">\(\widehat P_n\)</span> is the empirical measure
defined per usual based on the samples drawn. As always, we use <span
class="math inline">\(x_1, \dots, x_n\)</span> to denote the samples
drawn. For a given <span class="math inline">\(\delta &gt; 0\)</span>
and a given class of functions <span class="math inline">\(\mathcal
F\)</span>, the <em>localized Rademacher complexity</em> is defined as
<span class="math display">\[\begin{aligned}
    \overline{\mathcal R}_n (\mathcal F, \delta) \triangleq \mathbb E_X
\mathbb E_\varepsilon \left[ \underset{f \in \mathcal F : \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \leq \delta}{\sup} \left| \sum_{1 \leq k
\leq n} \varepsilon_k f(x_k) \right| \right] ~.
\end{aligned}\]</span> Here, <span class="math inline">\(X = (x_1,
\dots, x_n)\)</span> is to be understood as the vector of data <span
class="math inline">\(x_1,  \dots, x_n\)</span>. There is an analogous
<em>data-dependent</em> quantity, called the <em>localized empirical
Rademacher complexity</em> <span class="math display">\[\begin{aligned}
    \breve{\mathcal R}_n (\mathcal F, \delta) \triangleq \mathbb
E_\varepsilon \left[ \underset{f \in \mathcal F : \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \leq \delta}{\sup} \left| \sum_{1 \leq k
\leq n} \varepsilon_k f(x_k) \right| \right] ~.
\end{aligned}\]</span> Later, it will be of interest to study the
<em>smallest</em> positive solutions to the following inequalities:
<span class="math display">\begin{equation}\label{eq:critical-inequality-rademacher}\begin{aligned}
     \overline{\mathcal R}_n
(\mathcal F, \delta) &amp;\leq \frac{\delta^2}{c} ~, \\
    \label{eq:critical-inequality-rademacher-emp} \breve{\mathcal R}_n
(\mathcal F, \delta) &amp;\leq \frac{\delta^2}{c} ~.
\end{aligned}\end{equation}</span> We let <span
class="math inline">\(\delta_n\)</span> and <span
class="math inline">\(\breve \delta_n\)</span> denote such solutions to
the inequalities above. To ease discussions, let <span
class="math inline">\(\mathcal F\)</span> denote the function class
consisting of <span class="math inline">\(1\)</span>-uniformly bounded<a
href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a>, star-shaped function. By
<em>star-shaped</em>, we mean for all <span class="math inline">\(f \in
\mathcal F\)</span> and <span class="math inline">\(\alpha \in
[0,1]\)</span>, <span class="math inline">\(\alpha f \in \mathcal
F\)</span>. There is a particularly useful result we will use repeatedly
in the following analyses.</p>
<div id="lem:sandwich-rademacher-radii" class="lemma">
<p><strong>Lemma 15</strong>. For any <span
class="math inline">\(1\)</span>-bounded, star-shaped function class
<span class="math inline">\(\mathcal F\)</span>, we have <span
class="math display">\[\begin{aligned}
        \frac{\delta_n}{4} \leq \breve \delta_n \leq 3 \delta_n
    
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-c_1 e^{-c_2 n \delta_n^2}\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Define the random variable <span
class="math display">\[\begin{aligned}
        \overline{\mathcal A}_n (t) \triangleq \mathbb E_\varepsilon
\left[ \underset{f \in \mathcal F : \lVert f \rVert_{\mathbf P\,\,\!\!,
2} \leq t}{\sup} \left| \sum_{1 \leq k \leq n} \varepsilon_k f(x_k)
\right| \right]
    
\end{aligned}\]</span> for all <span class="math inline">\(t &gt;
0\)</span>. In other words, <span
class="math inline">\(\overline{\mathcal R}_n (t) = \mathbb
E_\varepsilon \overline{\mathcal A}_n (t)\)</span> by construction. Let
us define <span class="math display">\[\begin{aligned}
        B_0 (t) &amp;\triangleq \left\{ |\overline{\mathcal A}_n(t) -
\overline{\mathcal R}_n (t)| \leq \frac{\delta_n t}{8} \right\} ~, \\
        B_1 &amp;\triangleq \left\{ \sup_{f \in \mathcal F} \frac{\left|
\lVert f \rVert_{\widehat P_n, 2}^2 - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}^2 \right|}{\lVert f \rVert_{\mathbf P\,\,\!\!, 2}^2 +
\delta_n^2} \leq \frac12 \right\} ~.
    
\end{aligned}\]</span> Preliminary observation: note that if we
conditional on <span class="math inline">\(B_1\)</span>, by the triangle
inequality, we have, for all <span class="math inline">\(f \in \mathcal
F\)</span>, <span class="math display">\[\begin{aligned}
        \lVert f \rVert_{\mathbf P\,\,\!\!, 2} &amp;\leq \sqrt{2 \lVert
f \rVert_{\widehat P_n, 2}^2 + \delta_n^2} \leq 2 \lVert f
\rVert_{\widehat P_n, 2} + \delta_n ~, \\
        \lVert f \rVert_{\widehat P_n, 2} &amp;\leq \sqrt{4 \lVert f
\rVert_{\mathbf P\,\,\!\!, 2}^2 + \frac12 \delta_n^2} \leq 2 \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} + \delta_n ~.
    
\end{aligned}\]</span> As such, conditional on <span
class="math inline">\(B_1\)</span>, we have <span class="math display">\begin{equation}\label{eq:mathcal-A-conditional-bound}\begin{aligned}
         \overline{\mathcal A}_n
(t) &amp;\leq \mathbb E_\varepsilon \left[ \underset{f \in \mathcal F :
\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \leq 2t + \delta_n}{\sup} \left|
\sum_{1 \leq k \leq n} \varepsilon_k f(x_k) \right| \right] =
\breve{\mathcal R}_n (2t + \delta_n) ~, \\
        \label{eq:breve-R-n-conditional-bound} \breve{\mathcal R}_n (t)
&amp;\leq \overline{\mathcal A}_n (2t + \delta_n) ~.
    
\end{aligned}\end{equation}</span></p>
<p>We are now ready to prove the desired sandwich relation. First, the
lower bound follows from conditioning on <span class="math inline">\(B_0
(\delta_n)\)</span> and <span class="math inline">\(B_1\)</span>, from
which we have <span class="math display">\[\begin{aligned}
        \delta_n^2 = \overline{\mathcal R}_n (\delta_n) &amp;\leq
\overline{\mathcal A}_n (\delta_n) + \frac18 \delta_n^2 \\
        &amp;\leq \breve{\mathcal R}_n (3\delta_n) + \frac18 \delta_n^2
\\
        &amp;\leq 3 \delta_n \breve \delta_n + \frac18 \delta_n^2 ~,
    
\end{aligned}\]</span> where the first inequality follows from applying
the conditioning on <span class="math inline">\(B_0 (\delta_n)\)</span>,
the second inequality follows from \eqref{eq:mathcal-A-conditional-bound}
with <span class="math inline">\(t=\delta_n\)</span>, and the third
inequality follows from a fairly direct argument involving a tail bound
on the empirical Rademacher complexity<a href="#fn2"
class="footnote-ref" id="fnref2" role="doc-noteref"><sup>2</sup></a>.
Rearranging these inequalities give us <span
class="math inline">\(\frac78 \delta_n^2 \leq 3 \delta_n \breve
\delta_n\)</span>, which implies <span class="math inline">\(\breve
\delta_n \geq \frac{\delta_n}{4}\)</span>.</p>
<p>Second, the upper bound follows from conditioning on <span
class="math inline">\(B_0 (7\delta_n)\)</span> and <span
class="math inline">\(B_1\)</span>, because this then gives us <span
class="math display">\[\begin{aligned}
        \breve{\mathcal R}_n (3\delta_n) \leq \overline{\mathcal A}_n
(7\delta_n) \leq \mathcal R_n (7\delta_n) + \frac78 \delta_n^2 ~,
    
\end{aligned}\]</span> where the first inequality follows from applying
\eqref{eq:breve-R-n-conditional-bound}
with <span class="math inline">\(t = 3\delta_n\)</span>, and the second
inequality follows from applying the definition of <span
class="math inline">\(B_0 (7\delta_n)\)</span>. Notice that <span
class="math inline">\(7\delta_n \geq \delta_n\)</span> by construction
(since <span class="math inline">\(\delta_n\)</span> is a
positive/nonnegative solution), it follows from a fairly direct
argument<a href="#fn3" class="footnote-ref" id="fnref3"
role="doc-noteref"><sup>3</sup></a> involving a tail bound on the
empirical Rademacher complexity that <span
class="math inline">\(\mathcal R_n(7\delta_n) \leq 7
\delta_n^2\)</span>. Putting these arguments together, we then have
<span class="math inline">\(\breve{\mathcal R}_n (3\delta_n) \leq 8
\delta_n^2 &lt; 9 \delta_n^2\)</span>. The desired upper bound then
follows from the definitions of <span
class="math inline">\(\delta_n\)</span> and <span
class="math inline">\(\breve \delta_n\)</span>.</p>
<p>It remains to show that <span class="math inline">\(B_0 (t)\)</span>
and <span class="math inline">\(B_1\)</span> are bounded in probability.
We leave the analysis of <span class="math inline">\(B_1\)</span> till
later (this is a straightforward consequence of a result that will
follow). For <span class="math inline">\(B_0 (t)\)</span>, it is far
more convenient to work with <span class="math inline">\(t = \alpha
\delta_n\)</span> for any <span class="math inline">\(\alpha \geq
1\)</span>. A relatively standard result shows that <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(B_0^c (\alpha \delta_n)) = \mathbf
P\,\,\!\!\left( |\overline{\mathcal A}_n (\alpha \delta_n) -
\overline{\mathcal R}_n (\alpha \delta_n)| \geq \frac{\alpha
\delta_n^2}{8} \right) \leq 2 \exp \left( -\frac{1}{64}
\frac{n\alpha\delta_n^4}{2 \overline{\mathcal R}_n (\alpha \delta_n) +
(\alpha \delta_n^2/12)} \right) ~,
    
\end{aligned}\]</span> so that for any <span
class="math inline">\(\alpha \geq 1\)</span>, we have <span
class="math inline">\(\overline{\mathcal R}_n (\alpha \delta_n) \geq
\overline{\mathcal R}_n (\delta_n) = \delta_n^2\)</span>, from which we
have <span class="math inline">\(\mathbf P\,\,\!\!(B_0^c (\alpha
\delta_n)) \leq 2 e^{-c_2 n \delta_n^2}\)</span>. ◻</p>
</div>
<div id="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
class="theorem">
<p><strong>Theorem 16</strong>. Suppose <span
class="math inline">\(\delta_n\)</span> is any positive solution to the
inequality <span class="math inline">\(\overline{\mathcal R}_n (\mathcal
F, \delta) \leq \frac{\delta^2}{c}\)</span>, where <span
class="math inline">\(\mathcal F\)</span> is a <span
class="math inline">\(c\)</span>-uniformly bounded, star-shaped function
class. Then, for any <span class="math inline">\(t \geq
\delta_n\)</span>, <span class="math display">\begin{equation}\label{eq:bounding-rademacher-complexity-star-shaped-c-unif-bouned-result1}\begin{aligned}

        |\lVert f \rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}| &lt; \frac{\lVert f \rVert_{\mathbf P\,\,\!\!, 2} +
t^2}{2}
    
\end{aligned}\end{equation}</span> with probability at least <span
class="math inline">\(1 - c_1 e^{-c_2 \frac{nt^2}{c^2}}\)</span>. If, in
addition, <span class="math inline">\(n \delta_n^2 \geq \frac{2}{c_2}
\log (4 \log (\frac{1}{\delta_n}))\)</span>, then <span class="math display">\begin{equation}\label{eq:bounding-rademacher-complexity-star-shaped-c-unif-bouned-result2}\begin{aligned}

        |\lVert f \rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}| &lt; c_0 \delta_n \qquad \text{for all } f \in \mathcal F
    
\end{aligned}\end{equation}</span> with probability at least <span
class="math inline">\(1 - \widetilde c_1 e^{- \widetilde c_2 \frac{n
\delta_n^2}{c^2}}\)</span>.</p>
</div>
<p>The proof of Theorem <a
href="#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">16</a>
is not a trivial exercise. It takes a few intermediate steps.</p>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">16</a>.</em></p>
<ol>
<li><p>The result for general <span
class="math inline">\(c\)</span>-uniformly bounded can be established
via a rescaling argument once we show the theorem is true for <span
class="math inline">\(c=1\)</span>. So, let us restrict attention to
<span class="math inline">\(1\)</span>-uniformly bounded function class.
The goal is to prove the result for <span class="math inline">\(c_0 =
1\)</span>, so it is convenient to redefine <span
class="math inline">\(\delta_n\)</span> to be the solution to the
inequality <span class="math inline">\(\overline{\mathcal R}_n (\mathcal
F, \delta) \leq \frac{\delta^2}{16}\)</span>.</p>
<p>Define <span class="math display">\[\begin{aligned}
    B_r (\mathcal F, 2) &amp;\triangleq \left\{ f \in \mathcal F :
\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \leq r \right\} ~, \\
    M_n (r) &amp;\triangleq \sup_{f \in B_r (\mathcal F, 2)} |\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| ~.
\end{aligned}\]</span> Note that these quantities are indexed by <span
class="math inline">\(r \in (0,1]\)</span>. Then, we define the events
<span class="math display">\[\begin{aligned}
    G_0 &amp;\triangleq \left\{ f \in \mathcal F : |\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| \geq
\frac{\lVert f \rVert_{\mathbf P\,\,\!\!, 2} + t^2}{2} \right\} ~, \\
    G_1 &amp;\triangleq \left\{ f \in \mathcal F : |\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| \geq
c_0 \delta_n \right\} ~, \\
    \mathcal M_0 (r) &amp;\triangleq \left\{ r \in (0,1] : M_n (r) \geq
\frac{r^2}{2} \right\} ~, \\
    \mathcal M_1 &amp;\triangleq \left\{ \delta_n : M_n (\lVert f
\rVert_{\mathbf P\,\,\!\!, 2}) \geq \delta_n \lVert f \rVert_{\mathbf
P\,\,\!\!, 2} \text{ for some } f \in \mathcal F \text{ such that }
\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \geq \delta_n \right\} ~.
\end{aligned}\]</span></p></li>
<li><p><span
id="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2"
data-label="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2"></span>
We <u>claim</u> both of the following inclusions are true: <span
class="math inline">\(G_0 \subset \mathcal M_0 (r)\)</span>, and <span
class="math inline">\(G_1 \subset \mathcal M_0 (\delta_n) \cup \mathcal
M_1\)</span>.</p>
<p>For the first inclusion, take any <span class="math inline">\(f \in
G_0\)</span>. Suppose first that <span class="math inline">\(\lVert f
\rVert_{\mathbf P\,\,\!\!, 2} &lt; t\)</span>. Then, it follows from
applying the triangle inequality that <span
class="math inline">\(|\lVert f \rVert_{\widehat P_n, 2} - \lVert f
\rVert_{\mathbf P\,\,\!\!, 2}| \geq \frac{t^2}{2}\)</span>, hence <span
class="math inline">\(M_n(r) &gt; \frac{t^2}{2}\)</span> and <span
class="math inline">\(f \in \mathcal M_0(r)\)</span> as desired. Suppose
then that <span class="math inline">\(\lVert f \rVert_{\mathbf
P\,\,\!\!, 2} \geq t\)</span>. Then, for such <span
class="math inline">\(f\)</span>, the dominant term is no longer <span
class="math inline">\(t^2\)</span>, and we have (by the triangle
inequality) <span class="math inline">\(|\lVert f \rVert_{\widehat P_n,
2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| \geq \frac{\lVert f
\rVert_{\mathbf P\,\,\!\!, 2}^2}{2}\)</span>. But by assumption the last
quantity is at least as large as <span
class="math inline">\(\frac{t^2}{2}\)</span>. So, we apply the usual
truncation argument and define <span class="math inline">\(\widetilde f
= \frac{f}{\lVert f \rVert_{\mathbf P\,\,\!\!, 2}}\)</span>, from which
it is clear that we can apply the preceding arguments to conclude the
desired inclusion holds.</p>
<p>For the second inclusion, taking complements, it is equivalent to
show <span class="math inline">\(\mathcal M_0^c (\delta_n) \cap \mathcal
M^c_1 \subset G_1^c\)</span>. Suppose first that <span
class="math inline">\(\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \leq
\delta_n\)</span>. On <span class="math inline">\(\mathcal M_0^c
(\delta_n)\)</span>, it clearly follows that <span
class="math inline">\(M_n (\delta_n) &lt; \frac{\delta_n^2}{2}\)</span>.
If <span class="math inline">\(\lVert f \rVert_{\widehat P_n, 2} \leq
\delta_n\)</span>, then, on <span class="math inline">\(\mathcal
M_1^c\)</span> we must have <span class="math inline">\(|\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| \leq
\delta_n\)</span>. If <span class="math inline">\(\lVert f
\rVert_{\widehat P_n, 2} \geq \delta_n\)</span>, we also have (by the
triangle inequality) <span class="math inline">\(|\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| =
\frac{|\lVert f \rVert_{\widehat P_n, 2}^2 - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}^2|}{\lVert f \rVert_{\widehat P_n, 2} + \lVert f
\rVert_{\mathbf P\,\,\!\!, 2}} \leq \frac{\delta_n^2}{\delta_n} =
\delta_n\)</span>, as desired. Suppose then <span
class="math inline">\(\lVert f \rVert_{\mathbf P\,\,\!\!, 2} &gt;
\delta_n\)</span>. Then, on <span class="math inline">\(\mathcal
M_1^c\)</span> and if <span class="math inline">\(\lVert f
\rVert_{\widehat P_n, 2} \geq \delta_n\)</span>, we also have (by the
triangle inequality) <span class="math inline">\(|\lVert f
\rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf P\,\,\!\!, 2}| =
\frac{|\lVert f \rVert_{\widehat P_n, 2}^2 - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}^2|}{\lVert f \rVert_{\widehat P_n, 2} + \lVert f
\rVert_{\mathbf P\,\,\!\!, 2}} \leq \frac{\delta_n \lVert f
\rVert_{\mathbf P\,\,\!\!, 2}}{\lVert f \rVert_{\widehat P_n, 2} +
\lVert f \rVert_{\mathbf P\,\,\!\!, 2}} = \delta_n\)</span>, as
desired.</p></li>
<li><p><span
id="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-label="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"></span>
We now <u>claim</u> that <span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!\left( M_n (r) &gt; \frac{r \delta_n + s^2}{4}
\right) \leq 2 e^{-c_2 \min \{s^2, s^4/r^2\}}
\end{aligned}\]</span> for any <span class="math inline">\(r, s &gt;
\delta_n\)</span>. This follows from a straightforward symmetrization
argument. Note that <span class="math display">\[\begin{aligned}
    \mathbb E M_n (r) \leq 2 \mathbb E \sup_{f \in B_r (\mathcal F, 2)}
\left| \sum_{1 \leq k \leq n} \varepsilon_k f(x_k)^2 \right| \leq 4
\mathbb E \sup_{f \in B_r (\mathcal F, 2)} \left| \sum_{1 \leq k \leq n}
\varepsilon_k f(x_k) \right| = 4 \mathcal R_n (r) ~,
\end{aligned}\]</span> where the first inequality is a standard
symmetrization bound, and the second inequality follows from <span
class="math inline">\(1\)</span>-uniform boundedness and Talagrand’s
contraction inequality. Therefore, we want to now establish a
concentration result using this behaviour.</p>
<p>First, <span class="math inline">\(r \mapsto \frac{\mathcal
R_n(r)}{r}\)</span> is nonincreasing on <span
class="math inline">\((0,\infty)\)</span> because <span
class="math inline">\(\mathcal F\)</span> consists of star-shaped
functions. Therefore, <span class="math display">\[\begin{aligned}
    \frac{\mathcal R_n (r)}{r} \leq \frac{\mathcal R_n
(\delta_n)}{\delta_n} \leq \frac{\delta_n}{16}  
\end{aligned}\]</span> by definition and construction. Therefore, <span
class="math display">\[\begin{aligned}
    \mathbb E M_n (r) \leq \frac{\delta_n}{4} ~.
\end{aligned}\]</span></p>
<p>Second, let <span class="math inline">\(f \in B_r (\mathcal F,
2)\)</span>, and define <span class="math inline">\(g = f^2 - \mathbb E
f(X)^2\)</span>. Clearly, because <span class="math inline">\(\lVert f
\rVert_\infty \leq 1\)</span>, we must also have <span
class="math inline">\(\lVert g \rVert_\infty \leq 1\)</span>.
Furthermore, <span class="math inline">\(\mathop{\mathrm{Var}}(g) \leq
\mathbb E f^4 \leq \mathbb E f^2 \leq r^2\)</span> by the definition of
<span class="math inline">\(B_r (\mathcal F, 2)\)</span>. It follows
from Talagrand’s concentration inequality that there exists some
universal constant <span class="math inline">\(C\)</span> such that
<span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!\left( M_n (r) &gt; \mathbb E M_n (r) +
\frac{s^2}{4} \right) \leq 2 e^{-n s^4 / (C(r^2 + r\delta_n + s))} \leq
e^{-c_2 \min \{s^2, s^4/r^2\} } ~,
\end{aligned}\]</span> where the last inequality follows because <span
class="math inline">\(r \geq \delta_n\)</span> by choice. This concludes
the proof of the claim.</p></li>
<li><p>It is then clear how to prove the theorem. For \eqref{eq:bounding-rademacher-complexity-star-shaped-c-unif-bouned-result1},
we take <span class="math inline">\(r=s=t &gt; \delta_n\)</span> and
apply the claim from <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3]</a>
to obtain the desired bound on <span class="math inline">\(\mathcal
M_0(r)\)</span>. The result then follows directly from the first
inclusion proven in <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2]</a>.</p>
<p>For \eqref{eq:bounding-rademacher-complexity-star-shaped-c-unif-bouned-result2},
it follows from <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step2]</a>
that it suffices to bound <span class="math inline">\(\mathbf
P\,\,\!\!(\mathcal M_0(\delta_n)) + \mathbf P\,\,\!\!(\mathcal
M_1)\)</span> (this is greater than <span class="math inline">\(\mathbf
P\,\,\!\!(\mathcal M_0(\delta_n) \cup \mathcal M_1)\)</span> by the
union bound). Repeating the preceding argument, setting <span
class="math inline">\(r=s=\delta_n\)</span> and apply the claim from <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3]</a>
yields <span class="math inline">\(\mathbf P\,\,\!\!(\mathcal
M_0(\delta_n)) \leq e^{-c_1 n \delta_n^2}\)</span>. Setting <span
class="math inline">\(s^2 = r \delta_n\)</span> gives the desired bound
<span class="math inline">\(\mathbf P\,\,\!\!(M_n (r) \geq
\frac{r\delta_n}{2}) \leq 2 e^{-c_2 n \delta_n^2}\)</span>. However,
these are not enough to give us the desired conclusion, since these tail
bounds work for only fixed (deterministic) <span
class="math inline">\(r\)</span>. The radii of interest <span
class="math inline">\(\lVert f \rVert_{\mathbf P\,\,\!\!, 2}\)</span>
are random!</p>
<p>Therefore, we leverage the following “discretization” scheme. Define
<span class="math display">\[\begin{aligned}
    S_m \triangleq \{ f \in \mathcal F : 2^{m-1} \delta_n \leq \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \leq 2^m \delta_n \}
\end{aligned}\]</span> for <span class="math inline">\(m \in \mathbb
N\)</span>. Since <span class="math inline">\(\lVert f \rVert_{\mathbf
P\,\,\!\!, 2} \leq \lVert f \rVert_\infty \leq 1\)</span>, it follows
that <span class="math inline">\(\mathcal F \cap \{ f : \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \geq \delta_n \}\)</span> belongs to <span
class="math inline">\(S_m\)</span> for some <span
class="math inline">\(m \leq M \leq 4 \log \frac{1}{\delta_n}\)</span>.
Applying the union bound gives <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(\mathcal M_1) \leq \sum_{1 \leq m \leq M} \mathbf
P\,\,\!\!(\mathcal M_1 \cap S_m) ~.
\end{aligned}\]</span> To bound each of the terms in the summand, note
that <span class="math inline">\(\mathcal M_1 \cap S_m\)</span> occurs,
then there exists a function <span class="math inline">\(f\)</span> such
that <span class="math inline">\(\lVert f \rVert_{\mathbf P\,\,\!\!, 2}
\leq r_m \triangleq 2^m \delta_n\)</span>, i.e. <span
class="math display">\[\begin{aligned}
    |\lVert f \rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}| \geq \lVert f \rVert_{\mathbf P\,\,\!\!, 2} \delta_n \geq
\frac{\delta_n r_m}{2} ~.
\end{aligned}\]</span> Therefore, <span class="math inline">\(\mathbf
P\,\,\!\!(G_1 \cap S_m) \leq \mathbf P\,\,\!\!(M_n (r_m) \geq
\frac{\delta_n r_m}{2}) \leq e^{-c_2 n \delta_n^2}\)</span>. As such,
<span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(\mathcal M_1) \leq \sum_{1 \leq m \leq M}
e^{\frac{n \delta_n^2}{16}} \leq e^{-c_2 n \delta_n^2 + \log M} ~. %
\leq e^{-c_2 \frac{n \delta_n^2}{2}} ~.
\end{aligned}\]</span> If we assume, additionally, that <span
class="math inline">\(\frac{c_2 n \delta_n^2}{2} \geq \log (4 \log
\frac{1}{\delta_n})\)</span>, it follows that the last inequality can be
further bounded above by <span class="math inline">\(e^{-c_2 \frac{n
\delta_n^2}{2}}\)</span>, which is the desired result.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<div id="rem:direct-argument" class="remark">
<p><strong>Remark 17</strong>. Note that <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3]</a>
contains the (fairly) direct argument required for completing the
“missing details” in the proof of Lemma <a
href="#lem:sandwich-rademacher-radii" data-reference-type="ref"
data-reference="lem:sandwich-rademacher-radii">15</a>. For the “missing
detail” regarding the localized population Rademacher complexity, the
arguments of <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3]</a>
map directly. For the “missing detail” regarding the localized empirical
Rademacher complexity, note that because <span
class="math inline">\(\mathcal F\)</span> consists of star-shaped
functions, so we can proceed to show <span class="math inline">\(r
\mapsto \frac{\breve{\mathcal R}_n (r)}{r}\)</span> is nondecreasing on
<span class="math inline">\((0,\infty)\)</span>. For any <span
class="math inline">\(0 &lt; \delta \leq t\)</span>, we just need to
show <span class="math inline">\(\frac{\delta}{t} \breve{\mathcal R}_n
(t) \leq \breve{\mathcal R}_n (\delta)\)</span>. Since <span
class="math inline">\(\mathcal F\)</span> is star-shaped, picking any
<span class="math inline">\(f \in \mathcal F\)</span> such that <span
class="math inline">\(\lVert f \rVert_{\widehat P_n, 2} \leq t\)</span>,
we can define <span class="math inline">\(\widetilde f =
\frac{\delta}{t} f\)</span>, so <span class="math inline">\(\lVert
\widetilde f \rVert_{\widehat P_n, 2} \leq \delta\)</span> and <span
class="math inline">\(\widetilde f \in \mathcal F\)</span>. Furthermore,
<span class="math display">\[\begin{aligned}
        \frac1n \sum_{1 \leq k \leq n} \frac{\delta}{t} \varepsilon_k
h(x_k) = \frac1n \sum_{1 \leq k \leq n} \varepsilon_k \widetilde h(x_k)
    
\end{aligned}\]</span> by construction, and the expectation of the
right-hand side is bounded above by <span
class="math inline">\(\breve{\mathcal R}_n (\delta)\)</span> by
inspection. All that remains to do is standard: take the supremum on
both sides over <span class="math inline">\(\mathcal F \cap \{ f: \lVert
f \rVert_{\widehat P_n, 2} \leq t\}\)</span> and then taking
expectations with respect to <span
class="math inline">\(\varepsilon\)</span> gives the desired result.</p>
</div>
<div id="ex:bounding-rademacher-complexity-quadratic" class="example">
<p><strong>Example 18</strong> (Bounding the Rademacher complexity:
quadratic functions). Let <span class="math inline">\(a=(a_0,a_1,a_2)
\in \mathbb R^3\)</span>, and define <span class="math inline">\(f:
[-1,1] \to \mathbb R : x \mapsto a_0 + a_1 x + a_2 x^2\)</span>, along
with <span class="math display">\[\begin{aligned}
        \mathcal{P}_2 = \left\{ f_a \text{ for some $a \in \mathbb R^3$
such that } \max_{x \in [-1,1]} |f_a (x)| \leq 1 \right\} ~.
    
\end{aligned}\]</span> Let us analyze the empirical and population <span
class="math inline">\(L^2\)</span> norms uniformly over this family. Say
we’ve drawn an i.i.d. sample <span class="math inline">\(\{x_1, \dots,
x_n\}\)</span> from the uniform distribution supported on <span
class="math inline">\([-1,1]\)</span>. Using Theorem <a
href="#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">16</a>,
we claim the rate of convergence of the empirical <span
class="math inline">\(L^2\)</span> norm to the population <span
class="math inline">\(L^2\)</span> norm is on the order of <span
class="math inline">\(n^{-\frac12}\)</span>, which is the optimal
rate.</p>
<p>To see why, it is convenient to do the analysis using the following
orthonormal basis on <span class="math inline">\(L^2[-1,1]\)</span>.
Define <span class="math display">\[\begin{aligned}
        \phi_0 (x) &amp;= \frac{1}{\sqrt{2}} ~, \\
        \phi_1 (x) &amp;= \sqrt{\frac32} x ~, \\
        \phi_2 (x) &amp;= \sqrt{\frac58} (3x^2 - 1) ~.
    
\end{aligned}\]</span> Therefore, any function in <span
class="math inline">\(\mathcal{P}_2\)</span> can be written as <span
class="math inline">\(f_\eta (x) = \eta_0 \phi_0 (x) + \eta_1 \phi_1 (x)
+ \eta_2 \phi_2 (x)\)</span>. By construction, <span
class="math inline">\(\lVert f_\eta \rVert_{\mathbf P\,\,\!\!, 2} =
\lVert \eta \rVert_{\mathbf P\,\,\!\!, 2}\)</span>. So, for a given
sample, construct a <span class="math inline">\(n \times 3\)</span>
matrix, denoted <span class="math inline">\(D\)</span>, where <span
class="math inline">\(D_{ij} = \phi_j (x_i)\)</span>. This construction
gives us <span class="math display">\[\begin{aligned}
        \mathbb E_X \mathbb E_\varepsilon \sup_{f \in \mathcal{P}_2 :
\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \leq \delta} \left| \frac1n
\sum_{1 \leq k \leq n} \varepsilon_k f_\eta (x_k) \right| &amp;\leq
\mathbb E \sup_{\lVert \eta \rVert_{\mathbf P\,\,\!\!, 2} \leq \delta}
\left| \frac1n \varepsilon^\top D \eta \right| \leq \frac{\delta}{n}
\mathbb E \lVert \varepsilon^\top D \rVert_{\mathbf P\,\,\!\!, 2} \leq
\frac{\delta}{n} \left( \mathbb E \lVert \varepsilon^\top D
\rVert_{\mathbf P\,\,\!\!, 2}^2 \right)^{\frac12} ~,
    
\end{aligned}\]</span> where the first inequality follows from
inspection, the second inequality follows from Cauchy-Schwarz’s
inequality, and the final inequality follows from Jensen’s inequality.
By the fact that the Rademacher random variables are i.i.d., we must
have <span class="math display">\[\begin{aligned}
        \mathbb E_\varepsilon \lVert \varepsilon^\top D \rVert_{\mathbf
P\,\,\!\!, 2}^2 = \operatorname{Tr}(DD^{\top}) =
\operatorname{Tr}(D^{\top}D) ~,
    
\end{aligned}\]</span> hence (by the law of iterated expectations) <span
class="math display">\[\begin{aligned}
        \mathbb E \lVert \varepsilon^\top D \rVert_{\mathbf P\,\,\!\!,
2}^2 = \mathbb E_X \mathbb E_\varepsilon \lVert \varepsilon^\top D
\rVert_{\mathbf P\,\,\!\!, 2}^2 = \mathbb E_X
\operatorname{Tr}(DD^{\top}) = 3n ~.
    
\end{aligned}\]</span> As such, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal{P}_2 : \lVert f \rVert_{\mathbf
P\,\,\!\!, 2} \leq \delta} \left| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f_\eta (x_k) \right| = \mathbb E_X \mathbb E_\varepsilon
\sup_{f \in \mathcal{P}_2 : \lVert f \rVert_{\mathbf P\,\,\!\!, 2} \leq
\delta} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f_\eta (x_k)
\right| &amp;\leq \frac{\delta \sqrt 3}{\sqrt n} ~.
    
\end{aligned}\]</span> Given this bound, appealing to Theorem <a
href="#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">16</a>
shows that for all <span class="math inline">\(t &gt; \delta_n =
\frac{\delta \sqrt 3}{\sqrt n}\)</span>, we have, for all <span
class="math inline">\(f \in \mathcal{P}_2\)</span>, <span
class="math display">\[\begin{aligned}
        |\lVert f \rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}| &lt; \frac{\lVert f \rVert_{\mathbf P\,\,\!\!, 2} +
t^2}{2}
    
\end{aligned}\]</span> which holds with probability at least <span
class="math inline">\(1 - c_1 e^{-c_2 nt^2}\)</span>. This shows the
desired rate of convergence (where the universal constants are also
derived).</p>
</div>
<div class="remark">
<p><strong>Remark 19</strong>. The analysis presented in Example <a
href="#ex:bounding-rademacher-complexity-quadratic"
data-reference-type="ref"
data-reference="ex:bounding-rademacher-complexity-quadratic">18</a>
requires a lot of firepower, in the sense that we needed to work with
<em>localization</em> in order to obtain the optimal rate. There is a
much easier argument through Vapnik-Chervonenkis dimension (VC
dimension), which is the subject of the next section; while that
argument gives us a suboptimal rate of convergence, that turns out to be
sufficient for some purposes.</p>
</div>
<div class="proposition">
<p><strong>Proposition 20</strong>. Let <span
class="math inline">\(\mathcal F\)</span> be a <span
class="math inline">\(1\)</span>-Lipschitz, star-shaped function class.
Then, <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F : \|f\|_{\mathbf P\,\,\!\!,2}
\leq t} \|f\|_{\widehat P_n, 2} \leq \sqrt 5 t
    
\end{aligned}\]</span> for all <span class="math inline">\(t \geq
\delta_n\)</span>, where <span class="math inline">\(\delta_n &gt;
0\)</span> is a positive solution to the critical inequality \eqref{eq:critical-inequality-rademacher}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The desired conclusion then follows from applying the
same arguments as those in <a
href="#bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3"
data-reference-type="ref"
data-reference="bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3">[bounding-rademacher-complexity-star-shaped-c-unif-bouned-step3]</a>;
to see this, note first that <span class="math display">\[\mathbb E
\left[ \sup_{f \in \mathcal F : \|f\|_{\mathbf P\,\,\!\!, 2} \leq t}
\|f\|_{\widehat P_n, 2} \right]^2
        \leq \mathbb  E \left[ \sup_{f \in \mathcal F : \|f\|_{\mathbf
P\,\,\!\!, 2} \leq t} \|f\|_{\widehat P_n, 2}^2 - \|f\|_{\mathbf
P\,\,\!\!, 2}^2 \right]^2 + t^2 ~.\]</span> It then follows from
Talagrand’s contraction inequality, standard symmetrization bound, and
uniform boundedness that <span class="math display">\[\begin{aligned}
        \mathbb  E \left[ \sup_{f \in \mathcal F : \|f\|_{\mathbf
P\,\,\!\!, 2} \leq t} \|f\|_{\widehat P_n, 2}^2 - \|f\|_{\mathbf
P\,\,\!\!, 2}^2 \right]^2 &amp;\leq 2 \mathbb  E \left[ \sup_{f \in
\mathcal F : \|f\|_{\mathbf P\,\,\!\!, 2} \leq t} \left| \sum_{1 \leq k
\leq n} \varepsilon_k f(x_k)^2 \right| \right]^2  \\
        &amp;\leq 4 \mathbb  E \left[ \sup_{f \in \mathcal F :
\|f\|_{\mathbf P\,\,\!\!, 2} \leq t} \left| \sum_{1 \leq k \leq n}
\varepsilon_k f(x_k) \right| \right]^2 \\
        &amp;\leq 4 \delta_n^2 \leq 4 t^2
    
\end{aligned}\]</span> because <span class="math inline">\(t \geq
\delta_n\)</span>. ◻</p>
</div>
<div id="rem:example-bounding-rademacher-complexity-quadratic"
class="remark">
<p><strong>Remark 21</strong> (Revisiting Example <a
href="#ex:bounding-rademacher-complexity-quadratic"
data-reference-type="ref"
data-reference="ex:bounding-rademacher-complexity-quadratic">18</a>). It
is possible to refine the discussion in Example <a
href="#ex:bounding-rademacher-complexity-quadratic"
data-reference-type="ref"
data-reference="ex:bounding-rademacher-complexity-quadratic">18</a> for
us to conclude that there is a sharper rate: namely, that there exists
some universal constant <span class="math inline">\(C\)</span> such that
<span class="math display">\[\begin{aligned}
        \mathbb E_\varepsilon \sup_{f \in \mathcal{P}_2 : \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \leq \delta} \left| \frac1n \sum_{1 \leq k
\leq n} \varepsilon_k f (x_k) \right| \leq \frac{C}{\sqrt n} ~.
    
\end{aligned}\]</span> To see this, note that <span
class="math display">\[\begin{aligned}
        R_f : f \mapsto \frac1n \sum_{1 \leq k \leq n} \varepsilon_k
f(x_k)
    
\end{aligned}\]</span> is subgaussian (as a process) with respect to the
metric <span class="math inline">\(d(f,g) = \|f-g\|_{\widehat
P_n,2}\)</span>. To see this, it suffices to calculate the variance
<span class="math inline">\(\mathop{\mathrm{Var}}(R_f - R_g)\)</span>
for <span class="math inline">\(f, g \in \mathcal F\)</span> (any
function class). In general, <span
class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(R_f - R_g) &amp;= \frac{1}{n^2} \mathbb E
\left[ \sum_{1 \leq k \leq n} \varepsilon_k (f(x_k) - g(x_k)) \right]^2
\leq \frac{1}{n^2} \mathbb E \left[ \left( \sum_{1 \leq k \leq n}
\varepsilon_k^2 \right) \left( \sum_{1 \leq k \leq n} (f(x_k) -
g(x_k))^2 \right) \right] \\
        &amp;\leq \frac{\sigma^2}{n} \sum_{1 \leq k \leq n} (f(x_k) -
g(x_k))^2 = \frac{\sigma^2}{n} d(f,g) ~.
    
\end{aligned}\]</span> Therefore, for <span class="math inline">\(M \leq
2\)</span>, we have <span class="math display">\[\mathbb E \sup_{f \in
\mathcal P_2} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(x_k)
\right| \lesssim \frac{1}{\sqrt{n}} \int_0^M \sqrt{\log N(t, \mathcal
P_2, \|\cdot\|_{\widehat P_n, 2})} \mathrm{d} t ~.\]</span> The difficulty
remains to bound the integrand. Note that there exists a natural
isomorphism between <span class="math inline">\(\mathbb R^3\)</span> and
the column space of <span class="math inline">\(\phi(X)\)</span>, where
<span class="math inline">\(\phi = (\phi_0, \phi_1, \phi_2)\)</span> as
defined in Example <a
href="#ex:bounding-rademacher-complexity-quadratic"
data-reference-type="ref"
data-reference="ex:bounding-rademacher-complexity-quadratic">18</a>.
Namely, the isomorphism is given by <span class="math inline">\(\theta
\mapsto \phi(X) \theta\)</span>, and the norms agree, i.e. <span
class="math inline">\(\|\phi(X)\theta\|_{\widehat P_n, 2} =
\|f\|_{\widehat P_n,2}\)</span>. As such, <span
class="math display">\[\begin{aligned}
    N(t, \mathcal P_2, \|\cdot\|_{\widehat P_n,2})
    &amp;\leq N(t, \left\{ \theta \in \mathbb R^3 : \| \langle
\phi(\cdot), \theta \rangle \|_\infty \leq 1 \right\},
\|\phi(X)\cdot\|_{\widehat P_n, 2}) \\
    &amp;\leq N(t, \left\{ \theta \in \mathbb R^3 : \| \phi(\cdot)
\theta \|_\infty \leq 1 \right\}, \|\phi(X)\cdot\|_{\widehat P_n, 2}) \\
    &amp;\leq N(t, \left\{ \theta \in \mathbb R^3 : \| \phi(\cdot)
\theta \|_{\widehat P_n, 2} \leq 1 \right\}, \|\phi(X)\cdot\|_{\widehat
P_n, 2}) \\
    &amp;\leq 3 \log \left(1 + \frac2t \right) ~,
    
\end{aligned}\]</span> where the string of inequalities follow from the
usual norm inclusions. Therefore, we conclude that <span
class="math inline">\(\int_0^M \sqrt{\log N(t, \mathcal P_2,
\|\cdot\|_{\widehat P_n, 2})} \mathrm{d} t\)</span> evaluates to a constant
and is finite, which then gives us the sharper rate, as desired.</p>
</div>
<section id="footnotes" class="footnotes footnotes-end-of-document"
role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>In general, by standard rescaling arguments, we work
with <span class="math inline">\(c\)</span>-uniformly bounded functions
for <span class="math inline">\(c &lt; \infty\)</span>.<a href="#fnref1"
class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p>See Remark <a href="#rem:direct-argument"
data-reference-type="ref" data-reference="rem:direct-argument">17</a>
for details.<a href="#fnref2" class="footnote-back"
role="doc-backlink">↩︎</a></p></li>
<li id="fn3"><p>See Remark <a href="#rem:direct-argument"
data-reference-type="ref" data-reference="rem:direct-argument">17</a>
for details.<a href="#fnref3" class="footnote-back"
role="doc-backlink">↩︎</a></p></li>
</ol>
</section>
{% endraw %}
