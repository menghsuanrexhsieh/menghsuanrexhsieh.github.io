---
layout: "post"
title: "Empirical Processes, Tensorization, and the Entropy Method"
date: "2022-09-03"
tags: ["statistics", "empirical processes"]
excerpt: "We focus on the following four important principles that underpin most statistical analyses."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/09/03/empirical-processes/", "/2022/09/06/fundamental-techniques/", "/2022/09/10/the-entropy-method/", "/2026/06/15/fundamental-techniques/"]
---

<div class="note-content" markdown="0">

<p>A sample average is close to its expectation under familiar assumptions. Statistical estimation asks for more: the function being averaged may be chosen after seeing the data, so we need simultaneous control over a whole class of averages. Empirical process theory develops this control. We will study fluctuations, uniformity, expected suprema, and Gaussian approximations.</p>

<ol>
<li><p><em>Concentration</em>. Suppose we are given i.i.d. random variables {% raw %}<span class="math inline">\(X_1, X_2, \dots\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E}|X_1|&lt;\infty\)</span>{% endraw %}; by the law of large numbers, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac1n \sum_{1 \leq i \leq n} X_i - \mathbb{E} \left[ \frac1n \sum_{1 \leq i \leq n} X_i \right] \xrightarrow[n\to\infty]{P} 0 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> We can restate this in the following way: let {% raw %}<span class="math inline">\(f(x_1, \dots, x_n) = \frac1n \sum_{1 \leq i \leq n} x_i\)</span>{% endraw %}. Then, the random variable {% raw %}<span class="math inline">\(f(X_1,\dots,X_n)\)</span>{% endraw %} is close to its mean for sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Stated this way, the law of large numbers phenomenon reflects a general principle, called the concentration phenomenon, by virtue of which it is very common for functions of many independent variables to have small fluctuations.</p></li>
<li><p><em>Uniformity</em>. We can ask <em>whether the same control of fluctuations holds uniformly over functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %} belonging to a certain class of functions</em>. As we will see later, one remarkable feature of the concentration principle is that it provides information on the fluctuations for very general functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Given this information, we want to understand if the convergence to the mean above is <em>uniform</em> over a certain class of functions.</p>

<p>Uniformity is a desirable property for investigating, among other things, consistency of statistical estimators. Uniformity is useful when applying the plug-in principle. Many estimation problems can be seen as constructing a functional, {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, that maps a distribution function {% raw %}<span class="math inline">\(F\)</span>{% endraw %} to a real number. The plug-in principle suggests we replace {% raw %}<span class="math inline">\(F\)</span>{% endraw %} by its <em>empirical distribution</em>, {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %}, and we would study the limiting behaviour of {% raw %}<span class="math inline">\(L(\widehat F_n)\)</span>{% endraw %}. In other words, we need to study the conditions under which {% raw %}<span class="math inline">\(L(\widehat F_n)\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(L(F)\)</span>{% endraw %} in probability, or almost surely. As we will see in the sequel, we often want such convergence to be <em>uniform</em> across some class of functions of interest.</p></li>
<li><p><em>Suprema</em>. From above, the concentration principle is concerned with the deviation of a random function {% raw %}<span class="math inline">\(f(X_1, \dots, X_n)\)</span>{% endraw %} from its mean {% raw %}<span class="math inline">\(\mathbb{E} f(X_1, \dots, X_n)\)</span>{% endraw %}. However, it does not provide any information on the value of {% raw %}<span class="math inline">\(\mathbb{E} f(X_1, \dots, X_n)\)</span>{% endraw %} itself. The problem of investigating uniformity can be treated at a very high level of generality. Without additional structure, the problem of estimating {% raw %}<span class="math inline">\(\mathbb{E} f(X_1, \dots, X_n)\)</span>{% endraw %} cannot be addressed at such a level of generality. We therefore study the <em>supremum</em> of a random process, written as {% raw %}<span class="math inline">\(\sup_{t \in T} \: X_t\)</span>{% endraw %}, where the set {% raw %}<span class="math inline">\(T\)</span>{% endraw %} indexes “time” (and the collection of random variables). The reason that such quantities play an important role in statistics and probability theory is twofold. First, many problems involve studying a large number of interdependent degrees of freedom; the need to obtain simultaneous control over many random variables thus arises frequently as an ingredient of the mathematical analysis. Second, there are many problems in which various quantities of interest can be naturally expressed in terms of suprema. We will see examples of these later.</p></li>
<li><p><em>Universality</em>. A special case is the central limit theorem. Suppose the observations are i.i.d. with finite, nonzero variance. The centered average, multiplied by the square root of the sample size, converges in distribution to a Gaussian variable with that variance. This is an asymptotic statement as {% raw %}<span class="math inline">\(n\)</span>{% endraw %} tends to infinity:</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{1}{\sqrt{n}} \sum_{1 \leq i \leq n} (X_i - \mathbb{E} X_i) \xrightarrow[n\to\infty]{d} G_1 - \mathbb{E}G_1 ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(G_i\)</span>{% endraw %} are independent Gaussian random variables with the same mean and variance. The phenomenon that the detailed features of the distribution of the individual components (i.e. {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}s) become irrelevant is often referred to as <em>universality</em>. As in the case of concentration, it turns out that this phenomenon occurs much more generally. It can be found in “sufficiently smooth” classes of functions, as we will see.</p></li>
</ol>
<p>These questions require different estimates. Concentration bounds deviations from a mean; estimates for a supremum determine the scale around which concentration occurs. We begin with tensorization, which reduces variance and entropy estimates for independent coordinates to estimates involving one coordinate at a time.</p>

<h2 data-note-section="1" id="fundamental-techniques">1. Fundamental Techniques</h2>
<h3 data-note-section="1.1" id="the-principle-of-tensorization">1.1. The Principle of Tensorization</h3>
<p>How does independence help bound the fluctuation of a function of many observations? Tensorization answers this by separating the contribution of each coordinate. We first consider the variance </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) = \mathbb{E} \left[ f(X_1, \dots, X_n) - \mathbb{E} f(X_1, \dots, X_n) \right]^2 ~.
\end{aligned}\]</div>{% endraw %}
<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a random variable, possibly vector-valued. For any bounded measurable real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X)) &amp;\leq \left( \frac{\sup f - \inf f}{2} \right)^2 ~, \\
        \mathop{\mathrm{Var}}(f(X)) &amp;\leq \mathbb{E} [f(X) - \inf f]^2 ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Since {% raw %}<span class="math inline">\(\mathop{\mathrm{Var}}(f(X)) = \mathop{\mathrm{Var}}(f(X) - a) \leq \mathbb{E} [f(X) - a]^2\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(a \in \mathbb R\)</span>{% endraw %}, we can obtain the desired inequalities if we set {% raw %}<span class="math inline">\(a = \frac{\sup f + \inf f}{2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a = \inf f\)</span>{% endraw %}. ◻</p>

</div>
<p>The bound uses only the range of the function. It assumes nothing about {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, and therefore does not take advantage of independent coordinates. Tensorization allows us to apply a range estimate separately in each coordinate. The purpose of this technique is to deduce high-dimensional inequalities from low-dimensional ones without introducing additional dimension-dependent conditions. To formulate this bound, let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be <em>independent</em> random variables. For a function {% raw %}<span class="math inline">\(f(x_1, \dots, x_n)\)</span>{% endraw %}, let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{Var}}_i (f(x_1, \dots, x_n)) \triangleq \mathop{\mathrm{Var}}(f(x_1, \dots, x_{i-1}, X_i, x_{i+1}, \dots, x_n)) ~.
\end{aligned}\]</div>{% endraw %}
<p> This is the variance calculated with respect to {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} only; all other entries are fixed. We apply the martingale difference method to show the following result.</p>

<div id="thm:tensorization-bound" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Efron-Stein).  If {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are independent random variables and {% raw %}<span class="math inline">\(f(X_1,\dots,X_n)\)</span>{% endraw %} is square-integrable, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) \leq \mathbb{E} \left[ \sum_{1 \leq i \leq n} \mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n)) \right] ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Reveal the observations one at a time. The change in conditional expectation at each step defines a martingale difference: </p>

{% raw %}<div class="math display">\[\begin{aligned}\Delta_i &amp;= \mathbb{E}[f(X_1,\dots,X_n) \mid X_1, \dots, X_i] - \mathbb{E}[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}] ~.\end{aligned}\]</div><p>Clearly,</p>

<div class="math display">\[\begin{aligned}0 &amp;= \mathbb{E} [\Delta_i \mid X_1, \dots, X_{i-1}] \text{ and} \\
        \sum_{1 \leq i \leq n} \Delta_i &amp;= f(X_1, \dots, X_n) - \mathbb{E} f(X_1, \dots, X_n) ~.\end{aligned}\]</div>{% endraw %}
<p> Furthermore, for any {% raw %}<span class="math inline">\(\ell &lt; i\)</span>{% endraw %}, we have, by the law of iterated expectations, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} [\Delta_\ell \Delta_i] &amp;= \mathbb{E} [\Delta_\ell \mathbb{E}[\Delta_i \mid X_1, \dots, X_{i-1}]] = 0 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}(f(X_1, \dots, X_n)) = \sum_{1 \leq i \leq n} \mathbb{E} \Delta_i^2 
    
\end{aligned}\]</div>{% endraw %}
<p> If we can show {% raw %}<span class="math inline">\(\mathbb{E} \Delta_i^2 \leq \mathbb{E} [\mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n))]\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, then we are done. To do this, note that, by the law of iterated expectations and that {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        &amp; \mathbb{E}[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}] \\
        =\: &amp; \mathbb{E}[ \mathbb{E}[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] \mid X_1, \dots, X_{i-1} ] \\
        =\: &amp; \mathbb{E}[ \mathbb{E}[f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] \mid X_1, \dots, X_i ] ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, for the recentred increment </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \breve \Delta_i = f(X_1, \dots, X_n) - \mathbb{E} [f(X_1,\dots,X_n) \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] ~,
    
\end{aligned}\]</div>{% endraw %}
<p> we have {% raw %}<span class="math inline">\(\Delta_i = \mathbb{E} [ \breve \Delta_i \mid X_1, \dots, X_i]\)</span>{% endraw %}. It follows again by the independence of {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n\)</span>{% endraw %} that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{Var}}_i (f(X_1, \dots, X_n)) = \mathbb{E} [\breve \Delta_i^2 \mid X_1, \dots, X_{i-1}, X_{i+1}, \dots, X_n] ~.
    
\end{aligned}\]</div>{% endraw %}
<p> The desired inequality then follows from Jensen’s inequality applied to the conditional expectation {% raw %}<span class="math inline">\(\mathbb{E} \Delta_i^2 = \mathbb{E}[ \mathbb{E}[\breve \Delta_i \mid X_1, \dots, X_i]^2] \leq \mathbb{E}\breve\Delta_i^2\)</span>{% endraw %}. ◻</p>

</div>
<h3 data-note-section="1.2" id="the-entropy-method">1.2. The Entropy Method</h3>
<p>Variance controls a second moment. To obtain exponential tail bounds, we will instead control the exponential moments through entropy. This is the entropy method. For a nonnegative random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, the <em>(concentration) entropy</em> of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \operatorname{Ent} (X) \triangleq \mathbb{E} [X \log X] - [\mathbb{E} X] \log \mathbb{E} X ~.
\end{aligned}\]</div>{% endraw %}
<p> We use {% raw %}<span class="math inline">\(0\log0=0\)</span>{% endraw %} and assume finite mean and positive logarithmic moment whenever subtracting the two terms. Entropy is a convex functional of the random variable. To understand why the concentration entropy is a valuable tool for understanding concentration, we need to draw a connection with other concepts from the theory of concentration. The following result is fundamental, and is often called the <em>Herbst argument</em>.</p>

<p>For completeness, the function {% raw %}<span class="math inline">\(\Phi(u,m)=u\log(u/m)\)</span>{% endraw %} is jointly convex for {% raw %}<span class="math inline">\(u,m&gt;0\)</span>{% endraw %}: its Hessian has nonnegative diagonal entries and determinant zero. It extends continuously to {% raw %}<span class="math inline">\(u=0,m&gt;0\)</span>{% endraw %}. Applying this convexity pointwise to {% raw %}<span class="math inline">\((U,\mathbb{E}U)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((V,\mathbb{E}V)\)</span>{% endraw %}, then taking expectations, proves</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(\theta U+(1-\theta)V)\leq\theta\operatorname{Ent}(U)+(1-\theta)\operatorname{Ent}(V),\qquad0\leq\theta\leq1.\]</div>{% endraw %}
<p>If either variable has zero mean, it is zero almost surely, and the assertion follows from {% raw %}<span class="math inline">\(\operatorname{Ent}(cU)=c\operatorname{Ent}(U)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(c\geq0\)</span>{% endraw %}.</p>
<div id="prop:herbst" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong> (Herbst argument). Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be integrable, with {% raw %}<span class="math inline">\(\mathbb{E}e^{\lambda X}&lt;\infty\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\lambda>0\)</span>{% endraw %}. Suppose </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent} (e^{\lambda X}) \leq \frac{\lambda^2 \sigma^2}{2} \mathbb{E} e^{\lambda X} \quad \text{for all } \lambda \geq 0 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \log \mathbb{E} e^{\lambda(X-\mathbb{E} X)} \leq \frac{\lambda^2 \sigma^2}{2} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(M(\lambda)=\mathbb{E}e^{\lambda X}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\psi(\lambda)=\log M(\lambda)-\lambda\mathbb{E}X\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, differentiation under the expectation is justified locally: on {% raw %}<span class="math inline">\(X\geq0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|X|e^{\lambda X}\)</span>{% endraw %} is bounded by a constant times {% raw %}<span class="math inline">\(e^{(\lambda+\delta)X}\)</span>{% endraw %}; on {% raw %}<span class="math inline">\(X&lt;0\)</span>{% endraw %}, it is bounded on any compact interval of positive {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Thus</p>
{% raw %}<div class="math display">\[\left(\frac{\psi(\lambda)}{\lambda}\right)'=\frac{\lambda M'(\lambda)-M(\lambda)\log M(\lambda)}{\lambda^2M(\lambda)}=\frac{\operatorname{Ent}(e^{\lambda X})}{\lambda^2M(\lambda)}\leq\frac{\sigma^2}{2}.\]</div>{% endraw %}
<p>At zero, integrability and a positive exponential moment justify {% raw %}<span class="math inline">\(M'(0+)=\mathbb{E}X\)</span>{% endraw %}: the negative-side difference quotient is bounded by {% raw %}<span class="math inline">\(|X|\)</span>{% endraw %}, and the positive side by {% raw %}<span class="math inline">\(Xe^{\delta X}\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(\psi(\lambda)=o(\lambda)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\lambda\downarrow0\)</span>{% endraw %}. Integrate the displayed derivative from {% raw %}<span class="math inline">\(a\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(a\downarrow0\)</span>{% endraw %}. This gives {% raw %}<span class="math inline">\(\psi(\lambda)/\lambda\leq\lambda\sigma^2/2\)</span>{% endraw %}, hence the claimed bound for {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}. At zero it is an equality. ◻</p>
</div>
<p>The Herbst argument reduces an exponential-moment bound to an entropy bound. For a function of independent observations, <em>tensorization</em> estimates this entropy one coordinate at a time, just as the Efron–Stein inequality estimates variance. To state the tensorization inequality, introduce coordinate-wise entropy as in the variance calculation. To do so, let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be independent random variables. For some function {% raw %}<span class="math inline">\(f: \mathbb R^n \to [0,\infty)\)</span>{% endraw %}, define the function </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \operatorname{Ent}_i f(x_1, \dots, x_n) \triangleq \operatorname{Ent} (f(x_1, \dots, x_{i-1}, X_i, x_{i+1}, \dots, x_n)) ~,
\end{aligned}\]</div>{% endraw %}
<p> i.e. the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th coordinate entropy is the entropy of {% raw %}<span class="math inline">\(f(X_1, \dots, X_n)\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} only, while keeping the rest of the (random) variables fixed. We can then show the following statement.</p>

<div id="thm:entropy-tensorizes" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Entropy tensorizes). Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent and {% raw %}<span class="math inline">\(Y=f(X_1,\ldots,X_n)\ge0\)</span>{% endraw %} measurable, with {% raw %}<span class="math inline">\(\mathbb{E}Y&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[Y\log_+Y]&lt;\infty\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(0\log0=0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(Y)\le\sum_{i=1}^n\mathbb{E}[\operatorname{Ent}_i f(X_1,\ldots,X_n)].\]</div>{% endraw %}
</div>
<p>A variational formula will supply the one-coordinate bound.</p>
<div id="prop:variational-principle-entropy" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5.</strong> For a nonnegative {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with finite mean and {% raw %}<span class="math inline">\(\mathbb{E}[U\log_+U]&lt;\infty\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(U)=\sup\{\mathbb{E}[UV]:\mathbb{E}e^V=1,\ \mathbb{E}|UV|&lt;\infty\}.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For an admissible {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(dQ=e^VdP\)</span>{% endraw %}. Jensen's inequality for {% raw %}<span class="math inline">\(x\log x\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(U)-\mathbb{E}[UV]
=\mathbb{E}_Q[(Ue^{-V})\log(Ue^{-V})]
-\mathbb{E}_Q[Ue^{-V}]\log\mathbb{E}_Q[Ue^{-V}]\ge0.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\mathbb{E}U=0\)</span>{% endraw %}, both sides of the variational formula are zero. Otherwise choose {% raw %}<span class="math inline">\(V_\epsilon=\log((U+\epsilon)/(\mathbb{E}U+\epsilon))\)</span>{% endraw %}. This has {% raw %}<span class="math inline">\(\mathbb{E}e^{V_\epsilon}=1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb{E}[UV_\epsilon]\to\operatorname{Ent}(U)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\epsilon\downarrow0\)</span>{% endraw %}. The assumed positive logarithmic moment and the bound on {% raw %}<span class="math inline">\(u|\log u|\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0\le u\le1\)</span>{% endraw %} justify the limit. Thus zero values of {% raw %}<span class="math inline">\(U\)</span>{% endraw %} do not require taking a logarithm of zero in an admissible test variable. □</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:entropy-tensorizes" data-reference-type="ref" data-reference="thm:entropy-tensorizes">4</a>.</em> First suppose {% raw %}<span class="math inline">\(0&lt;a\le Y\le b&lt;\infty\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(M_i=\mathbb{E}[Y\mid X_1,\ldots,X_i]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(M_0=\mathbb{E}Y\)</span>{% endraw %}, and define the logarithmic increments</p>
{% raw %}<div class="math display">\[W_i=\log M_i-\log M_{i-1}.\]</div>{% endraw %}
<p>The sum of the increments {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %} telescopes to {% raw %}<span class="math inline">\(\log Y-\log\mathbb{E}Y\)</span>{% endraw %}. Moreover, conditional on all coordinates except {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, independence gives</p>
{% raw %}<div class="math display">\[\mathbb{E}[e^{W_i}\mid X_1,\ldots,X_{i-1},X_{i+1},\ldots,X_n]
=\frac{\mathbb{E}[M_i\mid X_1,\ldots,X_{i-1}]}{M_{i-1}}=1.\]</div>{% endraw %}
<p>Applying Proposition 5 to the conditional law in coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, then averaging, yields {% raw %}<span class="math inline">\(\mathbb{E}[YW_i]\le\mathbb{E}\operatorname{Ent}_i f\)</span>{% endraw %}. Consequently,</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(Y)=\sum_{i=1}^n\mathbb{E}[YW_i]\le\sum_{i=1}^n\mathbb{E}\operatorname{Ent}_i f.\]</div>{% endraw %}
<p>For general {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} under the stated assumptions, apply the bounded argument to {% raw %}<span class="math inline">\((Y\wedge m)+\epsilon\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\epsilon\downarrow0\)</span>{% endraw %}, and then {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}. Both the unconditional and conditional entropy expressions converge. Indeed, {% raw %}<span class="math inline">\(u\log u\)</span>{% endraw %} is bounded below, its positive part is dominated by {% raw %}<span class="math inline">\(Y\log_+Y\)</span>{% endraw %}, and Jensen bounds the conditional-mean term by the conditional expectation of this integrable envelope. The truncation argument proves the entropy tensorization inequality for the stated integrability class. □</p>
</div>

<p>Combining entropy tensorization with the Herbst argument gives a route to Gaussian-type concentration for nonlinear functions of independent variables. Among other things, we can show this approach yields a bounded difference inequality, where the variance proxy is the sum of squared “discrete derivatives” of the random variable. We will make this formal in the discussion of concentration inequalities (in particular, in Lemma <a href="{% post_url 2022-09-13-concentration-inequalities %}#lem:mcdiarmid" data-reference-type="ref" data-reference="lem:mcdiarmid">12</a> of the concentration-inequalities note). For now, we note the following result, known as a <em>modified log-Sobolev inequality</em>.</p>

<div id="thm:dmls" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong> (Modified log-Sobolev inequality; discrete).  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} be i.i.d. real-valued random variables with finite second moments and finite expectations of their squares times their exponentials. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent} (e^X) \leq \frac12 \mathbb{E}[(X-\widetilde X)^2 e^X] ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the expectation is over the independent pair.</p>

</div>
<div class="proof">
<p>The assumptions make every term finite: {% raw %}<span class="math inline">\(e^X\leq e+X^2e^X1_{\{X&gt;1\}}\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(|X|e^X\)</span>{% endraw %} is controlled by {% raw %}<span class="math inline">\(e^X+X^2e^X\)</span>{% endraw %}. Independence and {% raw %}<span class="math inline">\((X-\widetilde X)^2\leq2X^2+2\widetilde X^2\)</span>{% endraw %} then give integrability on the right. To justify the first entropy bound in the proof, Jensen yields {% raw %}<span class="math inline">\(\log\mathbb{E}e^X\geq\mathbb{E}X\)</span>{% endraw %}, hence</p>
{% raw %}<div class="math display">\[\begin{aligned}
\operatorname{Ent}(e^X)&amp;\leq\mathbb{E}[Xe^X]-\mathbb{E}X\,\mathbb{E}e^X\\
&amp;=\frac12\mathbb{E}[(X-\widetilde X)(e^X-e^{\widetilde X})].
\end{aligned}\]</div>{% endraw %}
<p>The equality follows by expanding the product and using independence for both cross terms.</p>
</div>
<div class="proof">
<p><em>Proof.</em> By direct calculations, note that for any {% raw %}<span class="math inline">\(a, b \in \mathbb R\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (a-b)(e^a - e^b) &amp;= (a-b)^2 \int_0^1 e^{(1-t)a + tb} \dif t \\
        &amp;\leq (a-b)^2 \int_0^1 (1-t) e^a + t e^b \dif t = \frac12 (a-b)^2 (e^a + e^b) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> where the inequality follows from convexity of the map {% raw %}<span class="math inline">\(t \mapsto e^{(1-t) a + t b}\)</span>{% endraw %}. It follows from the definition of entropy and the variational formulation that </p>

{% raw %}<span id="eq:exchangeable-entropy"></span><div class="math display">\[\begin{aligned}
         \operatorname{Ent} (e^X) &amp;\leq \frac12 \mathbb{E} [ (X-\widetilde X) (e^X - e^{\widetilde X})] \\
        &amp;\leq \frac14 \mathbb{E} [ (X-\widetilde X)^2 (e^X + e^{\widetilde X})] \\
        &amp;= \frac12 \mathbb{E}[(X-\widetilde X)^2 e^X] ~,
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> where the equality follows from the fact that {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} are i.i.d. random variables. ◻</p>

</div>
<div id="result-7" class="remark" data-note-number="7" data-note-kind="Remark">
<p><strong>Remark 7</strong>.  The inequality in <a href="#eq:exchangeable-entropy" data-reference-type="eqref" data-reference="eq:exchangeable-entropy">(1)</a> is straightforward to obtain: note that the concavity of the logarithm tells us that, if {% raw %}<span class="math inline">\(W\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde W\)</span>{% endraw %} are i.i.d. positive random variables, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent}(W) = \mathbb{E}^W [W(\log W - \log \mathbb{E}^{\widetilde W} \widetilde W)] \leq \mathbb{E}^{W,\widetilde W} [W (\log W - \log \widetilde W)] ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Note that independence is used to obtain the inequality. And further note that {% raw %}<span class="math inline">\((W, \widetilde W)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\widetilde W, W)\)</span>{% endraw %} have the same joint distribution; so, calculating {% raw %}<span class="math inline">\(\operatorname{Ent}(\widetilde W)\)</span>{% endraw %} and averaging with {% raw %}<span class="math inline">\(\operatorname{Ent}(W)\)</span>{% endraw %}, we have the desired result (the expectation in <a href="#eq:exchangeable-entropy" data-reference-type="eqref" data-reference="eq:exchangeable-entropy">(1)</a> is with respect to the joint law of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde W\)</span>{% endraw %}).</p>

</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a></p></nav>

</div>
