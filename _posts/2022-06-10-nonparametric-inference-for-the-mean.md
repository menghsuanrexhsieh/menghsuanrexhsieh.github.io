---
layout: "post"
title: "Nonparametric Inference for the Mean"
date: "2022-06-10"
tags: ["probability theory", "statistics"]
excerpt: "We are now ready to state the impossibility result, due to Bahadur-Savage."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="nonparametric-inference-for-the-mean" data-note-section="title">

</div>
<p>For each fixed distribution with finite nonzero variance, the central limit theorem supports asymptotic inference for the mean. Uniform validity over a family of distributions is a stronger demand: the distribution may change with sample size. We begin with a triangular-array law of large numbers, then examine the tail conditions needed for uniform inference.</p>

<div id="thm:wlln-triangular-array" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong> (Weak Law of Large Numbers for Triangular Arrays).  Let {% raw %}<span class="math inline">\(Y_{n,1}, \dots, Y_{n,n}\)</span>{% endraw %} be a triangular array whose entries are i.i.d. within each row. Suppose the {% raw %}<span class="math inline">\(n\)</span>{% endraw %}th row has the cumulative distribution function {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(G_n \xrightarrow{d} G\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb{E} |Y_{n,1}| \to \mathbb{E} |Y| &lt; \infty\)</span>{% endraw %} as {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}; suppose {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} has cumulative distribution function {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \overline Y_n \triangleq \frac1n \sum_{1 \leq i \leq n} Y_{n,i} \xrightarrow{\mathop{\mathrm{\mathbf{P}}}} \mathbb{E} Y ~~ \text{as } n \to \infty ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>The proof separates convergence of the laws from control of their tails. Truncation handles the bounded part, while uniform integrability makes the discarded part negligible.</p>

<div id="lem:triangular-array-mean-converges" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  Let {% raw %}<span class="math inline">\(Y_{n,1}, \dots, Y_{n,n}\)</span>{% endraw %} be i.i.d. random variables, with the {% raw %}<span class="math inline">\(n\)</span>{% endraw %}th row having the cumulative distribution function {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mu(G_n)\)</span>{% endraw %} is finite, and satisfies the asymptotic uniform integrability condition </p>

{% raw %}<span id="eq:random-aui-condition"></span><div class="math display">\[\begin{aligned}
 
        \lim_{\eta \to \infty} \limsup_{n\to\infty} \mathbb{E}_{G_n} [|Y_{n,i} - \mu(G_n)| \mathbb 1 \{|Y_{n,i} - \mu(G_n)| \geq \eta\}] = 0 ~.
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> Putting {% raw %}<span class="math inline">\(\overline Y_n \triangleq \frac1n \sum_{1 \leq i \leq n} Y_{n,i}\)</span>{% endraw %}, we have, under {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\overline Y_n - \mu(G_n) \to 0\)</span>{% endraw %} in probability (“in {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}-probability”).</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Center each row: put {% raw %}<span class="math inline">\(V_{n,i}=Y_{n,i}-\mu(G_n)\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(V_{n,i}^{(K)}=V_{n,i}1_{\{|V_{n,i}|\leq K\}}\)</span>{% endraw %}. Independence within the row gives</p>

{% raw %}<div class="math display">\[\operatorname{Var}\left(\frac1n\sum_iV_{n,i}^{(K)}\right)\leq K^2/n,\qquad \mathbb{E}\left|\frac1n\sum_i(V_{n,i}-V_{n,i}^{(K)})\right|\leq \mathbb{E}|V_{n,1}|1_{\{|V_{n,1}|&gt;K\}}.\]</div>{% endraw %}<p>Since {% raw %}<span class="math inline">\(\mathbb{E}V_{n,1}=0\)</span>{% endraw %}, the absolute value of {% raw %}<span class="math inline">\(\mathbb{E}V_{n,1}^{(K)}\)</span>{% endraw %} is bounded by the same tail expectation. Chebyshev handles the bounded centered average, and Markov handles the discarded tail. Taking {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} proves the claim.</p>

<p>◻</p>

</div>
<div id="lem:convergence-in-distribution-almost-implies-convergence-in-moments" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>.  Let {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be real-valued random variables such that {% raw %}<span class="math inline">\(X_n \xrightarrow{d} X\)</span>{% endraw %}.</p>

<ol>
<li><p><span id="lem:convergence-in-distribution-almost-implies-convergence-in-moments-a" data-label="lem:convergence-in-distribution-almost-implies-convergence-in-moments-a"></span> If {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is uniformly bounded for all {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E} X_n \to \mathbb{E} X\)</span>{% endraw %}.</p></li>
<li><p><span id="lem:convergence-in-distribution-almost-implies-convergence-in-moments-b" data-label="lem:convergence-in-distribution-almost-implies-convergence-in-moments-b"></span> Fix {% raw %}<span class="math inline">\(t>0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb{P}(|X|=t)=0\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\mathbb{E} [|X_n| \mathbb 1 \{|X_n| \leq t\}] \to \mathbb{E} [|X| \mathbb 1 \{|X| \leq t\}]\)</span>{% endraw %}. If, furthermore, {% raw %}<span class="math inline">\(\mathbb{E}|X_n| \to \mathbb{E}|X|\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E} [|X_n| \mathbb 1 \{|X_n| &gt; t\}] \to \mathbb{E} [|X| \mathbb 1 \{|X| &gt; t\}]\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof of Lemma 3.</em> If {% raw %}<span class="math inline">\(|X_n|\leq C\)</span>{% endraw %} almost surely for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, Portmanteau applied to the open complement of {% raw %}<span class="math inline">\([-C,C]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(|X|\leq C\)</span>{% endraw %} almost surely. The clipping function {% raw %}<span class="math inline">\(x\mapsto\max(-C,\min(x,C))\)</span>{% endraw %} is bounded and continuous and equals each of these variables on its support. Weak convergence therefore gives {% raw %}<span class="math inline">\(\mathbb{E}X_n\to\mathbb{E}X\)</span>{% endraw %}.</p>
<p>For part (b), the bounded function {% raw %}<span class="math inline">\(h_t(x)=|x|1_{\{|x|\leq t\}}\)</span>{% endraw %} is continuous except possibly at {% raw %}<span class="math inline">\(x=\pm t\)</span>{% endraw %}. These discontinuities have zero limiting probability by assumption, so the continuous mapping theorem gives {% raw %}<span class="math inline">\(h_t(X_n)\Rightarrow h_t(X)\)</span>{% endraw %}. Part (a), with bound {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, gives convergence of their expectations. Subtracting this convergence from {% raw %}<span class="math inline">\(\mathbb{E}|X_n|\to\mathbb{E}|X|&lt;\infty\)</span>{% endraw %} proves the tail assertion. The bounded truncated-moment assertion needs continuity only at the chosen threshold, not at every point of the distribution. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem 1.</em> Write {% raw %}<span class="math inline">\(Y_n=Y_{n,1}\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}, the bounded continuous function {% raw %}<span class="math inline">\(|y|\wedge K\)</span>{% endraw %} has convergent expectations. Thus</p>
{% raw %}<div class="math display">\[\mathbb{E}(|Y_n|-K)_+=\mathbb{E}|Y_n|-\mathbb{E}(|Y_n|\wedge K)\longrightarrow\mathbb{E}(|Y|-K)_+.\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(|y|1_{\{|y|&gt;2K\}}\leq2(|y|-K)_+\)</span>{% endraw %}, letting {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} proves asymptotic uniform integrability of {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %}. For the signed clipping function {% raw %}<span class="math inline">\(c_K(y)=\max(-K,\min(y,K))\)</span>{% endraw %}, weak convergence gives {% raw %}<span class="math inline">\(\mathbb{E}c_K(Y_n)\to\mathbb{E}c_K(Y)\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(|y-c_K(y)|=(|y|-K)_+\)</span>{% endraw %}. The preceding tail bound therefore proves {% raw %}<span class="math inline">\(\mu_n:=\mathbb{E}Y_n\to\mathbb{E}Y\)</span>{% endraw %}.</p>
<p>In particular {% raw %}<span class="math inline">\(|\mu_n|\leq M\)</span>{% endraw %} eventually for some finite {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(K&gt;2M\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|Y_n-\mu_n|&gt;K\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(|Y_n|&gt;K/2&gt;M\)</span>{% endraw %}, and on this event {% raw %}<span class="math inline">\(|Y_n-\mu_n|\leq2|Y_n|\)</span>{% endraw %}. Hence</p>
{% raw %}<div class="math display">\[\mathbb{E}[|Y_n-\mu_n|1_{\{|Y_n-\mu_n|&gt;K\}}]\leq2\mathbb{E}[|Y_n|1_{\{|Y_n|&gt;K/2\}}].\]</div>{% endraw %}
<p>The centered rows satisfy Lemma 2. Thus {% raw %}<span class="math inline">\(\bar Y_n-\mu_n\to0\)</span>{% endraw %} in probability, and combining this with {% raw %}<span class="math inline">\(\mu_n\to\mathbb{E}Y\)</span>{% endraw %} proves the theorem. ◻</p>
</div>
<p>We now apply the array results to the studentised sample mean. Consider the {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-test constructed from i.i.d. data {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} following some distribution {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. The classical setting is {% raw %}<span class="math inline">\(F = \mathcal{N}(\mu,\sigma^2)\)</span>{% endraw %}. The test of {% raw %}<span class="math inline">\(H_0 : \mu = \mu_0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(H_1 : \mu &gt; \mu_0\)</span>{% endraw %} is based on the test-statistic </p>

{% raw %}<div class="math display">\[\begin{aligned}
    t_n = t_n (X_1, \dots, X_n) = \frac{\sqrt{n} (\overline X_n - \mu_0)}{s_n} ~,
\end{aligned}\]</div>{% endraw %}
<p> where </p>

{% raw %}<div class="math display">\[\begin{aligned}
    s_n^2 = \frac{\sum_{1 \leq i \leq n} (X_i - \overline X_n)^2}{n-1} ~.
\end{aligned}\]</div>{% endraw %}
<p>For Gaussian data with {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %} has the central Student distribution with {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} degrees of freedom under {% raw %}<span class="math inline">\(H_0:\mu=\mu_0\)</span>{% endraw %}. Under an alternative it has a noncentral Student distribution with noncentrality {% raw %}<span class="math inline">\(\sqrt n(\mu-\mu_0)/\sigma\)</span>{% endraw %}. For a fixed, possibly nonnormal {% raw %}<span class="math inline">\(F\)</span>{% endraw %} with mean {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %} and finite nonzero variance, the ordinary CLT, consistency of the sample variance, and Slutsky give {% raw %}<span class="math inline">\(t_n\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}. Consequently the one-sided test using {% raw %}<span class="math inline">\(t_{n-1,1-\alpha}\)</span>{% endraw %} has rejection probability</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \alpha_n (F) = \mathop{\mathrm{\mathbf{P}}}_{F} (t_n \geq t_{n-1,1-\alpha})
\end{aligned}\]</div>{% endraw %}
<p>Under these null assumptions, {% raw %}<span class="math inline">\(\alpha_n(F)\to\alpha\)</span>{% endraw %}. This is pointwise asymptotic validity of the level. For a fixed alternative with {% raw %}<span class="math inline">\(\mu(F)&gt;\mu_0\)</span>{% endraw %} and finite nonzero variance, {% raw %}<span class="math inline">\(t_n\to+\infty\)</span>{% endraw %} in probability, so power tends to one. Neither claim is asserted for arbitrary distributions without these moment and variance assumptions.</p>

<p>For the exact Gaussian assertion, an orthogonal change of coordinates separates the sample-mean direction from the {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} residual directions. Thus {% raw %}<span class="math inline">\(Z=\sqrt n(\bar X_n-\mu)/\sigma\sim\mathcal{N}(0,1)\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(Q=(n-1)s_n^2/\sigma^2\sim\chi^2_{n-1}\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[t_n=\frac{Z+\sqrt n(\mu-\mu_0)/\sigma}{\sqrt{Q/(n-1)}}.\]</div>{% endraw %}
<p>This is the central or noncentral Student law according to whether the shift is zero. Since {% raw %}<span class="math inline">\(Q/(n-1)\to1\)</span>{% endraw %} in probability, the central Student laws converge to the standard normal. Strict increase and continuity of the normal distribution function then imply convergence of their fixed interior quantiles.</p>
<p>For a nonnormal fixed distribution, the weak law applied to {% raw %}<span class="math inline">\(X_i-\mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\((X_i-\mu)^2\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[s_n^2=\frac n{n-1}\left(\frac1n\sum_i(X_i-\mu)^2-(\bar X_n-\mu)^2\right)\xrightarrow{P}\sigma^2.\]</div>{% endraw %}
<p>This supplies the sample-variance step in the pointwise CLT, using only the finite second moment. Any convention on the event {% raw %}<span class="math inline">\(s_n=0\)</span>{% endraw %} is asymptotically irrelevant here because its probability tends to zero.</p>
<p>The convergence {% raw %}<span class="math inline">\(t_{n-1,1-\alpha} \to z_{1-\alpha}\)</span>{% endraw %} concerns deterministic critical values. The harder question is whether the rejection probabilities approach the nominal level uniformly over a family of distributions. A failure of uniformity allows {% raw %}<span class="math inline">\(F\)</span>{% endraw %} to vary with sample size. For a fixed distribution satisfying the pointwise theorem, the behaviour {% raw %}<span class="math inline">\(\alpha_n (F) \to \zeta \neq \alpha\)</span>{% endraw %} cannot occur. The next example shows why allowing the distribution to vary makes a difference.</p>


<div id="lem:t-test-fails-F0" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>. Fix {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %} and test {% raw %}<span class="math inline">\(H_0:\mu=0\)</span>{% endraw %} against a positive mean using a finite upper critical value. Define the statistic at zero sample variance by {% raw %}<span class="math inline">\(t_n=+\infty\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\bar X_n&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t_n=-\infty\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\bar X_n&lt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(t_n=0\)</span>{% endraw %} otherwise. Over all null distributions with finite positive variance, the supremum rejection probability is one.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>For any {% raw %}<span class="math inline">\(0&lt;c&lt;1\)</span>{% endraw %} choose {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %} with {% raw %}<span class="math inline">\((1-p)^n=c\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(P(X=p)=1-p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P(X=-(1-p))=p\)</span>{% endraw %}. This distribution has mean zero and variance {% raw %}<span class="math inline">\(p(1-p)&gt;0\)</span>{% endraw %}. With probability {% raw %}<span class="math inline">\(c\)</span>{% endraw %} all observations equal {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. On that event, {% raw %}<span class="math inline">\(\sqrt n\bar X_n=\sqrt n\,p&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_n=0\)</span>{% endraw %}, so the test rejects by the stated convention. Its rejection probability is at least {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(c\uparrow1\)</span>{% endraw %}. This is a supremum over distributions for each fixed sample size; it does not contradict the pointwise limit.</p>

<p>◻</p>

</div>
<p>The counterexample shows what can happen without uniform tail control. In the rest of this section, {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} consists of distributions with finite <em>positive</em> variance, and we set {% raw %}<span class="math inline">\(\mu_0=0\)</span>{% endraw %} by translating the observations. Let {% raw %}<span class="math inline">\(\widetilde{\mathscr F}\subseteq\mathscr F\)</span>{% endraw %} satisfy</p>

{% raw %}<span id="eq:aui-F0"></span><div class="math display">\[\begin{aligned}
 
     \lim\limits_{M\to\infty} \sup_{F \in \widetilde{\mathscr F}} \mathbb{E}_F \left[ \frac{|X-\mu(F)|^2}{\sigma^2(F)} \mathbb 1 \left\{ \frac{|X-\mu(F)|}{\sigma(F)} &gt; M \right\} \right] = 0 ~.
\end{aligned}\tag{2}\]</div>{% endraw %}
<p>This condition controls the second-moment contribution from large standardised observations, uniformly over the family. It excludes the tail behaviour used in Lemma <a href="#lem:t-test-fails-F0" data-reference-type="ref" data-reference="lem:t-test-fails-F0">4</a> to defeat a uniform normal approximation.</p>

<div id="prop:t-test-not-trivial" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>.  Define {% raw %}<span class="math inline">\(\widetilde{\mathscr F}\)</span>{% endraw %} to be a collection of distributions {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %} satisfying <a href="#eq:aui-F0" data-reference-type="eqref" data-reference="eq:aui-F0">(2)</a>. Suppose {% raw %}<span class="math inline">\(X_{n1}, \dots, X_{nn}\)</span>{% endraw %} are i.i.d. random variables following {% raw %}<span class="math inline">\(F_n \in \widetilde{\mathscr F}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mu(F_n) = 0\)</span>{% endraw %} (but finite variance). Under {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}, we then have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{\frac1n \sum_{1 \leq i \leq n} X_{ni}^2}{\sigma^2(F_n)} \xrightarrow{\mathop{\mathrm{\mathbf{P}}}} 1 ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Put {% raw %}<span class="math inline">\(V_{n,i}=X_{n,i}^2/\sigma^2(F_n)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\mathbb{E}V_{n,i}=1\)</span>{% endraw %}. Condition (2) makes these nonnegative row variables uniformly integrable, since {% raw %}<span class="math inline">\(V_{n,i}&gt;K\)</span>{% endraw %} is equivalent to {% raw %}<span class="math inline">\(|X_{n,i}|/\sigma(F_n)&gt;\sqrt K\)</span>{% endraw %}. Their centered versions {% raw %}<span class="math inline">\(V_{n,i}-1\)</span>{% endraw %} therefore satisfy Lemma 2. It follows that {% raw %}<span class="math inline">\(n^{-1}\sum_iV_{n,i}\to1\)</span>{% endraw %} in probability. No individual {% raw %}<span class="math inline">\(V_{n,i}\)</span>{% endraw %} is claimed to converge to one.</p>

<p>◻</p>

</div>
<div id="prop:t-test-limiting-normal" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong>.  Define {% raw %}<span class="math inline">\(\widetilde{\mathscr F}\)</span>{% endraw %} to be a collection of distributions {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %} satisfying <a href="#eq:aui-F0" data-reference-type="eqref" data-reference="eq:aui-F0">(2)</a>. Pick {% raw %}<span class="math inline">\(F_n \in \widetilde{\mathscr F}\)</span>{% endraw %}. Assume </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{\sqrt n \mu(F_n)}{\sigma(F_n)} \xrightarrow{n \to \infty} \delta ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(|\delta|=\infty\)</span>{% endraw %} is allowed. Suppose {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are i.i.d. random variables following {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}. Define the {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-statistic as before; denote it {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|\delta| &lt; \infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(t_n \xrightarrow{d} \mathcal{N}(\delta,1)\)</span>{% endraw %} under {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}; otherwise, if {% raw %}<span class="math inline">\(\delta = \pm \infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(t_n \xrightarrow{\mathop{\mathrm{\mathbf{P}}}} \pm \infty\)</span>{% endraw %} under {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Standardize by the population mean and variance: {% raw %}<span class="math inline">\(Z_{n,i}=(X_{n,i}-\mu(F_n))/\sigma(F_n)\)</span>{% endraw %}. These variables are i.i.d. within each row, centered, with variance one. Condition (2) gives the Lindeberg bound {% raw %}<span class="math inline">\(\mathbb{E}[Z_{n,1}^21_{\{|Z_{n,1}|&gt;\varepsilon\sqrt n\}}]\to0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\sqrt n\bar Z_n\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}. The same truncation argument as in Proposition 5 gives {% raw %}<span class="math inline">\(n^{-1}\sum_iZ_{n,i}^2\to1\)</span>{% endraw %}. Consequently</p>

{% raw %}<div class="math display">\[\frac{s_n^2}{\sigma^2(F_n)}=\frac n{n-1}\left(\frac1n\sum_iZ_{n,i}^2-\bar Z_n^2\right)\xrightarrow{P}1.\]</div>{% endraw %}<p>This identity handles the dependence of the sample-centered residuals; it does not assign them the original distribution. With {% raw %}<span class="math inline">\(\delta_n=\sqrt n\mu(F_n)/\sigma(F_n)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[t_n=\frac{\sqrt n\bar Z_n+\delta_n}{s_n/\sigma(F_n)}.\]</div>{% endraw %}<p>If {% raw %}<span class="math inline">\(\delta_n\to\delta\in\mathbb R\)</span>{% endraw %}, Slutsky gives {% raw %}<span class="math inline">\(\mathcal{N}(\delta,1)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\delta_n\to\pm\infty\)</span>{% endraw %}, the numerator is {% raw %}<span class="math inline">\(\delta_n+O_P(1)\)</span>{% endraw %} and the positive denominator tends to one, so {% raw %}<span class="math inline">\(t_n\to\pm\infty\)</span>{% endraw %} in probability. The zero-denominator event has probability tending to zero.</p>

<p>◻</p>

</div>
<span id="eq:thm:uniform-consistency-t-test-F0-1"></span><span id="eq:thm:uniform-consistency-t-test-F0-2"></span><span id="eq:thm:uniform-consistency-t-test-F0-3"></span>
<div id="thm:uniform-consistency-t-test-F0" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7</strong>. Under (2), let {% raw %}<span class="math inline">\(c_n\to z_{1-\alpha}\)</span>{% endraw %} be either the normal critical value or the corresponding Student critical values, with {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}. Then</p>

</div>
{% raw %}<div class="math display">\[\sup_{F\in\widetilde{\mathscr F}}\left|P_F(t_n&gt;c_n)-\left[1-\Phi\left(z_{1-\alpha}-\frac{\sqrt n\mu(F)}{\sigma(F)}\right)\right]\right|\longrightarrow0.\tag{3}\]</div>{% endraw %}<p>In particular the test has uniformly correct asymptotic level on {% raw %}<span class="math inline">\(\widetilde{\mathscr F}_0=\{F\in\widetilde{\mathscr F}:\mu(F)=0\}\)</span>{% endraw %}. Along any sequence {% raw %}<span class="math inline">\(F_n\in\widetilde{\mathscr F}\)</span>{% endraw %} with standardized mean {% raw %}<span class="math inline">\(\sqrt n\mu(F_n)/\sigma(F_n)\to\delta\)</span>{% endraw %}, its power tends to {% raw %}<span class="math inline">\(1-\Phi(z_{1-\alpha}-\delta)\)</span>{% endraw %}, with the natural limits zero and one at {% raw %}<span class="math inline">\(\delta=-\infty,+\infty\)</span>{% endraw %}.</p>

<div class="proof">
<p><em>Proof.</em></p>

<p>If the uniform approximation failed, choose sample sizes and distributions where the absolute error stays bounded below. Pass to a subsequence on which the standardized means converge in the extended real line. Proposition 6 gives the claimed power limit on that subsequence, whether the limit is finite or infinite. This contradicts the lower bound on the error. The null statement follows by setting the standardized mean to zero.</p>

<p>◻</p>

</div>
<p>For a fixed lower bound {% raw %}<span class="math inline">\(d\)</span>{% endraw %} on the standardized mean, the same approximation yields</p>

{% raw %}<div class="math display">\[\liminf_n\inf_{\substack{F\in\widetilde{\mathscr F}:\\ \sqrt n\mu(F)/\sigma(F)\geq d}}P_F(t_n&gt;c_n)\geq1-\Phi(z_{1-\alpha}-d),\]</div>{% endraw %}<p>provided these sets are nonempty eventually. Equality requires that the family contain a sequence whose standardized means approach {% raw %}<span class="math inline">\(d\)</span>{% endraw %}; it does not follow from the tail condition alone.</p>

<p>The final argument concerns unrestricted families closed under mixing. A small contamination can change the mean while leaving a fixed-size sample almost unchanged. The precise conclusion concerns the supremum and infimum of rejection probabilities among distributions with a prescribed mean. These extrema are the same for every mean; individual rejection probabilities can still differ. Formally, suppose {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} is now a family of distributions on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} such that</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\mu(F) &lt; \infty\)</span>{% endraw %} and exists for all {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %};</p></li>
<li><p>for all {% raw %}<span class="math inline">\(\mu \in \mathbb R\)</span>{% endraw %}, there exists some {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mu(F) = \mu\)</span>{% endraw %}; and</p></li>
<li><p>for all {% raw %}<span class="math inline">\(\lambda \in [0,1]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F,G \in \mathscr F\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lambda F + (1-\lambda)G \in \mathscr F\)</span>{% endraw %}.</p></li>
</ol>
<p>Suppose {% raw %}<span class="math inline">\(X_1, \dots, X_n \stackrel{\rm i.i.d.}{\sim} F \in \mathscr F\)</span>{% endraw %}, and define a measurable test function taking values in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varphi_n = \varphi_n(X_1, \dots, X_n)\)</span>{% endraw %} along with {% raw %}<span class="math inline">\(\mathscr G_m = \{F \in \mathscr F : \mu(F) = m\}\)</span>{% endraw %}. Then, the following quantities are <em>independent</em> of {% raw %}<span class="math inline">\(m\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \inf_{F \in \mathscr G_m} \mathbb{E}_F \varphi_n ~~,~~ \sup_{F \in \mathscr G_m} \mathbb{E}_F \varphi_n ~.
\end{aligned}\]</div>{% endraw %}
<p> To prove the supremum assertion, fix {% raw %}<span class="math inline">\(m_0\)</span>{% endraw %}, there exists some subsequence {% raw %}<span class="math inline">\(F_k\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb{E}_{F_k} \varphi_n \xrightarrow{k \to \infty} \sup_{F \in \mathscr G_{m_0}} \mathbb{E}_F \varphi_n \eqqcolon M\)</span>{% endraw %}. To reach a contradiction, we take another {% raw %}<span class="math inline">\(m_1 \neq m_0\)</span>{% endraw %}, and we claim </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \sup_{F \in \mathscr G_{m_1}} \mathbb{E}_F \varphi_n = M ~.
\end{aligned}\]</div>{% endraw %}
<p> Choose a contamination distribution whose mean compensates for its small mixing weight. For a distribution {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %} with mean {% raw %}<span class="math inline">\(h_k\)</span>{% endraw %} satisfying </p>

{% raw %}<div class="math display">\[\begin{aligned}
    m_1 = \left( 1- \frac1k \right) m_0 + \frac1k h_k ~,
\end{aligned}\]</div>{% endraw %}
<p> define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    G_k = \left( 1- \frac1k \right) F_k + \frac1k H_k ~.
\end{aligned}\]</div>{% endraw %}
<p> In other words, {% raw %}<span class="math inline">\(G_k \in \mathscr G_{m_1}\)</span>{% endraw %}, and drawing from {% raw %}<span class="math inline">\(G_k\)</span>{% endraw %} amounts to <em>first</em> identifying whether we draw from {% raw %}<span class="math inline">\(F_k\)</span>{% endraw %} or from {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %} (the former happens with probability {% raw %}<span class="math inline">\(1-\frac1k\)</span>{% endraw %}, and the latter happens with the remaining probability {% raw %}<span class="math inline">\(\frac1k\)</span>{% endraw %}), and <em>then</em> drawing from {% raw %}<span class="math inline">\(F_k\)</span>{% endraw %} or {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %}. So, a sample of size {% raw %}<span class="math inline">\(n\)</span>{% endraw %} drawn from {% raw %}<span class="math inline">\(G_k\)</span>{% endraw %} would consist entirely of sample draws from {% raw %}<span class="math inline">\(F_k\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\((1-\frac1k)^n\)</span>{% endraw %}. As such, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \sup_{F \in \mathscr G_{m_1}} \mathbb{E}_F \varphi_n \geq \mathbb{E}_{G_k} \varphi_n \geq \left( 1-\frac1k \right)^n \mathbb{E}_{F_k} \varphi_n \xrightarrow{k\to\infty} M ~,
\end{aligned}\]</div>{% endraw %}
<p> implying </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \sup_{F \in \mathscr G_{m_1}} \mathbb{E}_F \varphi_n \geq \sup_{F \in \mathscr G_{m_0}} \mathbb{E}_F \varphi_n ~.
\end{aligned}\]</div>{% endraw %}
<p> Exchanging the roles of {% raw %}<span class="math inline">\(m_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_1\)</span>{% endraw %} would then establish the equality. The case for the infimum follows from applying the arguments above to {% raw %}<span class="math inline">\(1-\varphi_n\)</span>{% endraw %} instead of {% raw %}<span class="math inline">\(\varphi_n\)</span>{% endraw %}.</p>

<p>The contamination argument gives the Bahadur–Savage impossibility theorem. Its conclusion concerns tests that control size over the entire family: such control prevents power against any alternative in that family.</p>

<div id="thm:bahadur-savage" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8</strong> (Bahadur-Savage).  For {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} satisfying the three conditions described above, the following statements are true:</p>

<ol>
<li><p>Any test of {% raw %}<span class="math inline">\(H_0 : \mu(F)=0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(H_1 : \mu(F) \neq 0\)</span>{% endraw %} that has size {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for the family {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} has <em>power</em> less than or equal to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for any alternative {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %}.</p></li>
<li><p>Any test of {% raw %}<span class="math inline">\(H_0 : \mu(F)=0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(H_1 : \mu(F) \neq 0\)</span>{% endraw %} that has power {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} against some alternative {% raw %}<span class="math inline">\(F \in \mathscr F\)</span>{% endraw %} has size greater than equal to {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(\alpha=\sup_{F\in\mathscr G_0}\mathbb{E}_F\varphi_n\)</span>{% endraw %} be the size. The contamination argument proves {% raw %}<span class="math inline">\(\sup_{F\in\mathscr G_m}\mathbb{E}_F\varphi_n=\alpha\)</span>{% endraw %} for every real {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Every alternative belongs to one such class, so its rejection probability is at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Equivalently, if one alternative has rejection probability {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\alpha\geq\beta\)</span>{% endraw %}. The argument applies at each fixed sample size and to every measurable test taking values in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. ◻</p>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-05-22-normal-approximation-under-local-dependence %}">Normal Approximation under Local Dependence</a> · Next: <a href="{% post_url 2022-06-29-moment-inequalities-and-random-series %}">Moment Inequalities and Random Series</a></p></nav>

</div>
