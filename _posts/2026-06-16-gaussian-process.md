---
layout: post
title: "Gaussian Process"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  A stochastic process \(\{X_t\}_{t \in T}\) (with an infinite index set \(T\)) is said to be a Gaussian process if \((X_{t_1}, \dots, X_{t_n})\) is centred and jointly Gaussian for all \(n \geq 1\) and \(t_1, \dots, t_n \in T\). Note that a Gaussian process satisfies the equality \(\mathbb E e^{\lambda(X_t - X_s)} = e^{\frac{\lambda^2}{2} \mathbb E[X_t - X_s]^2}\), which gives the canonical metric \(d(s,t) = (\mathbb E[X_t - X_s]^2)^{\frac12}\).
---
{% raw %}
<span id="gaussian-process"></span>

<p>A stochastic process <span class="math inline">\(\{X_t\}_{t \in
T}\)</span> (with an infinite index set <span
class="math inline">\(T\)</span>) is said to be a <em>Gaussian
process</em> if <span class="math inline">\((X_{t_1}, \dots,
X_{t_n})\)</span> is centred and jointly Gaussian for all <span
class="math inline">\(n \geq 1\)</span> and <span
class="math inline">\(t_1, \dots, t_n \in T\)</span>. Note that a
Gaussian process satisfies the equality <span
class="math inline">\(\mathbb E e^{\lambda(X_t - X_s)} =
e^{\frac{\lambda^2}{2} \mathbb E[X_t - X_s]^2}\)</span>, which gives the
<em>canonical metric</em> <span class="math inline">\(d(s,t) = (\mathbb
E[X_t - X_s]^2)^{\frac12}\)</span>. The study of Gaussian processes is
interesting for at least two reasons: one, it helps us develop lower
bounds for chaining; two, surprisingly, these results apply for some
other classes of stochastic processes.</p>
<p>To start, we look at the instance when the index set <span
class="math inline">\(T\)</span> is finite. This reduces to studying the
case of having finitely many Gaussian random variables. We begin with
the following bounds on the supremum of Gaussian random variables.</p>
<div id="lem:iid-gaussian-rvs-upper-lower-bounds" class="lemma">
<p><strong>Lemma 1</strong>. Let <span class="math inline">\(X_1, \dots,
X_n\)</span> be i.i.d. Gaussian random variables with mean zero and
variance <span class="math inline">\(\sigma^2\)</span>. Then, <span
class="math display">\[\begin{aligned}
        c \sigma \sqrt{\log n} \leq \mathbb E \sup_{1 \leq i \leq n} X_i
\leq \sigma \sqrt{2\log n} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The upper bound is obvious by specializing
Proposition <a href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#prop:maximal-inequality-chernoff"
data-reference-type="ref"
data-reference="prop:maximal-inequality-chernoff">[prop:maximal-inequality-chernoff]</a>
for Gaussian random variables. The lower bound remains to be proven.</p>
<p>For any <span class="math inline">\(\eta &gt; 0\)</span>, we have
<span class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} X_i &amp;= \int_0^\infty
\mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} X_i &gt; t \right) +
\mathbb E \left[ \sup_{1 \leq i \leq n} X_i \wedge 0 \right] \\
        &amp;\geq \eta \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n}
X_i &gt; \eta \right) + \mathbb E \left[ X_1 \wedge 0 \right] \\
        &amp;= \eta (1 - (1 - \mathbf P\,\,\!\!\left( X_1 \geq \eta
\right))^n ) + \mathbb E [ X_1 \wedge 0 ] ~.
    
\end{aligned}\]</span> The last inequality follows because <span
class="math inline">\(\{X_1, \dots, X_n\}\)</span> are i.i.d. and <span
class="math inline">\(\mathbf P\,\,\!\!(\sup_{1 \leq i \leq n} X_i &gt;
\eta)\)</span> is decreasing in <span
class="math inline">\(\eta\)</span>. Because <span
class="math inline">\(X_i\)</span> are Gaussian random variables, and
because <span class="math inline">\(x^2 = (x-\eta+\eta)^2 \leq
2(x-\eta)^2 + 2\eta^2\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( X_1 \geq \eta \right) = \int_\eta^\infty
\frac{e^{-\frac{x^2}{2\sigma^2}}}{\sqrt{2\pi\sigma^2}} \mathrm{d} x \geq
\frac{e^{-\frac{\eta^2}{\sigma^2}}}{d}
    
\end{aligned}\]</span> for some universal constant <span
class="math inline">\(d\)</span>. Therefore, setting <span
class="math inline">\(\eta = \sigma\sqrt{\log n} - \sigma \sqrt{\log
d}\)</span>, we then have <span class="math inline">\(\mathbf
P\,\,\!\!\left( X_1 \geq \eta \right) \geq \frac1n\)</span>. By the
preceding calculations, this means we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} X_i &amp;\geq (1 - e^{-1})
\sigma \sqrt{\log n} - m \sigma ~,
    
\end{aligned}\]</span> where <span class="math inline">\(m\)</span> is a
universal constant depending on <span class="math inline">\(\log
d\)</span> and <span class="math inline">\(\sigma\)</span>. The point is
this can be chosen universally. For the desired lower bound to hold, we
must have <span class="math inline">\((1 - e^{-1}) \sigma \sqrt{\log n}
- m \sigma \geq c \sigma \sqrt{\log n}\)</span>, which occurs if and
only if <span class="math inline">\(n \geq e^{\frac{m^2}{c^2
(1-e^{-1})^2}}\)</span>. Since there are only finitely many <span
class="math inline">\(n \leq e^{\frac{m^2}{c^2 (1-e^{-1})^2}}\)</span>,
the lower bound holds true in that case, too. ◻</p>
</div>
<p>There is now some direction for which we can develop the theory for
infinite sets <span class="math inline">\(T\)</span>. We can always look
at bounding the moments of the supremum of a separable, centred Gaussian
process, using all the tools we have already developed.</p>
<div id="thm:gaussian-process-has-subgaussian-increments"
class="theorem">
<p><strong>Theorem 2</strong>. Let <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> be a separable, centred
Gaussian process such that <span class="math inline">\(P (\sup_{t \in T}
|X_t| &lt; \infty) &gt; 0\)</span>. Let <span
class="math inline">\(f\)</span> be a measurable, even, convex, and
nondecreasing function on <span
class="math inline">\([0,\infty)\)</span>, and <span
class="math inline">\(g \in \mathcal N(0,1)\)</span>. Then,</p>
<ol>
<li><p><span class="math inline">\(\sigma = \sigma(X) \triangleq \sup_{t
\in T} \sqrt{\mathbb E X_t^2} &lt; \infty\)</span> and <span
class="math inline">\(\mathbb E \sup_{t \in T} |X_t| &lt;
\infty\)</span>.</p></li>
<li><p>The following equalities hold true: <span class="math display">\begin{equation}\label{eq:gaussian-process-has-subgaussian-increments-1}\begin{aligned}
            
\mathbb E f \left( \sup_{t \in T} |X_t| - \mathbb E \sup_{t \in T} |X_t|
\right) &amp;\leq \mathbb E f \left( \frac{\pi\sigma}{2} g \right) ~, \\
            \label{eq:gaussian-process-has-subgaussian-increments-2}
\mathbf P\,\,\!\!\left( \left| \sup_{t \in T} |X_t| - \mathbb E \sup_{t
\in T} |X_t| \right| &gt; t \right) &amp;\leq 2 e^{-\frac{t^2}{2\pi^2
\sigma^2}} ~.
        
\end{aligned}\end{equation}</span></p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> The idea is by the ongoing assumptions and the
Kolmogorov zero-one law, we have the almost sure bound <span
class="math inline">\(\sup_{t \in T} |X_t| &lt; \infty\)</span>. So, we
can pick some value <span class="math inline">\(\widetilde z \in
(0,1)\)</span> such that <span class="math inline">\(\mathbf
P\,\,\!\!(|g| &gt; \widetilde z) = \frac12\)</span>, and let <span
class="math inline">\(M &lt; \infty\)</span> be such that <span
class="math inline">\(\mathbf P\,\,\!\!( \sup_{t \in T} |X_t| &gt; M )
&lt; \frac12\)</span> (note that this choice of <span
class="math inline">\(M\)</span> exists by ongoing assumptions).
Therefore, for each <span class="math inline">\(t\)</span>, we must have
<span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( |g| &gt; \frac{M}{\sqrt{\mathbb E
|X_t|^2}} \right) = \mathbf P\,\,\!\!(|X_t| &gt; M) &lt; \frac12 ~,
    
\end{aligned}\]</span> and we obtain <span class="math inline">\(\sigma
\leq \frac{M}{\widetilde z} &lt; \infty\)</span>. So, to conclude the
first part of the theorem, since the Gaussian process is separable, let
<span class="math inline">\(\widetilde T\)</span> be a countable, dense
subset of <span class="math inline">\(T\)</span> such that <span
class="math inline">\(\sup_{t \in T} X_t = \sup_{t \in \widetilde T}
X_t\)</span>. Therefore, by a maximal inequality, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \left| \sup_{t \in \widetilde T} |X_t| -
\mathbb E \sup_{t \in \widetilde T} |X_t| \right| &gt; \sigma t \right)
&amp;\leq 2 e^{-\frac{t^2}{2\pi^2}} ~.
    
\end{aligned}\]</span> Recall the almost sure bound <span
class="math inline">\(\sup_{t \in T} |X_t| &lt; \infty\)</span>. This
means every <span class="math inline">\(X_t\)</span> has finite mean and
median, so that <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} |X_t| \leq m
\right) \geq \frac12
    
\end{aligned}\]</span> for all <span class="math inline">\(n\)</span>,
where <span class="math inline">\(m\)</span> is the median of <span
class="math inline">\(X_t\)</span>. As such, if we pick some <span
class="math inline">\(t_0\)</span> such that <span
class="math inline">\(2 e^{-\frac{t_0^2}{2\pi^2}} &lt; \frac12\)</span>,
we must then have <span class="math inline">\(\{ x: x \leq m\} \cap \{x
: |\mathbb E \sup_{1 \leq i \leq n} |X_t| - x| \leq \sigma t_0 \} \neq
\emptyset\)</span> for all <span class="math inline">\(n\)</span> (if
this intersection is empty, then one of the two preceding inequalities
will fail to hold).</p>
<p>For the second part of the theorem, note that by separability, we
have <span class="math inline">\(\sup_{t \in T} |X_t| =
\lim\limits_{n\to\infty} \sup_{1 \leq i \leq n} |X_{t_i}|\)</span>
almost surely. By the monotone convergence theorem, this holds in <span
class="math inline">\(L^1(\mathbf P\,\,\!\!)\)</span>, too. Therefore,
\eqref{eq:gaussian-process-has-subgaussian-increments-1}
holds by standard arguments for a sequence of normal random variables,
followed by applying Fatou’s lemma and appealing to the continuity of
<span class="math inline">\(f\)</span>. \eqref{eq:gaussian-process-has-subgaussian-increments-1}
follows from a direct application of Chebyshev’s inequality. ◻</p>
</div>
<div id="prop:gaussian-process-moment-bound" class="proposition">
<p><strong>Proposition 3</strong>. Let <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> be a separable, centred
Gaussian process such that <span class="math inline">\(P (\sup_{t \in T}
|X_t| &lt; \infty) &gt; 0\)</span>. Then, for all <span
class="math inline">\(p \geq 1\)</span>, <span
class="math display">\[\begin{aligned}
        \bigg( \mathbb E \bigg[ \sup_{t \in T} \: |X_t| \bigg]^p
\bigg)^{\frac1p} \lesssim \sqrt{p} \: \mathbb E \sup_{t \in T} \: |X_t|
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This is a straightforward consequence of \eqref{eq:gaussian-process-has-subgaussian-increments-2}:
integrating the exponential inequality with respect to <span
class="math inline">\(t p^{t-1} \mathrm{d} t\)</span> gives <span
class="math display">\[\begin{aligned}
        \left( \int \left| \sup_{t \in T} |X_t| - \mathbb E \sup_{t \in
T} |X_t| \right|^p \mathrm{d} t \right)^{\frac1p} \lesssim \sigma \lVert g
\rVert_p ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\lVert g
\rVert_p\)</span> is the <span class="math inline">\(L^p\)</span> norm
of the standard normal random variable <span
class="math inline">\(g\)</span> (suppressing dependence on <span
class="math inline">\(\mathbf P\,\,\!\!\)</span> here). For <span
class="math inline">\(\lVert g \rVert_p\)</span>, we can resort to
standard calculations to see that, by a change of variables, <span
class="math display">\[\begin{aligned}
        (\mathbb E|X|^p)^{\frac1p} = \sqrt{2}
\left(\frac{\Gamma((p+1)/2)}{\Gamma(1/2)} \right)^{\frac1p} ~.
    
\end{aligned}\]</span> By Stirling’s formula, <span
class="math display">\[\begin{aligned}
        \Gamma(x) &amp;= \left(\frac{x}{e}\right)^{\!x}
\sqrt{\frac{2\pi}x} \left(1+O\left(\frac1x\right)\right) ~,
        \end{aligned}\]</span>

<p>so</p>

<span class="math display">\[\begin{aligned}
        \Gamma\bigg(\frac{p+1}{2}\bigg) &amp;= \left( \frac{p+1}{2e}
\right)^{\frac{p+1}{2}} \sqrt{\frac{4\pi}{p+1}}
\left(1+O\left(\frac1x\right)\right) \\
        &amp;= 2^{(1-p)/2}e^{-(p+1)/2}(p+1)^{p/2}\sqrt{\pi} +
O\left(\frac1x\right) ~. \\
        \end{aligned}\]</span>

<p>Putting everything together gives</p>

<span class="math display">\[\begin{aligned}
        \mathbb E|X|^p &amp;= \sqrt{2}
\left(\frac{\Gamma((p+1)/2)}{\Gamma(1/2)} \right)^{\frac1p}  =
2^{\frac{1-p}{2p}} e^{-\frac{p+1}{2p}} \sqrt{p+1} \sqrt{2} +
O\left(\frac1x\right)  ~,
    
\end{aligned}\]</span> where the third equality follows from
approximating <span class="math inline">\(\sqrt{\pi}\)</span> by <span
class="math inline">\(\Gamma(\frac12)\)</span>. By l’Hospital’s rule,
<span class="math display">\[\begin{aligned}
        \sqrt{2} \lim\limits_{p\to\infty}
\frac{2^{(1-p)/2p}}{e^{(1+p)/2p}} = C ~.
    
\end{aligned}\]</span> Therefore, <span class="math inline">\(\lVert g
\rVert_p = O(\sqrt p)\)</span>, as desired. ◻</p>
</div>
<p>We can go down a more sophisticated (and more first principles-based)
direction. Heuristically, if <span class="math inline">\(D\)</span> is a
maximal <span class="math inline">\(\varepsilon\)</span>-packing of
<span class="math inline">\(T\)</span> and suppose <span
class="math inline">\(\{X_t\}_{t\in D}\)</span> is set of independent
random variables, then, we should expect to see <span
class="math inline">\(\mathbb E \sup_{t \in T} X_t \geq \mathbb E
\sup_{t \in D} X_t \gtrsim \sqrt{\log |D|}\)</span>. Here, note a
feature about the lower bounds: we require a subset of <span
class="math inline">\(T\)</span> that is well-separated, so as to apply
the insights from the development of maximal inequalities. These
packings naturally obtained in terms of a packing of <span
class="math inline">\(T\)</span>. Note that here, we avoid measurability
issues by studying stochastic processes through their finite-dimensional
marginals, i.e. <span class="math inline">\(\mathbb E \sup_{t \in T} \:
X_t\)</span> ought to be understood formally as <span
class="math inline">\(\sup_{T_0 \subset T} \mathbb E \sup_{t \in T_0}
X_t\)</span>, where the outer supremum is taken over all finite subsets
<span class="math inline">\(T_0\)</span> of <span
class="math inline">\(T\)</span>. Let us first develop some tools that
will allow us to pursue progress in this direction.</p>
<h2 id="gaussian-integration-by-parts-and-interpolation">Gaussian
integration by parts and interpolation</h2>
<p>Assume <span class="math inline">\(T\)</span> is a finite set for
now, with cardinality <span class="math inline">\(|T| = n\)</span>. Let
<span class="math inline">\(X = \{X_t\}_{t \in T}\)</span> and <span
class="math inline">\(Y = \{Y_t\}_{t \in T}\)</span>, and assume <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> are independent. Define the Gaussian
random vector <span class="math inline">\(Z(u)\)</span> that
interpolates <span class="math inline">\(Y\)</span> and <span
class="math inline">\(X\)</span>: <span
class="math display">\[\begin{aligned}
    Z(u) = \sqrt{u} X + \sqrt{1-u} Y ~, \quad \text{for } u \in [0,1] ~.
\end{aligned}\]</span> The goal is to understand the behaviour of <span
class="math inline">\(\mathbb E f(Z(u))\)</span> for any (smooth enough)
function <span class="math inline">\(f : \mathbb R^n \to \mathbb
R\)</span>. The idea is if <span class="math inline">\(f(x) = \sup_{1
\leq i \leq n} x_i\)</span>, then we can deduce a result that trends in
our desired direction. The starting point is an identity for
<em>Gaussian integration by parts</em>.</p>
<div id="lem:gaussian-i-b-p-univariate" class="lemma">
<p><strong>Lemma 4</strong> (Gaussian integration by parts; univariate).
Let <span class="math inline">\(X \in \mathcal N(0,1)\)</span>. For any
differentiable function <span class="math inline">\(f: \mathbb R \to
\mathbb R\)</span>, we have <span class="math display">\[\begin{aligned}
        \mathbb E f&#39;(X) = \mathbb E Xf(X) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Let <span class="math inline">\(\phi(x) =
\frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}\)</span> denote the density of
<span class="math inline">\(X\)</span>. If <span
class="math inline">\(f\)</span> is bounded support, then <span
class="math display">\[\begin{aligned}
        \mathbb E f&#39;(X) = - \int_{\mathbb R} f&#39;(x) \phi(x) \mathrm{d}
x &amp;= \int_{\mathbb R} f(x) \phi&#39;(x) \mathrm{d} x \\
        \end{aligned}\]</span>

<p>follows from integration by parts. Since
$\phi&#39;(x) = -x \phi(x)$, it follows that we have</p>

<span class="math display">\[\begin{aligned}
        &amp;= \int_{\mathbb R} x f(x) \phi(x) \mathrm{d} x ~.
    
\end{aligned}\]</span> If <span class="math inline">\(f\)</span> does
not have bounded support, then approximate <span
class="math inline">\(f\)</span> via smooth functions with bounded
support, e.g. step functions with interpolated ends. ◻</p>
</div>
<div id="lem:gaussian-i-b-p-multivariate" class="lemma">
<p><strong>Lemma 5</strong> (Gaussian integration by parts;
multivariate). Let <span class="math inline">\(X \in \mathcal
N(0,\Sigma)\)</span>. For any differentiable function <span
class="math inline">\(f: \mathbb R^n \to \mathbb R\)</span>, we have
<span class="math display">\[\begin{aligned}
        \mathbb E X_i f(X) = \sum_{1 \leq j \leq n} \Sigma_{ij} \mathbb
E \frac{\partial f}{\partial x_j} (X) \quad \text{for all } 1 \leq i
\leq n ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Let <span class="math inline">\(Z \in \mathcal N(0,
I_n)\)</span>. Then, <span class="math inline">\(X\)</span> and <span
class="math inline">\(\Sigma^{\frac12} Z\)</span> have the same
distributions. Therefore, <span class="math display">\[\begin{aligned}
        \mathbb E X_i f(X) = \sum_{1 \leq k \leq n}
\Sigma_{ik}^{\frac12} \mathbb E [Z_k f(\Sigma^{\frac12} Z)] \quad
\text{for all } 1 \leq i \leq n ~.
    
\end{aligned}\]</span> We can then apply Lemma <a
href="#lem:gaussian-i-b-p-univariate" data-reference-type="ref"
data-reference="lem:gaussian-i-b-p-univariate">4</a> to <span
class="math inline">\(\mathbb E [Z_k f(\Sigma^{\frac12} Z)]\)</span>,
conditional on <span class="math inline">\(\{Z_j\}_{j \neq k}\)</span>.
Furthermore, because this is a sequence of independent random variables,
we have <span class="math display">\[\begin{aligned}
        \mathbb E [Z_k f(\Sigma^{\frac12} Z)] &amp;= \mathbb E
\frac{\partial f}{\partial z_k} (\Sigma^{\frac12} Z) \\
        &amp;= \sum_{1 \leq j \leq n} \Sigma_{kj}^{\frac12} \mathbb E
\frac{\partial f}{\partial z_j} (\Sigma^{\frac12} Z) ~.
    
\end{aligned}\]</span> Combining everything, we have <span
class="math display">\[\begin{aligned}
        \mathbb E X_i f(X) &amp;= \sum_{1 \leq k \leq n}
\Sigma_{ik}^{\frac12} \left( \sum_{1 \leq j \leq n}
\Sigma_{kj}^{\frac12} \mathbb E \frac{\partial f}{\partial z_j}
(\Sigma^{\frac12} Z) \right) \\
        &amp;= \sum_{1 \leq j \leq n} \left( \sum_{1 \leq k \leq n}
\Sigma_{ik}^{\frac12} \Sigma_{kj}^{\frac12} \right) \mathbb E
\frac{\partial f}{\partial z_j} (\Sigma^{\frac12} Z) \\
        &amp;= \sum_{1 \leq j \leq n} \Sigma_{ij} \mathbb E
\frac{\partial f}{\partial z_j} (\Sigma^{\frac12} Z) ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>Using these tools, we can develop the following idea, called
<em>Gaussian interpolation</em>.</p>
<div id="lem:gaussian-interpolation" class="lemma">
<p><strong>Lemma 6</strong> (Gaussian interpolation). Let <span
class="math inline">\(X \sim \mathcal N(0, \Sigma^X)\)</span> and <span
class="math inline">\(Y \sim \mathcal N(0, \Sigma^Y)\)</span> be
Gaussian random vectors in <span class="math inline">\(\mathbb
R^n\)</span>. For any twice-differentiable function <span
class="math inline">\(f: \mathbb R \to \mathbb R\)</span>, we have <span class="math display">\begin{equation}\label{eq:gaussian-interpolation}\begin{aligned}

        \frac{\mathrm{d}}{\mathrm{d} u} \mathbb E f(Z(u)) = \frac12 \sum_{1 \leq i,
j \leq n} (\Sigma_{ij}^X - \Sigma_{ij}^Y) \mathbb E \frac{\partial^2
f}{\partial x_i \partial x_j} (Z(u)) ~.
    
\end{aligned}\end{equation}</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This follows from a series of direct calculations. By
the chain rule, <span class="math display">\[\begin{aligned}
        \frac{\mathrm{d}}{\mathrm{d} u} \mathbb E f(Z(u)) &amp;= \mathbb E \nabla
f(Z(u)) \nabla Z \\
        &amp;= \sum_{1 \leq i \leq n} \mathbb E \frac{\partial
f}{\partial z_i} (Z(u)) \frac{\mathrm{d} Z_i}{\mathrm{d} u} \\
        &amp;= \frac12 \sum_{1 \leq i \leq n} \mathbb E \frac{\partial
f}{\partial z_i} (Z(u)) \left( \frac{X_i}{\sqrt{u}} -
\frac{Y_i}{\sqrt{1-u}} \right) ~.
    
\end{aligned}\]</span> It remains to simplify the two terms in the last
expression. Note that we can write <span
class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} \frac{1}{\sqrt{u}} \mathbb E
\frac{\partial f}{\partial z_i} (Z(u)) X_i &amp;= \sum_{1 \leq i \leq n}
\frac{1}{\sqrt{u}} \mathbb E X_i g_i(X) ~,
    
\end{aligned}\]</span> where this is understood to be conditional on
<span class="math inline">\(Y\)</span>, and <span
class="math inline">\(g_i(X) = \frac{\partial f}{\partial z_i}
(Z)\)</span>. Therefore, we can apply the Gaussian integration by parts
to see that <span class="math display">\[\begin{aligned}
        \mathbb E X_i g_i(X) &amp;= \sum_{1 \leq j \leq n} \Sigma_{ij}^X
\mathbb E \frac{\partial g_i}{\partial z_j} (X) \\
        &amp;= \sum_{1 \leq j \leq n} \Sigma_{ij}^X \mathbb E
\frac{\partial^2 f}{\partial z_i \partial z_j} (\sqrt{u} X + \sqrt{1-u}
Y) \sqrt{u} ~,
        \end{aligned}\]</span>

<p>from which we can substitute this into our earlier
calculations to find that</p>

<span class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} \frac{1}{\sqrt{u}} \mathbb E
\frac{\partial f}{\partial z_i} (Z(u)) X_i &amp;= \sum_{1 \leq i \leq n}
\frac{1}{\sqrt{u}} \mathbb E X_i g_i(X) \\
        &amp;= \sum_{1 \leq i,j \leq n} \Sigma_{ij}^X \mathbb E
\frac{\partial^2 f}{\partial z_i \partial z_j} (\sqrt{u} X + \sqrt{1-u}
Y) ~.
        \end{aligned}\]</span>

<p>Take the expectation of the last expression with
respect to $Y$, and appeal to the law of iterated expectations, to
arrive at the first part of the desired calculation. Apply similar steps
to evaluate the terms containing $Y$; doing so, we obtain</p>

<span class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} \frac{1}{\sqrt{1-u}} \mathbb E
\frac{\partial f}{\partial z_i} (Z(u)) Y_i &amp;= \sum_{1 \leq i \leq n}
\frac{1}{\sqrt{1-u}} \mathbb E Y_i g_i(Y) \\
        &amp;= \sum_{1 \leq i,j \leq n} \Sigma_{ij}^Y \mathbb E
\frac{\partial^2 f}{\partial z_i \partial z_j} (\sqrt{u} X + \sqrt{1-u}
Y) ~,
    
\end{aligned}\]</span> where, again, this is understood to be
conditional on <span class="math inline">\(X\)</span>. Taking the
expectation of the last expression with respect to <span
class="math inline">\(X\)</span>, and appealing to the law of iterated
expectations, we arrive at the desired calculation. Combining
everything, we have the desired result. ◻</p>
</div>
<h2 id="slepians-inequality">Slepian’s inequality</h2>
<p>We have all the ingredients needed to develop a tool that will help
us construct a lower bound on <span class="math inline">\(\mathbb E
\sup_{t \in T} \: X_t\)</span>. The tool is called <em>Slepian’s
inequality</em>, and admits a preliminary form as follows.</p>
<div id="lem:slepian-prelimianry" class="lemma">
<p><strong>Lemma 7</strong>. Let <span class="math inline">\(X\)</span>
and <span class="math inline">\(Y\)</span> be two Gaussian random
vectors in <span class="math inline">\(\mathbb R^n\)</span>, such that
for all <span class="math inline">\(i,j \in \{1, \dots, n\}\)</span>, we
have <span class="math display">\[\begin{aligned}
        \mathbb E X_i^2 = \mathbb E Y_i^2 ~~\text{and}~~ \mathbb
E[X_i-X_j]^2 \leq \mathbb E[Y_i-Y_j]^2 ~.
    
\end{aligned}\]</span> Let <span class="math inline">\(f: \mathbb R^n
\to \mathbb R\)</span> be a twice-differentiable function. Suppose <span
class="math display">\[\begin{aligned}
        \frac{\partial^2 f}{\partial x_i \partial x_j} &amp;\geq 0 \quad
\text{for all } i \neq j ~.
        \end{aligned}\]</span>

<p>Then,</p>

<span class="math display">\[\begin{aligned}
        \mathbb E f(X) &amp;\geq \mathbb E f(Y) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This is a direct consequence of Gaussian
interpolation (Lemma <a href="#lem:gaussian-interpolation"
data-reference-type="ref"
data-reference="lem:gaussian-interpolation">6</a>). Notice that these
assumptions imply <span class="math inline">\(\Sigma_{ii}^X =
\Sigma_{ii}^Y\)</span> and <span class="math inline">\(\Sigma_{ij}^X
\geq \Sigma_{ij}^Y\)</span> for all <span
class="math inline">\(i,j\)</span>. It is without loss to assume <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> are independent: observe that we can
always pick independent copies of <span class="math inline">\(X\)</span>
and <span class="math inline">\(Y\)</span>, denoted <span
class="math inline">\(\widetilde X\)</span> and <span
class="math inline">\(\widetilde Y\)</span>, respectively, such that
showing <span class="math inline">\(\mathbb E f(X) \geq \mathbb E
f(Y)\)</span> is equivalent to showing <span
class="math inline">\(\mathbb E f(\widetilde X) \geq \mathbb E
f(\widetilde Y)\)</span>. Applying Lemma <a
href="#lem:gaussian-interpolation" data-reference-type="ref"
data-reference="lem:gaussian-interpolation">6</a>, we can then conclude
<span class="math inline">\(\frac{\mathrm{d}}{\mathrm{d} u} \mathbb E f(Z(u)) \geq
0\)</span>, so <span class="math inline">\(\mathbb E f(Z(u))\)</span> is
increasing in <span class="math inline">\(u\)</span>. The desired
conclusion then follows from observing <span
class="math inline">\(\mathbb E f(Z(0)) = \mathbb E f(Y)\)</span> and
<span class="math inline">\(\mathbb E f(Z(1)) = \mathbb E
f(X)\)</span>. ◻</p>
</div>
<p>We can combine everything discussed so far to deduce the following
result.</p>
<div id="thm:slepian" class="theorem">
<p><strong>Theorem 8</strong> (Slepian’s inequality). Let <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> be two Gaussian random vectors in <span
class="math inline">\(\mathbb R^n\)</span>, such that for all <span
class="math inline">\(i,j \in \{1, \dots, n\}\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E X_i^2 = \mathbb E Y_i^2 ~~\text{and}~~ \mathbb
E[X_i-X_j]^2 \leq \mathbb E[Y_i-Y_j]^2 ~.
    
\end{aligned}\]</span> Then, for every <span class="math inline">\(t
\geq 0\)</span>, we have <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} X_i \geq t
\right) \leq \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} Y_i \geq t
\right) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> For every <span class="math inline">\(t\)</span>,
consider the interval <span class="math inline">\((-\infty, t)\)</span>.
Let <span class="math inline">\(h : \mathbb R \to [0,1]\)</span> denote
a nonincreasing, twice-differentiable approximation of <span
class="math inline">\(\mathbb 1 \{(-\infty,t)\} (x)\)</span>. Let <span
class="math inline">\(f: \mathbb R^n \to \mathbb R\)</span> be defined
as <span class="math inline">\(f(x) = h(x_1) \cdots h(x_n)\)</span>.
Then, <span class="math inline">\(f(x)\)</span> approximate <span
class="math inline">\(\mathbb 1 \{ \sup_{1 \leq i \leq n} x_i &lt; t\}
(x)\)</span>. It is not hard to calculate that <span
class="math display">\[\begin{aligned}
        \frac{\partial^2 f}{\partial x_i \partial x_j} = h&#39;(x_i)
h&#39;(x_j) \prod_{k \neq i \text{ and } k \neq j} h(x_k) ~,
    
\end{aligned}\]</span> which, as the product of two nonpositive terms
with <span class="math inline">\(n-2\)</span> nonnegative terms, is
nonnegative. Therefore, we can conclude the result by a direct
application of Lemma <a href="#lem:slepian-prelimianry"
data-reference-type="ref"
data-reference="lem:slepian-prelimianry">7</a>. ◻</p>
</div>
<p>A more useful version of Slepian’s inequality is the following, which
basically removes the requirement of equal variances if we study
processes.</p>
<div id="thm:slepian-fernique" class="theorem">
<p><strong>Theorem 9</strong> (Slepian-Fernique’s inequality). Let <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> and <span
class="math inline">\(\{Y_t\}_{t \in T}\)</span> be Gaussian processes.
Assume, for all <span class="math inline">\(s, t \in T\)</span>, <span class="math display">\begin{equation}\label{as:slepian-fernique}\begin{aligned}

        \mathbb E[X_t-X_s]^2 \geq \mathbb E[Y_t-Y_s]^2 ~.
    
\end{aligned}\end{equation}</span> Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: X_t \geq \mathbb E \sup_{t \in T} \:
Y_t ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The idea is roughly identical as before, in the proof
of Slepian’s inequality. Except, here, we are interested in
approximating the function <span class="math inline">\(f(x) = \max_{1
\leq i \leq n} x_i\)</span> for <span class="math inline">\(x \in
\mathbb R^n\)</span>. Suppose we can deduce that \eqref{eq:gaussian-interpolation}
is nonnegative, i.e. <span class="math inline">\(\mathbb E
f(Z(u))\)</span> is nondecreasing. Then, we can conclude directly
because <span class="math inline">\(f(Z(1)) = \sup_{1 \leq i \leq n}
X_i\)</span> and <span class="math inline">\(f(Z(0)) = \sup_{1 \leq i
\leq n} Y_i\)</span>. The issue is <span class="math inline">\(f(x) =
\max_{1 \leq i \leq n} x_i\)</span> is not differentiable, so we cannot
apply the Gaussian interpolation result directly. We, therefore, rely on
the log-sum-exp approximation of the maximum of <span
class="math inline">\(n\)</span> elements.</p>
<p>To start, let <span class="math display">\[\begin{aligned}
        f_\alpha (x) = \frac1\alpha \log \left( \sum_{1 \leq i \leq n}
e^{\alpha x_i} \right) ~.
    
\end{aligned}\]</span> By the usual convexity arguments, we have <span
class="math display">\[\begin{aligned}
        \max_{1 \leq i \leq n} x_i \leq \frac1\alpha \log \left( \max_{1
\leq i \leq n} e^{\alpha x_i} \right) &amp;\leq f_\alpha (x) \\
        &amp;\leq \frac1\alpha \log \left( n e^{\alpha \max_{1 \leq i
\leq n} x_i} \right) = \frac{\log n}{\alpha} + \max_{1 \leq i \leq n}
x_i ~.
    
\end{aligned}\]</span> Therefore, by the squeeze theorem, <span
class="math inline">\(f_\alpha (x) \to \max_{1 \leq i \leq n}
x_i\)</span> as <span class="math inline">\(\alpha \to
\infty\)</span>.</p>
<p>By direct calculations, <span class="math display">\[\begin{aligned}
        \frac{\partial f_\alpha}{\partial x_i} &amp;= \frac{e^{\alpha
x_i}}{\sum_{1 \leq j \leq n} e^{\alpha x_j}} \triangleq p_i (x) ~, \\
        \frac{\partial^2 f_\alpha}{\partial x_i \partial x_j} &amp;=
\alpha \left\{ \delta_{ij} p_i(x) - p_i(x) p_j(x) \right\} ~.
    
\end{aligned}\]</span> We note the following useful identity: suppose
<span class="math inline">\(\sum_{1 \leq i \leq n} p_i = 1\)</span>;
then, we can write <span class="math inline">\(p_i = 1 - \sum_{j \neq i}
p_j\)</span>, to obtain <span class="math display">\[\begin{aligned}
        &amp;\quad \sum_{1 \leq i,j \leq n} \Sigma_{ij} \left\{
\delta_{ij} p_i - p_i p_j \right\} \\
        &amp;= \sum_{1 \leq i \leq n} \left( \sum_{1 \leq j \leq n}
\Sigma_{ij} - \sum_{j \neq i} \Sigma_{ij} \right) p_i - \sum_{1 \leq i
\leq n} \sum_{1 \leq j \leq n} \Sigma_{ij} p_j p_i \\
        &amp;= \sum_{1 \leq i \leq n} \sum_{1 \leq j \leq n} \Sigma_{ij}
p_i (1 - p_j) - \sum_{1 \leq i \leq n} \sum_{j \neq i} \Sigma_{ij} p_i
\\
        &amp;= \sum_{1 \leq i \leq n} \Sigma_{ii} p_i (1 - p_i) +
\sum_{1 \leq i \leq n} \sum_{j \neq i} \Sigma_{ij} p_i (1 - p_j) -
\sum_{1 \leq i \leq n} \sum_{j \neq i} \Sigma_{ij} p_i \\
        &amp;= \sum_{1 \leq i \leq n} \sum_{j \neq i} \Sigma_{ii} p_i
p_j - \sum_{1 \leq i \leq n} \sum_{j \neq i} \Sigma_{ij} p_i p_j \\
        &amp;= \frac12 \left\{ \sum_{1 \leq i \leq n} \sum_{j \neq i}
(\Sigma_{ii} + \Sigma_{ii} - 2 \Sigma_{ij} ) p_i p_j \right\} ~.
    
\end{aligned}\]</span> We then apply this identity to the Gaussian
interpolation formula, and we obtain <span class="math display">\begin{equation}\label{eq:slepian-fernique-equivalence}\begin{aligned}
        &amp;\quad \frac{\mathrm{d}}{\mathrm{d} u} \mathbb E f_\alpha (Z(u)) \\
        &amp;= \frac{\alpha}{4} \sum_{1 \leq i \leq n} \sum_{j \neq i}
(\Sigma_{ii}^X + \Sigma_{ii}^X - 2 \Sigma_{ij}^X - (\Sigma_{ii}^Y +
\Sigma_{ii}^Y - 2 \Sigma_{ij}^Y) ) \mathbb E [p_i(Z(u)) p_j(Z(u))] \\
         &amp;= \frac{\alpha}{4}
\sum_{1 \leq i \leq n} \sum_{j \neq i}(\mathbb E|X_i - X_j|^2 - \mathbb
E|Y_i - Y_j|^2) \mathbb E [p_i(Z(u)) p_j(Z(u))] ~.
    
\end{aligned}\end{equation}</span> By \eqref{as:slepian-fernique}, \eqref{eq:slepian-fernique-equivalence}
is nonnegative. Therefore, <span class="math inline">\(\mathbb E
f_\alpha (Z(u))\)</span> is increasing in <span
class="math inline">\(u\)</span>. We must then have, by the definiton of
<span class="math inline">\(Z(u)\)</span>, <span
class="math inline">\(\mathbb E f_\alpha (X) \geq \mathbb E f_\alpha
(Y)\)</span>. Passing this inequality to the limit as <span
class="math inline">\(\alpha \to \infty\)</span> gives the desired
result. ◻</p>
</div>
<h2 id="sudakovs-minorization-inequality">Sudakov’s minorization
inequality</h2>
<p>The work from above allows us to deduce a useful lower bound for
Gaussian processes, called <em>Sudakov’s minorization inequality</em>
(or, Sudakov’s inequality in short). This can be deduced from
Slepian-Fernique’s inequality.</p>
<div id="thm:sudakov-minorization" class="theorem">
<p><strong>Theorem 10</strong> (Sudakov’s minorization inequality). Let
<span class="math inline">\(\{X_t\}_{t \in T}\)</span> be a Gaussian
process. For any <span class="math inline">\(\varepsilon \geq
0\)</span>, and letting <span class="math inline">\(d(s,t) = (\mathbb
E[X_t-X_s]^2)^{\frac12}\)</span> be the <em>canonical metric</em>, we
have <span class="math display">\[\begin{aligned}
        c \varepsilon \sqrt{\log N(\varepsilon, T, d)} \leq \mathbb E
\sup_{t \in T} \: X_t ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The idea of the proof is to compare <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> with a simpler Gaussian
process, as follows. Suppose <span class="math inline">\(D\)</span> is a
maximal <span class="math inline">\(\varepsilon\)</span>-packing of
<span class="math inline">\(T\)</span>. Then, by Lemma <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#lem:covering-packing-comparisons" data-reference-type="ref"
data-reference="lem:covering-packing-comparisons">[lem:covering-packing-comparisons]</a>,
<span class="math inline">\(D\)</span> is automatically a <span
class="math inline">\(\varepsilon\)</span>-cover of <span
class="math inline">\(T\)</span>. Therefore, restricting the process to
<span class="math inline">\(D\)</span>, it suffices to show the
inequality <span class="math inline">\(\mathbb E \sup_{t \in D} X_t \geq
\varepsilon \sqrt{\log N(\varepsilon, T, d)}\)</span>. A much simpler
process we can look at is by noticing that, by definition, <span
class="math inline">\(d(s,t)^2 \geq \varepsilon^2\)</span> for <span
class="math inline">\(s, t \in D\)</span>. Therefore, we can compare
<span class="math inline">\(\{X_t\}_{t\in D}\)</span> to <span
class="math inline">\(\{Y_t\}_{t \in D}\)</span>, where <span
class="math inline">\(Y_t = \frac{\varepsilon}{\sqrt{2}} Z_t\)</span>,
where <span class="math inline">\(Z_t\)</span> are independent standard
normal random variables. By construction, since <span
class="math inline">\(Z_s - Z_t \sim \mathcal N(0,2)\)</span>, it
follows that <span class="math inline">\(\mathbb E[Y_t - Y_s]^2 =
\frac{\varepsilon}{\sqrt{2}} \mathbb E[Z_s - Z_t]^2 =
\varepsilon^2\)</span>. This means we have <span
class="math inline">\(\mathbb E[X_t - X_s]^2 \geq \mathbb E[Y_t -
Y_s]^2\)</span> for all <span class="math inline">\(s,t \in D\)</span>,
which permits us to apply Slepian-Fernique’s inequality to conclude
<span class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in D} X_t \geq \mathbb E \sup_{t \in D} Y_t =
\frac{\varepsilon}{\sqrt{2}} \mathbb E \sup_{t \in D} Z_t \geq
c\varepsilon \sqrt{\log N(\varepsilon, T, d)} ~,
    
\end{aligned}\]</span> where the last inequality follows from Lemma <a
href="#lem:iid-gaussian-rvs-upper-lower-bounds"
data-reference-type="ref"
data-reference="lem:iid-gaussian-rvs-upper-lower-bounds">1</a>. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 11</strong> (Brief return to Example <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#eg:covering-number-bound-euclidean" data-reference-type="ref"
data-reference="eg:covering-number-bound-euclidean">[eg:covering-number-bound-euclidean]</a>).
Consider the <span class="math inline">\(\ell^1\)</span> ball in <span
class="math inline">\(\mathbb R^d\)</span> again. For <span
class="math inline">\(T = B_1^d\)</span>, Sudakov’s minorization
inequality (Theorem <a href="#thm:sudakov-minorization"
data-reference-type="ref"
data-reference="thm:sudakov-minorization">10</a>) tells us that for any
<span class="math inline">\(g \sim \mathcal N(0, I_d)\)</span>, we have
<span class="math inline">\(\mathbb E \sup_{t \in B_1^d} \langle g, t
\rangle = \mathbb E \sup_{1 \leq i \leq d} |g_i| \leq C \sqrt{\log
d}\)</span>. Therefore, Sudakov’s minorization inequality tells us that
<span class="math display">\[\varepsilon \sqrt{\log N(\varepsilon,
B_1^d)} \leq C \varepsilon \sqrt{\log d} ~,\]</span> i.e. <span
class="math display">\[N(\varepsilon, B_1^d) \leq
d^{\frac{C}{\varepsilon^2}} ~.\]</span> This is a dramatically better
result than that in Example <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#eg:covering-number-bound-euclidean" data-reference-type="ref"
data-reference="eg:covering-number-bound-euclidean">[eg:covering-number-bound-euclidean]</a>.</p>
</div>
<p>Now we have established a lower bound to <span
class="math inline">\(\mathbb E \sup_{t \in T} \: X_t\)</span> for some
index set <span class="math inline">\(T\)</span> (potentially infinite).
A question we can ask is: what is the gap between the maximal inequality
(given by, e.g. Dudley’s entropy bound) and Sudakov’s inequality? It
turns out the gap is logarithmically large. A formalization of this
result in <span class="math inline">\(T \subset \mathbb R^d\)</span> is
as follows.</p>
<div id="thm:sudakov-two-sided-Rd" class="theorem">
<p><strong>Theorem 12</strong>. Let <span class="math inline">\(T
\subset \mathbb R^d\)</span>. Define <span
class="math display">\[\begin{aligned}
        s(T) \triangleq \sup_{\varepsilon \geq 0} \varepsilon \sqrt{\log
N(T,\varepsilon)} ~.
    
\end{aligned}\]</span> Then, there exists some universal constants <span
class="math inline">\(c\)</span> and <span
class="math inline">\(C\)</span> such that <span class="math display">\begin{equation}\label{eq:sudakov-two-sided-Rd}\begin{aligned}

        c s(T) \leq \mathbb E \sup_{t \in T} \: \langle g, t \rangle
\leq C \log (d) s(T) ~,
    
\end{aligned}\end{equation}</span> where <span class="math inline">\(g \sim \mathcal
N (0, I_d)\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The lower bound in \eqref{eq:sudakov-two-sided-Rd}
is an immediate consequence of Sudakov’s minorization inequality. The
upper bound is derived from the fact that the process of chaining would
link two points in <span class="math inline">\(T\)</span> very quickly;
the “quickness” can be seen from the discrete version of Dudley’s
entropy bound—namely, through the <span
class="math inline">\(2^{-k}\)</span> factor. We trace this logic
backwards to arrive at the upper bound.</p>
<p>We begin chaining at the scale <span
class="math inline">\(\operatorname{diam} (T)\)</span>. Let <span
class="math inline">\(k_0\)</span> be the smallest integer such that
<span class="math inline">\(2^{-k_0} &lt; \operatorname{diam}
(T)\)</span>. In finitely many steps, up to the scale <span
class="math inline">\(K\)</span> to be determined later, we can control
<span class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: \langle g, t \rangle = \sum_{k_0 + 1
\leq k \leq K} \mathbb E \sup_{t \in T} \: \{ X_{\pi_k(t)} -
X_{\pi_{k-1}(t)} \} + \mathbb E \sup_{t \in T} \: \{ X_t - X_{\pi_K(t)}
\} ~.
    
\end{aligned}\]</span> The finite sum as above is straightforward to
control. For the second term, note that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: \{ X_t - X_{\pi_K(t)} \} &amp; =
\mathbb E \sup_{t \in T} \: \langle g, t - \pi_{K}(t) \rangle \\
        &amp;\leq 2^{-K} \mathbb E \lVert g \rVert_2 \\
        &amp;\leq 2^{-K} \sqrt{n} ~,
        \end{aligned}\]</span>

<p>so, picking $K$ as the largest integer such that
$2^{-K} \geq \frac{\mathbb E \sup_{t \in T} \: \langle g, t \rangle}{4
\sqrt{d}}$, we must then have</p>

<span class="math display">\[\begin{aligned}
        &amp;\leq \frac12 \mathbb E \sup_{t \in T} \: \langle g, t
\rangle ~.
    
\end{aligned}\]</span> Combining everything above, we have <span class="math display">\begin{equation}\label{eq:sudakov-two-sided-final-bound}\begin{aligned}

        \mathbb E \sup_{t \in T} \: \langle g, t \rangle \leq 2
\sum_{k_0 + 1 \leq k \leq K} \mathbb E \sup_{t \in T} \: \{ X_{\pi_k(t)}
- X_{\pi_{k-1}(t)} \} ~.
    
\end{aligned}\end{equation}</span> By our chocie of <span
class="math inline">\(k_0\)</span> and <span
class="math inline">\(K\)</span>, there are only finitely many terms;
namely, <span class="math display">\[\begin{aligned}
        K - k_0 &amp;\leq -\log_2 \left( \frac{\mathbb E \sup_{t \in T}
\: \langle g, t \rangle}{4 \sqrt{d}} \right) + \log_2
\operatorname{diam} (T) \\
        &amp;\leq \log_2 (4 \sqrt{2\pi} \sqrt{d}) \leq C \log d ~,
    
\end{aligned}\]</span> where the second inequality follows from the fact
that <span class="math display">\[\begin{aligned}
        \frac{1}{\sqrt{2\pi}} \operatorname{diam}(T) \leq \mathbb E
\sup_{t \in T} \: \langle g, t \rangle \leq \frac{\sqrt{d}}{2}
\operatorname{diam}(T) ~.
    
\end{aligned}\]</span> Therefore, \eqref{eq:sudakov-two-sided-final-bound}
is further bounded from above by <span class="math inline">\(C \log
d\)</span> multiplied by some constant. ◻</p>
</div>
<h2 id="brief-digression-to-symmetrized-processes">Brief digression to
symmetrized processes</h2>
<p>Sudakov’s minorization inequality (Theorem <a
href="#thm:sudakov-minorization" data-reference-type="ref"
data-reference="thm:sudakov-minorization">10</a>) unfortunately does not
extend to symmetrized processes without significant modifications. The
difficulty of the modification is somewhat substantial, as evidenced by
the following example. Suppose <span class="math inline">\(T_n = \{e_1,
\dots, e_n\}\)</span> denotes the canonical basis of <span
class="math inline">\(\mathbb R^n\)</span>. Let <span
class="math inline">\(\lVert \cdot \rVert_2\)</span> denote the
Euclidean distance on <span class="math inline">\(\mathbb R^n\)</span>.
Then, <span class="math inline">\(\mathbb E \sup_{t \in T_n} |\sum_{1
\leq k \leq n} \varepsilon_k t_k| = 1\)</span>; however, for any <span
class="math inline">\(\varepsilon &lt; 1\)</span>, we have <span
class="math inline">\(N(\varepsilon, T_n, \lVert \cdot \rVert_2) =
n\)</span>, so Sudakov’s minorization inequality fails to hold without
additional assumptions. It turns out the difficulty is that we cannot
have <span class="math inline">\(\mathbb E \sup_{t \in T_n} |\sum_{1
\leq k \leq n} \varepsilon_k t_k|\)</span> be “too large” on <span
class="math inline">\(T_n\)</span>.</p>
<div id="thm:sudakov-minorization-for-symmetrized" class="theorem">
<p><strong>Theorem 13</strong> (Sudakov’s minorization inequality for
symmetrized processes). If there exists a finite constant <span
class="math inline">\(K &gt; 0\)</span> such that for all <span
class="math inline">\(n \in \mathbb N\)</span>, <span
class="math inline">\(\varepsilon &gt; 0\)</span>, and bounded subset
<span class="math inline">\(T \subset \mathbb R^n\)</span>, the
inequality <span class="math display">\begin{equation}\label{eq:sudakov-minorization-symmetrized-as1}\begin{aligned}

        \mathbb E \sup_{t \in T} \left| \sum_{1 \leq k \leq n}
\varepsilon_k t_k \right| \leq \frac1K \frac{\varepsilon^2}{\max_{1 \leq
k \leq n} |t_k|} ~~ \text{is true for all } t \in T ~,
    
\end{aligned}\end{equation}</span> then <span class="math display">\[\begin{aligned}
        \varepsilon \sqrt{\log (\varepsilon, T, \lVert \cdot \rVert_2)}
\lesssim \mathbb E \sup_{t \in T} \left| \sum_{1 \leq k \leq n}
\varepsilon_k t_k \right| ~.
    
\end{aligned}\]</span></p>
</div>
<p>The proof of this result is rather complicated, but can roughly be
subdivided into two steps. Below, <span class="math inline">\(\lVert
\cdot \rVert_2\)</span> suppresses the dependence on <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>.</p>
<div id="lem:rademacher-process-norm-comparisons-ell2-ell1"
class="lemma">
<p><strong>Lemma 14</strong> (<span class="math inline">\(L^1\)</span>
and <span class="math inline">\(L^2\)</span> norm comparison). For any
<span class="math inline">\(t \in \mathbb R^n\)</span> and any <span
class="math inline">\(n \in \mathbb N\)</span>, <span class="math display">\begin{equation}\label{eq:rademacher-process-norm-comparisons-ell2-ell1}\begin{aligned}

        \left\lVert \sum_{1 \leq k \leq n} \varepsilon_k t_k
\right\rVert_2 \leq \sqrt{3} \left\lVert \sum_{1 \leq k \leq n}
\varepsilon_k t_k \right\rVert_1 ~.
    
\end{aligned}\end{equation}</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Applying Hölder’s inequality gives <span
class="math display">\[\begin{aligned}
        \mathbb E \left| \sum_{1 \leq k \leq n} \varepsilon_k t_k
\right|^2 \leq \left( \mathbb E \left| \sum_{1 \leq k \leq n}
\varepsilon_k t_k \right| \right)^s \left( \mathbb E \left| \sum_{1 \leq
k \leq n} \varepsilon_k t_k \right|^{\frac{2-s}{1-s}} \right)^{1-s} ~.
    
\end{aligned}\]</span> To optimize, we set <span class="math inline">\(s
= \frac23\)</span>, so that <span class="math inline">\(\frac{2-s}{1-s}
= 4\)</span>, and <span class="math display">\[\begin{aligned}
        \mathbb E \left| \sum_{1 \leq k \leq n} \varepsilon_k t_k
\right|^2 \leq \left( \mathbb E \left| \sum_{1 \leq k \leq n}
\varepsilon_k t_k \right| \right)^{\frac23} \left( \mathbb E \left|
\sum_{1 \leq k \leq n} \varepsilon_k t_k \right|^4 \right)^{\frac13} ~.
    
\end{aligned}\]</span> But note that <span
class="math display">\[\begin{aligned}
        \mathbb E \left[ \sum_{1 \leq k \leq n} \varepsilon_k t_k
\right]^4 = \sum_{1 \leq k \leq n} t_k^4 + 6 \sum_{i &lt; j} t_i^2 t_j^2
\leq 3 \left( \sum_{1 \leq i \leq n} t_i^2 \right) = 3 \left( \mathbb E
\left[ \sum_{1 \leq k \leq n} \varepsilon_k t_k \right]^2 \right)^2 ~,
    
\end{aligned}\]</span> so applying the Littlewood argument gives us the
desired bound in \eqref{eq:rademacher-process-norm-comparisons-ell2-ell1}. ◻</p>
</div>
<div id="lem:mgf-standard-normal-bound" class="lemma">
<p><strong>Lemma 15</strong> (Moment generating function bound). Let
<span class="math inline">\(g\)</span> be a standard normal random
variable. Let <span class="math inline">\(h = g \mathbb 1 \{ |g| &gt; w
\}\)</span> for some <span class="math inline">\(w &gt; 0\)</span>.
Then, <span class="math display">\[\begin{aligned}
        \mathbb E e^{\lambda h} \leq 1 + 16 \lambda^2
e^{-\frac{w^2}{32}} \leq e^{16 \lambda^2 e^{-\frac{w^2}{32}}}
    
\end{aligned}\]</span> where <span class="math inline">\(\lambda \in
[0,\frac{w}{4}]\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let <span class="math inline">\(u(\lambda) = \mathbb
E e^{\lambda h} - 1 - 16 \lambda^2 e^{-\frac{w^2}{32}}\)</span> for
<span class="math inline">\(\lambda \geq 0\)</span>. Then, clearly,
<span class="math inline">\(f(0) = 0\)</span> and <span
class="math inline">\(f&#39;(0) = 0\)</span>. To prove the inequality,
it suffices to show convexity on a small interval, namely <span
class="math inline">\(f&#39;&#39;(\lambda) \leq 0\)</span> on <span
class="math inline">\(\lambda \in [0,\frac{w}{4}]\)</span>. Notice that
<span class="math inline">\(f&#39;&#39;(\lambda) = \mathbb E[h^2
e^{\lambda h}] - 32 e^{-\frac{w^2}{32}}\)</span>. The rest of the
calculations are routine: on <span class="math inline">\(\lambda \leq
\frac{w}{4}\)</span> and <span class="math inline">\(w &lt;
|x+\lambda|\)</span>, we must have that <span class="math inline">\(w
&lt; |x+\lambda| \leq x + \frac{w}{4} &lt; x + \frac{w}{2}\)</span> by
the triangle inequality. Therefore, <span
class="math display">\[\begin{aligned}
        \{ x : |x+\lambda| &gt; w \} \subset \left\{ x : |x| &gt;
\frac{w}{2} \right\} ~.
    
\end{aligned}\]</span> As such, <span
class="math display">\[\begin{aligned}
        \mathbb E[h^2 e^{\lambda h}] &amp;= e^{\frac{\lambda^2}{2}}
\int_{|x+\lambda|&gt;w} (x+\lambda)^2
\frac{e^{-\frac{x^2}{2}}}{\sqrt{2\pi}} \mathrm{d} x \\
        &amp;\leq 4 e^{\frac{\lambda^2}{2}} \int_{|x|&gt;2w} x^2
\frac{e^{-\frac{x^2}{2}}}{\sqrt{2\pi}} \mathrm{d} x \\
        &amp;\leq 16 e^{\frac{\lambda^2}{2}} \int_{|x|&gt;2w}
\frac{e^{-\frac{x^2}{2}}}{\sqrt{2\pi}} \mathrm{d} x \\
        &amp;\leq 32 e^{\frac{\lambda^2}{2} - \frac{w^2}{16}} \leq 32
e^{-\frac{w^2}{32}} ~,
    
\end{aligned}\]</span> which concludes the proof. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:sudakov-minorization-for-symmetrized"
data-reference-type="ref"
data-reference="thm:sudakov-minorization-for-symmetrized">13</a>.</em>
As mentioned, the main difficult is to somehow control the expected
supremum of the Rademacher process—that it cannot grow (too) large. To
do so, we need to check that the behaviour of the expected supremum is
<em>not</em> “too volatile” when we restrict our analysis to the closed
unit ball. Concretely, here is the main hurdle: let <span
class="math inline">\(\overline B_2 \triangleq \{ x \in \mathbb R^n :
\lVert x \rVert_2 \leq 1\}\)</span>, <span class="math inline">\(S_T
\triangleq \mathbb E \sup_{t \in T} |\sum_{1 \leq k \leq n}
\varepsilon_k t_k|\)</span> for <span class="math inline">\(T \subset
\overline B_2\)</span>, and assume \eqref{eq:sudakov-minorization-symmetrized-as1}
holds for <span class="math inline">\(\varepsilon=1\)</span>. Then, we
need to prove there exists a universal constant <span
class="math inline">\(K\)</span> such that <span class="math display">\begin{equation}\label{eq:sudakov-minorization-symmetrized-main-hurdle}\begin{aligned}

    \sqrt{\log N(\varepsilon, T, \lVert \cdot \rVert_2)} \leq K S_T ~.
\end{aligned}\end{equation}</span> If we can show such a <span
class="math inline">\(K\)</span> exists, then we can conclude the
desired statement holds by increasing/decreasing <span
class="math inline">\(\varepsilon\)</span>.</p>
<ol>
<li><p>There is nothing to prove if <span
class="math inline">\(T\)</span> is contained in the closed ball of
radius <span class="math inline">\(\frac12\)</span>. So, we assume <span
class="math inline">\(T\)</span> has at least one point that has <span
class="math inline">\(\ell^2\)</span> norm strictly greater than <span
class="math inline">\(\frac12\)</span>. Then, Lemma <a
href="#lem:rademacher-process-norm-comparisons-ell2-ell1"
data-reference-type="ref"
data-reference="lem:rademacher-process-norm-comparisons-ell2-ell1">14</a>
tells us <span class="math inline">\(S_T\)</span> is bounded below, and
<span class="math inline">\(S_T \geq \frac{1}{2\sqrt{3}}\)</span>. So,
let <span class="math inline">\(U \subset T\)</span> be such that <span
class="math inline">\(|U| = N(\frac12, T, \lVert \cdot
\rVert_2)\)</span> and <span class="math inline">\(\lVert u - v \rVert_2
\geq \frac12\)</span> for all <span class="math inline">\(u, v \in
U\)</span> and <span class="math inline">\(u \neq v\)</span>. Note that
the <span class="math inline">\(\varepsilon\)</span>-covering number is
finite for all <span class="math inline">\(\varepsilon &gt; 0\)</span>
since <span class="math inline">\(T\)</span> is bounded, and such a set
<span class="math inline">\(U\)</span> exists by the definition of <span
class="math inline">\(\varepsilon\)</span>-covering number.</p>
<p>Therefore, we can readily use Sudakov’s minorization inequality
(Theorem <a href="#thm:sudakov-minorization" data-reference-type="ref"
data-reference="thm:sudakov-minorization">10</a>). Define the norm <span
class="math display">\[\begin{aligned}
    \lVert G \rVert_U \triangleq \sup_{u \in U} \left| \sum_{1 \leq k
\leq n} g_k u_k \right| ~,
\end{aligned}\]</span> where <span class="math inline">\(\{g_k\}_{1 \leq
k \leq n}\)</span> are i.i.d. standard normal random variables. Applying
Sudakov’s inequality gives <span class="math display">\[\begin{aligned}
    %C_0 \sqrt{\log N(\frac12, T, \lVert \cdot \rVert_2)} =
    C_0 \sqrt{\log |U|} \leq \mathbb E \lVert G \rVert_U
\end{aligned}\]</span> for some universal constant <span
class="math inline">\(C_0\)</span>. For another universal constant <span
class="math inline">\(C_1\)</span>, the integrability of Gaussian
processes implies that if <span class="math inline">\(m_G\)</span> is
the median of <span class="math inline">\(\lVert G \rVert_U\)</span>,
the <span class="math display">\[\begin{aligned}
    C_2 \mathbb E \lVert G \rVert_U \leq m_G ~.
\end{aligned}\]</span> Combining everything, for <span
class="math inline">\(K_1 = \frac{1}{C_0 C_1}\)</span>, we have <span
class="math display">\[\begin{aligned}
    \frac{1}{K_1} \sqrt{\log |U|} \leq m_G ~,
\end{aligned}\]</span> and assume <span class="math inline">\(K_1 &gt;
0\)</span> without loss. Therefore, <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(\lVert G \rVert_U \geq K_1^{-1} \sqrt{\log |U|})
\geq \frac12 ~.
\end{aligned}\]</span></p></li>
<li><p>We need to now rescale everything appropriately. Since <span
class="math inline">\(S_T\)</span> is bounded from below, there exists
some constant <span class="math inline">\(\beta \geq 1\)</span> such
that <span class="math inline">\(\sqrt{\log |U|} \leq \beta K_2
S_T\)</span>, where <span class="math inline">\(K_2 = (1000
K_1)^2\)</span>. By ongoing assumption, we assume <span
class="math inline">\(\sup_{1 \leq k \leq n} |t_k| \leq \frac{1}{K
S_T}\)</span> for all <span class="math inline">\(t \in T\)</span>. If
it were true that <span class="math display">\begin{equation}\label{eq:sudakov-minorization-symmetrized-step2}\begin{aligned}

    \mathbf P\,\,\!\!\left( \lVert G \rVert_U \geq \frac{\beta
K_2}{2K_1} S_T \right) &lt; \frac12 ~,
\end{aligned}\end{equation}</span> then we can conclude from the fact <span
class="math inline">\(\{\lVert G \rVert_U \geq K_1^{-1} \sqrt{\log
|U|}\} \cap \{\lVert G \rVert_U \geq \frac{\beta K_2}{2K_1} S_T\} \neq
\emptyset\)</span> that <span class="math inline">\(K_1^{-1} \sqrt{\log
|U|} \leq \frac{\beta K_2}{2K_1} S_T\)</span>, or, equivalently, <span
class="math display">\[\begin{aligned}
    \sqrt{\log |U|} \leq \frac{\beta}{2} K_2 S_T ~.
\end{aligned}\]</span> If <span
class="math inline">\(\frac{\beta}{2}\)</span> is strictly greater than
1, we can iterate the argument until we get a constant <span
class="math inline">\(\widetilde \beta\)</span> such that <span
class="math inline">\(\frac{\widetilde \beta}{2} \leq 1\)</span>, from
which we clearly will obtain the desired conclusion. We’ll now show \eqref{eq:sudakov-minorization-symmetrized-step2}
is true.</p></li>
<li><p><u>Claim: \eqref{eq:sudakov-minorization-symmetrized-step2}
is true.</u> For some <span class="math inline">\(w &gt; 0\)</span>, set
<span class="math inline">\(h_k = g_k \mathbb 1 \{|g_k| &gt;
w\}\)</span> and <span class="math inline">\(m_k = g_k - h_k\)</span>
for all <span class="math inline">\(1 \leq k \leq n\)</span>. By the
union bound, we have <span class="math display">\begin{equation}\label{eq:sudakov-minorization-symmetrized-main-estimate}\begin{aligned}

    \mathbf P\,\,\!\!\left( \lVert G \rVert_U \geq \frac{\beta
K_2}{2K_1} S_T \right) \leq \underbrace{\mathbf P\,\,\!\!\left( \sup_{u
\in U} \left| \sum_{1 \leq k \leq n} m_k u_k \right| &gt; \frac{\beta
K_2}{4K_1} S_T \right)}_{\ast} + \underbrace{\mathbf P\,\,\!\!\left(
\sup_{u \in U} \left| \sum_{1 \leq k \leq n} h_k u_k \right| &gt;
\frac{\beta K_2}{4K_1} S_T \right)}_{\star} ~.
\end{aligned}\end{equation}</span> For <span class="math inline">\(\ast\)</span>, by
symmetrization bounds, we can “contract” and obtain, via Markov’s
inequality, <span class="math display">\[\begin{aligned}
    \ast &amp;\leq \frac{4 K_1 s \mathbb E_g \mathbb E_\varepsilon
\sup_{u \in U} |\sum_{1 \leq i \leq n} \frac{\varepsilon_k u_k
m_k}{|m_k|}|}{\beta K_2 \mathbb E \sup_{u \in U} |\sum_{1 \leq i \leq n}
\varepsilon_k u_k|} \leq \frac{4 K_1 w}{\beta K_2} ~,
\end{aligned}\]</span> where <span class="math inline">\(\mathbb
E_g\)</span> denotes conditional expectation (conditional on <span
class="math inline">\(g=\{g_1, \dots, g_n\}\)</span>), and the second
inequality follows from a symmetrization upper bound.</p>
<p>For <span class="math inline">\(\star\)</span>, estimating it is
slightly trickier. If <span class="math inline">\(\lambda \leq
\frac{w}{4} K S_T\)</span> and <span class="math inline">\(u \in
U\)</span>, then the assumption \eqref{eq:sudakov-minorization-symmetrized-as1}
tells us <span class="math inline">\(\lambda u_k \leq
\frac{w}{4}\)</span>. So, an application of Lemma <a
href="#lem:mgf-standard-normal-bound" data-reference-type="ref"
data-reference="lem:mgf-standard-normal-bound">15</a> tells us <span
class="math inline">\(\mathbb E e^{\lambda h_k u_k} \leq e^{16 \lambda^2
u_k^2 e^{-\frac{w^2}{32}}}\)</span>. We can then use symmetry to
estimate <span class="math inline">\(\star\)</span>: a symmetric random
variable <span class="math inline">\(W\)</span> satisfies <span
class="math display">\[\begin{aligned}
    \mathbb E e^{\lambda|W|} \leq \mathbb E [e^{\lambda W} \mathbb 1 \{W
\geq 0\}] + \mathbb E [e^{-\lambda W} \mathbb 1 \{W \leq 0\}] \leq 2
\mathbb E e^{\lambda W} ~.
\end{aligned}\]</span> So, writing <span class="math inline">\(H_n =
\sum_{1 \leq k \leq n} h_k u_k\)</span>, we can then conclude <span
class="math display">\[\begin{aligned}
    \mathbb E e^{\lambda|H_n|} \leq 2 \mathbb E e^{\lambda H_n}
&amp;\leq 2 \prod_{1 \leq k \leq n} e^{16 \lambda^2 e^{-\frac{w^2}{32}}
\sum_{1 \leq k \leq n} u_k^2} \leq 2 \prod_{1 \leq k \leq n} e^{16
\lambda^2 e^{-\frac{w^2}{32 }}} ~.
\end{aligned}\]</span> Appealing to Markov’s inequality again, we have
<span class="math display">\[\begin{aligned}
    \star &amp;\leq 2 |U| \exp \left( 16 \lambda^2 e^{-\frac{w^2}{32}} -
\lambda \frac{\beta K_1}{4K_2} S_T \right) ~.
\end{aligned}\]</span> We can then estimate \eqref{eq:sudakov-minorization-symmetrized-main-estimate}.
To get sufficient cancellations, we choose <span class="math inline">\(w
= \frac{\beta K_2}{10 K_1}\)</span> and <span
class="math inline">\(\lambda = \frac{\beta K_2^2 S_T}{40 K_1}\)</span>
(to kill the dominating positive term in the second probability).
Combining everything above gives us <span
class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!\left( \lVert G \rVert_U \geq \frac{\beta
K_2}{2K_1} S_T \right) &amp;\leq \frac25 +  2 \exp \bigg( \beta^2 K_2^2
S_T^2 \bigg( 1 - \frac{K_2}{160 K_1^2} + \frac{16 K_2^2}{1600 K_1^2}
\exp \bigg( - \frac{\beta^2 K_2^2}{32(10 K_1)^2} \bigg) \bigg) \bigg) ~.
\end{aligned}\]</span> Since <span class="math inline">\(K_2 = (1000
K_1)^2\)</span> as chosen before, the exponent is negative and large in
absolute value (after we appeal to <span class="math inline">\(S_T \geq
\frac{1}{2\sqrt3}\)</span>). So, the upper bound is strictly less than
<span class="math inline">\(\frac12\)</span>, and this concludes the
proof of the inequality in \eqref{eq:sudakov-minorization-symmetrized-step2}.</p></li>
<li><p>To conclude the proof, we have to show that the statement of the
theorem follows from showing the statement is true for <span
class="math inline">\(\varepsilon = \frac12\)</span>. This is
straightforward from a covering argument at scale <span
class="math inline">\(2^{-k}\)</span>. In particular, given any <span
class="math inline">\(\varepsilon &gt; 0\)</span>, pick <span
class="math inline">\(k\)</span> such that <span
class="math inline">\(\varepsilon \in (2^{-k}, 2^{-k+1}]\)</span>. Note
that the scaling properties of covering number in radius allows us to
assume <span class="math inline">\(T \subset \overline B_2\)</span>
without loss. Then, for any given cover of <span
class="math inline">\(T\)</span> by balls of radius <span
class="math inline">\(2^{-\ell+1}\)</span>, we can always find a
“refinement” by balls of radius <span
class="math inline">\(2^{-\ell}\)</span> (by iteratively combining
covers by balls of radius <span class="math inline">\(2^{-\ell}\)</span>
of each of the ball of radius <span
class="math inline">\(2^{-\ell+1}\)</span>). Appealing to the scaling
property of the covering number in radius again, we have <span
class="math display">\[\begin{aligned}
    N(\varepsilon, T, \lVert \cdot \rVert_2) \leq N(2^{-k}, T, \lVert
\cdot \rVert_2) \leq \prod_{1 \leq \ell \leq k} \sup_{t \in T}
N(2^{-\ell}, T \cap \overline B_2 (t, 2^{-\ell+1}), \lVert \cdot
\rVert_2) ~,
\end{aligned}\]</span> where <span class="math inline">\(\overline B_2
(t, 2^{-\ell+1})\)</span> denotes the closed Euclidean ball of radius
<span class="math inline">\(2^{-\ell+1}\)</span> centred at <span
class="math inline">\(t\)</span>. Iteratively construct refinements as
follows: if <span class="math inline">\(\widetilde T = T \cap \overline
B_2 (t, 2^{-\ell+1})\)</span> and <span class="math inline">\(\breve T =
2^{\ell-1} \widetilde T \subset \overline B_2\)</span> (by
construction), we must then have <span class="math display">\begin{equation}\label{eq:sudakov-minorization-symmetrized-covering-no-equivalence}\begin{aligned}
    S_{\breve T} &amp;= 2^{\ell-1} S_{\widetilde T} \leq 2^{\ell-1} S_T
~, \\
    N\left(\frac12, \breve T, \lVert \cdot \rVert_2\right) &amp;=

N\left(\frac12, 2^{\ell-1} \widetilde T, \lVert \cdot \rVert_2\right) =
N(2^{-\ell}, \widetilde T, \lVert \cdot \rVert_2) ~.
\end{aligned}\end{equation}</span> It then follows that <span
class="math display">\[\begin{aligned}
    \sup_{t \in \breve T} \sup_{1 \leq k \leq n} |t_k| &amp;= \sup_{t
\in \widetilde T} \sup_{1 \leq k \leq n} 2^{\ell-1} |t_k| = 2^{\ell-1}
\frac{\varepsilon^2}{K_2 S_T} \leq 2^{2(\ell-1)}
\frac{\varepsilon^2}{K_2 S_{\breve T}} \leq \frac{1}{K_2 S_{\breve T}}
\end{aligned}\]</span> by our choice of <span
class="math inline">\(\varepsilon\)</span>. Using the estimate above and
\eqref{eq:sudakov-minorization-symmetrized-covering-no-equivalence},
we estimate the metric entropy using <span
class="math display">\[\begin{aligned}
    \log N(2^{-\ell}, T \cap \overline B_2 (t, 2^{-\ell+1}), \lVert
\cdot \rVert_2) = \log N\left(\frac12, \breve T, \lVert \cdot \rVert_2
\right) \leq K_2^2 S_{\breve T}^2 \leq 2^{2(\ell-1)} K_2^2
\frac{S_T^2}{\varepsilon^2} ~.
\end{aligned}\]</span> This implies we can always estimate the metric
entropy by summing up the estimate above from <span
class="math inline">\(\ell=1\)</span> to <span
class="math inline">\(\ell=k\)</span>, and we have <span
class="math display">\[\begin{aligned}
    \log N(\varepsilon, T, \lVert \cdot \rVert_2) \leq K_2^2 S_T^2
\sum_{1 \leq \ell \leq k} 2^{2(\ell-1)} &lt; 2 K_2^2
\frac{S_T^2}{\varepsilon^2} ~.
\end{aligned}\]</span></p></li>
</ol>
<p>From here, since we’ve already proven the statement is true for <span
class="math inline">\(\varepsilon=\frac12\)</span>, we can use step 4 to
reach the desired conclusion. ◻</p>
</div>
<h2 id="gaussian-complexity">Gaussian Complexity</h2>
<p>We take a brief detour to understand how to anlayze a collection of
random variables <span class="math inline">\(\{X_\theta : \theta \in
T\}\)</span> indexed by <span class="math inline">\(T\)</span>, it is
frequently of interest to analyze how the behaviour of this stochastic
process depends on the structure of the set <span
class="math inline">\(T\)</span>. We define the <em>Gaussian
complexity</em> of the set <span class="math inline">\(T\)</span> as
<span class="math display">\[\begin{aligned}
    \mathcal G (T) \triangleq \mathbb E \sup_{\theta \in T} \langle w,
\theta \rangle
\end{aligned}\]</span> for i.i.d. standard normal random variables <span
class="math inline">\(w_i \in \mathcal N(0,1)\)</span>. Like the metric
entropy, the functional <span class="math inline">\(\mathcal
G(T)\)</span> measures the size of the set <span
class="math inline">\(T\)</span> in a certain sense. We can estimate the
Gaussian complexity of a set in a couple of examples.</p>
<div class="example">
<p><strong>Example 16</strong> (<span
class="math inline">\(\ell^q\)</span>-ball). The <span
class="math inline">\(\ell^q\)</span>-ball of unit radius is given by
<span class="math inline">\(B_d (1) \triangleq \{ \theta \in \mathbb R^d
: \|\theta\| \leq 1 \}\)</span>. Here, <span
class="math inline">\(\|\theta\|_q\)</span> is the <span
class="math inline">\(\ell^q\)</span> norm, and <span
class="math inline">\(\|\theta\|_\infty\)</span> is the sup-norm (<span
class="math inline">\(\ell^\infty\)</span> norm). By Hölder’s
inequality, for <span class="math inline">\(\mathbf P\,\,\!\!\)</span>
such that <span class="math inline">\(\frac1p + \frac1q = 1\)</span>,
<span class="math display">\[\begin{aligned}
        \mathcal{G} (B_q^d (1))
        &amp;\overset{\text{(i)}}{\leq}
        \mathbb E \|w\|_p = d^{\frac1p} \mathbb E \left[
        \left( \frac{1}{d} \sum_{1 \leq k \leq d} |w_k|^p \right)^{1/p}
        \right] \overset{\text{(ii)}}{\leq}
        d^{\frac1p}
        \left[ \mathbb E |w_1|^p \right]^{\frac1p}
\overset{\text{(iii)}}{&lt;} \infty ~,
    
\end{aligned}\]</span> where (ii) holds by the Jensen’s inequality, and
(iii) by standard properties of Gaussian random variables. Setting <span
class="math inline">\(c_q = [\mathbb E |w_1|^p]^{\frac1p}\)</span>
yields the upper bound. The lower bound is obtained via the following
argument: if <span class="math inline">\(\theta = (\pm d^{-\frac1q},
\dots, \pm d^{-\frac1q}) \in B_q^d(1)\)</span>, where the signs can be
set arbitrarily, we have (by an application of a standard result for
Gaussian random variables) <span class="math display">\[\begin{aligned}
        \mathbb E \left[\sup_{\| \theta \|_q \leq 1} \langle \theta , w
\rangle \right] \geq
        d^{-\frac1q} \sum_{1 \leq k \leq d} \mathbb E |w_k| =
        d^{\frac1p} \sqrt{\frac{2}{\pi}} ~.
    
\end{aligned}\]</span> Note that while, in general, the upper and lower
bounds cannot be improved, it is possible to calculate the Gaussian
complexity for the <span class="math inline">\(\ell^\infty\)</span>-ball
directly, i.e. we can exactly calculate <span
class="math inline">\(\mathcal G(B_\infty^d(1))\)</span>. To see this,
observe that <span class="math inline">\(\theta_i w_i\)</span> is
maximized by <span class="math inline">\(\theta_i =
\operatorname{sign}(w_i)\)</span>. Therefore, <span
class="math inline">\(\sup_{\| \theta \|_\infty \leq 1} \langle \theta,
w \rangle = \| w \|_1\)</span>. As such, <span
class="math inline">\(\mathcal{G}(B_\infty^d (1)) = d \mathbb E |w_1| =
d \sqrt{\frac{2}{\pi}}\)</span>, hence the lower bound derived above is
actually tight.</p>
</div>
<div id="lem:rademacher-gaussian-complexity-relationship" class="lemma">
<p><strong>Lemma 17</strong> (Relationship between Rademacher and
Gaussian complexity). For any set <span class="math inline">\(T \subset
\mathbb R^d\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathcal R(T) &amp;\leq \sqrt{\frac{\pi}{2}} \mathcal G(T) ~, \\
        \mathcal G(T) &amp;\leq 2 \sqrt{\log d} \mathcal R(T) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> For <span class="math inline">\(w_k \sim \mathcal
N(0,1)\)</span>, we have <span class="math inline">\(w_k = \varepsilon_k
r_k\)</span>, where <span class="math inline">\(\varepsilon_k\)</span>
is a Rademacher random variable and <span class="math inline">\(r_k \sim
\mathcal N(\frac12, 1)\)</span>. As such, we can look at <span
class="math inline">\(\varphi(r) = \mathbb E[ \sup_{\theta \in T}
\langle \theta, r \circ \varepsilon \rangle ]\)</span>, which is clearly
a convex function. Then, by Jensen’s inequality, it follows that <span
class="math inline">\(\mathcal G(T) = \mathbb E \varphi(r) \geq \varphi
(\mathbb E r) = \varphi(1) \mathbb E r_1 = \sqrt{\frac{2}{\pi}} \mathcal
R(T)\)</span>. Note that equality is achieved at <span
class="math inline">\(\{-1, 1\}\)</span>.</p>
<p>For the other inequality, we proceed by definition: define <span
class="math display">\[\begin{aligned}
        \psi_r(\theta) = \frac{r \circ \theta}{\max_{1 \leq k \leq d}
|r_k| } ~.
    
\end{aligned}\]</span> This is clearly a contraction on the space <span
class="math inline">\(T\)</span>: for any <span
class="math inline">\(\theta&#39; \neq \theta\)</span>, <span
class="math inline">\(|\psi_r (\theta) - \psi_r (\theta&#39;)| \leq
\frac{1}{\max_{1 \leq k \leq d} |r_k|} |r\circ\theta -
r\circ\theta&#39;|\)</span>, where the constant is less than <span
class="math inline">\(1\)</span> by definition of <span
class="math inline">\(|r_k|\)</span>. Therefore, we have <span
class="math inline">\(\mathcal R (\psi_r(T)) \leq \mathcal
R(T)\)</span>, which implies <span class="math inline">\(\varphi(r) \leq
\left( \max_{1 \leq k \leq d} |r_k| \right) \mathcal R (T)\)</span>.
Taking expectations, we have <span class="math display">\[\mathcal G (T)
= \mathbb E \varphi(r)
        \leq \mathbb E \max_{1 \leq k \leq d} |r_k| \mathcal R (T) \leq
2 \sqrt{\log d} \mathcal R (T) ~,\]</span> as desired. ◻</p>
</div>
<div id="lem:gaussian-contraction-inequality" class="lemma">
<p><strong>Lemma 18</strong> (Gaussian contraction inequality). For all
<span class="math inline">\(1 \leq j \leq d\)</span>, let <span
class="math inline">\(\varphi_j : \mathbb R \to \mathbb R\)</span> be a
centred <span class="math inline">\(1\)</span>-Lipschitz function (by
centred, we mean <span class="math inline">\(\varphi_j(0)=0\)</span> for
all <span class="math inline">\(j\)</span>). For a set <span
class="math inline">\(T \subset \mathbb R^d\)</span>, define <span
class="math inline">\(\varphi(T) = \{ (\varphi_1(\theta_1), \dots,
\varphi_d(\theta_d)) : \theta \in T \}\)</span>. Then, <span
class="math inline">\(\mathcal G(\varphi(T)) \leq \mathcal
G(T)\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> If we let <span
class="math inline">\(X_{\varphi(\theta)} = \langle \varphi(\theta), w
\rangle\)</span> for <span class="math inline">\(w \sim \mathcal
N(0,I_d)\)</span>, it follows that <span
class="math inline">\(\mathcal{G}(\varphi(T)) = \mathbb E \sup_{\theta
\in T} X_{\varphi(\theta)}\)</span>. By the <span
class="math inline">\(1\)</span>-Lipschitz property, we have <span
class="math inline">\(\mathbb E [(X_{\varphi(\theta)} -
X_{\varphi(\theta&#39;)})^2] = \| \varphi(\theta) - \varphi(\theta&#39;)
\|_2^2 \leq \| \theta - \theta&#39; \|_2^2\)</span>. Therefore, it
follows from the Slepian-Fernique inequality (Theorem <a
href="#thm:slepian-fernique" data-reference-type="ref"
data-reference="thm:slepian-fernique">9</a>) that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{\theta \in G} \langle \varphi(\theta) , w
\rangle
        \leq
        \mathbb E \sup_{\theta \in G} \langle \theta , w \rangle ~,
    
\end{aligned}\]</span> for any finite set <span class="math inline">\(G
\subset T\)</span>. The desired result follows from applying the
monotone convergence theorem—first on the right-hand side, then on the
left-hand side. ◻</p>
</div>
<div id="ex:subgaussian-matrix-ell-2" class="example">
<p><strong>Example 19</strong> (Expected spectral norm of a subgaussian
matrix). Let <span class="math inline">\(W \in \mathbb R^{n \times
d}\)</span> be a random matrix with i.i.d. entries <span
class="math inline">\(W_{ij}\)</span>, where each <span
class="math inline">\(W_{ij}\)</span> is mean zero and subgaussian with
parameter <span class="math inline">\(\sigma = 1\)</span>. The spectral
norm (sometimes called the <span
class="math inline">\(\ell^2\)</span>-operator norm) of the matrix <span
class="math inline">\(W\)</span> is given by its maximum singular value;
equivalently, it is defined as <span class="math inline">\(\|W\|_2
\triangleq \sup_{v \in \mathbb S^{d-1}} \|Wv\|_2\)</span>, where <span
class="math inline">\(\mathbb S^{d-1}\)</span> is the unit sphere in
<span class="math inline">\(\mathbb R^d\)</span>. Note that von
Neumann’s trace inequalitydirectly implies <span
class="math display">\[\begin{aligned}
        \|W\|_2 = \sqrt{\operatorname{Tr}(W^\top W)} \leq \sqrt{\sum_{1
\leq i \leq n} \sigma_i(W)^2} \leq \sqrt{\sum_{1 \leq i \leq n}
\sigma_1(W)^2} ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\sigma_1(W)
\geq \dots \geq \sigma_n(W)\)</span> are the singular values of <span
class="math inline">\(W\)</span>. Therefore, the maximum of <span
class="math inline">\(\lVert W \rVert_2\)</span> is attained when we set
<span class="math inline">\(\Theta\)</span> equal to the outer product
of the right and left singular vectors of corresponding to the largest
singular value <span class="math inline">\(\omega_1\)</span>, hence we
have the variational representation <span
class="math display">\[\begin{aligned}
        \lVert W \rVert_2 = \sup_{\Theta \in \mathbb M^{n,d}(1)}
X_\Theta ~,
    
\end{aligned}\]</span> where <span
class="math display">\[\begin{aligned}
        \mathbb M^{n,d} (1) &amp;\triangleq \{ M \in \mathbb R^{n \times
d} : \operatorname{rank} (M) = 1 ~\text{and}~ \lVert M \rVert_F = 1 \}
~, \\
        X_\Theta \triangleq \langle W, \Theta \rangle &amp;\triangleq
\sum_{1 \leq i \leq n} \sum_{1 \leq j \leq d} W_{ij} \Theta_{ij} ~,
    
\end{aligned}\]</span> and <span class="math inline">\(\lVert \cdot
\rVert_F\)</span> is understood as the Frobenius norm whenver the
argument is a matrix (not necessarily square).</p>
<p>We <u>claim</u> the stochastic process <span
class="math inline">\(\{X_\Theta : \Theta \in \mathbb M^{n,d}
(1)\}\)</span> is subgaussian with respect to the Frobenius norm, and is
mean zero. The mean zero property follows from the definition of <span
class="math inline">\(W\)</span>. For subgaussianity, note that <span
class="math inline">\(X_\Theta - X_{\widetilde \Theta} = \langle W,
\Theta - \widetilde \Theta \rangle\)</span> is subgaussian with respect
to <span class="math inline">\(\| \Theta - \widetilde \Theta
\|_F\)</span>, because the entries of <span
class="math inline">\(W\)</span> are each subgaussian with <span
class="math inline">\(\sigma=1\)</span> and independent.</p>
<p>Having shown subgaussianity, we can appeal to Dudley’s entropy bound
and discretization as in Remark <a
href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#rem:discretized-entropy-dudley-bound" data-reference-type="ref"
data-reference="rem:discretized-entropy-dudley-bound">[rem:discretized-entropy-dudley-bound]</a>
to conclude that <span class="math display">\begin{equation}\label{eq:expected-spectral-norm-subgaussian-matrix-estimate}\begin{aligned}

        \mathbb E \|W\|_2 \leq 6 \sqrt{\log N(\delta, \mathbb
M^{n,d}(1), \|\cdot\|_F)} + 2 \mathbb E
\sup_{\substack{\operatorname{rank}(\Sigma)=\operatorname{rank}(\widetilde
\Sigma)=1 \\ \|\Sigma-\widetilde\Sigma\|_F \leq \delta}} \langle
\Sigma-\widetilde\Sigma, W \rangle ~.
    
\end{aligned}\end{equation}</span> As such, it remains to analyze the terms on the
right-hand side of the inequality above.</p>
<p>First, let us bound the metric entropy term. Because <span
class="math inline">\(\|A\|_F^2 = \sum_{1 \leq i \leq n}
\sigma_i^2(A)\)</span>, it follows that the squared singular values are
equal to the eigenvalues of the Gram matrix <span
class="math inline">\(G\)</span>, defined as <span
class="math inline">\(G \triangleq (ab^\top - xy^\top)^\top (ab^\top -
xy^\top) = \|a\|^2 bb^\top + \|x\|^2 yy^\top - \langle a, x \rangle
(by^\top + yb^\top)\)</span>, where <span
class="math inline">\(x\)</span> and <span
class="math inline">\(y\)</span> are vectors such that <span
class="math inline">\(\|a b^\top\|_F \leq 1\)</span> and <span
class="math inline">\(\|x y^\top\|_F \leq 1\)</span>. By assumption,
<span class="math inline">\(\operatorname{rank}(G) \leq 2\)</span>. So,
it remains to show that <span class="math inline">\(y-b\)</span> and
<span class="math inline">\(y+b\)</span> are the <em>only</em> two
eigenvectors of <span class="math inline">\(G\)</span> associated with
nonzero eigenvalues. Noting that <span class="math inline">\(\{
(ca)(b/c)^\top \}_{c &gt; 0}\)</span> and <span
class="math inline">\(\|ab^\top\|=1\)</span> are equivalent
representations of <span class="math inline">\(ab^\top\)</span>, we can
assume <span class="math inline">\(\|a\| = \|b\| = \|x\| = \|y\| =
1\)</span> without loss of generality. By this, we have <span
class="math display">\[\begin{aligned}
        G (y - b) &amp;= (1 + \langle a, x \rangle) (1 - \langle b, y
\rangle) (y - b) ~, \\
        G (y + b) &amp;= (1 - \langle a, x \rangle) (1 + \langle b, y
\rangle) (y + b) ~.
    
\end{aligned}\]</span> Because <span class="math inline">\(1 - \langle
a, x \rangle = \frac{1}{2} \|a-x\|^2\)</span> by the fact that all
matrices have norm <span class="math inline">\(1\)</span>, we have <span
class="math display">\[\begin{aligned}
      \| ab^\top - xy^\top \|_F^2 =
      \left(\frac{1}{2} \|a + x\|^2\right) \left(\frac{1}{2} \|b
- y\|^2\right)
      +
      \left(\frac{1}{2} \|a - x\|^2\right) \left(\frac{1}{2} \|b
+ y\|^2\right) ~.
    
\end{aligned}\]</span> Therefore, <span class="math inline">\(\| ab^\top
- xy^\top\|_F \leq \|(a,b) - (x,y)\|_2 \leq \sqrt{2}\)</span>. In other
words, covering <span class="math inline">\(\mathbb M^{n,d}(1)\)</span>
is reduced to covering the <span
class="math inline">\(\sqrt{2}\)</span>-ball in <span
class="math inline">\(\mathbb R^{n+d}\)</span>, which then gives <span
class="math display">\[\begin{aligned}
        {\log N(\delta, \mathbb M^{n,d}(1), \|\cdot\|_F)} \leq (n+d)
\log \left( 1 + \frac{2}{\delta} \right) ~.
    
\end{aligned}\]</span></p>
<p>Then, let’s bound the expected supremum term. Note that von Neumann’s
trace inequality once again implies <span class="math display">\begin{equation}\label{eq:expected-sup-subgaussian-ell-2-norm-operator}\begin{aligned}

        \langle \Sigma - \widetilde \Sigma, W \rangle
        \leq (\sigma_1(\Sigma - \widetilde \Sigma) + \sigma_2(\Gamma -
\widetilde \Sigma))\sigma_1(W)
        \leq \sqrt{2} (\sigma_1^2(\Sigma - \widetilde \Sigma) +
\sigma_2^2(\Sigma - \widetilde \Sigma))^{\frac12} \sigma_1(W) ~,
    
\end{aligned}\end{equation}</span> where we used the fact that <span
class="math inline">\(\operatorname{rank}(\Sigma - \widetilde \Sigma)
\leq 2\)</span> for <span class="math inline">\(\Sigma, \widetilde
\Sigma \in \mathbb M^{n,d}(1)\)</span> by definition. It then follows
that <span class="math inline">\(\langle \Sigma - \widetilde \Sigma, W
\rangle \le \sqrt{2} \|\Sigma - \Sigma\|_F \|W\|_2 \le \sqrt{2} \delta
\|W\|_2\)</span>. Taking supremum of both sides with respect to <span
class="math inline">\(\mathbb M^{n,d}(1)\)</span> and then taking
expectation, we then have <span class="math display">\[\begin{aligned}
        \mathbb E
\sup_{\substack{\operatorname{rank}(\Sigma)=\operatorname{rank}(\widetilde
\Sigma)=1 \\ \|\Sigma-\widetilde\Sigma\|_F \leq \delta}} \langle
\Sigma-\widetilde\Sigma, W \rangle \leq \sqrt{2} \delta \mathbb E
\|W\|_2 ~.
    
\end{aligned}\]</span> Combining everything, we can then bound \eqref{eq:expected-spectral-norm-subgaussian-matrix-estimate}
by <span class="math display">\[\begin{aligned}
        \mathbb E \|W\|_2 \leq \inf_{\delta \in [0,1]} \left(6
\sqrt{(n+d) \log \left( 1 + \frac{2}{\delta} \right)} + 2 \sqrt{2}
\delta \mathbb E \|W\|_2 \right)
    
\end{aligned}\]</span> Picking, for instance, <span
class="math inline">\(\delta = \frac{1}{4\sqrt2}\)</span> to kill the
<span class="math inline">\(2\sqrt2\)</span> coefficient on the second
term, and rearranging, we have <span
class="math display">\[\begin{aligned}
        \frac{1}{\sqrt{n}} \mathbb E \|W\|_2 \leq 12 \log
\frac{1+2\sqrt2}{2\sqrt2} \sqrt{1 + \frac{d}{n}} \leq 12 \log
\frac{1+2\sqrt2}{2\sqrt2} \left( 1 + \sqrt{\frac{d}{n}} \right) ~.
    
\end{aligned}\]</span> This yields the <em>correct scaling</em> of <span
class="math inline">\(\mathbb E \|W\|_2\)</span> as a function of <span
class="math inline">\(n\)</span> and <span
class="math inline">\(d\)</span>. There is nothing special about the
particular universal constant we picked above; in fact, for Gaussian
matrices, the best-possible universal constant is <span
class="math inline">\(1\)</span>, and can be derived using
Slepian-Fernique comparison theorem (Theorem <a
href="#thm:slepian-fernique" data-reference-type="ref"
data-reference="thm:slepian-fernique">9</a>).</p>
</div>
<div id="ex:gaussian-matrix-ell-2" class="example">
<p><strong>Example 20</strong> (Expected spectral norm of a Gaussian
matrix). Let <span class="math inline">\(W \in \mathbb R^{n \times
d}\)</span> be a random matrix with i.i.d. entries <span
class="math inline">\(W_{ij}\)</span>, where each <span
class="math inline">\(W_{ij} \sim \mathcal N(0,1)\)</span>. Let the
singular values of <span class="math inline">\(W\)</span> be denoted
<span class="math inline">\(\sigma_1 (W) \geq \dots \geq \sigma_n
(W)\)</span>. By the singular value decomposition, <span
class="math inline">\(W = U S V^\top\)</span> for a unitary matrix <span
class="math inline">\(U\)</span> and <span
class="math inline">\(V\)</span>, and <span
class="math inline">\(S\)</span> is top-diagonal. It then follows that
<span class="math display">\[\begin{aligned}
        \sigma_1 (W) = \sup_{u \in \mathbb S^{n-1}} \sup_{v \in \mathbb
S^{d-1}} u^\top W v ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\mathbb
S^{n-1}\)</span> denotes the unit sphere in <span
class="math inline">\(\mathbb R^n\)</span>. Since <span
class="math inline">\(Z_{u,v} \triangleq u^\top W v\)</span> denotes a
Gaussian process indexed by the Cartesian product <span
class="math inline">\(\mathbb T \triangleq \mathbb S^{n-1} \times
\mathbb S^{d-1}\)</span>, we observe that—if the Slepian-Fernique
inequality applies—we have <span class="math inline">\(\mathbb E
\sup_{u, v} Z_{u,v} \leq \mathbb E \sup_{u, v} Y_{u,v}\)</span>, where
<span class="math inline">\(Y_{u,v} = \langle g, u \rangle + \langle h,
v \rangle\)</span>, <span class="math inline">\(g \sim \mathcal N(0,
I_n)\)</span> and <span class="math inline">\(h \sim \mathcal N(0,
I_d)\)</span> are independent Gaussian random vectors. It follows that
<span class="math inline">\(\mathbb E \sup_{u, v} Y_{u,v} = \mathbb E
[\| g \|_2 + \| h \|_2] \leq \sqrt{n} + \sqrt{d}\)</span> by Jensen’s
inequality. Therefore, for finite subsets <span
class="math inline">\(\lbrace u_1, \ldots , u_N \rbrace \subset \mathbb
S^{n-1}\)</span> and <span class="math inline">\(\lbrace v_1, \ldots ,
v_N \rbrace \subset \mathbb S^{d-1}\)</span>, it remains to show for
<span class="math inline">\(i,j,k,\ell \in \{1, \dots, N\}\)</span>,
<span class="math inline">\(\mathbb E [(Z_{u_i, v_j} - Z_{u_k, v_l})^2]
\leq \mathbb E [(Y_{u_i, v_j} - Y_{u_k, v_l})^2]\)</span>. Since the
standard normal random variables constituting <span
class="math inline">\(Z_{u,v}\)</span> and <span
class="math inline">\(Y_{u,v}\)</span> are mutually independent, <span
class="math display">\[\begin{aligned}
        \mathbb E [(Z_{u_i, v_j} - Z_{u_k, v_l})^2] &amp;= \| u_i
v_j^\top - u_k v_l^\top \|_F^2 ~, \\
        \mathbb E [(Y_{u_i, v_j} - Y_{u_k, v_l})^2] &amp;= \| u_i - u_k
\|_2^2 +  \| v_j - v_l \|_2^2 ~.
    
\end{aligned}\]</span> It follows from the subgaussianity arguments in
Example <a href="#ex:subgaussian-matrix-ell-2" data-reference-type="ref"
data-reference="ex:subgaussian-matrix-ell-2">19</a> that the assumption
required for Slepian-Fernique inequality holds, therefore <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{i, j \in \{1, \dots, N\}} Z_{u_i, v_j}
        \leq
        \mathbb E \sup_{i, j \in \{1, \dots, N\}} Y_{u_i, v_j} ~.
    
\end{aligned}\]</span> Therefore, from applying the monotone convergence
theorem, first on the right-hand side, then on the left-hand side, we
have <span class="math display">\[\begin{aligned}
        \mathbb E \sigma_1 (W) \leq \sqrt{n} + \sqrt{d} ~.
    
\end{aligned}\]</span> We can then finally establish the desired
universal constant. Because <span class="math display">\[\begin{aligned}
        \sup_{u , v} \operatorname{Var} (Z_{u, v})
        = \sup_{u , v} \mathbb E [(u^\top W v)^2]
        = \sup_{u , v} \| u \|_2^2 \| v \|_2^2
        = 1 ~,
    
\end{aligned}\]</span> we can then appeal to \eqref{eq:expected-sup-subgaussian-ell-2-norm-operator}
to obtain the desired concentration bound via the Lipschitz property,
i.e. <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \frac{\sigma_1(W)}{\sqrt{n}} &gt; 1 +
\sqrt{\frac{d}{n}} + t \right) \leq 2 e^{-\frac{n t^2}{2}} ~,
    
\end{aligned}\]</span> as desired.</p>
</div>
{% endraw %}
