---
layout: "post"
title: "Weak Convergence, Tightness, and Metric Spaces"
date: "2021-12-18"
tags: ["probability theory", "asymptotic theory"]
excerpt: "Weak Convergence, Tightness, and Metric Spaces. Notes on stochastic convergence."
note_series: "Stochastic convergence"
note_source: "assets/notes/Overleaf Projects (32 items)/Stochastic Convergence Notes (Chapters 2 and 18)/main.tex"
redirect_from: ["/2021/12/28/weak-convergence-in-metric-spaces/", "/2021/12/28/weak-convergence-tightness-and-metric-spaces/", "/2022/02/19/tightness-and-auxiliary-convergence-results/"]
---

<div class="note-content" markdown="0">

<p>For a stochastic process, convergence of every fixed finite collection of coordinates does not by itself control the whole path. We also need to rule out oscillations that escape those coordinates. The partition criterion below supplies this control and constructs a tight limiting random element. The <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}">convergence conventions</a> distinguish almost-sure, probability, and distributional convergence.</p>

<div id="introduction-to-bounded-stochastic-process-in-general-metric-spaces" data-note-section="title">

</div>
<p>A <em>stochastic process</em> is a collection of time-indexed random variables {% raw %}<span class="math inline">\(X_t : \Omega \to \mathop{\mathrm{\mathbb{R}}}\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(X = \left\{ X_t  : \: t \in T   \right\}\)</span>{% endraw %}. These are all defined on an ambient probability space {% raw %}<span class="math inline">\((\Omega, \mathop{\mathrm{\mathfrak{F}}}, \mathop{\mathrm{\mathds{P}}})\)</span>{% endraw %}.</p>

<p>When its sample paths are bounded, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} can be viewed as a map into the space of bounded functions, i.e. </p>

{% raw %}<div class="math display">\[X: \Omega \to \ell^{\infty} (T)\]</div>{% endraw %}
<p> and the weak convergence of maps with values in {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathscr{C}}}[a,b]\)</span>{% endraw %} relative to {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathscr{C}}}[a,b]\)</span>{% endraw %} can also be thought of being relative to {% raw %}<span class="math inline">\(D[a,b]\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\ell^{\infty}[a,b]\)</span>{% endraw %} (if we endow the sup norm on all of these functional spaces).</p>

<p>We assume each coordinate {% raw %}<span class="math inline">\(X_{n,t}\)</span>{% endraw %} is measurable, but the map into {% raw %}<span class="math inline">\(\ell^\infty(T)\)</span>{% endraw %} need not be Borel measurable. For a bounded function {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} on the underlying probability space, {% raw %}<span class="math inline">\(\mathbb E^*Z\)</span>{% endraw %} is the infimum of expectations of measurable majorants, and {% raw %}<span class="math inline">\(\mathbb E_*Z=-\mathbb E^*(-Z)\)</span>{% endraw %}; outer and inner probabilities use indicator functions. Here {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} means {% raw %}<span class="math inline">\(\mathbb E^*f(X_n)\to\mathbb Ef(X)\)</span>{% endraw %} for every bounded continuous real {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a Borel measurable random element with a tight law. Applying this definition also to {% raw %}<span class="math inline">\(-f\)</span>{% endraw %} gives the matching inner-expectation convergence. If the maps are Borel measurable, these are the usual weak-convergence conventions.</p>

<div id="Thm:Existence_Convergence_Tight_Random_Element" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>.  {% raw %}<span class="math inline">\({X_n : \Omega_n \to \ell^{\infty} (T)}\xrightarrow{\mathrm{d}}\text{tight random element}\)</span>{% endraw %} if and only if the following are true:</p>

<ol>
<li><p><span id="Thm:Cvg_To_Tight_Random_Element-i" data-label="Thm:Cvg_To_Tight_Random_Element(i)"></span> for all {% raw %}<span class="math inline">\(t_1,\dots,t_k\in T\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[{\left( X_{n,t_1}, \dots, X_{n,t_k} \right)}\xrightarrow{\mathrm{d}}Y\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(Y \in \mathop{\mathrm{\mathbb{R}}}^k\)</span>{% endraw %}.</p></li>
<li><p><span id="Thm:Cvg_To_Tight_Random_Element-ii" data-label="Thm:Cvg_To_Tight_Random_Element(ii)"></span> for all {% raw %}<span class="math inline">\(\varepsilon, \eta &gt; 0\)</span>{% endraw %}, there exists a partition of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} into {% raw %}<span class="math inline">\(T_1,\dots,T_k\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\limsup_{n\to\infty} \mathbb{P}^* \left( \sup_{i} \sup_{s,t \in T_i} \abs{X_{n,s} - X_{n,t}} \geqslant\varepsilon\right) \leqslant\eta\]</div>{% endraw %}</li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> {% raw %}<span class="math inline">\((\Leftarrow)\)</span>{% endraw %} The finite partitions will serve two purposes: they give finite-dimensional approximations and define a metric in which limiting paths are uniformly continuous. Set {% raw %}<span class="math inline">\(\varepsilon_m=\eta_m=2^{-m}\)</span>{% endraw %}, so that the error probabilities are summable. Choose the finite partitions in (ii) successively, replacing each new partition by its common refinement with the earlier ones. Refining a partition can only reduce the oscillation within its cells. Write the resulting nonempty cells as {% raw %}<span class="math inline">\(T_1^m,\ldots,T_{k_m}^m\)</span>{% endraw %}.</p>

<p>Fix {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Then, define the semimetric (pseudometric) </p>

{% raw %}<div class="math display">\[\rho_m(s,t)=
\begin{cases}
0,&amp;\text{if }s,t\in T_j^m\text{ for some }1\le j\le k_m,\\
1,&amp;\text{otherwise}.
\end{cases}\]</div>{% endraw %}
<p> The zero case means that the two points lie in the same cell, whichever cell that is. In particular, {% raw %}<span class="math inline">\(\rho_m(t,t)=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(s\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t\)</span>{% endraw %} are in different cells, any third point must be in a different cell from at least one of them, which proves the triangle inequality. Every {% raw %}<span class="math inline">\(\rho_m\)</span>{% endraw %}-ball of radius in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} is a partition cell, and every cell has {% raw %}<span class="math inline">\(\rho_m\)</span>{% endraw %}-diameter zero.</p>

<p>Since the partitions are nested, {% raw %}<span class="math inline">\(\rho_m\le\rho_{m+1}\)</span>{% endraw %}. Define </p>

{% raw %}<div class="math display">\[\rho(s,t)=\sum_{m=1}^{\infty}2^{-m}\rho_m(s,t).\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(s,t\in T_j^m\)</span>{% endraw %}, the first {% raw %}<span class="math inline">\(m\)</span>{% endraw %} terms vanish, so </p>

{% raw %}<div class="math display">\[\rho(s,t)\le\sum_{r&gt;m}2^{-r}=2^{-m}.\]</div>{% endraw %}
<p> Thus {% raw %}<span class="math inline">\((T,\rho)\)</span>{% endraw %} is totally bounded. Pick one representative {% raw %}<span class="math inline">\(t_j^m\)</span>{% endraw %} from every cell and put {% raw %}<span class="math inline">\(T_0=\{t_j^m:m\ge1,\ 1\le j\le k_m\}\)</span>{% endraw %}. This is a countable dense set. In the other direction, </p>

{% raw %}<div class="math display">\[\rho(s,t)&lt;2^{-m}
\quad\Longrightarrow\quad
2^{-m}\rho_m(s,t)&lt;2^{-m}
\quad\Longrightarrow\quad
\rho_m(s,t)=0.\]</div>{% endraw %}
<p>The finite-dimensional limits in (i) are consistent, because taking a coordinate subvector is continuous. Kolmogorov’s extension theorem therefore gives a process {% raw %}<span class="math inline">\(X^\circ\)</span>{% endraw %} on {% raw %}<span class="math inline">\(T_0\)</span>{% endraw %} with those limiting distributions. The extension theorem supplies the coordinate laws, but does not yet give the path regularity needed for a random element of the function space. We next show that its paths are uniformly {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}-continuous.</p>

<p>For a finite set {% raw %}<span class="math inline">\(S\subset T_0\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[w_{m,S}(x)=
\max_{1\le j\le k_m}\ \max_{s,t\in S\cap T_j^m}|x_s-x_t|,\]</div>{% endraw %}
<p> where an empty maximum is zero. This is a continuous function of finitely many coordinates. Portmanteau applied to the open event {% raw %}<span class="math inline">\(\{w_{m,S}&gt;2^{-m}\}\)</span>{% endraw %} gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb P\bigl(w_{m,S}(X^\circ)&gt;2^{-m}\bigr)
&amp;\le\liminf_{n\to\infty}
\mathbb P\bigl(w_{m,S}(X_n)&gt;2^{-m}\bigr)\\
&amp;\le\limsup_{n\to\infty}
\mathbb P^*\left(
\max_j\sup_{s,t\in T_j^m}|X_{n,s}-X_{n,t}|\ge2^{-m}
\right)\\
&amp;\le2^{-m}.
\end{aligned}\]</div>{% endraw %}
<p> Exhaust {% raw %}<span class="math inline">\(T_0\)</span>{% endraw %} by increasing finite sets {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Continuity of probability for increasing events yields the same bound for </p>

{% raw %}<div class="math display">\[w_m(X^\circ)=\max_j\sup_{s,t\in T_0\cap T_j^m}
|X^\circ_s-X^\circ_t|.\]</div>{% endraw %}
<p> By Borel–Cantelli, almost surely {% raw %}<span class="math inline">\(w_m(X^\circ)\le2^{-m}\)</span>{% endraw %} for all sufficiently large {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Together with the implication above, this proves uniform {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}-continuity on {% raw %}<span class="math inline">\(T_0\)</span>{% endraw %}. The paths are also bounded: for one such {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, their absolute values are bounded by the largest absolute value at the finitely many representatives plus {% raw %}<span class="math inline">\(2^{-m}\)</span>{% endraw %}.</p>

<p>Identify points at {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}-distance zero and complete the resulting metric space to a compact space {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Each uniformly continuous path on {% raw %}<span class="math inline">\(T_0\)</span>{% endraw %} extends uniquely to {% raw %}<span class="math inline">\(K\)</span>{% endraw %}; restrict that extension to {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and call it {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. On the exceptional null event, take the zero path.</p>

<p>Define {% raw %}<span class="math inline">\(\pi_m(t)=t_j^m\)</span>{% endraw %} when {% raw %}<span class="math inline">\(t\in T_j^m\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(Y_m=X\circ\pi_m\)</span>{% endraw %}. Uniform continuity and {% raw %}<span class="math inline">\(\rho(t,\pi_m(t))\le2^{-m}\)</span>{% endraw %} imply </p>

{% raw %}<div class="math display">\[\|Y_m-X\|_T\longrightarrow0
\qquad\text{almost surely}.\]</div>{% endraw %}
<p> Each {% raw %}<span class="math inline">\(Y_m\)</span>{% endraw %} is a measurable finite-dimensional random element of {% raw %}<span class="math inline">\(\ell^\infty(T)\)</span>{% endraw %}. Its paths are uniformly {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}-continuous, since {% raw %}<span class="math inline">\(\rho(s,t)&lt;2^{-m}\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(\pi_m(s)=\pi_m(t)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a measurable random element of the space of uniformly {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}-continuous functions, which is isometric to the separable Banach space {% raw %}<span class="math inline">\(C(K)\)</span>{% endraw %}. </p>
<p>Here tightness can be checked directly. Fix {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\|Y_m-X\|_T\to0\)</span>{% endraw %} almost surely, choose increasing {% raw %}<span class="math inline">\(m_j\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(\|Y_{m_j}-X\|_T&gt;2^{-j})&lt;\eta2^{-j-2}\)</span>{% endraw %}. The range of {% raw %}<span class="math inline">\(Y_{m_j}\)</span>{% endraw %} is finite dimensional; restricting its finitely many coordinate values to a sufficiently large closed box produces a compact set {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(Y_{m_j}\notin K_j)&lt;\eta2^{-j-2}\)</span>{% endraw %}. The closed set</p>
{% raw %}<div class="math display">\[A=\bigcap_{j\geq1}\{x\in\ell^\infty(T):\operatorname{dist}(x,K_j)\leq2^{-j}\}\]</div>{% endraw %}
<p>is totally bounded: for any radius, choose large {% raw %}<span class="math inline">\(j\)</span>{% endraw %} and a finite net of {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %}. It is closed in the complete space {% raw %}<span class="math inline">\(\ell^\infty(T)\)</span>{% endraw %}, hence compact. A union bound gives {% raw %}<span class="math inline">\(\mathbb P(X\in A)\geq1-\eta\)</span>{% endraw %}. This proves tightness without assuming that arbitrary laws on a nonseparable function space are tight.</p>


<p>For fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, condition (i) and the continuous map from the vector of cell values to its piecewise constant path give </p>

{% raw %}<div class="math display">\[X_n\circ\pi_m\Rightarrow Y_m.\]</div>{% endraw %}
<p> Also, </p>

{% raw %}<div class="math display">\[\|X_n-X_n\circ\pi_m\|_T
\le\max_j\sup_{s,t\in T_j^m}|X_{n,s}-X_{n,t}|,\]</div>{% endraw %}
<p> so the approximation error is controlled by (ii). For a {% raw %}<span class="math inline">\(1\)</span>{% endraw %}-Lipschitz function {% raw %}<span class="math inline">\(f:\ell^\infty(T)\to[0,1]\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
|\mathbb{E}^*f(X_n)-\mathbb{E}f(X)|
&amp;\le2^{-m}
+\mathbb P^*(\|X_n-X_n\circ\pi_m\|_T&gt;2^{-m})\\
&amp;\quad+|\mathbb{E}f(X_n\circ\pi_m)-\mathbb{E}f(Y_m)|\\
&amp;\quad+\mathbb{E}\min(1,\|Y_m-X\|_T).
\end{aligned}\]</div>{% endraw %}
<p> The order of limits matters: the finite-dimensional approximation is fixed while the original sequence converges. First let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} with {% raw %}<span class="math inline">\(m\)</span>{% endraw %} fixed. The middle expectation difference vanishes, and the first two terms have limit superior at most {% raw %}<span class="math inline">\(2^{1-m}\)</span>{% endraw %}. Then let {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %} and apply dominated convergence to the last term. The bounded-Lipschitz argument detailed below proves {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}.</p>

<p>{% raw %}<span class="math inline">\((\Rightarrow)\)</span>{% endraw %} Finite-dimensional convergence follows from the continuity of coordinate evaluation. For (ii), fix {% raw %}<span class="math inline">\(\varepsilon,\eta&gt;0\)</span>{% endraw %} and choose a compact set {% raw %}<span class="math inline">\(A\subset\ell^\infty(T)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(X\in A)&gt;1-\eta\)</span>{% endraw %}. Cover {% raw %}<span class="math inline">\(A\)</span>{% endraw %} by finitely many sup-norm balls of radius {% raw %}<span class="math inline">\(\varepsilon/8\)</span>{% endraw %}, centered at bounded functions {% raw %}<span class="math inline">\(f_1,\ldots,f_r\)</span>{% endraw %}.</p>

<p>Partition the ranges of these finitely many functions into intervals of length {% raw %}<span class="math inline">\(\varepsilon/4\)</span>{% endraw %}, and partition {% raw %}<span class="math inline">\(T\)</span>{% endraw %} by the resulting vectors of interval indices. There are only finitely many cells. Within each cell, every {% raw %}<span class="math inline">\(f_j\)</span>{% endraw %} has oscillation at most {% raw %}<span class="math inline">\(\varepsilon/4\)</span>{% endraw %}, so every {% raw %}<span class="math inline">\(x\in A\)</span>{% endraw %} has oscillation strictly less than {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %}.</p>

<p>The open neighborhood {% raw %}<span class="math inline">\(G=\{x:\operatorname{dist}(x,A)&lt;\varepsilon/4\}\)</span>{% endraw %} therefore consists of functions whose oscillation in every cell is strictly less than {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Portmanteau, with inner probability {% raw %}<span class="math inline">\(\mathbb P_*\)</span>{% endraw %}, gives </p>

{% raw %}<div class="math display">\[\liminf_n\mathbb P_*(X_n\in G)\ge\mathbb P(X\in G)&gt;1-\eta.\]</div>{% endraw %}
<p> The event of cell oscillation at least {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} is contained in {% raw %}<span class="math inline">\(\{X_n\notin G\}\)</span>{% endraw %}. Taking complements proves the outer-probability bound in (ii). ◻</p>

</div>
<div class="proof" id="bounded-lipschitz-upgrade">
<p><em>Why bounded Lipschitz tests suffice here.</em> The preceding estimate applies to any bounded Lipschitz test by rescaling. Let {% raw %}<span class="math inline">\(0\leq f\leq1\)</span>{% endraw %} be continuous and let the limit law put mass at least {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %} on a compact {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Given {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(L&lt;\infty\)</span>{% endraw %} so that the Lipschitz function</p>
{% raw %}<div class="math display">\[g(x)=\min\left(1,\inf_{y\in K}\bigl(f(y)+L\|x-y\|_T\bigr)\right)\]</div>{% endraw %}
<p>satisfies {% raw %}<span class="math inline">\(|g-f|\leq\varepsilon\)</span>{% endraw %} on {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. To see this, uniform continuity of {% raw %}<span class="math inline">\(f|_K\)</span>{% endraw %} controls nearby {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, while choosing {% raw %}<span class="math inline">\(L\delta\geq1\)</span>{% endraw %} makes distant {% raw %}<span class="math inline">\(y\)</span>{% endraw %} irrelevant to the infimum. Continuity of {% raw %}<span class="math inline">\(f-g\)</span>{% endraw %} and compactness give some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(|f-g|&lt;2\varepsilon\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\operatorname{dist}(x,K)&lt;\delta\)</span>{% endraw %}. The bounded Lipschitz function {% raw %}<span class="math inline">\(h(x)=\min(1,\operatorname{dist}(x,K)/\delta)\)</span>{% endraw %} then yields</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb P^*(\operatorname{dist}(X_n,K)\geq\delta)
\leq\lim_n\mathbb E^*h(X_n)=\mathbb Eh(X)\leq\eta.\]</div>{% endraw %}
<p>Using measurable majorants for the exceptional event, monotonicity and subadditivity of outer expectation give</p>
{% raw %}<div class="math display">\[\limsup_n|\mathbb E^*f(X_n)-\mathbb Ef(X)|\leq4\varepsilon+2\eta.\]</div>{% endraw %}
<p>In this bound the expectation difference for {% raw %}<span class="math inline">\(g\)</span>{% endraw %} tends to zero by the bounded Lipschitz result, and the two errors for {% raw %}<span class="math inline">\(f-g\)</span>{% endraw %} are bounded by {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %} plus the corresponding exceptional probability. Let {% raw %}<span class="math inline">\(\varepsilon,\eta\downarrow0\)</span>{% endraw %}, and rescale an arbitrary bounded continuous function. This supplies the weak-convergence step used above, including for nonmeasurable maps. ◻</p>
</div>
<h2 data-note-section="1" id="ancillary-facts">1. Ancillary Facts</h2>
<div id="Prop:T_cvg_to_N" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>.  Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be a sequence of random variables distributed following {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-distribution with {% raw %}<span class="math inline">\(n\)</span>{% endraw %} degrees of freedom. Then, {% raw %}<span class="math inline">\({T_n}\xrightarrow{\mathrm{d}}\mathcal{N}(0,1)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> <strong>Method 1. Represent a Student variable as a normal variable divided by an independent estimate of its scale. The law of large numbers makes the denominator approach one.</strong> Let {% raw %}<span class="math inline">\(S,S_1,S_2,\ldots\)</span>{% endraw %} be independent standard normal variables, and write </p>

{% raw %}<div class="math display">\[Y_n=\sum_{j=1}^nS_j^2\sim\chi_n^2,
\qquad T_n\stackrel d=\frac{S}{\sqrt{Y_n/n}}.\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\mathbb{E}S_j^2=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(S_j^2)=2\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E}(Y_n/n)=1,\qquad
\operatorname{Var}(Y_n/n)=2/n.\]</div>{% endraw %}
<p> Chebyshev’s inequality gives {% raw %}<span class="math inline">\(Y_n/n\to_P1\)</span>{% endraw %}. The square root is continuous at {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, and Slutsky’s lemma gives {% raw %}<span class="math inline">\(T_n\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}.</p>

<p>Method 2. We can also compare densities directly. Pointwise convergence alone is insufficient, so after obtaining it we use the fact that both densities integrate to one. The density is </p>

{% raw %}<div class="math display">\[f_n(t)=\frac{\Gamma((n+1)/2)}{\sqrt{n\pi}\,\Gamma(n/2)}
\left(1+\frac{t^2}{n}\right)^{-(n+1)/2}.\]</div>{% endraw %}
<p> Stirling’s formula implies {% raw %}<span class="math inline">\(\Gamma(z+1/2)/\Gamma(z)\sim z^{1/2}\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(z=n/2\)</span>{% endraw %}, the leading factor tends to {% raw %}<span class="math inline">\(1/\sqrt{2\pi}\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[-\frac{n+1}{2}\log\left(1+\frac{t^2}{n}\right)
=-\frac{n+1}{2}\left(\frac{t^2}{n}+O(n^{-2})\right)
\longrightarrow-\frac{t^2}{2}.\]</div>{% endraw %}
<p> Thus {% raw %}<span class="math inline">\(f_n(t)\to\phi(t)\)</span>{% endraw %}, the standard normal density. To pass from densities to distributions, use {% raw %}<span class="math inline">\(0\le\min(f_n,\phi)\le\phi\)</span>{% endraw %} and dominated convergence: </p>

{% raw %}<div class="math display">\[\int_{\mathbb R}|f_n-\phi|
=2-2\int_{\mathbb R}\min(f_n,\phi)\longrightarrow0.\]</div>{% endraw %}
<p> This proves convergence in total variation, hence weak convergence. ◻</p>

</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>.  Weak convergence by itself does not imply convergence of moments. For the Student variables above, however, the absolute moment is </p>

{% raw %}<div class="math display">\[\mathbb{E}|T_n|^p
=\frac{n^{p/2}\Gamma((p+1)/2)\Gamma((n-p)/2)}
{\sqrt{\pi}\,\Gamma(n/2)},\qquad 0&lt;p&lt;n.\]</div>{% endraw %}
<p> This follows by writing {% raw %}<span class="math inline">\(T_n=S/\sqrt{Y_n/n}\)</span>{% endraw %} and evaluating the normal absolute moment and negative chi-square moment. It is positive for both even and odd {% raw %}<span class="math inline">\(p\)</span>{% endraw %}; the signed odd moments, when finite, vanish by symmetry. For {% raw %}<span class="math inline">\(p\ge n\)</span>{% endraw %}, the absolute moment is infinite.</p>

<p>For completeness, independence in the normal/chi-square representation gives {% raw %}<span class="math inline">\(\mathbb E|T_n|^p=n^{p/2}\mathbb E|S|^p\mathbb EY_n^{-p/2}\)</span>{% endraw %}, by Tonelli, with an infinite value allowed. The substitutions {% raw %}<span class="math inline">\(u=s^2/2\)</span>{% endraw %} in the normal integral and {% raw %}<span class="math inline">\(v=y/2\)</span>{% endraw %} in the chi-square integral yield</p>
{% raw %}<div class="math display">\[\mathbb E|S|^p=\frac{2^{p/2}\Gamma((p+1)/2)}{\sqrt\pi},\qquad
\mathbb EY_n^{-p/2}=\frac{2^{-p/2}\Gamma((n-p)/2)}{\Gamma(n/2)}\quad(n&gt;p).\]</div>{% endraw %}
<p>Near zero, the latter integrand is a positive constant times {% raw %}<span class="math inline">\(y^{(n-p)/2-1}\)</span>{% endraw %}, so it is not integrable when {% raw %}<span class="math inline">\(p\geq n\)</span>{% endraw %}. This proves both the moment formula and its exact range of finiteness.</p>
<p>For each fixed real {% raw %}<span class="math inline">\(q&gt;0\)</span>{% endraw %}, the gamma-ratio asymptotic gives </p>

{% raw %}<div class="math display">\[\mathbb{E}|T_n|^q
\longrightarrow
\frac{2^{q/2}\Gamma((q+1)/2)}{\sqrt{\pi}}
=\mathbb{E}|S|^q.\]</div>{% endraw %}
<p> To verify asymptotic uniform integrability of {% raw %}<span class="math inline">\(|T_n|^p\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(q&gt;p\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(q\)</span>{% endraw %}-th moments are bounded for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and </p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb{E}\left[|T_n|^p\mathbf1_{\{|T_n|^p&gt;M\}}\right]
&amp;\le M^{-(q-p)/p}\mathbb{E}|T_n|^q,\\
\lim_{M\to\infty}\limsup_{n\to\infty}
\mathbb{E}\left[|T_n|^p\mathbf1_{\{|T_n|^p&gt;M\}}\right]
&amp;=0.
\end{aligned}\]</div>{% endraw %}
<p> For fixed integer {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, this justifies {% raw %}<span class="math inline">\(\mathbb{E}T_n^p\to\mathbb{E}S^p\)</span>{% endraw %}. The tail expectation is not equal to the tail probability; the higher-moment bound is what makes this argument work.</p>

</div>
<div id="result-4" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>.  {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} discrete and supported on {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbb{N}}}\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{d}}X\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathds{P}}}(X_n = x) \xrightarrow{n\to\infty} \mathop{\mathrm{\mathds{P}}}(X=x)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x \in \mathop{\mathrm{\mathbb{N}}}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}, the interval {% raw %}<span class="math inline">\((k-1/2,k+1/2)\)</span>{% endraw %} is a continuity set for every {% raw %}<span class="math inline">\(k\in\mathbb N\)</span>{% endraw %}, and its probability equals {% raw %}<span class="math inline">\(\mathbb P(X_n=k)\)</span>{% endraw %}. This proves convergence of the point masses. Conversely, suppose all point masses converge. For any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose a finite {% raw %}<span class="math inline">\(A\subset\mathbb N\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(X\notin A)&lt;\varepsilon\)</span>{% endraw %}. Convergence of its finitely many point masses gives {% raw %}<span class="math inline">\(\mathbb P(X_n\notin A)\to\mathbb P(X\notin A)\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[\limsup_n\sum_{k\in\mathbb N}|\mathbb P(X_n=k)-\mathbb P(X=k)|
\leq\limsup_n\left(\sum_{k\in A}|\mathbb P(X_n=k)-\mathbb P(X=k)|+\mathbb P(X_n\notin A)+\mathbb P(X\notin A)\right)
\leq2\varepsilon.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. This proves total variation convergence, and therefore weak convergence. Requiring the limiting masses to sum to one prevents loss of mass at infinity. ◻</p>
</div>
<div>

</div>
<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5</strong> (Demonstrating Statements in Fact <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}#Fact:o_O_rules" data-reference-type="ref" data-reference="Fact:o_O_rules">10</a>).  Consider <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}#o_O_rules:-ii" data-reference-type="ref" data-reference="o_O_rules:(ii)">10</a>: if {% raw %}<span class="math inline">\(X_n=o_P(1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_n=O_P(1)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X_n+Z_n=O_P(1)\)</span>{% endraw %}. The two vectors need not be independent.</p>

<p>Fix {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(\mathbb P(\|Z_n\|&gt;M)&lt;\eta/2\)</span>{% endraw %} for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(X_n\to_P0\)</span>{% endraw %}, we also have {% raw %}<span class="math inline">\(\mathbb P(\|X_n\|&gt;1)&lt;\eta/2\)</span>{% endraw %} eventually. The triangle inequality gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb P(\|X_n+Z_n\|&gt;M+1)
&amp;\le\mathbb P(\|X_n\|&gt;1)+\mathbb P(\|Z_n\|&gt;M)\\
&amp;&lt;\eta
\end{aligned}\]</div>{% endraw %}
<p> for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. This proves asymptotic boundedness in probability. If we use the convention with a supremum over all {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, enlarge the threshold to control the finitely many remaining random vectors; each has a tail probability tending to zero.</p>

</div>
<div id="result-6" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong>.  If, for all {% raw %}<span class="math inline">\(\varepsilon&gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sum_{n \in \mathop{\mathrm{\mathbb{N}}}} \mathop{\mathrm{\mathds{P}}}(\abs{X_n} &gt; \varepsilon) &lt; \infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{a.s.}}0\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For each positive integer {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the first Borel–Cantelli lemma gives </p>

{% raw %}<div class="math display">\[\mathbb P\bigl(|X_n|&gt;1/m\text{ infinitely often}\bigr)=0.\]</div>{% endraw %}
<p> Take the intersection of these probability-one events over {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. On that event, for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %} there is an {% raw %}<span class="math inline">\(N_m\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(|X_n|\le1/m\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(n\ge N_m\)</span>{% endraw %}. Given any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(1/m&lt;\varepsilon\)</span>{% endraw %}. It follows that {% raw %}<span class="math inline">\(X_n\to0\)</span>{% endraw %} on the same probability-one event.</p>

<p>The conclusion is convergence to zero, not eventual equality to zero. ◻</p>

</div>
<div id="result-7" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>.  If {% raw %}<span class="math inline">\({\mathbb{E}X_n}\xrightarrow{n \to \infty}\mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\({\mathop{\mathrm{\mathds{V}}}X_n}\xrightarrow{n \to \infty}0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathds{P}}\mu\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The variance assumption means that each {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} has a finite second moment. The bias–variance identity gives</p>
{% raw %}<div class="math display">\[\mathbb E(X_n-\mu)^2=\operatorname{Var}(X_n)+(\mathbb EX_n-\mu)^2\longrightarrow0.\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, Markov's inequality applied to the nonnegative squared error gives {% raw %}<span class="math inline">\(\mathbb P(|X_n-\mu|&gt;\varepsilon)\leq\varepsilon^{-2}\mathbb E(X_n-\mu)^2\to0\)</span>{% endraw %}. Thus there is even convergence in mean square. ◻</p>
</div>
<div>

</div>
<div id="result-8" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>.  If {% raw %}<span class="math inline">\({\sqrt{n} (T_n - \theta)}\xrightarrow{\mathrm{d}}D\)</span>{% endraw %}, then {% raw %}<span class="math inline">\({T_n}\xrightarrow{\mathds{P}}\theta\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(W_n=\sqrt n(T_n-\theta)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(W_n\Rightarrow D\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is a real-valued random variable, Portmanteau applied to the closed set {% raw %}<span class="math inline">\(\{x:|x|\ge M\}\)</span>{% endraw %} gives </p>

{% raw %}<div class="math display">\[\limsup_n\mathbb P(|W_n|\ge M)\le\mathbb P(|D|\ge M).\]</div>{% endraw %}
<p> Fix {% raw %}<span class="math inline">\(\varepsilon,\eta&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} large enough that the right-hand side is smaller than {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varepsilon\sqrt n\ge M\)</span>{% endraw %}, so </p>

{% raw %}<div class="math display">\[\mathbb P(|T_n-\theta|&gt;\varepsilon)
=\mathbb P(|W_n|&gt;\varepsilon\sqrt n)
\le\mathbb P(|W_n|\ge M).\]</div>{% endraw %}
<p> Thus the limit superior is at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}. Both tails are controlled by the same bound. ◻</p>

</div>
<div id="result-9" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong> (Basic Facts About Compact Sets).  A compact set {% raw %}<span class="math inline">\(K\)</span>{% endraw %} in a metric space is</p>

<ol>
<li><p><span id="Fact:Compact_Implies_i" data-label="Fact:Compact_Implies_i"></span> Totally bounded</p></li>
<li><p><span id="Fact:Compact_Implies_ii" data-label="Fact:Compact_Implies_ii"></span> Separable</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. The balls {% raw %}<span class="math inline">\(\{B_\varepsilon(x):x\in K\}\)</span>{% endraw %} form an open cover of {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Compactness gives a finite subcover, so {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is totally bounded. The radius is fixed before extracting the subcover.</p>

<p>For each {% raw %}<span class="math inline">\(m\ge1\)</span>{% endraw %}, choose a finite {% raw %}<span class="math inline">\(2^{-m}\)</span>{% endraw %}-net {% raw %}<span class="math inline">\(F_m\subset K\)</span>{% endraw %}. Then </p>

{% raw %}<div class="math display">\[F=\bigcup_{m=1}^{\infty}F_m\]</div>{% endraw %}
<p> is countable. Given {% raw %}<span class="math inline">\(x\in K\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(2^{-m}&lt;\varepsilon\)</span>{% endraw %} and a point {% raw %}<span class="math inline">\(y\in F_m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(d(x,y)&lt;2^{-m}\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is dense in {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, proving separability. If {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is empty, both conclusions hold directly. ◻</p>

</div>
<div id="Def:Skorokhod_space" class="definition" data-note-number="10" data-note-kind="Definition">
<p><strong>Definition 10</strong>.  The <strong>Skorokhod space</strong>, denoted {% raw %}<span class="math inline">\(D[a,b]\)</span>{% endraw %}, is the space of all càdlàg functions on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}.</p>

</div>
<div id="result-11" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>.  If {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(D[a,b]\)</span>{% endraw %} is not separable under the sup norm.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The sup norm keeps two step functions a fixed distance apart even when their jump times are arbitrarily close. To turn this into an obstruction to separability, for each {% raw %}<span class="math inline">\(\alpha\in(a,b)\)</span>{% endraw %}, let </p>

{% raw %}<div class="math display">\[f_\alpha(x)=\mathbf1_{\{x\ge\alpha\}},\qquad x\in[a,b].\]</div>{% endraw %}
<p> This is a right-continuous step function with a left limit at every point of {% raw %}<span class="math inline">\((a,b]\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(f_\alpha\in D[a,b]\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\alpha&lt;\beta\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f_\alpha(\alpha)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_\beta(\alpha)=0\)</span>{% endraw %}, while both functions take values in {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %}. Hence </p>

{% raw %}<div class="math display">\[\|f_\alpha-f_\beta\|_\infty=1.\]</div>{% endraw %}
<p> Suppose {% raw %}<span class="math inline">\(D[a,b]\)</span>{% endraw %} had a countable dense set {% raw %}<span class="math inline">\(\{g_1,g_2,\ldots\}\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, choose the first {% raw %}<span class="math inline">\(g_j\)</span>{% endraw %} within sup-norm distance {% raw %}<span class="math inline">\(1/3\)</span>{% endraw %} of {% raw %}<span class="math inline">\(f_\alpha\)</span>{% endraw %}. Two distinct step functions cannot choose the same {% raw %}<span class="math inline">\(g_j\)</span>{% endraw %}, since the triangle inequality would make their distance less than {% raw %}<span class="math inline">\(2/3\)</span>{% endraw %}. This would inject the uncountable interval {% raw %}<span class="math inline">\((a,b)\)</span>{% endraw %} into {% raw %}<span class="math inline">\(\mathbb N\)</span>{% endraw %}, a contradiction.</p>

<p>The nondegenerate-interval assumption matters: on {% raw %}<span class="math inline">\([a,a]\)</span>{% endraw %}, this function space is isometric to {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} and is separable. ◻</p>

</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}">Modes of Stochastic Convergence</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}">Modes of Stochastic Convergence</a></p></nav>

</div>
