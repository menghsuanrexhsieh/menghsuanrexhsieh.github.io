---
layout: post
title: "Nonparametric Least-Squares"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  The purpose of this section is to carefully examine the problem of nonparametric least squares, which will force us to use all the machinery we have developed in the preceding sections. A regression problem is defined as follows.
---
{% raw %}
<span id="sec:nonpar-ls"></span>

<p>The purpose of this section is to carefully examine the problem of
nonparametric least squares, which will force us to use all the
machinery we have developed in the preceding sections. A regression
problem is defined as follows. Let <span class="math inline">\(Y \subset
\mathbb R\)</span>, and <span class="math inline">\(X \subset \mathbb
R^d\)</span> for some <span class="math inline">\(d \geq 1\)</span>. The
goal is to estimate a function <span class="math inline">\(f : X \to
Y\)</span> such that <span class="math inline">\(y-f(x)\)</span> is
minimized over some collection of <span
class="math inline">\(\{(x_i,y_i)\}_{1 \leq i \leq n}\)</span> observed.
This yields the <em>empirical mean-squared errors</em>, i.e. <span
class="math display">\[\begin{aligned}
    \widehat L_f \triangleq \frac1n \sum_{1 \leq k \leq n} (y_k -
f(x_k))^2 ~.
\end{aligned}\]</span> We want to minimize these errors over some
suitably chosen function class.</p>
<p>To start, we think about <span class="math inline">\(\{x_i\}\)</span>
as being <em>fixed</em>. Then, we can write <span
class="math inline">\(y_i = f^*(x_i) + v_i\)</span>, where <span
class="math inline">\(v_i\)</span> are random variables with mean zero.
There is no other structure given to this problem; in general, the
problem is defined by the conditional distribution of <span
class="math inline">\(Y|X=x\)</span>. The standard constrained least
squares approach yields an optimizer that solves <span
class="math display">\[\begin{aligned}
    \widehat f \in \underset{f \in \mathcal F}{\arg\min} \frac1n \sum_{1
\leq k \leq n} (y_k - f(x_k))^2 ~,
\end{aligned}\]</span> where <span class="math inline">\(v_i \sim
\mathcal N(0, \sigma^2)\)</span>.</p>
<div class="example">
<p><strong>Example 1</strong> (Linear regression). Let <span
class="math inline">\(f_\eta = \langle \eta, x \rangle\)</span> for
<span class="math inline">\(\eta \in \mathbb R^d\)</span>. Given a
compact subset <span class="math inline">\(C \subset \mathbb
R^d\)</span>. Define the function class <span
class="math inline">\(\mathcal F_C \triangleq \{f_\eta : \eta \in
C\}\)</span>. Therefore, the constrained least squares problem is
equivalent to solving <span class="math display">\[\begin{aligned}
        \widehat \eta \in \underset{\theta \in C}{\arg\min} \frac1n
\lVert y - X\theta \rVert_2^2 ~,
    
\end{aligned}\]</span> where <span class="math inline">\(X\)</span> is
the <span class="math inline">\(n \times d\)</span> matrix of stacked
observations.</p>
</div>
<div class="example">
<p><strong>Example 2</strong> (Kernel ridge regression). Suppose <span
class="math inline">\(\mathcal H\)</span> is a reproducing kernel
Hilbert space. Endow <span class="math inline">\(\mathcal H\)</span>
with a norm, denoted <span class="math inline">\(\lVert \cdot
\rVert_{\mathcal H}\)</span>. Given some regularizer <span
class="math inline">\(\varepsilon_n &gt; 0\)</span>, the estimator given
by <span class="math display">\[\begin{aligned}
        \widehat f \in \underset{f \in \mathcal F}{\arg\min}
\left\{\frac1n \sum_{1 \leq k \leq n} (y_k - f(x_k))^2 + \varepsilon_n
\lVert f \rVert_{\mathcal H}^2 \right\}
    
\end{aligned}\]</span> is called the kernel ridge estimator.</p>
</div>
<div class="example">
<p><strong>Example 3</strong> (Cubic splines). Suppose <span
class="math inline">\(f \in \mathcal C^2 ([0,1])\)</span>, and define
<span class="math display">\[\begin{aligned}
        \mathcal F(R) \triangleq \left\{ f : [0,1] \to \mathbb R :
\int_0^1 (f&#39;&#39;(x))^2 \mathrm{d} x \leq R \right\}
    
\end{aligned}\]</span> for some chosen <span class="math inline">\(R
&gt; 0\)</span>. Given some regularizer <span
class="math inline">\(\varepsilon_n &gt; 0\)</span>, the estimator given
by <span class="math display">\[\begin{aligned}
        \widehat f \in \underset{f \in \mathcal F}{\arg\min}
\left\{\frac1n \sum_{1 \leq k \leq n} (y_k - f(x_k))^2 + \varepsilon_n
\int_0^1 (f&#39;&#39;(x))^2 \mathrm{d} x \right\}
    
\end{aligned}\]</span> is called the cubic spline estimator. <span
class="math inline">\(\widehat f\)</span> is piecewise cubic, and the
third derivative changes at each of the points <span
class="math inline">\(x_i\)</span>. As <span class="math inline">\(R \to
0\)</span>, <span class="math inline">\(\widehat f\)</span> becomes a
linear function.</p>
</div>
<div class="example">
<p><strong>Example 4</strong> (Shape-constrained regression). Let <span
class="math inline">\(f^* : D \to \mathbb R\)</span> be a convex
function over <span class="math inline">\(D\)</span>, where <span
class="math inline">\(D \subset \mathbb R^d\)</span> is an open and
convex subset. Consider the problem <span
class="math display">\[\begin{aligned}
        \widehat f \in \underset{f : D \to \mathbb R : f \text{ is
convex}}{\arg\min} \frac1n \sum_{1 \leq k \leq n} (y_k - f(x_k))^2 ~.
    
\end{aligned}\]</span> This problem, fortunately, admits a dual
representation. Any convex function <span
class="math inline">\(f\)</span> is subdifferentiable in the interior of
<span class="math inline">\(D\)</span>, i.e. for any <span
class="math inline">\(x \in D
\mathop{\mathrm{\!\strut^\mathrm{o}}}\)</span>, it follows that there
exists (at least one) <span class="math inline">\(z \in \mathbb
R^d\)</span> such that <span class="math inline">\(f(y) \geq f(x) +
\langle z, y-x \rangle\)</span> for all <span class="math inline">\(y
\in D\)</span>. As such, at each of the sample points <span
class="math inline">\(x_i\)</span>, there exists a subgradient vector
<span class="math inline">\(\widetilde z_i\)</span>. Since the cost
function only depends on <span class="math inline">\(\widetilde y_i =
f(x_i)\)</span>, it follows that the optimum does <em>not</em> depend on
the function <span class="math inline">\(f\)</span>’s behaviour anywhere
else. Therefore, we can examine just the collection of function values
and subgradients, and solve the optimization problem <span
class="math display">\[\begin{aligned}
        \underset{\{(\widetilde y_i, \widetilde z_i)_{1 \leq i \leq
n}\}}{\min} \quad &amp; \frac1n \sum_{1 \leq k \leq n} (y_k - \widetilde
y_k)^2 \\
        \text{such that} \quad \widetilde y_j &amp;\geq \widetilde y_i +
\langle \widetilde z_i, x_j - x_i \rangle \:\: \text{for } 1 \leq i, j
\leq n  ~.
    
\end{aligned}\]</span> This problem has <span
class="math inline">\(n(d+1)\)</span> variables, a quadratic cost
function, and <span class="math inline">\(2\binom{n}{2}\)</span> linear
constraints. The optimal solution can be used to obtain <span
class="math display">\[\begin{aligned}
        \widehat f (x) \triangleq \max_{1 \leq k \leq n} \widehat y_k +
\langle \widehat z_k, x - x_k \rangle ~.
    
\end{aligned}\]</span> Clearly, <span class="math inline">\(\widehat
f(x)\)</span> is convex, as the maximum over a collection of linear
functions.</p>
</div>
<p>Having seen all the examples, the goal is to analyze the prediction
errors measured in the <span class="math inline">\(L^2(\widehat
P_n)\)</span> norm, i.e. <span class="math inline">\(\lVert f^* -
\widehat f \rVert_{\widehat P_n, 2}\)</span>. The problem of analyzing
prediction errors “scales” in the complexity of the function class we
consider, so we can imagine the role that metric entropy and function
class complexity can play in the ensuing exposition. The easiest way to
isolate the difficulty of discussing function class complexity is to
start every analysis <em>locally</em>.</p>
<p>Instead of looking at localized Rademacher complexity, let us look at
<em>localized Gaussian complexity</em>. We need to first look at the
collection of functions in <span class="math inline">\(\mathcal
F\)</span> that live around the true regression function <span
class="math inline">\(f^*\)</span>, i.e. we define <span
class="math display">\[\begin{aligned}
    \mathcal F^* \triangleq \{ f - f^* : f \in \mathcal F \} ~.
\end{aligned}\]</span> Then, the <em>localized Gaussian complexity</em>
is defined as <span class="math display">\[\begin{aligned}
    \overline{\mathcal G}_n (\mathcal F^*, \delta) \triangleq \mathbb
E_X \mathbb E_g \left[ \underset{f \in \mathcal F^* : \lVert f
\rVert_{\mathbf P\,\,\!\!, 2} \leq \delta}{\sup} \left| \sum_{1 \leq k
\leq n} g_k f(x_k) \right| \right] ~,
\end{aligned}\]</span> where <span class="math inline">\(g_k \sim
\mathcal N(0,1)\)</span> for all <span class="math inline">\(k\)</span>.
Here, <span class="math inline">\(X = (x_1, \dots, x_n)\)</span> is to
be understood as the vector of data <span class="math inline">\(x_1,
\dots, x_n\)</span>, so <span class="math inline">\(X\)</span> is random
in the definition above. There is an analogous <em>data-dependent</em>
quantity, called the <em>localized empirical Gaussian complexity</em>
<span class="math display">\[\begin{aligned}
    \breve{\mathcal G}_n (\mathcal F^*, \delta) \triangleq \mathbb E_g
\left[ \underset{f \in \mathcal F^* : \lVert f \rVert_{\mathbf
P\,\,\!\!, 2} \leq \delta}{\sup} \left| \sum_{1 \leq k \leq n} g_k
f(x_k) \right| \right] ~.
\end{aligned}\]</span> Because we only think about <span
class="math inline">\(\{x_i\}\)</span> as given and fixed data, we will
use the latter notion of localized Gaussian complexity. In what follows,
it is important to study (like before) the <em>critical inequality</em>
<span class="math display">\begin{equation}\label{eq:critical-radius-gaussian}\begin{aligned}

    \frac{\mathcal G_n (\mathcal F^*, \delta)}{\delta} \leq
\frac{\delta}{2\sigma}
\end{aligned}\end{equation}</span> for some prespecified constant <span
class="math inline">\(\sigma\)</span>. Why is this useful? <u>What
follows here is not rigorous, but rather just a formal calculation that
contains the correct heuristics.</u> For simplicity, let’s continue with
<span class="math inline">\(v_i \sim \mathcal N(0, \sigma^2)\)</span>,
so <span class="math inline">\(v_i = \sigma g\)</span> for <span
class="math inline">\(g \in \mathcal N(0,1)\)</span>. Taking one of the
<span class="math inline">\(\widehat f\)</span>, and the a feasible
function <span class="math inline">\(f^*\)</span>, we are guaranteed
<span class="math display">\[\begin{aligned}
    \frac{1}{2n} \sum_{1 \leq k \leq n} (y_k - \widehat f(x_k))^2 \leq
\frac{1}{2n} \sum_{1 \leq k \leq n} (y_k - f^*(x_k))^2 ~.
\end{aligned}\]</span> Because <span class="math inline">\(y_i =
f^*(x_i) + \sigma g_i\)</span>, it follows that <span
class="math display">\[\begin{aligned}
    \frac12 \lVert \widehat f - f^* \rVert_{\widehat P_n, 2}^2 \leq
\frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k (\widehat f(x_k) - f^*(x_k))
~.
\end{aligned}\]</span> Since <span class="math inline">\(f - f^* \in
\mathcal F^*\)</span> by construction, it follows that we can take the
supremum of both sides with respect to all functions in <span
class="math inline">\(h \in \mathcal F^*\)</span> such that <span
class="math inline">\(\lVert h \rVert_{\widehat P_n, 2} \leq \lVert
\widehat f - f^* \rVert_{\widehat P_n, 2}\)</span>. Therefore, we should
observe, roughly, that <span class="math display">\[\begin{aligned}
    \frac{\delta^2}{2} \leq \sigma \breve{\mathcal G}_n (\mathcal F^*,
\delta) ~,
\end{aligned}\]</span> where <span class="math inline">\(\delta^2 =
\mathbb E \widehat f - f^* \rVert_{\widehat P_n, 2}^2\)</span>.
Therefore, \eqref{eq:critical-radius-gaussian}
gives us a valid guess for the range of <span
class="math inline">\(\delta\)</span> satisfying the bound on predition
error as above. If we write <span
class="math inline">\(\delta_n^*\)</span> as the smallest possible <span
class="math inline">\(\delta\)</span> solving \eqref{eq:critical-radius-gaussian},
it then follows that we have the bound <span
class="math inline">\(\mathbb E \widehat f - f^* \rVert_{\widehat P_n,
2}^2 \leq (\delta_n^*)^2\)</span>. <u>This is not a rigourous
derivation:</u> among other things, taking the supremum on both sides to
obtain the preceding inequality cannot be justified, since the
randomness enclosed in <span class="math inline">\(\widehat f\)</span>
and <span class="math inline">\(f^*\)</span> are different, so we cannot
just take a supremum without conditioning on <span
class="math inline">\(g\)</span>.</p>
<p>The idea above can be formalized as follows.</p>
<div id="thm:nonpar-ls-tail-bound" class="theorem">
<p><strong>Theorem 5</strong>. Suppose <span
class="math inline">\(\mathcal F^*\)</span> is star-shaped, and let
<span class="math inline">\(\delta_n\)</span> be any positive solution
to \eqref{eq:critical-radius-gaussian}.
Then, for any <span class="math inline">\(t \geq \delta_n\)</span>, the
nonparmaetric least-squares estimator <span
class="math inline">\(\widehat f_n\)</span> satisfies the tail bound
<span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(\lVert \widehat f_n - f^* \rVert_{\widehat
P_n, 2}^2 \geq 16 t \delta_n) \leq e^{-\frac{n t \delta_n}{2\sigma_n^2}}
~.
    
\end{aligned}\]</span></p>
</div>
<div class="remark">
<p><strong>Remark 6</strong>. Standard arguments guarantee that the
star-shaped property implies the existence of a solution to \eqref{eq:critical-radius-gaussian}.
This argument follows from the same as that in Remark <a
href="{% post_url 2026-06-16-more-on-the-uniform-law-of-large-numbers %}#rem:direct-argument" data-reference-type="ref"
data-reference="rem:direct-argument">[rem:direct-argument]</a>.</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:nonpar-ls-tail-bound"
data-reference-type="ref"
data-reference="thm:nonpar-ls-tail-bound">5</a>.</em> This takes a
number of intermediate steps.</p>
<ol>
<li><p>Recall the inequality <span
class="math display">\[\begin{aligned}
    \frac{1}{2n} \sum_{1 \leq k \leq n} (y_k - \widehat f(x_k))^2 \leq
\frac{1}{2n} \sum_{1 \leq k \leq n} (y_k - f^*(x_k))^2 ~.
\end{aligned}\]</span> For simplicity, define <span
class="math inline">\(\widehat \Delta \triangleq \widehat f -
f^*\)</span>, so that the inequality above is equivalently written as
<span class="math display">\[\begin{aligned}
    \frac12 \lVert \widehat \Delta \rVert_{\widehat P_n, 2}^2 \leq
\frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k \widehat \Delta (x_k) ~.
\end{aligned}\]</span> So, it remains to study how to bound the
right-hand side.</p></li>
<li><p>To bound the right-hand side, we note a more general result.
Suppose <span class="math inline">\(\mathscr F\)</span> is any
star-shaped function class, and let <span
class="math inline">\(\delta_n\)</span> be a positive solution to \eqref{eq:critical-radius-gaussian}.
For any given <span class="math inline">\(s \geq \delta_n\)</span>,
define <span class="math display">\[\begin{aligned}
    E(s) \triangleq \left\{ \exists h \in \mathscr F \cap \{ \lVert h
\rVert_{\widehat P_n, 2} \geq s \} : \left| \frac{\sigma}{n} \sum_{1
\leq k \leq n} g_k h(x_k) \right| \geq 2 \lVert h \rVert_{\widehat P_n,
2} s \right\} ~.
\end{aligned}\]</span> For any such <span
class="math inline">\(s\)</span>, we <u>claim</u> that <span
class="math inline">\(\mathbf P\,\,\!\!(E(s)) \leq
e^{-\frac{ns^2}{2\sigma^2}}\)</span>. To see this, suppose there exists
some function <span class="math inline">\(h\)</span> such that <span
class="math display">\[\begin{aligned}
    \left| \frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k h(x_k) \right|
\geq 2 \lVert h \rVert_{\widehat P_n, 2} s ~.
\end{aligned}\]</span> Then, truncating, rescaling, and defining <span
class="math inline">\(\widetilde h = \frac{s}{\lVert h \rVert_{\widehat
P_n, 2}} h\)</span>, we have <span class="math inline">\(\lVert
\widetilde h \rVert_{\widehat P_n, 2} = s\)</span>. The star-shaped
property of <span class="math inline">\(\mathscr F\)</span> guarantees
that <span class="math inline">\(\widetilde h \in \mathscr F\)</span>.
So, we’ve just shown that if such function <span
class="math inline">\(h\)</span> exists, then there also exists a
function <span class="math inline">\(\widetilde h\)</span> such that
<span class="math display">\[\begin{aligned}
    \left| \frac{1}{n} \sum_{1 \leq k \leq n} g_k \widetilde h(x_k)
\right| = \frac{u}{\lVert h \rVert_{\widehat P_n, 2}} \left|
\frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k h(x_k) \right| \geq 2 s^2 ~,
\end{aligned}\]</span> so monotonicity implies <span
class="math inline">\(\mathbf P\,\,\!\!(E(s)) \leq \mathbf
P\,\,\!\!(\mathcal A_n(s) \geq 2s^2)\)</span>, where <span
class="math inline">\(\mathcal A_n(s) \triangleq \sup_{\widetilde h \in
\mathscr F : \lVert \widetilde h \rVert_{\widehat P_n, 2}} \left|
\frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k \widetilde h(x_k)
\right|\)</span>. Note that for fixed <span
class="math inline">\(\widetilde h\)</span>, <span
class="math inline">\(\frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k
\widetilde h(x_k)\)</span> is a mean zero random variable and is
Gaussian. This means we can apply everything we know from the study of
Gaussian processes. Specifically, the associated Lipschitz constant with
this process is bounded above by <span class="math inline">\(\sigma
s/\sqrt{n}\)</span>. Therefore, we have the tail bound <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(\mathcal A_n(s) \geq \mathbb E \mathcal A_n(s) +
s^2) \leq e^{-\frac{ns^2}{2\sigma^2}} ~.
\end{aligned}\]</span> It follows from the nonincreasing property of
<span class="math inline">\(t \mapsto \frac{\breve{\mathcal G}_n
(t)}{t}\)</span>, the inequality \eqref{eq:critical-radius-gaussian},
and that <span class="math inline">\(\mathbb E \mathcal A_n (s) = \sigma
\breve{\mathcal G}_n (s)\)</span> by definition, that <span
class="math display">\[\begin{aligned}
    \sigma \frac{\breve{\mathcal G}_n (s)}{s} \leq \sigma
\frac{\breve{\mathcal G}_n (\delta_n)}{\delta_n} \leq \frac{\delta_n}{2}
\leq \delta_n ~.
\end{aligned}\]</span> Therefore, <span class="math inline">\(\mathbb E
\mathcal A_n (s) \leq s \delta_n\)</span>. Since <span
class="math inline">\(s \geq \delta_n\)</span> is nonnegative, it
follows that <span class="math inline">\(s^2 \geq s \delta_n\)</span>,
and we have <span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(\mathcal A_n(s) \geq 2s^2) \leq \mathbf
P\,\,\!\!(\mathcal A_n(s) \geq s \delta_n + s^2) \leq
e^{-\frac{ns^2}{2\sigma^2}} ~.
\end{aligned}\]</span> This implies the desired claim as above.</p></li>
<li><p>Now, with the function class <span class="math inline">\(\mathcal
F^*\)</span> and <span class="math inline">\(s = \sqrt{t
\delta_n}\)</span> for some <span class="math inline">\(t \geq
\delta_n\)</span>, we have <span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(E^c( \sqrt{t \delta_n} )) \geq 1 -
e^{-\frac{nt\delta_n}{2\sigma^2}} ~.
\end{aligned}\]</span> Note that if <span class="math inline">\(\lVert
\widehat \Delta \rVert_{\widehat P_n, 2}^2 &lt; \sqrt{t
\delta_n}\)</span>, then the theorem follows directly. If not, we have
<span class="math inline">\(\lVert \widehat \Delta \rVert_{\widehat P_n,
2}^2  \geq \sqrt{t \delta_n}\)</span> and <span
class="math inline">\(\widehat \Delta \in \mathcal F^*\)</span>, so that
we have <span class="math display">\[\begin{aligned}
    \frac{\sigma}{n} \sum_{1 \leq k \leq n} g_k \widehat \Delta (x_k)
\leq 2 \lVert \widehat \Delta \rVert_{\widehat P_n, 2} \sqrt{t \delta_n}
\end{aligned}\]</span> after conditioning on <span
class="math inline">\(E^c(\sqrt{t\delta_n})\)</span>. And <span
class="math inline">\(E^c(\sqrt{t\delta_n})\)</span> happens with
probability at least <span
class="math inline">\(1-e^{-\frac{nt\delta_n}{2\sigma^2}}\)</span> by
the previous step. Therefore, we just need to bound <span
class="math inline">\(\lVert \widehat \Delta \rVert_{\widehat P_n,
2}\)</span>. This is very straightforward, since <span
class="math inline">\(\lVert \widehat \Delta \rVert_{\widehat P_n, 2}^2
\leq 4 \lVert \widehat \Delta \rVert_{\widehat P_n, 2}
\sqrt{t\delta_n}\)</span> by step 1. Squaring both sides and noting that
<span class="math inline">\(\lVert \widehat \Delta \rVert_{\widehat P_n,
2} \neq 0\)</span> completes the analysis.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<p>The following result gives us an explicit description of the natural
connection between localized empirical Gaussian complexity and Gaussian
process.</p>
<div id="prop:nonpar-ls-tail-bound" class="proposition">
<p><strong>Proposition 7</strong>. For any <span
class="math inline">\(\delta \in (0,\sigma]\)</span> such that <span
class="math display">\[\begin{aligned}
        \frac{16}{\sqrt n} \int_{\delta^2/4\sigma}^\delta \sqrt{\log
N(\varepsilon, B_\delta (\mathcal F^*), \lVert \cdot \rVert_{\widehat
P_n, 2})} \mathrm{d} \varepsilon \leq \frac{\delta^2}{4\sigma} ~,
    
\end{aligned}\]</span> this choice of <span
class="math inline">\(\delta\)</span> solves \eqref{eq:critical-radius-gaussian}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The idea is relatively straightforward. For any <span
class="math inline">\(\delta \in (0,\sigma]\)</span>, it follows that
<span class="math inline">\(\frac{\delta^2}{4\sigma} &lt;
\delta\)</span>, so there exists a minimal <span
class="math inline">\(\frac{\delta^2}{4\sigma}\)</span>-covering of
<span class="math inline">\(B_\delta(\mathcal F^*, \lVert \cdot
\rVert_{\widehat P_n, 2})\)</span> in the <span
class="math inline">\(L^2(\widehat P_n)\)</span> norm. Let <span
class="math inline">\(\{f_1, \dots, f_M\}\)</span> denote such cover.
For any <span class="math inline">\(f \in B_\delta(\mathcal F^*, \lVert
\cdot \rVert_{\widehat P_n, 2})\)</span>, it therefore follows that
there is an index <span class="math inline">\(j \in \{1, \dots,
M\}\)</span> such that <span class="math inline">\(\lVert f - f^j
\rVert_{\widehat P_n, 2} \leq \frac{\delta^2}{4\sigma}\)</span>. By the
triangle and Cauchy-Schwarz inequalities, we have <span
class="math display">\[\begin{aligned}
        \left| \frac1n \sum_{1 \leq k \leq n} g_k f(x_k) \right| &amp;
\leq \left| \frac1n \sum_{1 \leq k \leq n} g_k f_j (x_k) \right| +
\left| \frac1n \sum_{1 \leq k \leq n} g_k (f(x_k) - f_j (x_k)) \right|
\\
        &amp; \leq \max_{1 \leq j \leq M} \left| \frac1n \sum_{1 \leq k
\leq n} g_k f_j (x_k) \right| + \sqrt{\frac{\sum_{1 \leq k \leq n}
g_k^2}{n}} \sqrt{\frac{\sum_{1 \leq k \leq n} (f(x_k) - f_j
(x_k))^2}{n}} \\
        &amp; \leq \max_{1 \leq j \leq M} \left| \frac1n \sum_{1 \leq k
\leq n} g_k f_j (x_k) \right| + \sqrt{\frac{\sum_{1 \leq k \leq n}
g_k^2}{n}} \frac{\delta^2}{4\sigma} ~.
    
\end{aligned}\]</span> We can then take the supremum over all <span
class="math inline">\(f \in B_\delta(\mathcal F^*, \lVert \cdot
\rVert_{\widehat P_n, 2})\)</span>, then take expectation over all <span
class="math inline">\(g\)</span>, and obtain <span
class="math display">\[\begin{aligned}
        \breve{\mathcal G}_n (\delta) \leq \frac{\delta^2}{4\sigma} +
\mathbb E_g \max_{1 \leq j \leq M} \left| \frac1n \sum_{1 \leq k \leq n}
g_k f_j (x_k) \right| ~.
    
\end{aligned}\]</span> Since the supremum (maximum) <span
class="math inline">\(\mathbb E_g \max_{1 \leq j \leq M} \left| \frac1n
\sum_{1 \leq k \leq n} g_k f_j (x_k) \right|\)</span> is over a finite
number of elements <span class="math inline">\(M\)</span>, we use
chaining to bound the expected maximum. To do so, let <span
class="math display">\[\begin{aligned}
        Z(f_j) \triangleq \frac{1}{\sqrt n} \sum_{1 \leq k \leq n} g_k
f_j (x_k) \quad \text{for all } 1 \leq j \leq M ~.
    
\end{aligned}\]</span> Then, defining the metric <span
class="math inline">\(\rho_Z^2 (f_j, f_k) = \mathop{\mathrm{Var}}(Z(f_j)
- Z(f_k)) = \|f_j - f_k\|_{\widehat P_n, 2}\)</span>, we see that this
is a proper metric associated with the process <span
class="math inline">\(Z(f_j)\)</span>. And, <span
class="math inline">\(Z(f_j)\)</span> is mean zero. Finally, since <span
class="math inline">\(\lVert f \lVert_{\widehat P_n, 2} \leq
\delta\)</span> for all <span class="math inline">\(f \in
B_\delta(\mathcal F^*, \lVert \cdot \rVert_{\widehat P_n, 2})\)</span>,
it follows that we can start chaining at scale <span
class="math inline">\(\delta\)</span>, and work our way down to <span
class="math inline">\(\frac{\delta^2}{4\sigma}\)</span>. It then follows
that <span class="math display">\[\begin{aligned}
        \mathbb E_g \max_{1 \leq j \leq M} \left| \frac1n \sum_{1 \leq k
\leq n} g_k f_j (x_k) \right| = \mathbb E_g \max_{1 \leq j \leq M}
\left| \frac{|Z(f_j)|}{\sqrt{n}} \right| \leq \frac{16}{\sqrt n}
\int_{\delta^2/4\sigma}^{\delta} \sqrt{\log N(\varepsilon, B_\delta
(\mathcal F^*), \lVert \cdot \rVert_{\widehat P_n, 2})} \mathrm{d} \varepsilon
~.
    
\end{aligned}\]</span> Combining all the arguments above gives us the
desired conclusion. ◻</p>
</div>
<div id="rem:lower-bound-critical-inequality" class="remark">
<p><strong>Remark 8</strong> (Lower bounds on the critical inequality).
Let <span class="math inline">\(\mathcal F\)</span> be a star-shaped
function class, and suppose <span class="math inline">\(f^* \equiv
0\)</span>. Then, <span class="math inline">\(\mathcal F^* = \mathcal
F\)</span>, and applying the Cauchy-Schwarz inequality gives <span
class="math display">\[n \breve{\mathcal G}_n (\mathcal F^*, \delta)
    = \mathbb E_g
        \sup_{\lVert f \rVert_{\widehat P_n, 2} \leq \delta} |\langle g,
f \rangle|
    \leq \sqrt{n} \mathbb E_g
        \sup_{\lVert f \rVert_{\widehat P_n, 2} \leq \delta} \lVert g
\rVert_{\mathbf P\,\,\!\!, 2} \lVert f \rVert_{\widehat P_n, 2}
    \leq n \delta ~,\]</span> so \eqref{eq:critical-radius-gaussian}
is satisfied for a choice of <span class="math inline">\(\delta\)</span>
satisfying <span class="math inline">\(\delta = \frac{1}{2\sigma}
\delta^2\)</span>. Rearranging this gives <span
class="math inline">\(\delta^2 = 4\sigma^2\)</span>.</p>
<p>At the same time, if <span class="math inline">\(\mathcal F\)</span>
is additionally a convex function class containing <span
class="math inline">\(f \equiv 1\)</span>, then <span
class="math inline">\(\delta \in \mathcal F\)</span> by the star-shaped
property for any <span class="math inline">\(\delta \in (0,1]\)</span>.
As such, we have <span class="math display">\[\mathcal G_n(\mathcal F^*,
\delta)
        \geq \frac{\delta}{n} \mathbb E \left| \sum_{1\leq k \leq n} g_k
\right|
        = \sqrt{\frac2\pi}\frac{\delta}{\sqrt{n}} ~.\]</span>
Furthermore, any <span class="math inline">\(\delta\)</span> satisfying
\eqref{eq:critical-radius-gaussian}
must also solve <span
class="math display">\[\sqrt{\frac2\pi}\frac{\delta}{\sqrt{n}} \le
\frac{1}{2 \sigma} \delta^2
    \implies
    \frac{8}{\pi} \frac{\sigma^2}{n} \le \delta^2 ~.\]</span> Combining
everything, we must have that <span class="math inline">\(\delta^2 \geq
\min \{1, \frac{8}{\pi} \frac{\sigma^2}{n}\}\)</span>.</p>
</div>
<h2 id="application-rates-of-convergence">Application: Rates of
Convergence</h2>
<p>We can ask the following question now: using the tools we have
developed, how can we derive bounds on the rates of convergence of
various estimators we use?</p>
<h3 id="parametric-problem-linear-regressions">Parametric problem:
linear regressions</h3>
<p>Let’s look at <span class="math inline">\(y_i = \langle \beta,
x_i\rangle + w_i\)</span> for <span class="math inline">\(\beta \in
\mathbb R^d\)</span>. The least-squares estimator correspondings to
optimizing <span class="math inline">\(y_i\)</span> over the linear
function class <span class="math inline">\(\mathcal F_{\rm lin}
\triangleq \{ f_\beta (\cdot) = \langle \beta, \cdot \rangle : \beta \in
\mathbb R^d \}\)</span>. Let <span class="math inline">\(X \in \mathbb
R^{n\times d}\)</span> be the matrix with stacked observations <span
class="math inline">\(x_i \in \mathbb R^d\)</span>. Define the shifted
function class <span class="math inline">\(\mathcal F_{\rm
lin}^*\)</span>, which is convex and star-shaped at any point.
Therefore, we can apply the results established above. in particular,
note that <span class="math inline">\(\beta \mapsto \frac{\lVert X \beta
\rVert_2}{\sqrt{n}}\)</span> defines a norm on the range of <span
class="math inline">\(X\)</span>, so <span
class="math inline">\(B_\delta(\mathcal F_{\rm lin}^*, \lVert \cdot
\rVert_{\widehat P_n, 2})\)</span> is isomorphic to some <span
class="math inline">\(\delta\)</span>-ball in the range of <span
class="math inline">\(X\)</span>. A straightforward volume comparison
argument gives us <span class="math display">\[\begin{aligned}
    \log N(\varepsilon, B_\delta (\mathcal F^*), \lVert \cdot
\rVert_{\widehat P_n, 2}) \leq \operatorname{rank}(X) \log \left( 1 +
\frac{2\delta}{\varepsilon} \right) ~,
\end{aligned}\]</span> so applying Proposition <a
href="#prop:nonpar-ls-tail-bound" data-reference-type="ref"
data-reference="prop:nonpar-ls-tail-bound">7</a> gives us <span
class="math display">\[\begin{gathered}
    \frac{1}{\sqrt{n}} \int_0^\delta \sqrt{\log N(\varepsilon, B_\delta
(\mathcal F^*), \lVert \cdot \rVert_{\widehat P_n, 2})} \mathrm{d} \varepsilon
    \leq \sqrt{\frac{\operatorname{rank}(X)}{n}} \int_0^\delta \log
\left( 1 + \frac{2\delta}{t} \right) \mathrm{d} t \\
    = \delta \sqrt{\frac{\operatorname{rank}(X)}{n}} \int_0^\delta \log
\left( 1 + \frac{2}{x} \right) \mathrm{d} x \leq C \delta
\sqrt{\frac{\operatorname{rank}(X)}{n}} ~.
\end{gathered}\]</span> Combining everything shows that for all <span
class="math inline">\(t \geq \delta_n = C \delta
\sqrt{\frac{\operatorname{rank}(X)}{n}}\)</span>, <span
class="math display">\[\begin{aligned}
    \lVert f_{\widehat \beta} - f_{\beta^*} \rVert_{\widehat P_n, 2}^2
\lesssim \frac{\operatorname{rank}(X)}{n} \sigma^2
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1 - e^{-\frac{nt\delta_n}{2\sigma^2}}\)</span>,
which is similar in spirit to Theorem <a
href="{% post_url 2026-06-16-more-on-the-uniform-law-of-large-numbers %}#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">[thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned]</a>.
Up to constants, this is the minimax optimal rate. Note that we don’t
necessarily need to go through this elaborate machinery to obtain this
rate; because <span class="math inline">\(\widehat{\beta} = (X^\top
X)^{-1} X^\top Y\)</span>, for <span class="math inline">\(Y = X\beta^*
+ w\)</span> and <span class="math inline">\(w \sim \mathcal N(0,
\sigma^2 I)\)</span>, we have <span
class="math display">\[\begin{aligned}
  \mathbb E [\| X \widehat{\beta} - X \beta^* \|_n^2]
  =
  \mathbb E [\| X (X^\top X)^{-1} X^\top w \|_n^2]
  =
  \frac{\sigma^2}{n} \operatorname{Tr} (X (X^\top X)^{-1} X^\top)
  =
  \frac{\sigma^2}{n} \operatorname{rank} (X)
\end{aligned}\]</span> from a direct calculation.</p>
<div class="remark">
<p><strong>Remark 9</strong> (Alternative ways to derive rate of
convergence for polynomial regression). It is not hard to show, more
formally, that there exists universal positive constants <span
class="math inline">\(c_0, c_1, c_2\)</span> such that the least-squares
estimator satisfies <span class="math inline">\(\mathbf P\,\,\!\!(\lVert
\widehat f - f^* \rVert_{\widehat P_n, 2}^2 \geq c_0 \frac{\sigma^2 d
\log n}{n}) \leq c_1 e^{-c_2 d \log n}\)</span>. A straightforward way
to see this is adapting the same arguments as above: because <span
class="math inline">\(\delta_n^2 \propto \sigma^2 \frac{d}{n}\)</span>,
it follows that we can set <span class="math inline">\(t \geq \log(n)
\delta_n\)</span> to conclude.</p>
<p>A first-principles approach is the following. Let <span
class="math inline">\(\phi(x) = (1,x,\dots,x^{d-1})\)</span>, so we have
<span class="math inline">\(f_\beta - f_{\beta^*} = \langle \beta -
\beta^*, \phi(\cdot) \rangle\)</span>. It follows that for any
admissible <span class="math inline">\(\delta_n\)</span> and <span
class="math inline">\(t \geq \delta_n\)</span>, we have <span
class="math inline">\(\mathbf P\,\,\!\!(\lVert \widehat f - f^*
\rVert_{\widehat P_n, 2}^2 \geq t \delta_n) \leq c_1
e^{-\frac{nt\delta_n}{2\sigma^2}}\)</span>. And, we have <span
class="math display">\[\| f_{\widehat{\beta}} - f_{\beta^*} \|_{\widehat
P_n, 2}^2
        =
        \frac{\| \Phi (\widehat{\beta} - \beta^*) \|_{\widehat P_n,
2}^2}{n} ~,\]</span> where <span class="math inline">\(\Phi =
(\phi(x_1),\dots,\phi(x_n))^\top \in \mathbb R^{n \times d}\)</span>. As
noted before, polynomials of degree <span
class="math inline">\(d\)</span> have VC dimension <span
class="math inline">\(d+1\)</span>. Furthermore, because <span
class="math inline">\(\frac1n \langle g , f(x) \rangle\)</span> (where
<span class="math inline">\(x = (x_1,\dots,x_n)\)</span>) is
subgaussian, we can then apply Sauer-Shelah (Lemma <a
href="{% post_url 2026-06-16-vapnik-chervonenkis-classes %}#lem:sauer-shelah" data-reference-type="ref"
data-reference="lem:sauer-shelah">[lem:sauer-shelah]</a>) to conclude
that <span class="math display">\[\begin{aligned}
        |\mathcal F^* \cap \{x_1, \dots, x_n\}| \leq \left(
\frac{ne}{d+1} \right)^{d+1} \leq \left( \frac{ne}{d} \right)^{d} ~.
    
\end{aligned}\]</span> Therefore, we have the standard expected supremum
bound <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{\| f \|_{\widehat P_n, 2} \leq \delta} \left|
\frac1n \sum_{1 \leq k \leq n} g_k f(x_k) \right| \leq \delta
\sqrt{\frac{d}{n} \log \frac{en}{d}} ~,
    
\end{aligned}\]</span> so we can take <span class="math inline">\(t =
\delta_n = \Theta \left(\sigma \sqrt{\frac{d}{n} \log \frac{en}{d}}
\right)\)</span> to conclude.</p>
</div>
<h3
id="nonparametric-least-squares-twice-differentiable-functions">Nonparametric
Least Squares: Twice-Differentiable Functions</h3>
<p>Suppose <span class="math inline">\(\mathcal F_C\)</span> consists of
<span class="math inline">\(f : [0,1] \to \mathbb R\)</span> such that
<span class="math inline">\(f \in \mathcal C^2\)</span>, with <span
class="math inline">\(\|f\|_\infty + \|f&#39;\|_\infty +
\|f&#39;&#39;\|_\infty \leq C &lt; \infty\)</span>, where <span
class="math inline">\(C\)</span> is a universal constant. We’re
interested in analyzing the rate of convergence of the nonparametric
least-squares estimator. To this end, if <span class="math inline">\(f^*
\in \mathcal F_C\)</span> then we can proceed without any technical
issues. In general, consider <span class="math inline">\(\partial
\mathcal F \subset \mathcal F_{2C}\)</span>. Since <span
class="math display">\[\begin{aligned}
  \log N(t, B_\delta (\mathcal F_{2C}, \|\cdot\|_{\widehat P_n, 2}))
\lesssim
  \log N(t, \mathcal F_{2C}, \|\cdot\|_\infty) ~,
\end{aligned}\]</span> and because the boundedness of derivatives
implies Lipschitzness with the same constant, we have <span
class="math display">\[\begin{aligned}
    \log N(t, \mathcal F_{2C}, \|\cdot\|_\infty) \asymp \left( \frac1t
\right)^{\frac{1}{2+C}} \leq \frac{1}{\sqrt t} ~.
\end{aligned}\]</span> Consequently, <span
class="math display">\[\begin{gathered}
    \frac{1}{\sqrt n} \int_0^\delta \sqrt{\log N(t, B_\delta (\mathcal
F_{2C}, \|\cdot\|_{\widehat P_n, 2}))} \mathrm{d} t \\
    \lesssim \int_0^\delta \sqrt{\log N(t, \mathcal F_{2C},
\|\cdot\|_\infty)} \mathrm{d} t
    \lesssim \frac{1}{\sqrt n} \int_0^\delta t^{-\frac14} \mathrm{d} t
\lesssim \frac{\delta^{\frac34}}{\sqrt n} ~. %\frac43
\end{gathered}\]</span> It then follows that by picking <span
class="math inline">\(\delta_n &gt; 0\)</span> such that <span
class="math inline">\(\frac{\delta^{\frac34}}{\sqrt n} \lesssim
\frac{\delta_n^2}{\sigma}\)</span>, i.e. <span
class="math inline">\(\delta_n \asymp
(\frac{\sigma^2}{n})^{\frac25}\)</span>, we have that there exists
constants <span class="math inline">\(c_0, c_1, c_2\)</span> independent
of <span class="math inline">\(n\)</span> and <span
class="math inline">\(\sigma\)</span> such that <span
class="math display">\[\begin{aligned}
    \| \widehat f - f^* \|_{\widehat P_n, 2}^2 \lesssim c_0 \left(
\frac{\sigma^2}{n} \right)^{\frac25}
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1 - c_1 e^{-c_2
(\frac{n}{\sigma^2})^{\frac15}}\)</span>.</p>
<h3
id="nonparametric-problem-orthogonal-series-expansions">Nonparametric
Problem: Orthogonal Series Expansions</h3>
<p>Consider the function class <span class="math inline">\(\mathcal
F_{\rm og} (1; T)\)</span> defined by orthogonal series expansion with
<span class="math inline">\(T\)</span> coefficients. Let <span
class="math inline">\(\{x_1, \dots, x_n\}\)</span> denote <span
class="math inline">\(n\)</span> data points, and define <span
class="math inline">\(\Phi = [\Phi(x_1), \dots, \Phi(x_n)]^\top\)</span>
denote a <span class="math inline">\(n \times T\)</span> matrix with
entries <span class="math inline">\(\Phi_{ij} = \phi_j(x_i)\)</span>.
Then, <span class="math inline">\(\mathcal F_{\rm og} (1; T) = \{ f =
\sum_{1 \leq m \leq T} \beta_m \phi_m : \|\beta\|_2 \leq 1 \}\)</span>,
where <span class="math inline">\(\{\phi_m\}\)</span> is an orthonormal
basis for <span class="math inline">\(L^2(\mathbf P\,\,\!\!)\)</span>.
If <span class="math inline">\(\{\phi_m\}\)</span> is additionally an
orthonormal basis for <span class="math inline">\(L^2(\widehat
P_n)\)</span>, then a direct calculation shows that the optimum of <span
class="math inline">\(\frac1n \|y - \Phi\beta\|_2^2\)</span> is given by
<span class="math display">\[\begin{aligned}
    \frac1n \Phi^\top y \left( 1 \wedge \left( \frac{\|\Phi^\top
y\|_2}{n} \right)^{-1} \right) ~.
\end{aligned}\]</span> The ridge regression estimate is given by <span
class="math inline">\(\frac{1}{n}\Phi^\top y [1 +
\lambda]^{-1}\)</span>, so if we set <span class="math inline">\(\lambda
= [1 \wedge (\|\Phi^\top y\|_2 / n)] - 1\)</span>, we recover the
optimum derived above. The case where <span
class="math inline">\(\{\phi_m\}\)</span> is not an orthonormal basis
with respect to <span class="math inline">\(L^2(\widehat P_n)\)</span>
can be approached via Lagrangian multipliers: specifically, we look at
<span class="math display">\[\begin{aligned}
  \nabla \left\lbrace
    \|y - \Phi \beta\|_2^2 + \lambda (\|\beta\|_2^2 - 1)
  \right\rbrace
  =
  2 (\lambda I + \Phi^\top \Phi) \beta - 2 \Phi^\top y ~.
\end{aligned}\]</span> Therefore, either <span
class="math inline">\(\|\beta\|_2^2 = 1\)</span> or <span
class="math inline">\(\lambda=0\)</span>. But, the Kuhn-Tucker theorem
requires <span class="math inline">\(\lambda \geq 0\)</span>, so the
nonparametric least squares estimator <span
class="math inline">\(\widehat f\)</span> over <span
class="math inline">\(\mathcal F_{\rm og}\)</span> can be obtained
equivalently from a ridge regression with <span
class="math inline">\(\lambda \geq 0\)</span> picked out by the
Kuhn-Tucker theorem.</p>
<p>At the same time, because <span
class="math display">\[\begin{aligned}
  \|f_{\beta^*} - f_{\beta}\|_2^2
  \overset{\text{(i)}}{=}
  \left\|\sum_{m=1}^T (\beta_m^* - \beta_m) \phi_m\right\|_2^2
  +
  \left\|\sum_{m=T+1}^\infty \beta_m^* \phi_m\right\|_2^2
  \overset{\text{(ii)}}{=}
  \|\beta_{1:T}^* - \beta_{1:T}\|_2^2
  +
  \|\beta_{&gt; T}^*\|_2^2 ~,
\end{aligned}\]</span> where the expansion of (i) follows from
orthogonality and the equivalence in (ii) follows from Parseval’s
identity, it follows that the infimum over <span class="math inline">\(f
\in \mathcal F_{\rm og}\)</span> will lead to the first term vanishing
(otherwise it contradicts the definition of the function class).
Therefore, we have <span class="math display">\[\begin{aligned}
  \inf_{f \in \mathcal F_{\rm og}} \|f^* - f\|_2^2 = \sum_{j \geq T+1}
\beta_j^2 ~.
\end{aligned}\]</span></p>
<h3 id="nonparametric-problem-additive-models">Nonparametric Problem:
Additive Models</h3>
<p>Let <span class="math inline">\(\mathcal H\)</span> denote a
collection of univariate convex, symmetric functions <span
class="math inline">\(h : \mathbb R \to \mathbb R\)</span> endowed with
norm <span class="math inline">\(\|\cdot\|_{\mathcal H}\)</span>. Let
<span class="math display">\[\begin{aligned}
    \mathcal F_{\rm add} = \left\{ f : \mathbb R^d \to \mathbb R : f =
\sum_{1 \leq k \leq d} h_k \:\: \text{for } h_k \in \mathcal H \:
\text{such that } \|h_k\|_{\mathcal H} \leq 1 \right\} ~.
\end{aligned}\]</span> Suppose <span class="math inline">\(x_i =
(x_{i,1}, \dots, x_{i,d}) \in \mathbb R^d\)</span>, <span
class="math inline">\(w_i \sim \mathcal N(0,1)\)</span>, <span
class="math inline">\(f^* \triangleq \sum_{1 \leq j \leq d} h_j^* \in
\mathcal F_{\rm add}\)</span>, and we have <span
class="math inline">\(n\)</span> i.i.d. samples <span
class="math inline">\(y_i = f^*(x_i) + \sigma w_i\)</span>. Suppose we
estimate <span class="math inline">\(f^*\)</span> by <span
class="math display">\[\begin{aligned}
    \widehat f = \underset{f \in \mathcal F_{\rm add}}{\arg\min} \frac1n
\sum_{1 \leq i \leq n} (y_i - f(x_i))^2 ~.
\end{aligned}\]</span> By a slight abuse of notation, for each <span
class="math inline">\(1 \leq k \leq d\)</span>, define <span
class="math display">\[\begin{aligned}
    \breve{\mathcal G}_{n,k} (2\mathcal H, \delta) \triangleq \mathbb E
\underset{\substack{\|h_k\|_{\mathcal H} \leq 2 \\ \|h_k\|_{\widehat
P_n, 2} \leq \delta}}{\sup} \left| \frac1n \sum_{1 \leq i \leq n} w_k
h_k (x_{ik}) \right|
\end{aligned}\]</span> as the <span class="math inline">\(k\)</span>th
coordinate Gaussian complexity. Let <span
class="math inline">\(\delta_{n,k} &gt; 0\)</span> be the smallest
positive solution to the critical inequality \eqref{eq:critical-radius-gaussian}.
Define the <span class="math inline">\(k\)</span>th coordinate error
<span class="math inline">\(\widehat \Delta_k \triangleq \widehat h_k -
h_k^*\)</span>, and the full error function <span
class="math inline">\(\widehat \Delta \triangleq \sum_{1 \leq k \leq d}
\widehat \Delta_k\)</span>. The goal is to derive a bound on <span
class="math inline">\(\|\widehat f - f^*\|_{\widehat P_n,2}^2\)</span>
that holds with high probability.</p>
<p>We proceed in a few steps. Let us define <span
class="math inline">\(\delta_{n,\max} \triangleq \max_{1 \leq k \leq d}
\delta_{n,k}\)</span>. We first study <span
class="math display">\[\begin{aligned}
    Z_t \triangleq \underset{\substack{h \in \mathcal H :
\|h\|_{\widehat P_n, 2} \leq t}}{\sup} \left| \frac1n \sum_{1 \leq i
\leq n} w_i h (x_i) \right| ~.
\end{aligned}\]</span> Here, the data points <span
class="math inline">\(x_1, \dots, x_n\)</span> are fixed. Let us first
bound <span class="math display">\[\begin{aligned}
    \left| \frac{\sigma}{n} \sum_{1 \leq i \leq n} w_i \widehat \Delta_k
(x_i) \right|
\end{aligned}\]</span> for some fixed <span
class="math inline">\(\widehat \Delta_k\)</span> and for each <span
class="math inline">\(1 \leq k \leq d\)</span>. Clearly, if <span
class="math inline">\(\|\Delta\|_{\widehat P_n, 2} \leq t\)</span>, then
we can immediately obtain <span class="math display">\[\begin{aligned}
    \left| \frac{\sigma}{n} \sum_{1 \leq i \leq n} w_i \widehat \Delta_k
(x_i) \right| \leq \frac{\sigma}{n} n Z_t = \sigma Z_t ~.
\end{aligned}\]</span> If <span
class="math inline">\(\|\Delta\|_{\widehat P_n, 2} &gt; t\)</span>, then
the star-shaped property of <span class="math inline">\(\mathcal
H\)</span> implies <span class="math display">\[\begin{aligned}
    \left| \frac{\sigma}{n} \sum_{1 \leq i \leq n} w_i \widehat \Delta_k
(x_i) \right| \leq \frac{\sigma}{n} n \frac{Z_t}{t} \|\widehat
\Delta\|_{\widehat P_n, 2} = \frac{\sigma}{t} Z_t \|\widehat
\Delta\|_{\widehat P_n, 2} ~.
\end{aligned}\]</span> Familiar arguments show that for constants <span
class="math inline">\(\sigma\)</span> and <span
class="math inline">\(t\)</span>, <span
class="math inline">\(\frac{\sigma}{t} Z_t\)</span> is subgaussian with
respect to <span class="math inline">\(\|h_1 - h_2\|_{\widehat
P_n,2}\)</span> for <span class="math inline">\(h_1,h_2 \in \mathcal
H\)</span>, is (as a process) Lipschitz with constant at most <span
class="math inline">\(\frac{\sigma}{\sqrt n}\)</span>. Therefore, <span
class="math display">\[\begin{aligned}
    \frac{\sigma}{t} Z_t \leq \frac{\sigma}{t} \breve{\mathcal G}_n
(\mathcal H, t) + u
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-e^{-\frac{n u^2}{2\sigma^2}}\)</span>.
Localization therefore gives us a bound completely in terms of the
Gaussian complexity. Now, let <span class="math inline">\(\delta_n =
\max_{1 \leq k \leq d} \delta_{n,k}\)</span>. Then, for <span
class="math inline">\(t \geq \delta_n\)</span> and because the Gaussian
complexity is nonincreasing, it follows that <span
class="math display">\[\begin{aligned}
    \breve{\mathcal G}_n (\mathcal H, t) \leq \breve{\mathcal G}_n
(\mathcal H, \delta_{n,k}) \leq \frac{\delta_{n,k}}{2} \leq
\frac{\delta_n}{2} ~.
\end{aligned}\]</span> Combining everything, it follows that <span
class="math display">\[\begin{aligned}
    \sigma \frac{Z_t}{t} \leq \frac12 \delta_{n} + u
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-e^{-\frac{n u^2}{2\sigma^2}}\)</span>. Changing
variables, setting <span class="math inline">\(u = \frac{t}{2}\)</span>,
we have <span class="math inline">\(\frac{\sigma Z_t}{t} \leq
t\)</span>, and <span class="math display">\[\begin{aligned}
    \frac{\sigma}{n} \left| \sum_{i=1}^n w_i \widehat \Delta_j(x_i)
\right|
    \leq t \|\widehat \Delta_j\|_{\widehat P_n, 2}
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-e^{-\frac{n t^2}{8\sigma^2}}\)</span>. For the
earlier case, we also have <span class="math inline">\(\sigma Z_t \leq
t^2\)</span>, and accordingly <span class="math display">\[\frac\sigma n
\left| \sum_{1 \leq i \leq n} w_i \widehat \Delta_j(x_i) \right|
    \leq t^2\]</span> with probability at least <span
class="math inline">\(1-e^{-\frac{n t^2}{8\sigma^2}}\)</span>. It then
follows that <span class="math display">\[\frac\sigma n \left|
\sum_{i=1}^n w_i \widehat \Delta(x_i) \right|
    \leq d t^2 + t \sum_{1 \leq k \leq d} \| \widehat \Delta_j
\|_{\widehat P_n, 2}\]</span> with probability at least <span
class="math inline">\(1-de^{-\frac{n t^2}{8\sigma^2}}\)</span>, provided
<span class="math inline">\(t \geq \delta_n\)</span>. Therefore,
replacing <span class="math inline">\(t\)</span> by <span
class="math inline">\(\sqrt{t \delta_{n,\max}}\)</span> gives <span
class="math display">\[\frac\sigma n \left| \sum_{i=1}^n w_i \widehat
\Delta(x_i) \right|
    \leq d t \delta_{n, \max} + 2 \sqrt{t \delta_{n,\max}} \sum_{1 \leq
k \leq d} \| \widehat \Delta_j \|_{\widehat P_n, 2}\]</span> with
probability at least <span class="math inline">\(1-de^{-\frac{n
t^2}{8\sigma^2}}\)</span>.</p>
<p>The rest of the arguments is straightforward: because <span
class="math display">\[\frac12 \|\widehat\Delta\|_{\widehat P_n,2}^2
    \leq \frac\sigma n \left| \sum_{1 \leq i \leq n} w_i \widehat
\Delta(x_i) \right|
    \lesssim d K \delta^2_n + \sqrt{d K} \delta_n \| \widehat \Delta
\|_{\widehat P_n, 2}\]</span> with probability at least <span
class="math inline">\(1-de^{-\frac{n t^2}{8\sigma^2}}\)</span>, it
follows that <span class="math display">\[\begin{aligned}
    \| \widehat \Delta \|_{\widehat P_n, 2}
    \lesssim \sqrt{d K} \delta_n \| \widehat \Delta \|_{\widehat P_n,
2}  + \sqrt{d K} \delta_n \| \widehat \Delta \|_{\widehat P_n, 2}
    \implies
    \| \widehat \Delta \|_{\widehat P_n, 2}  \lesssim \sqrt{d K}
\delta_n ~,
\end{aligned}\]</span> with probability at least <span
class="math inline">\(1-de^{-\frac{n \delta_n^2}{8\sigma^2}}\)</span>,
if <span class="math inline">\(\| \widehat \Delta \|_{\widehat P_n, 2}
\gtrsim dK \delta_n^2\)</span>. The case where <span
class="math inline">\(\| \widehat \Delta \|_{\widehat P_n, 2} \lesssim
dK \delta_n^2\)</span> is trivially true. Therefore, there exists a
universal constant <span class="math inline">\(K \geq 1\)</span> such
that <span class="math display">\[\begin{aligned}
    \sqrt{\sum_{1 \leq i \leq n} \|h_i\|_{\widehat P_n, 2}^2} \leq
\sqrt{K} \left\| \sum_{1 \leq j \leq d} h_j \right\|_{\widehat P_n, 2}
~.
\end{aligned}\]</span> Combining everything above, we have just derived
<span class="math display">\[\begin{aligned}
    \|\widehat f - f^*\|_{\widehat P_n,2}^2 \leq c_3 K d
\delta_{n,\max}^2
\end{aligned}\]</span> with high probability.</p>
{% endraw %}
