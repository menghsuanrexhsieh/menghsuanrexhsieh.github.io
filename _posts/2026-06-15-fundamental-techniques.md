---
layout: post
title: "Fundamental Techniques"
date: 2026-06-15
tags: [math, statistics]
excerpt: >-
  We begin with a very general principle of tensorization, which will prove useful in the future. The goal of this is to study the random fluctuations phenomenon when we investigate concentration.
---
{% raw %}
<h2 id="the-principle-of-tensorization">The Principle of
Tensorization</h2>
<p>We begin with a very general principle of <em>tensorization</em>,
which will prove useful in the future. The goal of this is to study the
random fluctuations phenomenon when we investigate concentration. To
start, we look at bounds on the random quantity <span
class="math display">\[\begin{aligned}
    \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) = \mathbb E \left[ f(X_1,
\dots, X_n) - \mathbb E f(X_1, \dots, X_n) \right]^2 ~.
\end{aligned}\]</span></p>
<div class="lemma">
<p><strong>Lemma 1</strong>. Let <span class="math inline">\(X\)</span>
be a random variable, possibly vector-valued. Then, for any function
<span class="math inline">\(f\)</span>, <span
class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X)) &amp;\leq \left( \frac{\sup f - \inf
f}{2} \right)^2 ~, \\
        \mathop{\mathrm{Var}}(f(X)) &amp;\leq \mathbb E [f(X) - \inf
f]^2 ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Since <span
class="math inline">\(\mathop{\mathrm{Var}}(f(X)) =
\mathop{\mathrm{Var}}(f(X) - a) \leq \mathbb E [f(X) - a]^2\)</span> for
any <span class="math inline">\(a \in \mathbb R\)</span>, we can obtain
the desired inequalities if we set <span class="math inline">\(a =
\frac{\sup f + \inf f}{2}\)</span> and <span class="math inline">\(a =
\inf f\)</span>. ◻</p>
</div>
<p>This is not a great bound on the variance. This assumes nothing about
<span class="math inline">\(X\)</span>, hence we get trivial bounds in
situations where we observe, e.g. Rademacher random variables. To
improve on this, there is a very general principle we can use:
<em>tensorization</em>. The purpose of this technique is to deduce
high-dimensional inequalities from low-dimensional ones without
introducing additional dimension-dependent conditions. To formulate this
bound, let <span class="math inline">\(X_1, \dots, X_n\)</span> be
<em>independent</em> random variables. For a function <span
class="math inline">\(f(x_1, \dots, x_n)\)</span>, let <span
class="math display">\[\begin{aligned}
    \mathop{\mathrm{Var}}_i (f(x_1, \dots, x_n)) \triangleq
\mathop{\mathrm{Var}}(f(x_1, \dots, x_{i-1}, X_i, x_{i+1}, \dots, x_n))
~.
\end{aligned}\]</span> This is the variance calculated with respect to
<span class="math inline">\(X_i\)</span> only; all other entries are
fixed. We apply the martingale difference method to show the following
result.</p>
<div id="thm:tensorization-bound" class="theorem">
<p><strong>Theorem 2</strong> (Efron-Stein). If <span
class="math inline">\(X_1, \dots, X_n\)</span> are independent random
variables, then <span class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) \leq \mathbb E \left[
\sum_{1 \leq i \leq n} \mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n))
\right] ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Let us construct a martingale different array, as
follows: <span class="math display">\[\begin{aligned}
        \Delta_i &amp;= \mathbb E[f(X_1,\dots,X_n) \mid X_1, \dots, X_i]
- \mathbb E[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}] ~.
        \end{aligned}\]</span>

<p>Clearly,</p>

<span class="math display">\[\begin{aligned}
        0 &amp;= \mathbb E [\Delta_i \mid X_1, \dots, X_{i-1}] \text{
and} \\
        \sum_{1 \leq i \leq n} \Delta_i &amp;= f(X_1, \dots, X_n) -
\mathbb E f(X_1, \dots, X_n) ~.
    
\end{aligned}\]</span> Furthermore, for any <span
class="math inline">\(\ell &lt; i\)</span>, we have, by the law of
iterated expectations, <span class="math display">\[\begin{aligned}
        \mathbb E [\Delta_\ell \Delta_i] &amp;= \mathbb E [\Delta_\ell
\mathbb E[\Delta_i \mid X_1, \dots, X_{i-1}]] = 0 ~.
    
\end{aligned}\]</span> Therefore, <span
class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) = \sum_{1 \leq i \leq
n} \mathbb E \Delta_i^2
    
\end{aligned}\]</span> If we can show <span
class="math inline">\(\mathbb E \Delta_i^2 \leq \mathbb E
[\mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n))]\)</span> for every <span
class="math inline">\(i\)</span>, then we are done. To do this, note
that, by the law of iterated expectations and that <span
class="math inline">\(X_i\)</span> is independent of <span
class="math inline">\(X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n\)</span>,
<span class="math display">\[\begin{aligned}
        &amp; \mathbb E[f(X_1,\dots,X_n) \mid X_1, \dots, X_i] \\
        =\: &amp; \mathbb E[ \mathbb E[f(X_1,\dots,X_n) \mid X_1, \dots,
X_{i-1}, X_{i+1}, \dots, X_n] \mid X_1, \dots, X_{i-1} ] \\
        =\: &amp; \mathbb E[ \mathbb E[f(X_1,\dots,X_n) \mid X_1, \dots,
X_{i-1}, X_{i+1}, \dots, X_n] \mid X_1, \dots, X_i ] ~.
    
\end{aligned}\]</span> Therefore, for the recentred increment <span
class="math display">\[\begin{aligned}
        \breve \Delta_i = f(X_1, \dots, X_n) - \mathbb E
[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] ~,
    
\end{aligned}\]</span> we have <span class="math inline">\(\Delta_i =
\mathbb E [ \breve \Delta_i \mid X_1, \dots, X_i]\)</span>. It follows
again by the independence of <span class="math inline">\(X_i\)</span>
and <span class="math inline">\(X_1, \dots, X_{i-1}, X_{i+1}, \dots,
X_n\)</span> that <span class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n)) = \mathbb E [\breve
\Delta_i^2 \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] ~.
    
\end{aligned}\]</span> The desired inequality then follows from Jensen’s
inequality applied to the conditional expectation <span
class="math inline">\(\mathbb E \Delta_i^2 = \mathbb E[ \mathbb E[\breve
\Delta_i \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots,
X_n]^2]\)</span>. ◻</p>
</div>
<h2 id="the-entropy-method">The Entropy Method</h2>
<p>We introduce another method to tackle the problem of analyzing
variance and—more generally—concentration. This is referred to as the
<em>entropy method</em>. For a nonnegative random variable <span
class="math inline">\(X\)</span>, the <em>(concentration) entropy</em>
of <span class="math inline">\(X\)</span> is defined as <span
class="math display">\[\begin{aligned}
    \operatorname{Ent} (X) \triangleq \log \mathbb E [X \log X] -
[\mathbb E X] \log \mathbb E X ~.
\end{aligned}\]</span> Clearly, the entropy of a nonnegative random
variable is convex. To understand why the concentration entropy is a
valuable tool for understanding concentration, we need to draw a
connection with other concepts from the theory of concentration. The
following result is fundamental, and is often called the <em>Herbst
argument</em>.</p>
<div id="prop:herbst" class="proposition">
<p><strong>Proposition 3</strong> (Herbst argument). Suppose <span
class="math display">\[\begin{aligned}
        \operatorname{Ent} (e^{\lambda X}) \leq \frac{\lambda^2
\sigma^2}{2} \mathbb E e^{\lambda X} \quad \text{for all } \lambda \geq
0 ~.
    
\end{aligned}\]</span> Then, <span
class="math display">\[\begin{aligned}
        \log \mathbb E e^{\lambda(X-\mathbb E X)} \leq \frac{\lambda^2
\sigma^2}{2} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Define <span class="math inline">\(\psi(\lambda)
\triangleq \log \mathbb E e^{\lambda(X-\mathbb E X)}\)</span>. Note that
<span class="math inline">\(\psi(\lambda) = \log \mathbb E e^{\lambda X}
- \lambda \mathbb E X\)</span> by definition, so <span
class="math display">\[\begin{aligned}
        \frac{\mathrm{d}}{\mathrm{d} \lambda} \frac{\psi(\lambda)}{\lambda} =
\frac{1}{\lambda} \frac{\mathbb E [X e^{\lambda X}]}{\mathbb E
e^{\lambda X}} - \frac{1}{\lambda^2} \log \mathbb E e^{\lambda X} =
\frac{1}{\lambda^2} \frac{\operatorname{Ent}(e^{\lambda X})}{\mathbb E
e^{\lambda X}} ~.
    
\end{aligned}\]</span> It then follows that <span
class="math display">\[\begin{aligned}
        \frac{\psi(\lambda)}{\lambda} = \int_0^\lambda \frac{1}{t^2}
\frac{\operatorname{Ent}(e^{t X})}{\mathbb E e^{t X}} \mathrm{d} t &amp;\leq
\int_0^\lambda \frac{\sigma^2}{2} \mathrm{d} t = \frac{\lambda \sigma^2}{2} ~.
    
\end{aligned}\]</span> The last equality follows from the fact that, by
l’Hospital’s rule, <span class="math inline">\(\lim_{\lambda \to 0}
\frac{\psi(\lambda)}{\lambda} = 0\)</span>. ◻</p>
</div>
<p>It is not clear right now why this is useful, but it turns out the
concentration entropy is a powerful tool for studying concentration in
large part because it has a <em>tensorization</em> property, analogous
with the tensorization property of the variance (as shown in the
discussion preceding this subsection). To state this result, just as we
did in the discussion of the variance, we need to look at the
coordinate-wise entropy. To do so, let <span class="math inline">\(X_1,
\dots, X_n\)</span> be independent random variables. For some function
<span class="math inline">\(f: \mathbb R^n \to \mathbb R\)</span>,
define the function <span class="math display">\[\begin{aligned}
    \operatorname{Ent}_i f(x_1, \dots, x_n) \triangleq
\operatorname{Ent} (f(x_1, \dots, x_{i-1}, X_i, x_{i+1}, \dots, x_n)) ~,
\end{aligned}\]</span> i.e. the <span class="math inline">\(i\)</span>th
coordinate entropy is the entropy of <span class="math inline">\(f(X_1,
\dots, X_n)\)</span> with respect to <span
class="math inline">\(X_i\)</span> only, while keeping the rest of the
(random) variables fixed. We can then show the following statement.</p>
<div id="thm:entropy-tensorizes" class="theorem">
<p><strong>Theorem 4</strong> (Entropy tensorizes). Suppose <span
class="math inline">\(X_1, \dots, X_n\)</span> are independent random
variables. Then, for a function <span class="math inline">\(f : \mathbb
R^n \to \mathbb R\)</span>, <span class="math display">\[\begin{aligned}
        \operatorname{Ent} (f(x_1, \dots, x_n)) \leq \mathbb E \left[
\sum_{1 \leq i \leq n} \operatorname{Ent}_i f(X_1, \dots, X_n) \right]
~.
    
\end{aligned}\]</span></p>
</div>
<p>There are a number of ways to show this statement, but the most
straightforward way is via a variational principle.</p>
<div id="prop:variational-principle-entropy" class="proposition">
<p><strong>Proposition 5</strong>. For any nonnegative random variable
<span class="math inline">\(X\)</span>, <span
class="math display">\[\begin{aligned}
        \operatorname{Ent} (X) = \sup \left\{ \mathbb E[XY] : Y \text{
if a random variable such that } \mathbb E e^{Y} = 1 \right\} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> If we define a new probability measure <span
class="math inline">\(\mathrm{d} Q = e^Y \mathrm{d} P\)</span> (which makes sense
when <span class="math inline">\(\mathbb E e^Y = 1\)</span>), we can see
that <span class="math display">\[\begin{aligned}
        \operatorname{Ent}(X) - \mathbb E[XY] = \mathbb E_Q [e^{-Y} X
\log(e^{-Y}X)] - \mathbb E_Q [e^{-Y}X] \log \mathbb E_Q [e^{-Y} X] ~.
    
\end{aligned}\]</span> The convexity of the map <span
class="math inline">\(x \mapsto x \log x\)</span> tells us that this
quantity is nonnegative for any random variable <span
class="math inline">\(Y\)</span> such that <span
class="math inline">\(\mathbb E e^Y = 1\)</span>. To conclude, notice
that this difference is zero when <span class="math inline">\(Y =
\log(\frac{X}{\mathbb E X})\)</span>, which then implies the variational
property. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:entropy-tensorizes"
data-reference-type="ref"
data-reference="thm:entropy-tensorizes">4</a>.</em> The idea is to
repeat the martingale difference argument as closely as possible. To
that end, write <span class="math inline">\(Y = f(X_1, \dots,
X_n)\)</span>, and, for all <span class="math inline">\(i \in \{1,
\dots, n\}\)</span>, define <span class="math display">\[\begin{aligned}
        W_i = \log \mathbb E [Y \mid X_1, \dots, X_n] ~.
    
\end{aligned}\]</span> It clearly then follows that <span
class="math display">\[\begin{aligned}
        \operatorname{Ent} (Y) = \mathbb E [Y (\log Y - \log \mathbb E
Y)] = \sum_{1 \leq i \leq n} \mathbb E [Y W_i] ~.
    
\end{aligned}\]</span> By repeated use of independence between <span
class="math inline">\(X_1, \dots, X_i\)</span> and <span
class="math inline">\(X_{i+1}, \dots, X_n\)</span>, we then have <span
class="math display">\[\begin{aligned}
        &amp;\quad \mathbb E [e^{W_i} \mid X_1, \dots, X_{i-1}, X_{i+1},
\dots, X_n] \\
        &amp;= \frac{\mathbb E \{ \mathbb E[Y \mid X_1, \dots, X_i] \mid
X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n \}}{\mathbb E[Y \mid X_1,
\dots, X_{i-1}, X_{i+1}, \dots, X_{i-1}]} \\
        &amp;= \frac{\mathbb E \{ \mathbb E[Y \mid X_1, \dots, X_i] \mid
X_1, \dots, X_{i-1} \}}{\mathbb E[Y \mid X_1, \dots, X_{i-1}, X_{i+1},
\dots, X_{i-1}]} = 1 ~.
    
\end{aligned}\]</span> Appealing to the variational formulation of
entropy, conditional on <span class="math inline">\(X_1, \dots, X_{i-1},
X_{i+1}, \dots, X_n\)</span>, we then have <span
class="math display">\[\begin{aligned}
        &amp;\quad \mathbb E [ Y W_i  \mid X_1, \dots, X_{i-1}, X_{i+1},
\dots, X_n ] \\
        &amp;\leq \operatorname{Ent} [Y \mid X_1, \dots, X_{i-1},
X_{i+1}, \dots, X_n] \\
        &amp;= \operatorname{Ent}_i f(X_1, \dots, X_n) ~.
    
\end{aligned}\]</span> (The conditional entropy is just the entropy,
conditional on some <span class="math inline">\(\sigma\)</span>-field)
Therefore, we then have, by the law of iterated expectations, <span
class="math display">\[\begin{aligned}
        \mathbb E [Y W_i] \leq \mathbb E [\operatorname{Ent}_i f(X_1,
\dots, X_n) ] ~.
    
\end{aligned}\]</span> Summing the inequality above over all <span
class="math inline">\(i\)</span> ranging from <span
class="math inline">\(1\)</span> to <span
class="math inline">\(n\)</span> gives us the desired conclusion. ◻</p>
</div>
<p>The upshot of all this construction is: we can use entropy as a tool
for proving (normal) concentration for nonlinear functions of
independent random variables. Among other things, we can show this
approach yields a bounded difference inequality, where the variance
proxy is the sum of squared “discrete derivatives” of the random
variable. We will make this formal in the discussion of concentration
inequalities (most notably in Lemma <a href="#lem:mcdiarmid"
data-reference-type="ref" data-reference="lem:mcdiarmid">19</a>). For
now, we note the following result, known as a <em>modified log-Sobolev
inequality</em>.</p>
<div id="thm:dmls" class="theorem">
<p><strong>Theorem 6</strong> (Modified log-Sobolev inequality;
discrete). Let <span class="math inline">\(X\)</span> and <span
class="math inline">\(\widetilde X\)</span> be i.i.d. real-valued random
variables. Then, <span class="math display">\[\begin{aligned}
        \operatorname{Ent} (e^X) \leq \frac12 \mathbb E^X \left[ \mathbb
E^{\widetilde X} [X-\widetilde X]^2 e^X \right] ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\mathbb
E^X\)</span> means expectation with respect to the law of <span
class="math inline">\(X\)</span> (by an abuse of notation).</p>
</div>
<div class="proof">
<p><em>Proof.</em> By direct calculations, note that for any <span
class="math inline">\(a, b \in \mathbb R\)</span>, <span
class="math display">\[\begin{aligned}
        (a-b)(e^a - a^b) &amp;= (a-b)^2 \int_0^1 e^{(1-t)a + tb} \mathrm{d} t
\\
        &amp;\leq (a-b)^2 \int_0^1 (1-t) e^a + t e^b \mathrm{d} t = \frac12
(a-b)^2 (e^a + e^b) ~.
    
\end{aligned}\]</span> where the inequality follows from convexity of
the map <span class="math inline">\(t \mapsto e^{(1-t) a + t
b}\)</span>. It follows from the definition of entropy and the
variational formulation that <span class="math display">\begin{equation}\label{eq:exchangeable-entropy}\begin{aligned}
         \operatorname{Ent} (e^X)
&amp;\leq \frac12 \mathbb E [ (X-\widetilde X) (e^X - e^{\widetilde X})]
\\
        &amp;\leq \frac14 \mathbb E [ (X-\widetilde X)^2 (e^X +
e^{\widetilde X})] \\
        &amp;= \frac12 \mathbb E^X \left[ \mathbb E^{\widetilde X}
[X-\widetilde X]^2 e^X \right] ~,
    
\end{aligned}\end{equation}</span> where the equality follows from the fact that
<span class="math inline">\(X\)</span> and <span
class="math inline">\(\widetilde X\)</span> are i.i.d. random
variables. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 7</strong>. The inequality in \eqref{eq:exchangeable-entropy}
is straightforward to obtain: note that the convexity of the logarithm
tells us that, if <span class="math inline">\(W\)</span> and <span
class="math inline">\(\widetilde W\)</span> are i.i.d. positive random
variables, then <span class="math display">\[\begin{aligned}
        \operatorname{Ent}(W) = \mathbb E^W [W(\log W - \log \mathbb
E^{\widetilde W} \widetilde W] \leq \mathbb E^{W,\widetilde W} [W (\log
W - \log \widetilde W)] ~.
    
\end{aligned}\]</span> Note that independence is used to obtain the
inequality. And further note that <span class="math inline">\((W,
\widetilde W)\)</span> and <span class="math inline">\((\widetilde W,
W)\)</span> have the same joint distribution; so, calculating <span
class="math inline">\(\operatorname{Ent}(\widetilde W)\)</span> and
averaging with <span
class="math inline">\(\operatorname{Ent}(W)\)</span>, we have the
desired result (the expectation in \eqref{eq:exchangeable-entropy}
is with respect to the joint law of <span
class="math inline">\(W\)</span> and <span
class="math inline">\(\widetilde W\)</span>).</p>
</div>
<h2 id="concentration-inequalities">Concentration Inequalities</h2>
<p>Tensorization tells us we can investigate the variance of a random
function, in which the data are independent (or weakly dependent). In
particular, we know that this variance is small if <span
class="math inline">\(f\)</span> has “small” gradient. Given this
understanding, we can then ask ourselves <em>what can we understand
about the distribution of these fluctuations</em>. The tools that are
most useful for understanding the distribution of fluctuations are
called <em>concentration inequalities</em>.</p>
<p>The simplest form of a concentration inequality is Markov’s
inequality (and, by extension, Chebyshev’s inequality). Let’s look at
what Chebyshev’s inequality predicts for the sum of <span
class="math inline">\(n\)</span> i.i.d. random variables with finite
variance <span class="math inline">\(\sigma^2\)</span>. Denote <span
class="math inline">\(S_n = \sum_{1 \leq i \leq n} X_i\)</span>. An
application of Chebyshev’s inequality tells us <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(|S_n - \mathbb E S_n| \geq \varepsilon) \leq
\frac{n\sigma^2}{\varepsilon^2} ~.
\end{aligned}\]</span> With a <span
class="math inline">\(\sqrt{n}\)</span>-rescaling, we have <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(|S_n - \mathbb E S_n| \geq \sqrt{n}\varepsilon)
\leq \frac{\sigma^2}{\varepsilon^2} ~.
\end{aligned}\]</span> Compare this with the prediction of the central
limit theorem, which tells us <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(S_n - \mathbb E S_n \geq \sqrt{n}\varepsilon)
\xrightarrow{n\to\infty} 1 - \Phi \left( \frac{\varepsilon}{\sigma}
\right) \leq \frac{\sigma}{\sqrt{2\pi} \varepsilon} \exp \left( -
\frac{\varepsilon^2}{2\sigma^2} \right) ~.
\end{aligned}\]</span> So, Chebyshev’s inequality tells us the
fluctuations of the sum of <span class="math inline">\(n\)</span> i.i.d.
random variables with finite variance is at most order <span
class="math inline">\(\sqrt{n}\)</span>. But, from Chebyshev’s
inequality, we do not get an expected exponential decay in
concentration—which is a feature we would expect following the
predictions of the central limit theorem.</p>
<p>It turns out we can improve on the bound offered by Chebyshev’s
inequality. The idea is to force an introduction of an exponential
decay, in the following manner. For any <span
class="math inline">\(\lambda &gt; 0\)</span>, <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(S_n - \mathbb E S_n \geq \varepsilon) = \mathbf
P\,\,\!\!( e^{\lambda(S_n - \mathbb E S_n)} \geq e^{\lambda\varepsilon})
&amp;\leq \frac{\mathbb E e^{\lambda(S_n - \mathbb E S_n)}}{
e^{\lambda\varepsilon}} ~, \\
    \end{aligned}\]</span>

<p>which follows from Markov&#39;s inequality. Because $S_n$
is the sum of $n$ i.i.d. random variables, the rightmost expression
becomes</p>

<span class="math display">\[\begin{aligned}
    &amp;= \frac{1}{e^{\lambda\varepsilon}} \prod_{1 \leq i \leq n}
\mathbb E e^{\lambda X_i} ~.
\end{aligned}\]</span> So, supposing that the function <span
class="math inline">\(\mathbb E e^{\lambda(S_n - \mathbb E
S_n)}\)</span> is well-defined (exists and finite), it remains to derive
a bound for <span class="math inline">\(\mathbb E e^{\lambda
X_i}\)</span>.</p>
<div id="lem:prelim-hoeffding" class="lemma">
<p><strong>Lemma 8</strong>. Let <span class="math inline">\(X\)</span>
be a random variable with <span class="math inline">\(\mathbb E X =
0\)</span>, and suppose <span class="math inline">\(X \in [a,b]\)</span>
almost surely. Then, for any <span class="math inline">\(\lambda &gt;
0\)</span>, <span class="math display">\begin{equation}\label{eq:prelim-hoeffding}\begin{aligned}

        \mathbb E e^{\lambda X} \leq e^{\frac{\lambda^2(b-a)^2}{8}} ~.
    
\end{aligned}\end{equation}</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Note that <span class="math inline">\(f(x) =
e^{\lambda x}\)</span> is convex for any <span
class="math inline">\(\lambda &gt; 0\)</span>. Therefore, for any <span
class="math inline">\(a &lt; b\)</span>, the following inequality for
convex functions <span class="math display">\[\begin{aligned}
        f(x) &amp;\leq f(a) + \frac{f(b) - f(a)}{b-a} (x-a) ~~\text{for
} x \in [a,b] \\
        \end{aligned}\]</span>

<p>specializes to</p>

<span class="math display">\[\begin{aligned}
        e^{\lambda x} &amp;\leq \frac{b-x}{b-a} e^{\lambda a} +
\frac{x-a}{b-a} e^{\lambda b} ~~\text{for } x \in [a,b] ~.
    
\end{aligned}\]</span> Replacing <span class="math inline">\(x\)</span>
above by the random variable <span class="math inline">\(X\)</span>&lt;
and noting that <span class="math inline">\(\mathbb E X = 0\)</span>, we
must have <span class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda x} &amp;\leq \frac{b}{b-a} e^{\lambda a} -
\frac{a}{b-a} e^{\lambda b}  \\
        &amp;= -\frac{a}{b-a} e^{\lambda a} \left( -\frac{b}{a} +
e^{\lambda(b-a)} \right) ~~\text{for } x \in [a,b] ~.
    
\end{aligned}\]</span> Redefining variables, specifically by setting
<span class="math inline">\(\eta =  -\frac{a}{b-a}\)</span> and <span
class="math inline">\(\zeta = \lambda(b-a)\)</span>, we can rewrite the
above as <span class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda x} &amp;= \eta e^{-\eta \zeta} \left(
\frac{1}{\eta} - 1 + e^{\zeta} \right) = e^{-\eta \zeta + \ln (1 - \eta
+ \eta e^{\zeta})} ~.
    
\end{aligned}\]</span> <span class="math inline">\(\eta\)</span> is a
constant from the point of view of optimizing <span
class="math inline">\(\lambda\)</span>. Therefore, we need to optimize
the function <span class="math inline">\(g(\zeta) = -\eta \zeta + \ln (1
- \eta + \eta e^{\zeta})\)</span>. Taylor expanding this around <span
class="math inline">\(\zeta=0\)</span>, we note that <span
class="math display">\[\begin{aligned}
        g&#39;(0) &amp;= -\eta + \frac{\eta e^{\zeta}}{1 - \eta + \eta
e^{\zeta}} \bigg|_{\zeta=0} = 0 ~, \\
        \end{aligned}\]</span>

<p>and</p>

<span class="math display">\[\begin{aligned}
        g&#39;&#39;(0) &amp;= \frac{\eta e^{\zeta}(1 - \eta + \eta
e^{\zeta}) - \eta^2 e^{2\zeta}}{(1 - \eta + \eta e^{\zeta})^2}
\bigg|_{\zeta=0} = \eta(1-\eta) ~.
        \end{aligned}\]</span>

<p>Clearly, $g(0) = 0$. Therefore,</p>

<span class="math display">\[\begin{aligned}
        g(\zeta) &amp;= \frac{\eta(1-\eta)}{2} \zeta^2 + o(\zeta^2) \leq
\frac{\zeta^2}{8} + o(\zeta^2) ~.
    
\end{aligned}\]</span> Substituting the definition of <span
class="math inline">\(\zeta\)</span> into the expression above, and
collecting all preceding arguments, gives us \eqref{eq:prelim-hoeffding}, as
desired. ◻</p>
</div>
<div id="thm:hoeffding-inequality" class="theorem">
<p><strong>Theorem 9</strong> (Hoeffding). Let <span
class="math inline">\(X_1, \dots, X_n\)</span> be independent bounded
random variables, such that <span class="math inline">\(X_i \in [a_i,
b_i]\)</span> almost surely. Then, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb E S_n \geq \varepsilon)
&amp;\leq \exp \left( -\frac{2\varepsilon^2}{\sum_{1 \leq i \leq n} (b_i
- a_i)^2} \right) ~, \\
        \mathbf P\,\,\!\!(S_n - \mathbb E S_n \leq \varepsilon)
&amp;\leq \exp \left( -\frac{2\varepsilon^2}{\sum_{1 \leq i \leq n} (b_i
- a_i)^2} \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Continuing from our discussion above, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb E S_n \geq \varepsilon) &amp;=
\mathbf P\,\,\!\!( e^{\lambda(S_n - \mathbb E S_n)} \geq
e^{\lambda\varepsilon}) \leq \frac{\mathbb E e^{\lambda(S_n - \mathbb E
S_n)}}{ e^{\lambda\varepsilon}} \\
        &amp;= \frac{1}{e^{\lambda\varepsilon}} \prod_{1 \leq i \leq n}
\mathbb E e^{\lambda X_i} \\
        &amp;\leq \frac{1}{e^{\lambda\varepsilon}} e^{\sum_{1 \leq i
\leq n} \frac{\lambda^2(b_i - a_i)^2}{8}} \\
        &amp;= \exp \left( -\lambda \varepsilon + \frac{\lambda^2}{8}
\sum_{1 \leq i \leq n} (b_i - a_i)^2 \right) ~.
    
\end{aligned}\]</span> It remains to find the minimum of the function
<span class="math inline">\(g(\lambda) = -\lambda \varepsilon +
\frac{\lambda^2}{8} \sum_{1 \leq i \leq n} (b_i - a_i)^2\)</span>. Since
this is a quadratic function, it follows that the minimum occurs at
<span class="math display">\[\begin{aligned}
        \lambda = \frac{4\varepsilon}{\sum_{1 \leq i \leq n} (b_i -
a_i)^2} ~.
    
\end{aligned}\]</span> Therefore, the inequality above reduces to <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb E S_n \geq \varepsilon)
&amp;\leq \exp \left( -\lambda \varepsilon + \frac{\lambda^2}{8} \sum_{1
\leq i \leq n} (b_i - a_i)^2 \right) \\
        &amp;\leq \exp \left( \frac{-4\varepsilon^2 + 2
\varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2 } \right) = \exp
\left( \frac{-2 \varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2 }
\right) ~,
    
\end{aligned}\]</span> as desired. The other inequality is proved
identically. ◻</p>
</div>
<div id="cor:rademacher-subgaussian" class="corollary">
<p><strong>Corollary 10</strong>. Let <span class="math inline">\((a_1,
\dots, a_n) \in \mathbb R^n\)</span> be constants, and <span
class="math inline">\((\varepsilon_1, \dots, \varepsilon_n)\)</span> be
Rademacher random variables. Then, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq i \leq n} a_i
\varepsilon_i \right| \geq t \right) \leq 2 e^{-\frac{x^2}{2 \lVert a
\rVert^2}} ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\lVert \cdot
\rVert\)</span> denotes the Euclidean norm.</p>
</div>
<p>Note that Hoeffding’s inequality does not depend on <span
class="math inline">\(X_i\)</span>! We are able to obtain a more precise
result by leveraging the existence of moment generating functions
(there’s no guarantee that these need to exist). In the case where <span
class="math inline">\(X_1, \dots, X_n\)</span> are i.i.d. and bounded in
<span class="math inline">\([a,b]\)</span> almost surely, then, given
any confidence level <span class="math inline">\(\alpha \in
(0,1)\)</span>, Hoeffding’s inequality gives us the inequality <span
class="math display">\[\begin{aligned}
    S_n - \mathbb E S_n \geq \sqrt{\log \left( \frac{1}{\alpha} \right)
\frac{n(b-a)^2}{2}} ~.
\end{aligned}\]</span> So, we can construct the following
<em>conservative</em> confidence interval at level <span
class="math inline">\(1-\alpha\)</span> for the population mean: <span
class="math display">\[\begin{aligned}
    \left[ \overline X_n \pm \frac{b-a}{\sqrt{2n}} \sqrt{\log \left(
\frac{2}{\alpha} \right)} \right] ~,
\end{aligned}\]</span> where <span class="math inline">\(\overline
X_n\)</span> denotes the sample mean. Finally, note that we <em>have
not</em> used any information about the variance of <span
class="math inline">\(X_i\)</span> in constructing this inequality.</p>
<p>To motivate the following developments, we look at a class of
distributions with strong decays in their tails; specifically, we look
at distributions whose tails decay at least as fast as those of normal
random variables. To formalize this definition, we say a random variable
<span class="math inline">\(X\)</span> is <em>subgaussian</em> if there
exists constants <span class="math inline">\(C\)</span> and <span
class="math inline">\(\nu\)</span> such that <span
class="math inline">\(\mathbf P\,\,\!\!(|X| &gt; t) \leq C e^{-\nu
t^2}\)</span>, for all <span class="math inline">\(t &gt;0\)</span>.
This is equivalent to the following conditions:</p>
<ol>
<li><p>There exists a constant <span class="math inline">\(M\)</span>
such that <span class="math inline">\(\mathbb E e^{M X^2} &lt;
\infty\)</span>.</p></li>
<li><p>There exists constants <span class="math inline">\(\ell,
L\)</span> such that <span class="math inline">\(\mathbb E e^{\lambda(X
- \mathbb E X)} \leq L e^{\lambda^2 \ell}\)</span>.</p></li>
<li><p>There exists a constant <span class="math inline">\(K &gt;
0\)</span> such that for all <span class="math inline">\(p \geq
1\)</span>, <span class="math inline">\(\mathbb E |X|^p \leq K^p
p^{\frac{p}{2}}\)</span>.</p></li>
</ol>
<p>An example of a subgaussian <em>process</em> is the Rademacher
process, as described in Corollary <a href="#cor:rademacher-subgaussian"
data-reference-type="ref"
data-reference="cor:rademacher-subgaussian">10</a>. A much more powerful
result is true, and is an example of a <em>maximal inequality</em>.</p>
<div id="prop:subgaussian-maximal-inequality" class="proposition">
<p><strong>Proposition 11</strong> (Maximal inequality: subgaussian).
Suppose <span class="math inline">\(Y_1, \dots, Y_n\)</span> are
subgaussian random variables, with constants <span
class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda Y_i} \leq e^{\frac{\lambda^2 \sigma^2}{2}}
~~\text{for all } 1 \leq i \leq n ~.
    
\end{aligned}\]</span> Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} Y_i \leq \sigma \sqrt{2 \log n}
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This follows from Jensen’s inequality and the
assumption in the statement: <span
class="math display">\[\begin{aligned}
        e^{\lambda \mathbb E \sup_{1 \leq i \leq n} Y_i} &amp;\leq
\mathbb E e^{\lambda \sup_{1 \leq i \leq n} Y_i} \\
        &amp;\leq \sum_{1 \leq i \leq n} \mathbb E e^{\lambda Y_i} \leq
\sum_{1 \leq i \leq n} e^{\frac{\lambda^2 \sigma^2}{2}} = n
e^{\frac{\lambda^2 \sigma^2}{2}} ~.
    
\end{aligned}\]</span> Therefore, taking the logarithm of both sides
gives <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} Y_i \leq \frac{\log n}{\lambda}
+ \frac{\lambda \sigma^2}{2} ~.
    
\end{aligned}\]</span> The minimum of the right-hand side occurs at
<span class="math inline">\(\lambda = \sqrt{\frac{2\log
n}{\sigma^2}}\)</span>, so the inequality above reduces to <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} Y_i \leq \sigma \sqrt{2 \log n}
~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<div id="prop:strictly-increasing-maximal-inequality"
class="proposition">
<p><strong>Proposition 12</strong>. Let <span
class="math inline">\(f\)</span> be a strictly increasing, convex,
nonnegative function. Suppose <span class="math inline">\(\xi_1, \dots,
\xi_n\)</span> are random variables such that <span
class="math display">\[\begin{aligned}
        \mathbb E f\left( \frac{|\xi_i|}{c_i} \right) \leq L
    
\end{aligned}\]</span> for some constant <span
class="math inline">\(L\)</span>, and the inequality above holds for all
<span class="math inline">\(1 \leq i \leq n\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} |\xi_i| \leq f^{-1} (Ln)
\sup_{1 \leq i \leq n} c_i ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Since <span class="math inline">\(f\)</span> is
strictly increasing, convex, and nonnegative, we have (by Jensen’s
inequality applied in the following calculations) <span
class="math display">\[\begin{aligned}
        f \left( \frac{\mathbb E \sup_{1 \leq i \leq n} |\xi_i|}{\sup_{1
\leq i \leq n} c_i} \right) &amp;\leq f \left( \mathbb E \sup_{1 \leq i
\leq n} \frac{|\xi_i|}{c_i} \right) \\
        &amp;\leq \mathbb E f \left( \sup_{1 \leq i \leq n}
\frac{|\xi_i|}{c_i} \right) \leq \sum_{1 \leq i \leq n} \mathbb E f
\left( \frac{|\xi_i|}{c_i} \right) \leq Ln ~.
    
\end{aligned}\]</span> Since <span class="math inline">\(f\)</span> is
invertible by our assumptions, apply <span
class="math inline">\(f^{-1}\)</span> to both sides to conclude. ◻</p>
</div>
<div id="eg:rademacher-subgaussian" class="example">
<p><strong>Example 13</strong>. Suppose each <span
class="math inline">\(\xi_i\)</span> is a linear combination of
Rademacher random variables, i.e. for all <span class="math inline">\(1
\leq i \leq n\)</span>, <span class="math display">\[\begin{aligned}
        \xi_i = \sum_{1 \leq k \leq n} a^{(i)}_k \varepsilon_k ~,
    
\end{aligned}\]</span> where <span
class="math inline">\(\varepsilon_k\)</span> is a Rademacher random
variable for all <span class="math inline">\(1 \leq k \leq n\)</span>,
and <span class="math inline">\(a^{(i)} \triangleq (a^{(i)}_1, \dots,
a^{(i)}_n)\)</span>. We first look at the rescaling <span
class="math display">\[\begin{aligned}
        \mathbb E \exp \left( \frac{\xi_i^2}{6 \lVert a^{(i)} \rVert^2}
\right) ~.
    
\end{aligned}\]</span> Because <span
class="math display">\[\begin{aligned}
        \frac{\xi_i^2}{6 \lVert a^{(i)} \rVert^2} &amp;= \sum_{1 \leq k
\leq n} \frac{a_k^2}{6 \lVert a^{(i)} \rVert^2} + 2 \sum_{1 \leq k \leq
n} \sum_{1 \leq j \leq k} \frac{a_j a_k}{6 \lVert a^{(i)} \rVert^2}
\xi_j \xi_k ~,
        \end{aligned}\]</span>

<p>we must have</p>

<span class="math display">\[\begin{aligned}
        \mathbb E \exp \left( \frac{\xi_i^2}{6 \lVert a^{(i)} \rVert^2}
\right) &amp;= e^{\frac16} \mathbb E \exp \left( \sum_{1 \leq k \leq n}
\sum_{1 \leq j \leq k} \frac{a_j a_k}{3 \lVert a^{(i)} \rVert^2} \xi_j
\xi_k \right) \\
        &amp;= e^{\frac16} \prod_{1 \leq k \leq n} \prod_{1 \leq j \leq
k} \mathbb E \exp \left( \frac{a_j a_k}{3 \lVert a^{(i)} \rVert^2} \xi_j
\xi_k \right) \\
        &amp;\leq e^{\frac16} \prod_{1 \leq k \leq n} \prod_{1 \leq j
\leq k} \exp \left( \frac{a_j^2 a_k^2}{6 \lVert a^{(i)} \rVert^4}
\right) \\
        &amp;=  e^{\frac16} \exp \left( \sum_{1 \leq k \leq n} \sum_{1
\leq j \leq k}  \frac{a_j^2 a_k^2}{6 \lVert a^{(i)} \rVert^4} \right) =
e^{\frac13} \leq 2 ~.
    
\end{aligned}\]</span> We now have a crude upper bound, as above.
Setting <span class="math inline">\(z = \frac{\xi_i}{\sqrt 6 \lVert
a^{(i)} \rVert}\)</span>, we write <span class="math inline">\(f(z) =
e^{z^2}\)</span>, and based on what we’ve shown above, we can apply
Proposition <a href="#prop:strictly-increasing-maximal-inequality"
data-reference-type="ref"
data-reference="prop:strictly-increasing-maximal-inequality">12</a> with
<span class="math inline">\(L = 2\)</span>, <span
class="math inline">\(c_i = \sqrt 6 \lVert a^{(i)} \rVert\)</span>, and
<span class="math inline">\(f^{-1} (z) = \sqrt{\log f(z)}\)</span> to
yield <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} |\xi_i| \leq \sqrt{6} \sqrt{4
\log n} \sup_{1 \leq i \leq n} \lVert a^{(i)} \rVert = 2\sqrt{6}
\sqrt{\log n} \sup_{1 \leq i \leq n} \lVert a^{(i)} \rVert ~.
    
\end{aligned}\]</span> Therefore, for linear combinations of Rademacher
random variables, the desired constant (for subgaussianity) is <span
class="math inline">\(C = 2 \sqrt 6\)</span>.</p>
</div>
<p>The discussion above can be generalized to procedure known as the
<em>Chernoff bound</em>.</p>
<div id="lem:chernoff-bound" class="lemma">
<p><strong>Lemma 14</strong> (Chernoff). For a random variable <span
class="math inline">\(X\)</span>, write <span
class="math display">\[\begin{aligned}
        \psi (\lambda) = \log \mathbb E e^{\lambda(X - \mathbb E X)}
~~\text{and}~~ \psi^* (t) = \sup_{\lambda \geq 0} \lambda t -
\psi(\lambda)
    
\end{aligned}\]</span> to denote the log moment generating function and
its Legendre transform, respectively. Then, <span
class="math inline">\(\mathbf P\,\,\!\!(X - \mathbb E X \geq t) \leq
e^{-\psi^*(t)}\)</span> for all <span class="math inline">\(t \geq
0\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Follows from applying the fact that <span
class="math inline">\(x \mapsto e^{\lambda x}\)</span> is an increasing
function for <span class="math inline">\(\lambda \geq 0\)</span>, after
an application of Markov’s inequality (after exponentiation). ◻</p>
</div>
<p>A direct consequence of the Chernoff bound is a powerful
concentration inequality, called <em>Bernstein’s inequality</em>.</p>
<div id="prop:bernstein" class="proposition">
<p><strong>Proposition 15</strong> (Bernstein). Let <span
class="math inline">\(X_1, X_2, \dots\)</span> be independent random
variables with bounded ranges <span
class="math inline">\([-M,M]\)</span> and zero means. Then, <span class="math display">\begin{equation}\label{eq:bernstein}\begin{aligned}

        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq i \leq n} X_i
\right| &gt; t \right) \leq 2 e^{-\frac{t^2}{2(v + Mt/3)}} ~,
    
\end{aligned}\end{equation}</span> for <span class="math inline">\(v \geq \sum_{1
\leq i \leq n} \mathop{\mathrm{Var}}(X_i)\)</span>.</p>
</div>
<p>We deduce Bernstein’s inequality from the following result (in the
abstract).</p>
<div id="prop:tail-bound-via-mgf" class="proposition">
<p><strong>Proposition 16</strong>. Let <span
class="math inline">\(Z\)</span> be a random variable whose
moment-generating function, for some <span class="math inline">\(v &gt;
0\)</span>, satisfies <span class="math display">\begin{equation}\label{prop:tail-bound-via-mgf-as1}\begin{aligned}

        \mathbb E e^{\lambda Z} \leq \exp (v(e^\lambda - 1 - \lambda))
\quad \text{for } \lambda &gt; 0 ~.
    
\end{aligned}\end{equation}</span> Then, for all <span class="math inline">\(t \geq
0\)</span>, <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(Z \geq t) \leq \exp \left( -v h_1 \left(
\frac{t}{v} \right) \right) &amp;\leq \exp \left( -\frac{3t}{4} \log
\left( 1 + \frac{2t}{3v} \right) \right) \leq \exp \left(
-\frac{t^2}{2(v + t/3)} \right) ~.
        \end{aligned}\]</span>

<p>Furthermore,</p>

<span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( Z \geq \sqrt{2vx} + \frac{x}{3} \right)
&amp;\leq e^{-x} \quad \text{for } x \geq 0 ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof of Proposition <a href="#prop:tail-bound-via-mgf"
data-reference-type="ref"
data-reference="prop:tail-bound-via-mgf">16</a>.</em> To see this, note
that \eqref{prop:tail-bound-via-mgf-as1}
implies, together with Markov’s inequality, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(Z \geq t) = \inf_{\lambda &gt; 0} \mathbf
P\,\,\!\!( e^{\lambda Z} \geq e^{\lambda t} ) \leq e^{v \inf_{\lambda
&gt; 0} \{\phi(-\lambda) - \frac{\lambda t}{v}\}} ~.
    
\end{aligned}\]</span> By direct calculation, the infimum of the
function on the right-hand side of the inequality is attained at <span
class="math inline">\(\lambda = \log(1+z)\)</span>, where this follows
from the fact that <span class="math inline">\(\phi(z) = e^\lambda - 1 -
\lambda\)</span>. Therefore, we set the maximum as the function <span
class="math inline">\(h_1(z) \triangleq (1+z) \log(1+z) - z\)</span>.
This proves the first desired inequality.</p>
<p>Again, via direct calculations, we have <span
class="math inline">\(h&#39;_1 (z) = \log(1+z)\)</span>. So we have a
natural comparison <span class="math display">\[\begin{aligned}
        h_1 (t) \geq \frac{3t}{4} \log \left( 1 + \frac{2t}{3} \right)
\geq \frac{t^2}{2(1 + \frac{t}{3})} \quad \text{for } t &gt; 0 ~,
    
\end{aligned}\]</span> which follows from direct comparisons of
derivatives and their values at <span
class="math inline">\(t=0\)</span>. Combining this with the first
inequality gives the desired result.</p>
<p>For the remaining exponential tail bound, it remains to see thta a
Taylor expansion gives, for <span class="math inline">\(\lambda \geq
0\)</span>, <span class="math display">\[\begin{aligned}
        \left( 1 - \frac{\lambda}{3} \right) (e^\lambda - \lambda - 1)
\leq \frac{\lambda^2}{2} ~.
    
\end{aligned}\]</span> So, \eqref{prop:tail-bound-via-mgf-as1},
together with <span class="math inline">\(\varphi(\lambda) \triangleq
\frac{v\lambda^2}{3(1-\frac{\lambda}{3})}\)</span> for <span
class="math inline">\(\lambda \in [0,3)\)</span>, gives <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(Z \geq t) \leq \exp \left( \inf_{\lambda \in
[0,3)} \varphi(\lambda) - \lambda t \right) = \exp \left( -
\sup_{\lambda \in [0,3)} - \varphi(\lambda) + \lambda t \right) ~.
    
\end{aligned}\]</span> Let <span class="math inline">\(\gamma(u) =
\sup_{\lambda \in [0,3)} - \varphi(\lambda) + \lambda u\)</span>. Since
<span class="math inline">\(\varphi\)</span> and <span
class="math inline">\(\varphi&#39;\)</span> are strictly increasing, we
have <span class="math inline">\(\varphi(0) = 0\)</span> and <span
class="math inline">\(\varphi(x) \to \infty\)</span> as <span
class="math inline">\(x \to 3^-\)</span>. So, the argmax is <span
class="math inline">\(\lambda_0\)</span>, where the tangent line of
<span class="math inline">\(y = \varphi(\lambda)\)</span> at <span
class="math inline">\((\lambda_0, \varphi(\lambda_0))\)</span> has slope
<span class="math inline">\(s\)</span>. The slope of this tangent line
is <span
class="math inline">\(\frac{x+\varphi(\lambda_0)}{\lambda_0}\)</span>.
Any other straight line passing through <span
class="math inline">\((0,-x)\)</span> and <span
class="math inline">\((\lambda, \varphi(\lambda))\)</span> for <span
class="math inline">\(\lambda \in (0,3)\)</span> has a larger slope (by
inspection). Therefore, <span class="math display">\[\begin{aligned}
        \gamma^{-1} (x) = \inf_{\lambda \in (0,3)}
\frac{\varphi(\lambda) + x}{\lambda} = \inf_{\lambda \in (0,3)} \left(
\frac{v \lambda}{2(1-\frac{\lambda}{3})} + \frac{x}{\lambda} \right) ~.
    
\end{aligned}\]</span> Changing variables, specifically by setting <span
class="math inline">\(u = \frac{1-\frac{\lambda}{3}}{v\lambda}\)</span>,
we have <span class="math inline">\(\gamma^{-1}(x) = \inf_{u \in
(0,\infty)} \frac{1}{2u} + x(uv + \frac13)\)</span>. A direct
calculation shows that the infimum is attained at <span
class="math inline">\(u = \frac{1}{\sqrt{2vx}}\)</span>, therefore we
have <span class="math inline">\(\gamma^{-1} (x) = \sqrt{2vx} +
\frac{x}{3}\)</span>. The desired conclusion then follows
directly. ◻</p>
</div>
<p>A question that we can pursue now is: is there a tensorization
inequality for a subgaussian process? The answer is, unfortunately, no:
the subgaussian property does not tensorize. However, we can develop a
notion that does tensorize, called the <em>log-Sobolev
inequalities</em>, which will be the subject of Section <a
href="#sec:log-sobolev" data-reference-type="ref"
data-reference="sec:log-sobolev">1.4</a>. To do so, we extend the
martingale method employed in the proof of Theorem <a
href="#thm:tensorization-bound" data-reference-type="ref"
data-reference="thm:tensorization-bound">2</a>.</p>
<div id="lem:azuma" class="lemma">
<p><strong>Lemma 17</strong> (Azuma). Let <span
class="math inline">\(X_1, \dots, X_n\)</span> be independent random
variables defined on <span class="math inline">\(\mathscr X\)</span>.
Let <span class="math inline">\(\Delta_k\)</span> be a martingale
difference array with respect to <span class="math inline">\(X_1, \dots,
X_k\)</span>, defined as <span class="math display">\[\begin{aligned}
        \Delta_k = \mathbb E [f(X_1, \dots, X_n) \mid X_1, \dots, X_k] -
\mathbb E [f(X_1, \dots, X_n) \mid X_1, \dots, X_{k-1}] ~,
    
\end{aligned}\]</span> where <span
class="math inline">\(\Delta_k\)</span> has variance <span
class="math inline">\(\sigma_k^2\)</span>. Suppose the following
conditional subgaussian property holds: <span
class="math display">\[\begin{aligned}
        \mathbb E [e^{\lambda \Delta_k} \mid X_1, \dots, X_{k-1}] \leq
e^{\frac{\lambda^2 \sigma_k^2}{2}} ~~ \rm a.s.
    
\end{aligned}\]</span> Then, the sum <span class="math inline">\(\sum_{1
\leq k \leq n} \Delta_k\)</span> is subgaussian.</p>
</div>
<div class="proof">
<p><em>Proof.</em> It follows from direct calculations and the law of
iterated expectations that <span class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda \sum_{1 \leq i \leq k} \Delta_i} &amp;=
\mathbb E[ e^{\lambda \sum_{1 \leq i \leq k-1} \Delta_i} \mathbb E
[e^{\lambda \Delta_k} \mid X_1, \dots, X_{k-1}]] \\
        &amp;\leq e^{\frac{\lambda^2 \sigma_k^2}{2}} \mathbb E
[e^{\lambda \Delta_k} \mid X_1, \dots, X_{k-1}] ~,
    
\end{aligned}\]</span> from which we apply induction on <span
class="math inline">\(k\)</span> to conclude. ◻</p>
</div>
<p>Here is a classical bound for the sum of <em>bounded</em> martingale
difference array.</p>
<div id="lem:azuma-hoeffding" class="lemma">
<p><strong>Lemma 18</strong> (Azuma-Hoeffding). With the setup of Lemma
<a href="#lem:azuma" data-reference-type="ref"
data-reference="lem:azuma">17</a>, suppose <span
class="math inline">\(|\Delta_i| \leq c_i\)</span> for some constants
<span class="math inline">\(c_i\)</span> for all <span
class="math inline">\(1 \leq i \leq n\)</span>. Then, the sum <span
class="math inline">\(\sum_{1 \leq k \leq n} \Delta_k\)</span> is
subgaussian.</p>
</div>
<div class="proof">
<p><em>Proof.</em> It is convenient to write <span
class="math inline">\(Z = f(X_1, \dots, X_n)\)</span>, so that, by
inspection, we have <span class="math inline">\(Z - \mathbb E Z =
\sum_{1 \leq k \leq n} \Delta_k\)</span>. It then follows that <span
class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda(Z-\mathbb E Z)} &amp;= \mathbb E[
e^{\lambda \sum_{1 \leq i \leq n-1} \Delta_i} \mathbb E [e^{\lambda
\Delta_n} \mid X_1, \dots, X_{n-1}]] \\
        &amp;= \mathbb E[ e^{\lambda \sum_{1 \leq i \leq n-1} \Delta_i}]
\mathbb E [e^{\lambda \Delta_n} \mid X_1, \dots, X_{n-1}] \\
        &amp;\leq e^{\frac{\lambda^2 c_n^2}{2}} \mathbb E [e^{\lambda
\Delta_k} \mid X_1, \dots, X_{k-1}] ~,
        \end{aligned}\]</span>

<p>repeating this finitely many times, we have</p>

<span class="math display">\[\begin{aligned}
        &amp;\leq e^{\frac{\lambda^2 (\sum_{1 \leq k \leq n} c_k^2)}{2}}
~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>From these results, we can deduce the simplest subgaussian
concentration inequality. Again, we cannot naïvely apply the
tensorization arguments to subgaussian random variables; we can,
however, apply a tensorization principle to a martingale difference
array, as above. We only require that the functions we consider obey the
<em>bounded difference property</em>: a function <span
class="math inline">\(f : \mathscr X^n \to \mathbb R\)</span> satisfies
the bounded difference property if there exists some nonnegative
constants <span class="math inline">\(d_1, \dots, d_n\)</span> such that
<span class="math display">\begin{equation}\label{property:bounded-difference}\begin{aligned}

    \sup_{x_1, \dots, x_n; x&#39;_i \in \mathscr X} | f(x_1, \dots, x_n)
- f(x_1, \dots, x_{i-1}, x&#39;_i, x_{i+1}, \dots, x_n) | \leq d_i
\end{aligned}\end{equation}</span> holds for all <span class="math inline">\(1 \leq
i \leq n\)</span>.</p>
<div id="lem:mcdiarmid" class="lemma">
<p><strong>Lemma 19</strong> (McDiarmid). Suppose <span
class="math inline">\(X_1, \dots, X_n\)</span> are independent random
variables defined on <span class="math inline">\(\mathscr X\)</span>,
and <span class="math inline">\(f\)</span> is a function satisfying the
bounded difference property <a href="{% post_url 2026-06-15-fundamental-techniques %}#property:bounded-difference">bounded difference property</a>.
Then, <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|f(X_1, \dots, X_n) - \mathbb E f(X_1, \dots,
X_n)| &gt; t) \leq 2 e^{-\frac{2t^2}{\sum_{1 \leq i \leq n} d_i^2}} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> We show that under the hypotheses of the result, we
have <span class="math inline">\(|\Delta_i| \leq d_i\)</span> for all
<span class="math inline">\(i\)</span>. BY the definition of <span
class="math inline">\(\Delta_i\)</span> (i.e. the martingale difference
array), we can view <span class="math inline">\(\Delta_i\)</span> as a
function of <span class="math inline">\(X_i\)</span> only, if we keep
<span class="math inline">\(X_1=x_1, \dots, X_{i-1} = x_{i-1}\)</span>
fixed. Therefore, by the independence of <span
class="math inline">\(X_1, \dots, X_n\)</span>, <span
class="math display">\[\begin{aligned}
        &amp; |\Delta_i (x_1, \dots, x_{i-1}, x)| \\
        = \: &amp; |\mathbb E f(x_1, \dots, x_{i-1}, x, X_{i+1}, \dots,
X_n) - \mathbb E f(x_1, \dots, x_{i-1}, X_i, X_{i+1}, \dots, X_n) | \\
        = \: &amp; |\mathbb E [f(x_1, \dots, x_{i-1}, x, X_{i+1}, \dots,
X_n) - f(x_1, \dots, x_{i-1}, X_i, X_{i+1}, \dots, X_n)] | \\
        \leq \: &amp; \mathbb E |f(x_1, \dots, x_{i-1}, x, X_{i+1},
\dots, X_n) - f(x_1, \dots, x_{i-1}, X_i, X_{i+1}, \dots, X_n)|
~~\text{by Jensen&#39;s inequality} \\
        \leq \: &amp; \mathbb E \sup_{x_1, \dots, x_n; x&#39;_i \in
\mathscr X} |f(x_1, \dots, x_{i-1}, x, X_{i+1}, \dots, X_n) - f(x_1,
\dots, x_{i-1}, X_i, X_{i+1}, \dots, X_n)| \leq d_i ~,
    
\end{aligned}\]</span> where the second inequality follows from <a href="{% post_url 2026-06-15-fundamental-techniques %}#property:bounded-difference">bounded difference property</a>.
Therefore, we can now apply Azuma-Hoeffding to conclude. ◻</p>
</div>
<p>An application of these tools is detailed in Remark <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#rem:g-c-concentration" data-reference-type="ref"
data-reference="rem:g-c-concentration">[rem:g-c-concentration]</a>.</p>
<p>We note that a stronger concentration result can be derived if we
leverage the modified log-Sobolev inequality and the tensorization of
entropy. Namely, we can show the following <em>bounded difference
inequality</em> in terms of entropy. Let <span
class="math display">\[\begin{aligned}
    D_i^+ f(x) &amp;\triangleq \sup_w f(x_1, \dots, x_{i-1}, w, x_{i+1},
\dots, x_n) - f(x_1, \dots, x_n) ~, \\
    D_i^- f(x) &amp;\triangleq f(x_1, \dots, x_n) - \inf_w f(x_1, \dots,
x_{i-1}, w, x_{i+1}, \dots, x_n) ~,
\end{aligned}\]</span> where <span class="math inline">\(f: \mathscr X^n
\to \mathbb R\)</span> is some function.</p>
<div id="thm:bounded-difference-entropy" class="theorem">
<p><strong>Theorem 20</strong> (Bounded difference inequality). Suppose
<span class="math inline">\(X_1, \dots, X_n\)</span> are independent
random variables. Then, for all <span class="math inline">\(t \geq
0\)</span>, <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!( f(X_1, \dots, X_n) \geq \mathbb E f(X_1,
\dots, X_n) + t) &amp;\leq e^{-\frac{t^2}{4 \lVert \sum_{1 \leq i \leq
n} |D_i^- f|^2 \rVert_{\infty}}} \\
        \mathbf P\,\,\!\!( f(X_1, \dots, X_n) \leq \mathbb E f(X_1,
\dots, X_n) - t) &amp;\leq e^{-\frac{t^2}{4 \lVert \sum_{1 \leq i \leq
n} |D_i^+ f|^2 \rVert_{\infty}}}
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> By the modified log-Sobolev inequality, we have the
coordinate-wise entropy estimate <span
class="math display">\[\begin{aligned}
        \operatorname{Ent}_i (e^f) \leq \mathbb E[|D_i^- f|^2 e^f \mid
X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] ~,
    
\end{aligned}\]</span> so, for all <span class="math inline">\(\lambda
\geq 0\)</span>, the tensorization property of entropy gives us the
estimate <span class="math display">\[\begin{aligned}
        \operatorname{Ent} (e^{\lambda f}) \leq \lambda^2 \mathbb E
\left[ \sum_{1 \leq i \leq n} |D_i^- f|^2 e^{\lambda f} \right] \leq
\lambda^2 \mathbb E [e^{\lambda f}] \left\lVert \sum_{1 \leq i \leq n}
|D_i^- f|^2 \right\rVert
    
\end{aligned}\]</span> for <span class="math inline">\(\lambda \geq
0\)</span>, where the scaling property <span class="math inline">\(D_i^-
(\lambda f) = \lambda D_i^- f\)</span> follows directly by definition.
The upper tail bound then follows from the Chernoff bound. Because <span
class="math inline">\(D_i^- (-f) = - D_i^+ f\)</span> by definition, we
can use this property to obtain the lower tail bound from the upper tail
bound we derived. ◻</p>
</div>
<h2 id="sec:log-sobolev">Log-Sobolev Inequality</h2>
<p>As we have seen above, the method of tensorization allows us to
derive useful and nontrivial bounds in a lot of scenarios. But we have
not yet examined the tensorization of entropy and its power. We begin
applying the tensorization of entropy in a relatively abstract setting,
then we discuss the log-Sobolev inequality in some detail.</p>
<p>To begin, let <span class="math inline">\(\lambda\)</span> denote the
Lebesgue measure on <span class="math inline">\(\mathbb R^n\)</span> for
any <span class="math inline">\(n\)</span>. Note the following result
follows from properties of <span
class="math inline">\(\lambda\)</span>.</p>
<div id="lem:lebesgue-measure-superadditive-A-B" class="lemma">
<p><strong>Lemma 21</strong>. Suppose <span
class="math inline">\(A\)</span> and <span
class="math inline">\(B\)</span> are Borel measurable sets in <span
class="math inline">\(\mathbb R\)</span>. Then, <span
class="math inline">\(\lambda(A + B) \geq \lambda(A) +
\lambda(B)\)</span>, where <span class="math inline">\(A + B = \{a + b :
a \in A ~,~ b \in B\}\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> <span class="math inline">\(A+B\)</span> is Borel
measurable, because it is the image under a continuous map of the Borel
set <span class="math inline">\(A \times B\)</span>. Therefore, we only
need to consider the case where <span class="math inline">\(A\)</span>
and <span class="math inline">\(B\)</span> are compact, since <span
class="math inline">\(\lambda\)</span> is regular. But this is a
straightforward consequence from the fact that <span
class="math inline">\(\lambda\)</span> is translation invariant, so it
is without loss to consider <span class="math inline">\(A \subset \{x
\leq 0\}\)</span> and <span class="math inline">\(B \subset \{x \geq
0\}\)</span>. The conclusion then follows from <span
class="math inline">\(A + B \supset (A \cup B)\)</span> and the
monotonicity of <span class="math inline">\(\lambda\)</span>. ◻</p>
</div>
<p>The following result is the main ingredient to results on <em>volume
comparisons</em>.</p>
<div id="thm:precopa-leindler" class="theorem">
<p><strong>Theorem 22</strong> (Précopa-Leindler). Let <span
class="math inline">\(f\)</span>, <span
class="math inline">\(g\)</span>, and <span
class="math inline">\(\varphi\)</span> be Lebesgue measurable functions
on <span class="math inline">\(\mathbb R^n\)</span> taking values in
<span class="math inline">\([0,\infty]\)</span>. For some <span
class="math inline">\(\eta \in (0,1)\)</span> and for all <span
class="math inline">\(u, v \in \mathbb R^n\)</span>, suppose <span class="math display">\begin{equation}\label{eq:precopa-leindler-assumption}\begin{aligned}

        \varphi(\eta u + (1-\eta)v) \geq f(u)^\eta g(v)^{1-\eta}
    
\end{aligned}\end{equation}</span> holds. Then, <span
class="math display">\[\begin{aligned}
        \int \varphi \mathrm{d} \lambda \geq \left( \int f \mathrm{d} \lambda
\right)^\eta \left( \int g \mathrm{d} \lambda \right)^{1-\eta} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The proof proceeds by induction on <span
class="math inline">\(n\)</span>. For <span
class="math inline">\(n=1\)</span>, assume <span
class="math inline">\(f\)</span> and <span
class="math inline">\(g\)</span> are such that <span
class="math inline">\(\lVert f \rVert_\infty = \lVert g \rVert_\infty =
1\)</span> (since we can divide both sides of the inequality \eqref{eq:precopa-leindler-assumption}
by <span class="math inline">\(\lVert f \rVert_\infty^\eta \lVert g
\rVert_\infty^{1-\eta}\)</span>). Then, for <span
class="math inline">\(t \in [0,1)\)</span>, it is clear that <span
class="math inline">\(\{x: f(x) \geq t\}\)</span> and <span
class="math inline">\(\{x: g(x) \geq t\}\)</span> are nonempty. We
therefore have the inequality <span
class="math display">\[\begin{aligned}
        \eta \{f \geq t\} + (1-\eta) \{g \geq t\} \subset \{\varphi \geq
t\} ~,
    
\end{aligned}\]</span> since, if <span class="math inline">\(f(u) \geq
t\)</span> and <span class="math inline">\(g(v) \geq t\)</span>, then \eqref{eq:precopa-leindler-assumption}
implies <span class="math inline">\(\varphi(\eta u + (1-\eta)v) \geq
f(u)^\eta g(v)^{1-\eta} \geq t\)</span>. However, Lemma <a
href="#lem:lebesgue-measure-superadditive-A-B" data-reference-type="ref"
data-reference="lem:lebesgue-measure-superadditive-A-B">21</a> together
with \eqref{eq:precopa-leindler-assumption}
imply that <span class="math inline">\(\lambda(\{\varphi \geq t\}) \geq
\eta \lambda(\{f \geq t\}) + (1-\eta) \lambda(\{ g \geq t \})\)</span>.
This means, by integrating with respect <span
class="math inline">\(t\)</span>, we have <span
class="math display">\[\begin{aligned}
        \int \varphi \mathrm{d} \lambda \geq \eta \int f \mathrm{d} \lambda +
(1-\eta) \int g \mathrm{d} \lambda \geq \left( \int f \mathrm{d} \lambda
\right)^\eta \left( \int g \mathrm{d} \lambda \right)^{1-\eta} ~,
    
\end{aligned}\]</span> as desired. Suppose this statement holds true for
<span class="math inline">\(n-1\)</span> (by a slight abuse of
notation); fix the functions and <span
class="math inline">\(\eta\)</span> as given in the statement of the
theorem. Then, fix the last coordinate <span class="math inline">\(x_n =
x\)</span>, and define <span class="math inline">\(\varphi_x : \mathbb
R^{n-1} \to [0,\infty]\)</span> via <span
class="math inline">\(\varphi_t (x) = \varphi(x,t)\)</span>; define
analogous expressions <span class="math inline">\(f_x\)</span> and <span
class="math inline">\(g_x\)</span>. For any <span
class="math inline">\(u,v \in \mathbb R^{n-1}\)</span> and any <span
class="math inline">\(x_1, x_2\)</span> such that <span
class="math inline">\(x = \eta x_1 + (1-\eta) x_2\)</span>, we must
have, by our hypothesis, <span class="math display">\[\begin{aligned}
        \varphi_x(\eta u + (1-\eta)v) = \varphi(\eta (x_1,u) +
(1-\eta)(x_2,v)) \geq f(x,u)^\eta g(x,v)^{1-\eta} = f_{x_1} (u)^{\eta}
g_{x_2} (v)^{1-\eta} ~.
    
\end{aligned}\]</span> From here, we apply the inductive hypothesis and
appeal to the base case to arrive at the desired statement. ◻</p>
</div>
<p>We arrive at a stark result for the Gaussian measure on <span
class="math inline">\(\mathbb R^n\)</span>: it is, in fact,
log-cancave.</p>
<div id="prop:gaussian-measures-log-concave" class="proposition">
<p><strong>Proposition 23</strong> (Gaussian measures on <span
class="math inline">\(\mathbb R^n\)</span> are log-concave). Let <span
class="math inline">\(\mu\)</span> be a centred Gaussian measure on
<span class="math inline">\(\mathbb R^n\)</span>. Then, for any Borel
sets <span class="math inline">\(A, B \in \mathbb R^n\)</span> and <span
class="math inline">\(\eta \in [0,1]\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mu(\eta A + (1-\eta) B) \geq \mu(A)^{\eta} \mu(B)^{1-\eta} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> <span class="math inline">\(\mu\)</span> is supported
on a subspace <span class="math inline">\(V\)</span> of <span
class="math inline">\(\mathbb R^n\)</span>, so the density of <span
class="math inline">\(\mu\)</span> restricted to <span
class="math inline">\(V\)</span> (with respect to the Lebesgue measure
on <span class="math inline">\(V\)</span>) is <span
class="math inline">\(\psi(x) = c e^{-\frac{|\Gamma x|^2}{2}}\)</span>
for some normalizing constant <span class="math inline">\(c\)</span>.
Here, <span class="math inline">\(\Gamma\)</span> is the positive square
root of the inverse of the covariance of <span
class="math inline">\(\mu\)</span> (restricted to <span
class="math inline">\(V\)</span>). This is clearly a strictly positive
definite operator. If we diagonalize <span
class="math inline">\(\Gamma\)</span>, then it is not difficult to see
that <span class="math inline">\(x \mapsto \log \psi(x) = -|\Gamma
x|^2\)</span> is concave. So, if <span class="math inline">\(A\)</span>
and <span class="math inline">\(B\)</span> are Borel sets defined on
<span class="math inline">\(\mathbb R^n\)</span>, then if we set <span
class="math display">\[\begin{aligned}
        \varphi &amp;= \psi \mathbb 1 \{ \eta(A \cap V) + (1-\eta)(B
\cap V) \} ~, \\
        f &amp;= \psi \mathbb 1 \{ A \cap V \} ~, \\
        g &amp;= \psi \mathbb 1 \{ B \cap V \} ~.
    
\end{aligned}\]</span> By definition, <span class="math inline">\(\eta(A
\cap V) + (1-\eta)(B \cap V)\)</span> is the image of a Borel set on
<span class="math inline">\(V \times V\)</span> under a continuous map.
We therefore obviate issues with measurability. Since <span
class="math inline">\(V \subset \mathbb R^n\)</span>, it follows from
Theorem <a href="#thm:precopa-leindler" data-reference-type="ref"
data-reference="thm:precopa-leindler">22</a> that <span
class="math display">\[\begin{aligned}
        \int_{\eta(A \cap V) + (1-\eta)(B \cap V)} \psi \mathrm{d} \lambda
\geq \left( \int_{A \cap V} \psi \mathrm{d} \lambda \right)^{\eta} \left(
\int_{B \cap V} \psi \mathrm{d} \lambda \right)^{1-\lambda}
    
\end{aligned}\]</span> (and for the expression above, <span
class="math inline">\(\lambda\)</span> is really the restriction of the
Lebesgue measure on <span class="math inline">\(\mathbb R^n\)</span> to
<span class="math inline">\(V\)</span>, by a slight abuse of notation).
This immediately implies the desired log-concavity by noticing that
<span class="math inline">\(\mu((\eta A + (1-\eta)B) \cap V) \geq
\mu(\eta(A \cap V) + (1-\eta)(B \cap V))\)</span>. ◻</p>
</div>
<div id="lem:anderson" class="lemma">
<p><strong>Lemma 24</strong> (Anderson). Suppose <span
class="math inline">\(X = (g_1, \dots, g_n)\)</span> is a centred,
jointly normal vector in <span class="math inline">\(\mathbb
R^n\)</span>. Let <span class="math inline">\(C\)</span> be a
measurable, convex, symmetric set in <span class="math inline">\(\mathbb
R^n\)</span>. Then, for all <span class="math inline">\(x \in \mathbb
R^n\)</span>, <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X + x \in C) \leq \mathbf P\,\,\!\!(X \in C)
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This is a direct consequence of the log-concavity of
centred Gaussian measures in <span class="math inline">\(\mathbb
R^n\)</span>: if we take <span class="math inline">\(\mu\)</span> to be
the law of <span class="math inline">\(X\)</span>, set <span
class="math inline">\(A = C+x\)</span> and <span
class="math inline">\(B=C-x\)</span>, and put <span
class="math inline">\(\eta=\frac12\)</span>, then the symmetry of <span
class="math inline">\(\mu\)</span> and <span
class="math inline">\(C\)</span> imply that <span
class="math inline">\(\mu(A) = \mu(B)\)</span>. This immediately implies
the desired conclusion. ◻</p>
</div>
<p>There are two useful direct consequences of all the constructions
above.</p>
<div id="thm:brunn-minkowski" class="theorem">
<p><strong>Theorem 25</strong> (Brunn-Minkowski). Let <span
class="math inline">\(\operatorname{Vol}\)</span> denote the volume on
<span class="math inline">\(\mathbb R^n\)</span>. Then, for any compact
subsets <span class="math inline">\(A\)</span> and <span
class="math inline">\(B\)</span> of <span class="math inline">\(\mathbb
R^n\)</span>, we have <span class="math display">\[\begin{aligned}
        \operatorname{Vol}(A+B)^{\frac1n} \geq
\operatorname{Vol}(A)^{\frac1n} + \operatorname{Vol}(B)^{\frac1n} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Applying Précopa-Leindler to <span
class="math inline">\(f = \mathbb 1 \{A\}\)</span>, <span
class="math inline">\(g = \mathbb 1 \{B\}\)</span>, and <span
class="math inline">\(\varphi = \mathbb 1 \{\lambda A +
(1-\lambda)B\}\)</span>, we immediately obtain <span
class="math inline">\(\operatorname{Vol}(\lambda A + (1-\lambda)B) \geq
\operatorname{Vol}(A)^\lambda
\operatorname{Vol}(B)^{1-\lambda}\)</span>. Rescaling and redefining
<span class="math inline">\(A\)</span> and <span
class="math inline">\(B\)</span> by their volumes, we get the equivalent
inequality <span class="math display">\[\begin{aligned}
        \operatorname{Vol}(A+B)^{\frac1n} \geq
\frac{1}{(1-\lambda)^{1-\lambda} \lambda^\lambda}
\operatorname{Vol}(A)^{\frac{1-\lambda}{n}}
\operatorname{Vol}(B)^{\frac{\lambda}{n}} ~.
    
\end{aligned}\]</span> Therefore, optimizing over <span
class="math inline">\(\lambda\)</span>, we obtain <span
class="math inline">\(\lambda^* =
\frac{\operatorname{Vol}(A)^{\frac1n}}{\operatorname{Vol}(A)^{\frac1n} +
\operatorname{Vol}(B)^{\frac1n}}\)</span>. Using this, we obtain the
desired volume comparison inequality. ◻</p>
</div>
<div id="lem:khatri-sidak" class="lemma">
<p><strong>Lemma 26</strong> (Khatri-Sidak). Let <span
class="math inline">\(n \geq 2\)</span> and <span
class="math inline">\(g_1, \dots, g_n\)</span> be centred, jointly
normal random variables. Then, for all <span class="math inline">\(x
\geq 0\)</span>, we have <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} |g_i| \leq x
\right) \geq \mathbf P\,\,\!\!\left( |g_1| \leq x \right) \mathbf
P\,\,\!\!\left( \sup_{2 \leq i \leq n} |g_i| \leq x \right) ~.
    
\end{aligned}\]</span> More generally, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} |g_i| \leq x
\right) \geq \prod_{1 \leq i \leq n} \mathbf P\,\,\!\!\left( |g_i| \leq
x \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> It follows from inspection that <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{2 \leq i \leq n} |g_i| \leq x
\right) = \lim\limits_{t \to \infty} \mathbf P\,\,\!\!\left( \sup_{2
\leq i \leq n} |g_i| \leq x ~,~ |g_1| &lt; t \right) ~.
    
\end{aligned}\]</span> If we can show that <span
class="math display">\[\begin{aligned}
        \frac{\phi(t)}{\psi(t)} = \frac{\mathbf P\,\,\!\!((g_2, \dots,
g_n) \in A ~,~ |g_1| &lt; t)}{\mathbf P\,\,\!\!(|g_1| &lt; t)}
    
\end{aligned}\]</span> defined for all <span
class="math inline">\(t\)</span> and any symmetric, convex set <span
class="math inline">\(A \subset \mathbb R^{n-1}\)</span>, is monotone
decreasing, then we are done (since it is the consequence of the
separating hyperplane theorem that every nonempty symmetric, closed,
convex set is the intersection of a countable sequence of strips of the
form <span class="math inline">\(\{x : |a \cdot x| \leq 1\}\)</span>, so
this is the limit of a decreasing sequence of symmetric convex
polytopes).</p>
<p>Write <span class="math inline">\(X = (g_2, \dots, g_n)\)</span> and
<span class="math inline">\(f_1\)</span> denote the density of <span
class="math inline">\(g_1\)</span>. Let <span class="math inline">\(\mu
= \operatorname{law}(g_1 \mid |g_1| \leq t)\)</span> be the conditional
law. Then, we know that for any set <span
class="math inline">\(A\)</span> as defined above, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X \in A \mid |g_1| \leq t) &amp;=
\int_{-t}^{t} \mathbf P\,\,\!\!(X \in A \mid g_1 = u) \mathrm{d} \mu(u) =
\int_{-t}^{t} \mathbf P\,\,\!\!(X \in A \mid g_1 = u) \frac{f_1
(u)}{\mathbf P\,\,\!\!(|g_1|\leq t)} \mathrm{d} u ~,
    
\end{aligned}\]</span> where symmetry properties of laws give us that
<span class="math display">\[\begin{aligned}
        \phi(t) &amp;= \mathbf P\,\,\!\!((g_2, \dots, g_n) \in A ~,~
|g_1| &lt; t) = \int_{-t}^{t} \mathbf P\,\,\!\!(X \in A \mid g_1 = u)
f_1 (u) \mathrm{d} u \\
        \end{aligned}\]</span>

<p>so</p>

<span class="math display">\[\begin{aligned}
        \phi&#39;(t) &amp;= 2 \mathbf P\,\,\!\!(X \in A \mid g_1 = t)
f_1 (u) ~.
    
\end{aligned}\]</span> Therefore, by log-concavity, Anderson’s lemma,
and suitable redefinitions of sets, it is straightforward to see that,
with <span class="math inline">\(A = C - \lambda x\)</span> and <span
class="math inline">\(B = C\)</span>, we can directly conclude that
<span class="math inline">\(\lambda \mapsto \mathbf P\,\,\!\!(X +
\lambda x \in C)\)</span> is monotone decreasing on <span
class="math inline">\(\lambda \in [0,1]\)</span>. It then follows that
we have <span class="math display">\[\begin{aligned}
        P (X \in A \mid |g_1| \leq t) \leq P (X \in A \mid g_1 = t)
    
\end{aligned}\]</span> from the fact that there exists a vector <span
class="math inline">\((a_1, \dots, a_{n-1})\)</span> and a centred
normal random vector <span class="math inline">\(Z\)</span> in <span
class="math inline">\(\mathbb R^{n-1}\)</span> (that is independent of
<span class="math inline">\(g_1\)</span>!) such that <span
class="math inline">\(X = a g_1 + Z\)</span>. The rest follows from
direct calculations: appealing to the quotient rule and chain rule
wherever necessary, <span class="math display">\[\begin{aligned}
        \left( \frac{\phi}{\psi} \right)&#39; (t) &amp;= 2 \left( f_1
(t) \mathbf P\,\,\!\!(X \in A \mid g_1 = t) \mathbf P\,\,\!\!(|g_1| \leq
t) - \mathbf P\,\,\!\!(X \in A ~,~ |g_1| \leq t) f_1 (t) \right) \\
        &amp;= 2 \left( f_1 (t) \mathbf P\,\,\!\!(X \in A \mid g_1 = t)
\mathbf P\,\,\!\!(|g_1| \leq t) - \mathbf P\,\,\!\!(X \in A \mid |g_1|
\leq t) \right) \leq 0 ~,
    
\end{aligned}\]</span> which concludes the proof. ◻</p>
</div>
<p>The discussions above give us the ability to derive <em>log-Sobolev
inequality for Gaussian measures</em> on <span
class="math inline">\(\mathbb R^n\)</span>. To do so, we make the
notational change to how we discuss entropy of a nonnegative,
real-valued function (before, <span
class="math inline">\(\operatorname{Ent}(X)\)</span> is a specific way
of writing what follows): for any measurable, real-valued, nonnegative
function on some measurable space, the <em>entropy of <span
class="math inline">\(f\)</span></em> with respect to a probability
measure <span class="math inline">\(\mu\)</span> (defined on this
measurable space) is written as <span
class="math inline">\(\operatorname{Ent}_\mu (f) = \int f \log f \mathrm{d}
\mu - \left( \int f \mathrm{d} \mu \right) \left( \log \int f \mathrm{d} \mu
\right)\)</span>. All the nice properties from before carry over to this
definition.</p>
<div id="lem:variational-ent-mu" class="lemma">
<p><strong>Lemma 27</strong>. <span
class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f) = \sup \left\{ \int f g \mathrm{d} \mu :
\int e^g \mathrm{d} \mu \leq 1 ~~\text{where } g \text{ is measurable}
\right\} ~.
    
\end{aligned}\]</span></p>
</div>
<div id="lem:entropy-mu-tensorises" class="lemma">
<p><strong>Lemma 28</strong>. Let <span class="math inline">\(\mu_1,
\dots, \mu_n\)</span> be probabiltiy measures on some measurable space,
<span class="math inline">\(P = \mu_1 \times \cdots \times
\mu_n\)</span>, and <span class="math inline">\(f\)</span> be a
measurable, real-valued, and nonnegative function of <span
class="math inline">\(n\)</span> variables. With the understanding that
<span class="math inline">\(\operatorname{Ent}_{\mu_i} (f)\)</span>
denotes the entropy of <span class="math inline">\(f\)</span> computed
with respect to the <span class="math inline">\(i\)</span>th variable
(and <span class="math inline">\(\mu_i\)</span>), we have <span
class="math display">\[\begin{aligned}
        \operatorname{Ent}_P (f) \leq \sum_{1 \leq i \leq n} \int
\operatorname{Ent}_{\mu_i} (f) \mathrm{d} P ~.
    
\end{aligned}\]</span></p>
</div>
<div id="lem:variational-ent-mu-inf" class="lemma">
<p><strong>Lemma 29</strong>. <span
class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f) = \inf_{t \geq 0} \left\{ \int f \log
f - (1 + \log t) f + t \mathrm{d} \mu \right\} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Suppose <span class="math inline">\(g\)</span> is a
convex function on a finite interval (or <span
class="math inline">\([0,\infty)\)</span>) that is differentiable on the
interior. Suppose the range of <span class="math inline">\(g\)</span> is
contained in this interval. Then, if the integrals involved exist, we
have <span class="math display">\[\begin{aligned}
        \int g \circ f \mathrm{d} \mu - g \left( \int f \mathrm{d} \mu \right) =
\inf_t \left\{ \int g \circ f - g(t) + (t- f) g&#39;(t)  \mathrm{d} \mu
\right\} ~,
    
\end{aligned}\]</span> because the integral on the right-hand side for
<span class="math inline">\(t = \int f \mathrm{d} \mu\)</span> would reduce to
that on the left-hand side. Furthermore, since <span
class="math inline">\(g\)</span> is convex, we must then have <span
class="math display">\[\begin{aligned}
        g \left( \int f \mathrm{d} \mu \right) \geq g(t) + g&#39;(t) \left(
\int f \mathrm{d} \mu - t \right) ~,
    
\end{aligned}\]</span> thereby showing the claim. Applying entropy to
this expression yields the desired result. ◻</p>
</div>
<div id="thm:log-sobolev-gaussian-Rn" class="theorem">
<p><strong>Theorem 30</strong> (Log-Sobolev inequality for Gaussian
measures on <span class="math inline">\(\mathbb R^n\)</span>). Let <span
class="math inline">\(\mu\)</span> be the Gaussian measure on <span
class="math inline">\(\mathbb R^n\)</span>. Let <span
class="math inline">\(f : \mathbb R^n \to \mathbb R\)</span> be a <span
class="math inline">\(\mathscr C^2\)</span> function such that <span
class="math inline">\(f^2\)</span> and <span
class="math inline">\(|\nabla f|^2\)</span> are <span
class="math inline">\(\mu\)</span>-integrable, where <span
class="math inline">\(\nabla f = (\frac{\partial f}{\partial x_1},
\dots, \frac{\partial f}{\partial x_n})\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f^2) \leq 2 \int |\nabla f|^2 \mathrm{d} \mu
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The tensorization of entropy implies it is sufficient
to prove this statement for <span class="math inline">\(n=1\)</span>,
i.e. on the real-line. Since <span class="math inline">\(f\)</span> is
twice continuous differentiable, we can assume <span
class="math inline">\(f^2 = e^g\)</span>, where <span
class="math inline">\(g\)</span> is twice continuously differentiable
with compact support, by standard arguments in approximation. Therefore,
if we set <span class="math inline">\(V(x) = \frac{x^2 + \ln
2\pi}{2}\)</span>, then the standard normal density becomes <span
class="math inline">\(e^{-V(x)}\)</span>. So, for <span
class="math inline">\(\lambda \in (0,1)\)</span>, set <span
class="math display">\[\begin{aligned}
        g_\lambda (z) = \sup_{u, v \in \mathbb R : \lambda u +
(1-\lambda) v = z} \left\{ g(u) - \left( \lambda V(u) + (1-\lambda) V(v)
- V(\lambda u + (1-\lambda)v) \right) \right\} ~.
    
\end{aligned}\]</span> Exponentiating, set <span
class="math inline">\(\phi(z) = e^{g_\lambda (z) - V(z)}\)</span>, so
<span class="math display">\[\begin{aligned}
        \phi(\lambda u + (1-\lambda)v) \geq e^{-(1-\lambda)V(v)}
e^{\lambda(\frac{g(u)}{\lambda} - V(u))} ~.
    
\end{aligned}\]</span> Therefore, <span
class="math inline">\(\phi\)</span>, <span
class="math inline">\(e^{\frac{g}{\lambda} - V}\)</span>, and <span
class="math inline">\(e^{-V}\)</span> satisfy the assumption of
Précopa-Leindler, meaning we can apply the theorem to allow us to
conclude <span class="math display">\begin{equation}\label{eq:inequality-g-lambda-1}\begin{aligned}

        \int e^{g_\lambda} \mathrm{d} \mu \geq \left( \int
e^{\frac{g}{\lambda}} \mathrm{d} \mu \right)^{\lambda} ~.
    
\end{aligned}\end{equation}</span> Setting <span class="math inline">\(H(\lambda) =
\left( \int e^{\frac{g}{\lambda}} \mathrm{d} \mu \right)^{\lambda}\)</span>,
by differentiation (logarithmically) we have <span
class="math display">\[\begin{aligned}
        H&#39;(1) = -\operatorname{Ent}_\mu (e^g) ~.
    
\end{aligned}\]</span> Taylor expanding about <span
class="math inline">\(\lambda = 1\)</span> gives <span class="math display">\begin{equation}\label{eq:inequality-g-lambda-2}\begin{aligned}

        \left( \int e^{\frac{g}{\lambda}} \mathrm{d} \mu \right)^{\lambda} =
\int e^g \mathrm{d} \mu + (1-\lambda) \operatorname{Ent}_\mu (e^g) +
O((1-\lambda)^2) ~,
    
\end{aligned}\end{equation}</span> which is valid as <span
class="math inline">\(\lambda \to 1\)</span>. It remains to bound <span
class="math inline">\(\int e^{g_\lambda} \mathrm{d} \mu\)</span>. To do so,
note that if we use the definition of <span
class="math inline">\(V\)</span> and make changes of variables <span
class="math inline">\(h = z-v\)</span> and <span
class="math inline">\(\eta = \frac{1-\lambda}{\lambda}\)</span>, we have
<span class="math display">\[\begin{aligned}
        g_\lambda (z) = \sup_{u,v \in R : \lambda u + (1-\lambda)v = z}
\left\{ g(u) - \frac{\lambda(1-\lambda)}{2} (u-v)^2 \right\} = \sup_{h
\in \mathbb R} \left\{ g(z+\eta h) - \frac{\eta h^2}{2} \right\} ~,
    
\end{aligned}\]</span> and, because <span
class="math inline">\(g&#39;&#39;\)</span> is compactly supported and
continuous, we have, for some constant <span
class="math inline">\(d\)</span> independent of <span
class="math inline">\(z\)</span>, <span
class="math display">\[\begin{aligned}
        g(z + \eta h) \leq g(z) + g&#39;(z) \eta h + d \eta^2 h^2 ~.
    
\end{aligned}\]</span> Therefore, uniformly over <span
class="math inline">\(z \in \mathbb R\)</span>, we have <span
class="math display">\[\begin{aligned}
        g_\lambda (z) \leq g(z) + \frac{\eta}{2} (g&#39;(z))^2 +
O(\eta^2)
    
\end{aligned}\]</span> (note that this is valid for small enough <span
class="math inline">\(\eta\)</span> because <span
class="math inline">\(g&#39;\)</span> is bounded—so <span
class="math inline">\(\frac12 - d \eta &gt; 0\)</span> and, for <span
class="math inline">\(a \in \mathbb R\)</span> and <span
class="math inline">\(b &gt; 0\)</span>, <span class="math inline">\(ah-
bh^2\)</span> attains maximum at <span
class="math inline">\(h=\frac{a}{2b}\)</span>). Therefore, applying
Taylor’s theorem again, we have, uniformly in <span
class="math inline">\(z\)</span>, <span
class="math display">\[\begin{aligned}
        e^{g_\lambda (z)} \leq e^{g(z)} + \frac{\eta}{2} (g&#39;(z))^2
e^{g(z)} + O(\eta^2) ~.
    
\end{aligned}\]</span> Appealing to \eqref{eq:inequality-g-lambda-1}
and \eqref{eq:inequality-g-lambda-2},
integrating with respect to <span class="math inline">\(\mu\)</span>,
sending <span class="math inline">\(\lambda \to 1\)</span>, and noticing
that <span class="math inline">\(2f&#39; f = g&#39;e^g\)</span> implies
<span class="math inline">\(4 (f&#39;)^2 = (g&#39;)^2 e^g\)</span> (by
integration by parts) gives the desired result. ◻</p>
</div>
<h2 id="symmetrization">Symmetrization</h2>
<p>Informally, we know the central limit theorem tells us that for a
collection of i.i.d. random variables <span
class="math inline">\(\{X_k\}_{1 \leq k \leq n}\)</span>, the sum <span
class="math inline">\(\sum_{1 \leq k \leq n} (f(X_k) - \mathbf
P\,\,\!\!f)\)</span> for some bounded function <span
class="math inline">\(f\)</span>, once rescaled by <span
class="math inline">\(\frac{1}{\sqrt{n}}\)</span>, yields a nontrivial
limiting behaviour. So, sums of this sort is of order <span
class="math inline">\(\sqrt{n}\)</span> in probability, even though we
might suspect that this is of order <span
class="math inline">\(n\)</span> (since we are adding <span
class="math inline">\(n\)</span> terms of order <span
class="math inline">\(1\)</span>). Though, we can somewhat imagine why
this is the case: the summand contains independent observations, so
their signs are probably not all identical. Heuristically, we can think
that these random signs are the factor that leads to the nontrivial
limiting behaviour. If we introduce random sign fluctuations, there
might be a chance we can obtain a nontrivial limiting behaviour; this is
the broad heuristic behind symmetrization.</p>
<p>Formally, let <span class="math inline">\(X_1, \dots, X_n\)</span>
denote i.i.d. random variables defined on <span
class="math inline">\(\mathscr X\)</span>. Suppose <span
class="math inline">\(X_i\)</span> has distribution <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>. Let <span
class="math inline">\(\mathcal F\)</span> denote a function class on
<span class="math inline">\(\mathscr X\)</span>.</p>
<div id="prop:symmetrization-bound" class="proposition">
<p><strong>Proposition 31</strong>. Suppose <span
class="math inline">\(Y_1, \dots, Y_n\)</span> is an independent copy of
<span class="math inline">\(X_1, \dots, X_n\)</span>. Let <span
class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span>
denote i.i.d. Rademacher random variables, independent of <span
class="math inline">\(X_1, \dots, X_n\)</span> and <span
class="math inline">\(Y_1, \dots, Y_n\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \left| \sum_{1 \leq k \leq n}
f(X_k) - \mathbf P\,\,\!\!f \right| \leq \mathbb E \sup_{f \in \mathcal
F} \left| \sum_{1 \leq k \leq n} \varepsilon_k (f(X_k) - \mathbf
P\,\,\!\!f) \right| ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Note that <span class="math inline">\(\mathbf
P\,\,\!\!f = \mathbb E [ f(Y_k) \mid X_1, \dots, X_n ]\)</span>.
Therefore, applying Jensen’s inequality for conditional expectation
gives <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \left| \sum_{1 \leq k \leq n}
f(X_k) - \mathbf P\,\,\!\!f \right| \leq \mathbb E \sup_{f \in \mathcal
F} \left| \sum_{1 \leq k \leq n} f(X_k) - f(Y_k) \right| ~.
    
\end{aligned}\]</span> But <span class="math inline">\(f(X_k) -
f(Y_k)\)</span> is a symmetric random variable! Therefore, it has the
same law as <span class="math inline">\(\varepsilon_k(f(X_k) -
f(Y_k))\)</span>. This means we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \left| \sum_{1 \leq k \leq n}
f(X_k) - \mathbf P\,\,\!\!f \right| \leq \mathbb E \sup_{f \in \mathcal
F} \left| \sum_{1 \leq k \leq n} f(X_k) - f(Y_k) \right| = \mathbb E
\sup_{f \in \mathcal F} \left| \sum_{1 \leq k \leq n}
\varepsilon_k(f(X_k) - f(Y_k)) \right| ~,
    
\end{aligned}\]</span> as desired. Note that we can write <span
class="math inline">\(f(X_k) - f(Y_k) = (f(X_k) - \mathbf P\,\,\!\!f) -
(\mathbf P\,\,\!\!f - f(Y_k))\)</span> and apply triangle inequality to
obtain an upper bound on <span class="math inline">\(\mathbb E \sup_{f
\in \mathcal F} \left| \sum_{1 \leq k \leq n} \varepsilon_k (f(X_k) -
\mathbf P\,\,\!\!f) \right|\)</span>. ◻</p>
</div>
<p>Symmetrization arguments also work for bounding tail
probabilities.</p>
<div id="prop:panchenk" class="proposition">
<p><strong>Proposition 32</strong>. Let <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> be random variables such that <span
class="math inline">\(\mathbb E f(X) \leq \mathbb E f(Y)\)</span> holds
for every convex, increasing function <span
class="math inline">\(f\)</span>. Suppose <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(Y \geq t) \leq c_1 e^{- c_2 t^n} ~~\text{for
all } t \geq 0
    
\end{aligned}\]</span> and for some <span class="math inline">\(c_2 &gt;
0\)</span> and <span class="math inline">\(c_1, n \geq 1\)</span>, then
<span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X \geq t) \leq c_1 e^{1 - c_2 t^n} ~~\text{for
all } t \geq 0 ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> We can consider only the case where <span
class="math inline">\(n=1\)</span>, since <span class="math inline">\(x
\mapsto f(x^n)\)</span> is increasing and convex for any <span
class="math inline">\(n \geq 1\)</span>. Consider <span
class="math inline">\(f(x) = \max \{ x-t, 0 \}\)</span>, which is
clearly convex and increasing. We then have <span
class="math display">\[\begin{aligned}
        \int_t^\infty \mathbf P\,\,\!\!(X \geq s) \mathrm{d} s \leq
\int_t^\infty \mathbf P\,\,\!\!(Y \geq s) \mathrm{d} s \leq \frac{c_1}{c_2}
e^{-c_2 t}
    
\end{aligned}\]</span> for all <span class="math inline">\(t \geq
0\)</span>. This means <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X \geq t) \leq \frac1n \int_{t-n}^t \mathbf
P\,\,\!\!(X \geq s) \mathrm{d} s \leq \frac{e^{c_2 n} c_1}{n c_2} e^{-c_2 t}
    
\end{aligned}\]</span> for all <span class="math inline">\(t \geq
a\)</span>. Note that if <span class="math inline">\(t \leq
\frac{1}{c_2}\)</span>, the result is trivially true, since <span
class="math inline">\(c_1 e^{1-c_2 t} &gt; 1\)</span>! For the other
case, we optimize over <span class="math inline">\(n\)</span>, and
obtain <span class="math inline">\(n = \frac{1}{c_2}\)</span>. This then
gives the result for <span class="math inline">\(t &gt;
\frac{1}{c_2}\)</span>. ◻</p>
</div>

{% endraw %}
