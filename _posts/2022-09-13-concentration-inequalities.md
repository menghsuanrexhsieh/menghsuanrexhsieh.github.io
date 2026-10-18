---
layout: "post"
title: "Concentration Inequalities"
date: "2022-09-13"
tags: ["statistics", "empirical processes"]
excerpt: "The discussion above can be generalized to procedure known as the Chernoff bound."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
---

<div class="note-content" markdown="0">

<p>Chebyshev’s inequality bounds a tail probability using the variance. Exponential bounds require more information about the distribution, but they can give much stronger control of rare fluctuations. We first derive such bounds for sums, then ask how much survives for a nonlinear function of independent observations.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="concentration-inequalities" data-note-section="title">

</div>
<p>Tensorization tells us we can investigate the variance of a random function, in which the data are independent. In particular, we know that this variance is small if {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has “small” gradient. Given this understanding, we can then ask ourselves <em>what can we understand about the distribution of these fluctuations</em>. The tools that are most useful for understanding the distribution of fluctuations are called <em>concentration inequalities</em>.</p>

<p>The simplest form of a concentration inequality is Markov’s inequality (and, by extension, Chebyshev’s inequality). Let’s look at what Chebyshev’s inequality predicts for the sum of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. random variables with finite positive variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}. Denote {% raw %}<span class="math inline">\(S_n = \sum_{1 \leq i \leq n} X_i\)</span>{% endraw %}. An application of Chebyshev’s inequality tells us </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(|S_n - \mathbb{E} S_n| \geq \varepsilon) \leq \frac{n\sigma^2}{\varepsilon^2} ~.
\end{aligned}\]</div>{% endraw %}
<p> With a {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %}-rescaling, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(|S_n - \mathbb{E} S_n| \geq \sqrt{n}\varepsilon) \leq \frac{\sigma^2}{\varepsilon^2} ~.
\end{aligned}\]</div>{% endraw %}
<p> Compare this with the prediction of the central limit theorem, which tells us </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \geq \sqrt{n}\varepsilon) \xrightarrow{n\to\infty} 1 - \Phi \left( \frac{\varepsilon}{\sigma} \right) \leq \frac{\sigma}{\sqrt{2\pi} \varepsilon} \exp \left( - \frac{\varepsilon^2}{2\sigma^2} \right) ~.
\end{aligned}\]</div>{% endraw %}
<p>Chebyshev gives fluctuations of order {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} in probability. The central limit theorem describes the limit at each fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}; it does not by itself give a finite-sample exponential tail bound, or a bound uniform over growing thresholds. Such concentration bounds need additional hypotheses, such as boundedness or control of exponential moments.</p>

<p>It turns out we can improve on the bound offered by Chebyshev’s inequality. Apply Markov’s inequality to the exponential of the centered sum. The free parameter lets us balance the threshold against the growth of the moment generating function. For any {% raw %}<span class="math inline">\(\lambda &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}\mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \geq \varepsilon) = \mathbf P\,\,\!\!( e^{\lambda(S_n - \mathbb{E} S_n)} \geq e^{\lambda\varepsilon}) &amp;\leq \frac{\mathbb{E} e^{\lambda(S_n - \mathbb{E} S_n)}}{ e^{\lambda\varepsilon}} ~, \end{aligned}\]</div><p>which follows from Markov’s inequality. Because <span class="math inline">\(S_n\)</span> is the sum of <span class="math inline">\(n\)</span> i.i.d. random variables, the rightmost expression becomes</p>

<div class="math display">\[\begin{aligned}&amp;= \frac{1}{e^{\lambda\varepsilon}} \prod_{1 \leq i \leq n} \mathbb{E} e^{\lambda(X_i-\mathbb{E}X_i)} ~.\end{aligned}\]</div>{% endraw %}
<p> So, supposing that the function {% raw %}<span class="math inline">\(\mathbb{E} e^{\lambda(S_n - \mathbb{E} S_n)}\)</span>{% endraw %} is well-defined (exists and finite), it remains to derive a bound for {% raw %}<span class="math inline">\(\mathbb{E} e^{\lambda(X_i-\mathbb{E}X_i)}\)</span>{% endraw %}.</p>

<div id="lem:prelim-hoeffding" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a random variable with {% raw %}<span class="math inline">\(\mathbb{E} X = 0\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(X \in [a,b]\)</span>{% endraw %} almost surely. Then, for any {% raw %}<span class="math inline">\(\lambda &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:prelim-hoeffding"></span><div class="math display">\[\begin{aligned}
 
        \mathbb{E} e^{\lambda X} \leq e^{\frac{\lambda^2(b-a)^2}{8}} ~. 
    
\end{aligned}\tag{1}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Boundedness makes {% raw %}<span class="math inline">\(g(\lambda)=\log\mathbb{E}e^{\lambda X}\)</span>{% endraw %} twice differentiable for every real {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Under the probability measure with density {% raw %}<span class="math inline">\(e^{\lambda X}/\mathbb{E}e^{\lambda X}\)</span>{% endraw %}, differentiation gives {% raw %}<span class="math inline">\(g^{\prime\prime}(\lambda)=\operatorname{Var}_\lambda(X)\)</span>{% endraw %}. This measure is still supported on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(m=(a+b)/2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[0\leq g^{\prime\prime}(\lambda)=\operatorname{Var}_\lambda(X)\leq\mathbb{E}_\lambda[(X-m)^2]\leq\frac{(b-a)^2}{4}.\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(g(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g^\prime(0)=\mathbb{E}X=0\)</span>{% endraw %}, integrating this bound twice yields, for every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[g(\lambda)=\int_0^\lambda(\lambda-s)g^{\prime\prime}(s)\,ds\leq\frac{\lambda^2(b-a)^2}{8}.\]</div>{% endraw %}

<p>Exponentiating proves <a href="#eq:prelim-hoeffding">(1)</a>. If {% raw %}<span class="math inline">\(a=b\)</span>{% endraw %}, the mean-zero assumption makes {% raw %}<span class="math inline">\(X=0\)</span>{% endraw %}, and the same inequality holds with equality. The bound is global in {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, which is what the subsequent optimization requires. ◻</p>

</div>
<div id="thm:hoeffding-inequality" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Hoeffding).  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be independent bounded random variables, such that {% raw %}<span class="math inline">\(X_i \in [a_i, b_i]\)</span>{% endraw %} almost surely. For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, if {% raw %}<span class="math inline">\(\sum_i(b_i-a_i)^2&gt;0\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \geq \varepsilon) &amp;\leq \exp \left( -\frac{2\varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2} \right) ~, \\
        \mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \leq -\varepsilon) &amp;\leq \exp \left( -\frac{2\varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2} \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p>If all interval widths are zero, the centered sum is zero almost surely, so both tail probabilities are zero instead.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(V=\sum_{i=1}^n(b_i-a_i)^2\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(V=0\)</span>{% endraw %}, the centered sum vanishes, and both tail probabilities are zero for {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Otherwise, apply Lemma 1 to each centered variable {% raw %}<span class="math inline">\(X_i-\mathbb{E}X_i\)</span>{% endraw %}. Independence preserves the product of their centered exponential moments:</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \geq \varepsilon) &amp;= \mathbf P\,\,\!\!( e^{\lambda(S_n - \mathbb{E} S_n)} \geq e^{\lambda\varepsilon}) \leq \frac{\mathbb{E} e^{\lambda(S_n - \mathbb{E} S_n)}}{ e^{\lambda\varepsilon}} \\
        &amp;= \frac{1}{e^{\lambda\varepsilon}} \prod_{1 \leq i \leq n} \mathbb{E} e^{\lambda(X_i-\mathbb{E}X_i)} \\
        &amp;\leq \frac{1}{e^{\lambda\varepsilon}} e^{\sum_{1 \leq i \leq n} \frac{\lambda^2(b_i - a_i)^2}{8}} \\
        &amp;= \exp \left( -\lambda \varepsilon + \frac{\lambda^2}{8} \sum_{1 \leq i \leq n} (b_i - a_i)^2 \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> It remains to find the minimum of the function {% raw %}<span class="math inline">\(g(\lambda) = -\lambda \varepsilon + \frac{\lambda^2}{8} \sum_{1 \leq i \leq n} (b_i - a_i)^2\)</span>{% endraw %}. Since this is a quadratic function, it follows that the minimum occurs at </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lambda = \frac{4\varepsilon}{\sum_{1 \leq i \leq n} (b_i - a_i)^2} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, the inequality above reduces to </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(S_n - \mathbb{E} S_n \geq \varepsilon) &amp;\leq \exp \left( -\lambda \varepsilon + \frac{\lambda^2}{8} \sum_{1 \leq i \leq n} (b_i - a_i)^2 \right) \\
        &amp;\leq \exp \left( \frac{-4\varepsilon^2 + 2 \varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2 } \right) = \exp \left( \frac{-2 \varepsilon^2}{\sum_{1 \leq i \leq n} (b_i - a_i)^2 } \right) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. Apply the same upper-tail argument to {% raw %}<span class="math inline">\(-X_1,\ldots,-X_n\)</span>{% endraw %} to obtain the lower-tail bound, with threshold {% raw %}<span class="math inline">\(-\varepsilon\)</span>{% endraw %}. ◻</p>

</div>
<div id="cor:rademacher-subgaussian" class="corollary" data-note-number="3" data-note-kind="Corollary">
<p><strong>Corollary 3</strong>.  Let {% raw %}<span class="math inline">\((a_1, \dots, a_n) \in \mathbb R^n\)</span>{% endraw %} be constants, and {% raw %}<span class="math inline">\((\varepsilon_1, \dots, \varepsilon_n)\)</span>{% endraw %} be independent Rademacher random variables. Then, for every positive threshold and nonzero coefficient vector, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq i \leq n} a_i \varepsilon_i \right| \geq t \right) \leq 2 e^{-\frac{t^2}{2 \lVert a \rVert^2}} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\lVert \cdot \rVert\)</span>{% endraw %} denotes the Euclidean norm.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The variable {% raw %}<span class="math inline">\(a_i\varepsilon_i\)</span>{% endraw %} has mean zero and range {% raw %}<span class="math inline">\([-|a_i|,|a_i|]\)</span>{% endraw %}. Thus the sum of squared range widths in Hoeffding's inequality is {% raw %}<span class="math inline">\(4\sum_i a_i^2=4\|a\|^2\)</span>{% endraw %}. Add its two one-sided bounds. If {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}, the sum is zero and its tail probability is zero for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. ◻</p>
</div>
<p>Hoeffding's bound uses only the ranges of the variables. Boundedness guarantees the exponential moments used in its proof; for unbounded variables this requires a separate hypothesis. For i.i.d. variables in {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}, it gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb P\!\left\{S_n - \mathbb{E} S_n \geq \sqrt{\log \left( \frac{1}{\alpha} \right) \frac{n(b-a)^2}{2}}\right\}\leq\alpha ~.
\end{aligned}\]</div>{% endraw %}
<p> So, we can construct the following <em>conservative</em> confidence interval at level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for the population mean: </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \left[ \overline X_n \pm \frac{b-a}{\sqrt{2n}} \sqrt{\log \left( \frac{2}{\alpha} \right)} \right] ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\overline X_n\)</span>{% endraw %} denotes the sample mean. Finally, note that we <em>have not</em> used any information about the variance of {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} in constructing this inequality.</p>

<p>A real random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is <em>subgaussian</em> if there are constants {% raw %}<span class="math inline">\(C,\nu&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb P(|X|&gt;t)\leq C e^{-\nu t^2}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. This is equivalent to each of the following conditions, with constants allowed to change:</p>
<p>(i) {% raw %}<span class="math inline">\(\mathbb E e^{MX^2}&lt;\infty\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}. (ii) {% raw %}<span class="math inline">\(\mathbb E e^{\lambda(X-\mathbb EX)}\leq L e^{\ell\lambda^2}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\lambda\in\mathbb R\)</span>{% endraw %}, for some {% raw %}<span class="math inline">\(\ell&gt;0\)</span>{% endraw %} and finite {% raw %}<span class="math inline">\(L\geq1\)</span>{% endraw %}. (iii) {% raw %}<span class="math inline">\(\mathbb E|X|^p\leq K^p p^{p/2}\)</span>{% endraw %} for all real {% raw %}<span class="math inline">\(p\geq1\)</span>{% endraw %}, for some {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}.</p>
<p><em>Proof of the equivalences.</em> From the tail bound, choose {% raw %}<span class="math inline">\(0&lt;M&lt;\nu\)</span>{% endraw %}. The tail-integral formula gives</p>
{% raw %}<div class="math display">\[\mathbb E e^{MX^2}=1+\int_1^\infty\mathbb P\{|X|&gt;\sqrt{\log u/M}\}\,du\leq1+C\int_1^\infty u^{-\nu/M}\,du&lt;\infty.\]</div>{% endraw %}
<p>Conversely, writing {% raw %}<span class="math inline">\(A=\mathbb E e^{MX^2}\)</span>{% endraw %}, Markov gives {% raw %}<span class="math inline">\(\mathbb P(|X|&gt;t)\leq A e^{-Mt^2}\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\sup_{x\geq0}x^p e^{-Mx^2}=(p/(2eM))^{p/2}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\mathbb E|X|^p\leq A(p/(2eM))^{p/2}\)</span>{% endraw %}, which has the form (iii) since {% raw %}<span class="math inline">\(A\leq\max(1,A)^p\)</span>{% endraw %}. In the reverse direction, (iii) and Markov with {% raw %}<span class="math inline">\(p=t^2/(e^2K^2)\geq1\)</span>{% endraw %} give {% raw %}<span class="math inline">\(\mathbb P(|X|&gt;t)\leq e^{-p}\)</span>{% endraw %}; increasing the prefactor covers {% raw %}<span class="math inline">\(t&lt;eK\)</span>{% endraw %}.</p>
<p>For (i) implies (ii), let {% raw %}<span class="math inline">\(\mu=\mathbb EX\)</span>{% endraw %}, finite by (i), and choose {% raw %}<span class="math inline">\(a=M/2\)</span>{% endraw %}. The inequality {% raw %}<span class="math inline">\((X-\mu)^2\leq2X^2+2\mu^2\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(B=\mathbb E e^{a(X-\mu)^2}&lt;\infty\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\lambda y\leq ay^2+\lambda^2/(4a)\)</span>{% endraw %}, we obtain (ii) with {% raw %}<span class="math inline">\(L=B\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\ell=1/(4a)\)</span>{% endraw %}. Finally (ii), optimized at {% raw %}<span class="math inline">\(\lambda=\pm t/(2\ell)\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(\mathbb P(|X-\mu|&gt;t)\leq2L e^{-t^2/(4\ell)}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t&gt;2|\mu|\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(|X|&gt;t\Rightarrow|X-\mu|&gt;t/2\)</span>{% endraw %}, and enlarge the constant to cover smaller {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. This returns the original tail condition. ◻</p>
<p>An example of a subgaussian <em>process</em> is the Rademacher process, as described in Corollary <a href="#cor:rademacher-subgaussian" data-reference-type="ref" data-reference="cor:rademacher-subgaussian">3</a>. A much more powerful result is true, and is an example of a <em>maximal inequality</em>.</p>

<div id="prop:subgaussian-maximal-inequality" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong> (Maximal inequality: subgaussian).  Suppose {% raw %}<span class="math inline">\(Y_1, \dots, Y_n\)</span>{% endraw %} are subgaussian random variables, with constants </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} e^{\lambda Y_i} \leq e^{\frac{\lambda^2 \sigma^2}{2}} ~~\text{for all }\lambda\in\mathbb R,\quad 1 \leq i \leq n ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} Y_i \leq \sigma \sqrt{2 \log n} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> This follows from Jensen’s inequality and the assumption in the statement: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        e^{\lambda \mathbb{E} \sup_{1 \leq i \leq n} Y_i} &amp;\leq \mathbb{E} e^{\lambda \sup_{1 \leq i \leq n} Y_i} \\
        &amp;\leq \sum_{1 \leq i \leq n} \mathbb{E} e^{\lambda Y_i} \leq \sum_{1 \leq i \leq n} e^{\frac{\lambda^2 \sigma^2}{2}} = n e^{\frac{\lambda^2 \sigma^2}{2}} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, taking the logarithm of both sides gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} Y_i \leq \frac{\log n}{\lambda} + \frac{\lambda \sigma^2}{2} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(n&gt;1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}, the minimum of the right-hand side occurs at {% raw %}<span class="math inline">\(\lambda = \sqrt{\frac{2\log n}{\sigma^2}}\)</span>{% endraw %}, so the inequality above reduces to </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} Y_i \leq \sigma \sqrt{2 \log n} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<p>For {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\lambda\downarrow0\)</span>{% endraw %} in the bound above. If {% raw %}<span class="math inline">\(\sigma=0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\lambda\to\infty\)</span>{% endraw %}. Both cases give the stated zero upper bound. The two-sided moment assumption also implies {% raw %}<span class="math inline">\(\mathbb EY_i=0\)</span>{% endraw %}, by differentiating at zero. Independence of the {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} is not needed.</p>
<div id="prop:strictly-increasing-maximal-inequality" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>.  Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a continuous, strictly increasing, convex function from {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %} to {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %}. Take finite constants {% raw %}<span class="math inline">\(c_i&gt;0\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\xi_1, \dots, \xi_n\)</span>{% endraw %} are random variables such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} f\left( \frac{|\xi_i|}{c_i} \right) \leq L
    
\end{aligned}\]</div>{% endraw %}
<p> for some finite constant {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, and the inequality above holds for all {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} |\xi_i| \leq f^{-1} (Ln) \sup_{1 \leq i \leq n} c_i ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is strictly increasing, convex, and nonnegative, we have (by Jensen’s inequality applied in the following calculations) </p>

{% raw %}<div class="math display">\[\begin{aligned}
        f \left( \frac{\mathbb{E} \sup_{1 \leq i \leq n} |\xi_i|}{\sup_{1 \leq i \leq n} c_i} \right) &amp;\leq f \left( \mathbb{E} \sup_{1 \leq i \leq n} \frac{|\xi_i|}{c_i} \right) \\
        &amp;\leq \mathbb{E} f \left( \sup_{1 \leq i \leq n} \frac{|\xi_i|}{c_i} \right) \leq \sum_{1 \leq i \leq n} \mathbb{E} f \left( \frac{|\xi_i|}{c_i} \right) \leq Ln ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is invertible by our assumptions, apply {% raw %}<span class="math inline">\(f^{-1}\)</span>{% endraw %} to both sides to conclude. ◻</p>

</div>
<p>The inverse in Proposition 5 is defined at {% raw %}<span class="math inline">\(Ln\)</span>{% endraw %}: an increasing convex function that is not constant is unbounded, and {% raw %}<span class="math inline">\(Ln\geq f(0)\)</span>{% endraw %}. Such a function also has a positive linear lower bound for large arguments, so the moment assumptions ensure the integrability needed for Jensen's inequality.</p>
<div id="eg:rademacher-subgaussian" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6.</strong> Let {% raw %}<span class="math inline">\(\varepsilon_1,\ldots,\varepsilon_n\)</span>{% endraw %} be independent Rademacher signs, let {% raw %}<span class="math inline">\(a^{(1)},\ldots,a^{(n)}\in\mathbb R^n\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\xi_i=\sum_{k=1}^n a_k^{(i)}\varepsilon_k\)</span>{% endraw %}. The variables {% raw %}<span class="math inline">\(\xi_i\)</span>{% endraw %} may be dependent, since they use the same signs. Independence of the signs gives, for every {% raw %}<span class="math inline">\(\lambda\in\mathbb R\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb{E}e^{\lambda\xi_i}=\prod_{k=1}^n\cosh(\lambda a_k^{(i)})\leq\exp\!\left(\frac{\lambda^2\|a^{(i)}\|_2^2}{2}\right).\]</div>{% endraw %}

<p>The last inequality follows by differentiating {% raw %}<span class="math inline">\(h(u)=\log\cosh u\)</span>{% endraw %}: {% raw %}<span class="math inline">\(h(0)=h^\prime(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0\leq h^{\prime\prime}(u)=1/\cosh^2u\leq1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(h(u)\leq u^2/2\)</span>{% endraw %}. Exponential Markov bounds applied with both signs of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, and optimized at {% raw %}<span class="math inline">\(|\lambda|=s/\|a^{(i)}\|_2^2\)</span>{% endraw %}, yield</p>

{% raw %}<div class="math display">\[\mathbb P\{|\xi_i|\geq s\}\leq2\exp\!\left(-\frac{s^2}{2\|a^{(i)}\|_2^2}\right),\qquad s&gt;0.\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(a^{(i)}=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\xi_i=0\)</span>{% endraw %} and no normalization is needed. Otherwise this also proves the squared-exponential moment bound used in maximal inequalities. With {% raw %}<span class="math inline">\(Y=\exp(\xi_i^2/(6\|a^{(i)}\|_2^2))\)</span>{% endraw %}, the tail-integral identity gives</p>

{% raw %}<div class="math display">\[\mathbb{E}Y=1+\int_1^\infty\mathbb P\{Y&gt;s\}\,ds\leq1+2\int_1^\infty s^{-3}\,ds=2.\]</div>{% endraw %}

<p>For the maximum, write {% raw %}<span class="math inline">\(v=\max_{1\leq i\leq n}\|a^{(i)}\|_2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, Jensen’s inequality and the sum bound give</p>

{% raw %}<div class="math display">\[\lambda\,\mathbb{E}\max_{1\leq i\leq n}|\xi_i|\leq\log\mathbb{E}e^{\lambda\max_i|\xi_i|}\leq\log\sum_{i=1}^n\bigl(\mathbb{E}e^{\lambda\xi_i}+\mathbb{E}e^{-\lambda\xi_i}\bigr)\leq\log(2n)+\frac{\lambda^2v^2}{2}.\]</div>{% endraw %}

<p>When {% raw %}<span class="math inline">\(v&gt;0\)</span>{% endraw %}, minimize the right side after division by {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, taking {% raw %}<span class="math inline">\(\lambda=\sqrt{2\log(2n)}/v\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[\mathbb{E}\max_{1\leq i\leq n}|\xi_i|\leq v\sqrt{2\log(2n)}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(v=0\)</span>{% endraw %}, both sides vanish. The factor {% raw %}<span class="math inline">\(\log(2n)\)</span>{% endraw %} includes the case {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}; a bound using {% raw %}<span class="math inline">\(\log n\)</span>{% endraw %} alone would incorrectly give zero there. The argument needs no independence between the linear combinations. ◻</p>

</div>
<p>The same optimization can be carried out for a general log moment generating function. The resulting bound is called the <em>Chernoff bound</em>.</p>

<div id="lem:chernoff-bound" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong> (Chernoff).  For an integrable random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, write </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \psi (\lambda) = \log \mathbb{E} e^{\lambda(X - \mathbb{E} X)} ~~\text{and}~~ \psi^* (t) = \sup_{\lambda \geq 0} \lambda t - \psi(\lambda)
    
\end{aligned}\]</div>{% endraw %}
<p> to denote the log moment generating function and its Legendre transform, respectively. Then, {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!(X - \mathbb{E} X \geq t) \leq e^{-\psi^*(t)}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For every {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, exponential Markov gives {% raw %}<span class="math inline">\(\mathbb P(X-\mathbb EX\geq t)\leq\exp\{\psi(\lambda)-\lambda t\}\)</span>{% endraw %}. We allow {% raw %}<span class="math inline">\(\psi(\lambda)=+\infty\)</span>{% endraw %}; such a parameter gives no useful bound. The choice {% raw %}<span class="math inline">\(\lambda=0\)</span>{% endraw %} gives the bound one. Taking the infimum over all {% raw %}<span class="math inline">\(\lambda\geq0\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(\exp\{-\sup_{\lambda\geq0}(\lambda t-\psi(\lambda))\}=e^{-\psi^*(t)}\)</span>{% endraw %}. No attainment of the infimum is needed. ◻</p>
</div>
<p>A direct consequence of the Chernoff bound is a powerful concentration inequality, called <em>Bernstein’s inequality</em>.</p>

<div id="prop:bernstein" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong> (Bernstein).  Let {% raw %}<span class="math inline">\(X_1, X_2, \dots\)</span>{% endraw %} be independent random variables with bounded ranges {% raw %}<span class="math inline">\([-M,M]\)</span>{% endraw %} and zero means. Take {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v&gt;0\)</span>{% endraw %}. Then, for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:bernstein"></span><div class="math display">\[\begin{aligned}
 
        \mathbf P\,\,\!\!\left( \left| \sum_{1 \leq i \leq n} X_i \right| &gt; t \right) \leq 2 e^{-\frac{t^2}{2(v + Mt/3)}} ~,
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> for {% raw %}<span class="math inline">\(v \geq \sum_{1 \leq i \leq n} \mathop{\mathrm{Var}}(X_i)\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof, using Proposition 9 below.</em> For {% raw %}<span class="math inline">\(u\geq0\)</span>{% endraw %}, expand the exponential and use {% raw %}<span class="math inline">\(\mathbb EX_i=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|X_i|^k\leq M^{k-2}X_i^2\)</span>{% endraw %} for {% raw %}<span class="math inline">\(k\geq2\)</span>{% endraw %}:</p>
{% raw %}<div class="math display">\[\mathbb E e^{uX_i/M}\leq1+\frac{\mathbb EX_i^2}{M^2}(e^u-1-u)\leq\exp\!\left\{\frac{\mathbb EX_i^2}{M^2}(e^u-1-u)\right\}.\]</div>{% endraw %}
<p>The series and expectation can be interchanged because {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} is bounded. Independence and multiplication show that {% raw %}<span class="math inline">\(Z=M^{-1}\sum_iX_i\)</span>{% endraw %} satisfies Proposition 9 with parameter {% raw %}<span class="math inline">\(v/M^2\)</span>{% endraw %}. Applying its third bound at {% raw %}<span class="math inline">\(t/M\)</span>{% endraw %} gives the upper tail in (2). Repeat for {% raw %}<span class="math inline">\(-X_i\)</span>{% endraw %} and add the bounds. If all variances vanish, each centered variable is zero almost surely and the positive-threshold tail is zero; thus no division by a zero variance is needed. ◻</p>
</div>
<p>We deduce Bernstein’s inequality from the following result (in the abstract).</p>

<div id="prop:tail-bound-via-mgf" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>.  Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} be a random variable whose moment-generating function, for some {% raw %}<span class="math inline">\(v &gt; 0\)</span>{% endraw %}, satisfies </p>

{% raw %}<span id="prop:tail-bound-via-mgf-as1"></span><div class="math display">\[\begin{aligned}
 
        \mathbb{E} e^{\lambda Z} \leq \exp (v(e^\lambda - 1 - \lambda)) \quad \text{for } \lambda &gt; 0 ~.
    
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> Then, for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}\mathbf P\,\,\!\!(Z \geq t) \leq \exp \left( -v h_1 \left( \frac{t}{v} \right) \right) &amp;\leq \exp \left( -\frac{3t}{4} \log \left( 1 + \frac{2t}{3v} \right) \right) \leq \exp \left( -\frac{t^2}{2(v + t/3)} \right) ~.\end{aligned}\]</div><p>Furthermore,</p>

<div class="math display">\[\begin{aligned}\mathbf P\,\,\!\!\left( Z \geq \sqrt{2vx} + \frac{x}{3} \right) &amp;\leq e^{-x} \quad \text{for } x \geq 0 ~.\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, Markov and (3) give</p>
{% raw %}<div class="math display">\[\mathbb P(Z\geq t)\leq\inf_{\lambda&gt;0}\exp\{v(e^\lambda-1-\lambda)-\lambda t\}.\]</div>{% endraw %}
<p>The exponent has derivative {% raw %}<span class="math inline">\(v(e^\lambda-1)-t\)</span>{% endraw %} and positive second derivative, so its minimum occurs at {% raw %}<span class="math inline">\(\lambda=\log(1+t/v)\)</span>{% endraw %}. Substitution gives {% raw %}<span class="math inline">\(-v h_1(t/v)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(h_1(u)=(1+u)\log(1+u)-u\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} the claim follows from the bound one.</p>
<p>To justify both comparisons explicitly, put {% raw %}<span class="math inline">\(k(u)=h_1(u)-(3u/4)\log(1+2u/3)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(k(0)=k'(0)=0\)</span>{% endraw %} and</p>
{% raw %}<div class="math display">\[k''(u)=\frac{u^2}{9(1+u)(1+2u/3)^2}\geq0.\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(k(u)\geq0\)</span>{% endraw %}. Moreover {% raw %}<span class="math inline">\(\log(1+w)\geq2w/(2+w)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(w\geq0\)</span>{% endraw %}, since their difference vanishes at zero and has derivative {% raw %}<span class="math inline">\(w^2/[(1+w)(2+w)^2]\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(w=2u/3\)</span>{% endraw %}, this proves</p>
{% raw %}<div class="math display">\[h_1(u)\geq\frac{3u}{4}\log(1+2u/3)\geq\frac{u^2}{2(1+u/3)}.\]</div>{% endraw %}
<p>For the final tail estimate, the elementary inequality {% raw %}<span class="math inline">\(k!\geq2\cdot3^{k-2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(k\geq2\)</span>{% endraw %}, gives</p>
{% raw %}<div class="math display">\[e^\lambda-1-\lambda\leq\frac{\lambda^2}{2(1-\lambda/3)},\qquad0\leq\lambda&lt;3.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\log\mathbb Ee^{\lambda Z}\leq v\lambda^2/[2(1-\lambda/3)]\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(x&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(s=\sqrt{2x/v}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lambda=s/(1+s/3)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(t=\sqrt{2vx}+x/3=vs+vs^2/6\)</span>{% endraw %}. Direct substitution yields</p>
{% raw %}<div class="math display">\[-\lambda t+\frac{v\lambda^2}{2(1-\lambda/3)}=-\frac{vs^2}{2}=-x.\]</div>{% endraw %}
<p>Markov now gives the desired {% raw %}<span class="math inline">\(e^{-x}\)</span>{% endraw %} bound. For {% raw %}<span class="math inline">\(x=0\)</span>{% endraw %}, it is again the bound one. ◻</p>
</div>
<p>Independent subgaussian variables have subgaussian sums, by multiplying their moment generating functions. For a nonlinear function of independent inputs, however, unconditional bounds on individual pieces need not control its martingale differences. The useful hypothesis is a <em>conditional</em> exponential-moment bound. Entropy tensorization and log-Sobolev inequalities provide another route to such concentration.</p>

<div id="lem:azuma" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong> (Azuma).  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be independent random variables defined on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\Delta_k\)</span>{% endraw %} be a martingale difference array with respect to {% raw %}<span class="math inline">\(X_1, \dots, X_k\)</span>{% endraw %}, defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Delta_k = \mathbb{E} [f(X_1, \dots, X_n) \mid X_1, \dots, X_k] - \mathbb{E} [f(X_1, \dots, X_n) \mid X_1, \dots, X_{k-1}] ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(f(X_1,\ldots,X_n)\)</span>{% endraw %} is integrable. Let {% raw %}<span class="math inline">\(\sigma_k^2\geq0\)</span>{% endraw %} be deterministic constants (variance proxies, not necessarily the actual variances). Suppose, for every {% raw %}<span class="math inline">\(\lambda\in\mathbb R\)</span>{% endraw %}, the following conditional subgaussian property holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} [e^{\lambda \Delta_k} \mid X_1, \dots, X_{k-1}] \leq e^{\frac{\lambda^2 \sigma_k^2}{2}} ~~ \rm a.s.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, the sum {% raw %}<span class="math inline">\(\sum_{1 \leq k \leq n} \Delta_k\)</span>{% endraw %} is subgaussian.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(\mathcal F_k=\sigma(X_1,\ldots,X_k)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_k=\sum_{i=1}^k\Delta_i\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(S_0=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(S_{k-1}\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathcal F_{k-1}\)</span>{% endraw %}-measurable, the tower property and the conditional hypothesis give</p>
{% raw %}<div class="math display">\[\mathbb Ee^{\lambda S_k}=\mathbb E\!\left[e^{\lambda S_{k-1}}\mathbb E(e^{\lambda\Delta_k}\mid\mathcal F_{k-1})\right]\leq e^{\lambda^2\sigma_k^2/2}\mathbb Ee^{\lambda S_{k-1}}.\]</div>{% endraw %}
<p>Iteration yields {% raw %}<span class="math inline">\(\mathbb Ee^{\lambda S_n}\leq\exp\{\lambda^2\sum_k\sigma_k^2/2\}\)</span>{% endraw %} for all real {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. The tower step is valid initially for nonnegative extended expectations, and the bound proves finiteness inductively. If {% raw %}<span class="math inline">\(V=\sum_k\sigma_k^2&gt;0\)</span>{% endraw %}, optimizing at {% raw %}<span class="math inline">\(\lambda=\pm t/V\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb P(|S_n|\geq t)\leq2e^{-t^2/(2V)}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(V=0\)</span>{% endraw %}, taking {% raw %}<span class="math inline">\(\lambda\to\infty\)</span>{% endraw %} in the one-sided Markov bounds shows {% raw %}<span class="math inline">\(S_n=0\)</span>{% endraw %} almost surely. The same proof works for any filtration and integrable martingale differences satisfying the displayed conditional bounds. ◻</p>
</div>
<p>Here is a classical bound for the sum of <em>bounded</em> martingale difference array.</p>

<div id="lem:azuma-hoeffding" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong> (Azuma-Hoeffding).  With the setup of Lemma <a href="#lem:azuma" data-reference-type="ref" data-reference="lem:azuma">10</a>, suppose {% raw %}<span class="math inline">\(|\Delta_i| \leq c_i\)</span>{% endraw %} for some constants {% raw %}<span class="math inline">\(c_i\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}. Then, the sum {% raw %}<span class="math inline">\(\sum_{1 \leq k \leq n} \Delta_k\)</span>{% endraw %} is subgaussian.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Conditional on {% raw %}<span class="math inline">\(\mathcal F_{i-1}\)</span>{% endraw %}, the variable {% raw %}<span class="math inline">\(\Delta_i\)</span>{% endraw %} has mean zero and lies in {% raw %}<span class="math inline">\([-c_i,c_i]\)</span>{% endraw %}. The conditional version of Lemma 1 therefore gives</p>
{% raw %}<div class="math display">\[\mathbb E(e^{\lambda\Delta_i}\mid\mathcal F_{i-1})\leq\exp\{\lambda^2(2c_i)^2/8\}=\exp\{\lambda^2c_i^2/2\}.\]</div>{% endraw %}
<p>For negative {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, apply that lemma to {% raw %}<span class="math inline">\(-\Delta_i\)</span>{% endraw %}. Lemma 10, with {% raw %}<span class="math inline">\(\sigma_i^2=c_i^2\)</span>{% endraw %}, now yields {% raw %}<span class="math inline">\(\mathbb Ee^{\lambda\sum_i\Delta_i}\leq e^{\lambda^2\sum_i c_i^2/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb P(|\sum_i\Delta_i|\geq t)\leq2e^{-t^2/(2\sum_i c_i^2)}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} when the denominator is positive. If every {% raw %}<span class="math inline">\(c_i=0\)</span>{% endraw %}, the sum is zero. ◻</p>
</div>
<p>From these results, we can deduce the simplest subgaussian concentration inequality. Again, we cannot naïvely apply the tensorization arguments to subgaussian random variables; we can, however, apply a tensorization principle to a martingale difference array, as above. We only require that the functions we consider obey the <em>bounded difference property</em>: a function {% raw %}<span class="math inline">\(f : \mathscr X^n \to \mathbb R\)</span>{% endraw %} satisfies the bounded difference property if there exists some nonnegative constants {% raw %}<span class="math inline">\(d_1, \dots, d_n\)</span>{% endraw %} such that </p>

{% raw %}<span id="property:bounded-difference"></span><div class="math display">\[\begin{aligned}
 
    \sup_{x_1, \dots, x_n; x&#x27;_i \in \mathscr X} | f(x_1, \dots, x_n) - f(x_1, \dots, x_{i-1}, x&#x27;_i, x_{i+1}, \dots, x_n) | \leq d_i
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> holds for all {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}.</p>

<div id="lem:mcdiarmid" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong> (McDiarmid).  Suppose {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are independent random variables defined on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is a measurable function satisfying the bounded difference property <a href="#property:bounded-difference" data-reference-type="eqref" data-reference="property:bounded-difference">(4)</a>. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|f(X_1, \dots, X_n) - \mathbb{E} f(X_1, \dots, X_n)| &gt; t) \leq 2 e^{-\frac{2t^2}{\sum_{1 \leq i \leq n} d_i^2}} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Fix the past {% raw %}<span class="math inline">\(x_1,\ldots,x_{i-1}\)</span>{% endraw %}, and average only over the independent future coordinates:</p>
{% raw %}<div class="math display">\[g_i(x)=\mathbb E f(x_1,\ldots,x_{i-1},x,X_{i+1},\ldots,X_n).\]</div>{% endraw %}
<p>For any {% raw %}<span class="math inline">\(x,y\)</span>{% endraw %}, the bounded difference assumption and the same future realization give {% raw %}<span class="math inline">\(|g_i(x)-g_i(y)|\leq d_i\)</span>{% endraw %}. Thus, conditional on the past, {% raw %}<span class="math inline">\(g_i(X_i)\)</span>{% endraw %} lies in an interval of width at most {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %}. The martingale difference is {% raw %}<span class="math inline">\(\Delta_i=g_i(X_i)-\mathbb E[g_i(X_i)\mid\mathcal F_{i-1}]\)</span>{% endraw %}; subtracting the mean preserves that interval width. Conditional Hoeffding therefore gives</p>
{% raw %}<div class="math display">\[\mathbb E(e^{\lambda\Delta_i}\mid\mathcal F_{i-1})\leq e^{\lambda^2d_i^2/8}.\]</div>{% endraw %}
<p>Iterating as in Lemma 10 and using {% raw %}<span class="math inline">\(\sum_i\Delta_i=f(X)-\mathbb Ef(X)\)</span>{% endraw %}, we get {% raw %}<span class="math inline">\(\mathbb E e^{\lambda(f(X)-\mathbb Ef(X))}\leq e^{\lambda^2D/8}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(D=\sum_i d_i^2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(D&gt;0\)</span>{% endraw %}, optimize the upper-tail bound at {% raw %}<span class="math inline">\(\lambda=4t/D\)</span>{% endraw %}, repeat with {% raw %}<span class="math inline">\(-f\)</span>{% endraw %}, and add to obtain {% raw %}<span class="math inline">\(2e^{-2t^2/D}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(D=0\)</span>{% endraw %}, changing coordinates one at a time shows that {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is constant and the positive-threshold tail vanishes. In particular, the sharp constant uses the <em>conditional range width</em> {% raw %}<span class="math inline">\(d_i\)</span>{% endraw %}; the weaker fact {% raw %}<span class="math inline">\(|\Delta_i|\leq d_i\)</span>{% endraw %} alone would lose a factor four in the exponent. ◻</p>
</div>
<p>An application of these tools is detailed in Remark <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}#rem:g-c-concentration" data-reference-type="ref" data-reference="rem:g-c-concentration">6</a> of the note on symmetrization, bracketing, and covering numbers.</p>

<p>The modified log-Sobolev inequality gives another way to combine the coordinate contributions: tensorize the entropy and then apply the Herbst argument. Namely, we can show the following <em>bounded difference inequality</em> in terms of entropy. Let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D_i^+ f(x) &amp;\triangleq \sup_w f(x_1, \dots, x_{i-1}, w, x_{i+1}, \dots, x_n) - f(x_1, \dots, x_n) ~, \\
    D_i^- f(x) &amp;\triangleq f(x_1, \dots, x_n) - \inf_w f(x_1, \dots, x_{i-1}, w, x_{i+1}, \dots, x_n) ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(f: \mathscr X^n \to \mathbb R\)</span>{% endraw %} is some function.</p>

<div id="thm:bounded-difference-entropy" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13</strong> (Bounded difference inequality).  Suppose {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are independent random variables. Assume {% raw %}<span class="math inline">\(f(X)\)</span>{% endraw %} is integrable, the coordinate suprema below are measurable, and the indicated squared-derivative norms are finite and positive. Then, for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!( f(X_1, \dots, X_n) \geq \mathbb{E} f(X_1, \dots, X_n) + t) &amp;\leq e^{-\frac{t^2}{4 \lVert \sum_{1 \leq i \leq n} |D_i^- f|^2 \rVert_{\infty}}} \\
        \mathbf P\,\,\!\!( f(X_1, \dots, X_n) \leq \mathbb{E} f(X_1, \dots, X_n) - t) &amp;\leq e^{-\frac{t^2}{4 \lVert \sum_{1 \leq i \leq n} |D_i^+ f|^2 \rVert_{\infty}}}
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> First suppose {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is bounded. Fix all coordinates except {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(g=f(X)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g'\)</span>{% endraw %} its value after replacing coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %} by an independent copy. Jensen's inequality gives {% raw %}<span class="math inline">\(\operatorname{Ent}_i(e^g)\leq\operatorname{Cov}_i(g,e^g)\)</span>{% endraw %}. Symmetrizing this covariance and interchanging the two copies gives</p>
{% raw %}<div class="math display">\[\operatorname{Ent}_i(e^g)\leq\frac12\mathbb E_i[(g-g')(e^g-e^{g'})]=\mathbb E_i[(g-g')(e^g-e^{g'})\mathbf1_{g&gt;g'}].\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(g&gt;g'\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(1-e^{-(g-g')}\leq g-g'\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g-g'\leq D_i^-f(X)\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[\operatorname{Ent}_i(e^f)\leq\mathbb E_i[(D_i^-f)^2e^f].\]</div>{% endraw %}
<p>Apply this to {% raw %}<span class="math inline">\(\lambda f\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lambda\geq0\)</span>{% endraw %}, and tensorize entropy. With {% raw %}<span class="math inline">\(V_- =\|\sum_i(D_i^-f)^2\|_\infty\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\operatorname{Ent}(e^{\lambda f})\leq\lambda^2\mathbb E\!\left[e^{\lambda f}\sum_i(D_i^-f)^2\right]\leq\lambda^2V_-\mathbb Ee^{\lambda f}.\]</div>{% endraw %}
<p>The Herbst argument, with variance proxy {% raw %}<span class="math inline">\(2V_-\)</span>{% endraw %}, yields {% raw %}<span class="math inline">\(\log\mathbb Ee^{\lambda(f-\mathbb Ef)}\leq\lambda^2V_-\)</span>{% endraw %}. Exponential Markov optimized at {% raw %}<span class="math inline">\(\lambda=t/(2V_-)\)</span>{% endraw %} proves the upper-tail bound. For the lower tail apply this argument to {% raw %}<span class="math inline">\(-f\)</span>{% endraw %}, using the exact identity {% raw %}<span class="math inline">\(D_i^-(-f)=D_i^+f\)</span>{% endraw %}.</p>
<p>For integrable, possibly unbounded {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(f_m=\max(-m,\min(f,m))\)</span>{% endraw %}. Monotonicity and the contraction property of clipping imply {% raw %}<span class="math inline">\(D_i^-f_m\leq D_i^-f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_i^+f_m\leq D_i^+f\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(f_m\to f\)</span>{% endraw %} almost surely and in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Fatou applied to {% raw %}<span class="math inline">\(e^{\lambda(f_m-\mathbb Ef_m)}\)</span>{% endraw %} passes each exponential-moment bound to {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, after which the same Markov optimization applies. If a norm is zero, replace it by any positive {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}; the corresponding tail is zero for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %}, use the bound one. ◻</p>
</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-17-log-sobolev-inequality %}">Log-Sobolev Inequality</a>; <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">Empirical Processes, Tensorization, and the Entropy Method</a>; <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">Empirical Processes, Tensorization, and the Entropy Method</a> · Next: <a href="{% post_url 2022-09-17-log-sobolev-inequality %}">Log-Sobolev Inequality</a></p></nav>

</div>
