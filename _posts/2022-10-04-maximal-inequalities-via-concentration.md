---
layout: "post"
title: "Maximal Inequalities via Concentration"
date: "2022-10-04"
tags: ["statistics", "empirical processes"]
excerpt: "The maximal inequality due to the Chernoff bound immediately gives us the following."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
---

<div class="note-content" markdown="0">

<p>Suppose each variable has a small tail probability. How large can the maximum of many of them be? A union bound already gives a useful answer for a finite collection, and exponential moments turn the number of variables into a logarithmic cost. We then approximate an infinite index set by a finite cover and estimate the error between nearby indices.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="maximal-inequalities-via-concentration" data-note-section="title">

</div>
<h4 data-note-section="1" id="random-variables">1. Random variables</h4>
<p>As we did in the discussion of concentration inequalities of random variables, consider a sequence of random variables {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %}, which neither need to be independent nor identically distributed. We are interested in the behaviour of the supremum of these random variables. For a start, consider the finite case, and suppose we know {% raw %}<span class="math inline">\(\mathbb{E} |X_i|^p &lt; \infty\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(p \geq 1\)</span>{% endraw %} and for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. Then, Hölder’s inequality tells us </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E} \sup_{1 \leq i \leq n} |X_i| &amp;\leq \left( \mathbb{E} \sup_{1 \leq i \leq n} |X_i|^p \right)^{\frac1p} \leq \left( \mathbb{E} \sum_{1 \leq i \leq n} |X_i|^p \right)^{\frac1p} ~.
\end{aligned}\]</div>{% endraw %}
<p> A fixed moment bound can grow rapidly with the size of the collection. Exponential moments can give a smaller dependence on that size. To this end, we have seen Proposition <a href="{% post_url 2022-09-13-concentration-inequalities %}#prop:strictly-increasing-maximal-inequality" data-reference-type="ref" data-reference="prop:strictly-increasing-maximal-inequality">5</a>, which allows us to understand the supremum of random variables when we have a property based on an increasing function available to us. The following result adapts Proposition <a href="{% post_url 2022-09-13-concentration-inequalities %}#prop:strictly-increasing-maximal-inequality" data-reference-type="ref" data-reference="prop:strictly-increasing-maximal-inequality">5</a> slightly.</p>

<div id="lem:orlicz-maximal-ineqaulity" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (Orlicz).  For all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, suppose {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!(|X_i| &gt; t) \leq K_i e^{-D_i t^p}\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(K_i, D_i &gt; 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p \geq 1\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\psi_p (z) = e^{z^p} - 1\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \psi_p \left( \frac{|X_i|}{C_i} \right) \leq 1 ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(C_i = (\frac{1+K_i}{D_i})^{\frac1p}\)</span>{% endraw %}. From this, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} |X_i| \leq \max_{1 \leq i \leq n} \left( \frac{1+K_i}{D_i} \right)^{\frac1p} (\log(1+n))^{\frac1p} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> By direct calculations, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} [ e^{\frac{|X|^p}{C^p}} - 1 ] &amp;= \mathbb{E} \left[ \int_0^{\frac{|X|^p}{C^p}} e^t \dif t \right] = \mathbb{E} \left[ \int_0^\infty e^t \mathbb 1 \{ |X| &gt; C t^{\frac1p} \} \dif t \right] \\
        &amp;= \int_0^\infty e^t \mathbf P\,\,\!\!(|X| &gt; C t^{\frac1p}) \dif t \leq \int_0^\infty K e^{(1-DC^p)t} \dif t = \frac{K}{D C^p - 1} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> take the stated value of {% raw %}<span class="math inline">\(C_i\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(D_i C_i^p-1=K_i\)</span>{% endraw %}. To get the maximal bound, let {% raw %}<span class="math inline">\(C=\max_i C_i\)</span>{% endraw %}. Jensen and monotonicity yield ◻</p>

</div>
{% raw %}<div class="math display">\[\psi_p\!\left(\frac{\mathbb E\max_i|X_i|}{C}\right)\leq\mathbb E\psi_p\!\left(\max_i\frac{|X_i|}{C_i}\right)\leq\sum_i\mathbb E\psi_p(|X_i|/C_i)\leq n.\]</div>{% endraw %}
<p>Apply {% raw %}<span class="math inline">\(\psi_p^{-1}(n)=(\log(1+n))^{1/p}\)</span>{% endraw %}. The exponential tail assumptions guarantee integrability, and no independence is used.</p>
<div id="lem:conseqeunce-orlicz-maximal-inequality" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be random variables satisfying the condition </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|X_i| &gt; z) \leq 2 e^{-\frac{z^2}{2(az+b)}}
    
\end{aligned}\]</div>{% endraw %}
<p> for nonnegative constants {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} and all positive {% raw %}<span class="math inline">\(z\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \sup_{1 \leq i \leq n} |X_i| \lesssim a \log(1+n) + \sqrt{b \log(1+n)} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(L=\log(2n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t(u)=2au+\sqrt{2bu}\)</span>{% endraw %}. Direct expansion gives {% raw %}<span class="math inline">\(t(u)^2\ge2u(at(u)+b)\)</span>{% endraw %}. The union bound therefore yields</p>
{% raw %}<div class="math display">\[\Pr\{\max_i|X_i|&gt;t(L+v)\}\le e^{-v},\qquad v\ge0.\]</div>{% endraw %}
<p>Integrating this bound with the change of variables {% raw %}<span class="math inline">\(t=t(L+v)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}\max_i|X_i|\le t(L)+\int_0^\infty e^{-v}\left(2a+\sqrt{\frac b{2(L+v)}}\right)dv
\le 2aL+\sqrt{2bL}+2a+\sqrt{\frac b{2L}}.\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(L\ge\log2\)</span>{% endraw %}, this is bounded by a universal constant times {% raw %}<span class="math inline">\(a\log(1+n)+\sqrt{b\log(1+n)}\)</span>{% endraw %}. The cases {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %} follow by the same calculation, and the zero-proxy case forces all variables to vanish almost surely. □</p>
</div>

<h4 data-note-section="2" id="sochastic-processes">2. Stochastic processes</h4>
<p>Separate from the ideas above, we can develop tools to understand the supremum of a random process. For a set {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, we can always write </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E} \sup_{t \in T} \: X_t \leq |T| \sup_{t \in T} \: \mathbb{E} |X_t|
\end{aligned}\]</div>{% endraw %}
<p> for random variables {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %}. Here, let’s say the set {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is finite. Combining this union bound with the Chernoff bound gives control at a threshold determined by the log moment generating function and the logarithm of the size of the index set. The following discussion expands on Proposition <a href="{% post_url 2022-09-13-concentration-inequalities %}#prop:subgaussian-maximal-inequality" data-reference-type="ref" data-reference="prop:subgaussian-maximal-inequality">4</a>, which should be seen as a special case of the following result.</p>

<div id="prop:maximal-inequality-chernoff" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong> (Maximal inequality). Let {% raw %}<span class="math inline">\(T\)</span>{% endraw %} be finite and nonempty, and let the {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} be integrable. Suppose {% raw %}<span class="math inline">\(\psi:[0,\infty)\to[0,\infty)\)</span>{% endraw %} is finite and convex with {% raw %}<span class="math inline">\(\psi(0)=\psi'_+(0)=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\log\mathbb{E}e^{\lambda X_t}\le\psi(\lambda)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t\in T\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\lambda\ge0\)</span>{% endraw %}. Define</p>
{% raw %}<div class="math display">\[\psi^*(x)=\sup_{\lambda\ge0}\{\lambda x-\psi(\lambda)\},\qquad
b(u)=\inf_{\lambda&gt;0}\frac{u+\psi(\lambda)}{\lambda},\quad u\ge0.\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\mathbb{E}\max_{t\in T}X_t\le b(\log|T|)\)</span>{% endraw %}. The function {% raw %}<span class="math inline">\(b\)</span>{% endraw %} is the generalized inverse {% raw %}<span class="math inline">\(\sup\{x\ge0:\psi^*(x)\le u\}\)</span>{% endraw %}; no strict monotonicity of {% raw %}<span class="math inline">\(\psi^*\)</span>{% endraw %} is needed.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For any {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, Jensen and the finite sum bound give</p>
{% raw %}<div class="math display">\[\mathbb{E}\max_{t\in T}X_t\le\frac1\lambda\log\mathbb{E} e^{\lambda\max_tX_t}
\le\frac{\log|T|+\psi(\lambda)}\lambda.\]</div>{% endraw %}
<p>Taking the infimum proves the bound. For the inverse identity, observe that for {% raw %}<span class="math inline">\(x\ge0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\psi^*(x)\le u
\quad\Longleftrightarrow\quad
\lambda x-\psi(\lambda)\le u\ \text{for every }\lambda&gt;0
\quad\Longleftrightarrow\quad x\le b(u).\]</div>{% endraw %}
<p>Thus the sublevel set is exactly {% raw %}<span class="math inline">\([0,b(u)]\)</span>{% endraw %}. If the conjugate is continuous and strictly increasing onto {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %}, this generalized inverse agrees with its ordinary inverse. Degenerate proxies, such as {% raw %}<span class="math inline">\(\psi=0\)</span>{% endraw %}, are also covered. □</p>
</div>
<div id="result-4" class="corollary" data-note-number="4" data-note-kind="Corollary">
<p><strong>Corollary 4.</strong> Under the assumptions of Proposition 3, for every {% raw %}<span class="math inline">\(\eta\ge0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\Pr\{\max_{t\in T}X_t&gt;b(\log|T|+\eta)\}\le e^{-\eta}.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\psi^*(b(u))\ge u\)</span>{% endraw %} at {% raw %}<span class="math inline">\(u=\log|T|+\eta\)</span>{% endraw %}, the strict inequality in the event may be replaced by a non-strict one.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Chernoff's inequality and the union bound give {% raw %}<span class="math inline">\(\Pr\{\max_tX_t\ge x\}\le\exp(\log|T|-\psi^*(x))\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(x&gt;b(u)\)</span>{% endraw %}, the inverse characterization gives {% raw %}<span class="math inline">\(\psi^*(x)&gt;u\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(x\downarrow b(u)\)</span>{% endraw %} to obtain the strict-tail statement. The additional condition permits direct substitution at the endpoint. Without it, the non-strict statement can fail: if every {% raw %}<span class="math inline">\(X_t=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\psi=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(b(u)=0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. □</p>
</div>

<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5</strong>.  For independent centered Gaussian variables with a common positive variance, the expected maximum has order the square root of the logarithm of the number of variables. Thus the logarithmic dependence in these bounds cannot be improved in general; independence alone does not imply sharpness for every family.</p>

</div>
<p>For the Gaussian order claim, write {% raw %}<span class="math inline">\(X_i=\sigma Z_i\)</span>{% endraw %} with independent standard normals. For {% raw %}<span class="math inline">\(u\geq1\)</span>{% endraw %}, integrating the density over {% raw %}<span class="math inline">\([u,u+1/u]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb P(Z_1&gt;u)\geq c e^{-u^2/2}/u\)</span>{% endraw %} for an absolute {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(u=\sqrt{\log n}\)</span>{% endraw %}, independence yields {% raw %}<span class="math inline">\(\mathbb P(\max_iZ_i\leq u)\leq\exp\{-n\mathbb P(Z_1&gt;u)\}\to0\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\((\max_iZ_i)_-\leq(Z_1)_-\)</span>{% endraw %}, whose expectation is finite. Hence the expected maximum is bounded below by a constant times {% raw %}<span class="math inline">\(\sqrt{\log n}\)</span>{% endraw %} for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}; the subgaussian maximal inequality gives the matching upper order. For Brownian motion, reflection gives {% raw %}<span class="math inline">\(\sup_{0\leq s\leq t}B_s\)</span>{% endraw %} the law of {% raw %}<span class="math inline">\(|B_t|\)</span>{% endraw %}; integrating the normal density gives its mean {% raw %}<span class="math inline">\(\sqrt{2t/\pi}\)</span>{% endraw %}.</p>
<p>In general, absent any assumptions, the maximal inequalities above present trivial bounds on the behaviour of the supremum of random variables. Furthermore, for general stochastic processes, calculating {% raw %}<span class="math inline">\(\mathbb{E} \sup_{t \in T} \: X_t\)</span>{% endraw %} is <em>very</em> nontrivial. In a special case, such as when {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %} is a standard Brownian motion, then the reflection principle tells us {% raw %}<span class="math inline">\(\mathbb{E} \sup_{0 \leq t \leq \overline t}X_t = \sqrt{\frac{2 \overline t}{\pi}}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\overline t &gt; 0\)</span>{% endraw %}. So, we generally investigate the problem of <em>bounding</em> the expectation of the supremum of a stochastic process. To begin making some progress, we can appeal to a straightforward restriction on the collection {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %}, called the <em>Lipschitz property</em>. We say a random process {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %} is <em>Lipschitz</em> for a metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %} on {% raw %}<span class="math inline">\(T\)</span>{% endraw %} if there exists a random variable {% raw %}<span class="math inline">\(C\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    |X_t - X_s| \leq C d(t,s) ~~\text{for all } s,t \in T ~.
\end{aligned}\]</div>{% endraw %}
<p> Choose a finite cover. The supremum is bounded by the largest value at its centers plus the Lipschitz error incurred when moving to a center. This gives the following inequality.</p>

<div id="result-6" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6.</strong> Let {% raw %}<span class="math inline">\((T,d)\)</span>{% endraw %} be a nonempty totally bounded metric space, and let {% raw %}<span class="math inline">\(X_t\)</span>{% endraw %} be a process satisfying, on one event of probability one, {% raw %}<span class="math inline">\(|X_t-X_s|\leq C d(t,s)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(C\geq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb EC&lt;\infty\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mathbb E e^{\lambda X_t}\leq e^{\lambda^2\sigma^2/2}\)</span>{% endraw %} for all real {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} and all {% raw %}<span class="math inline">\(t\in T\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\sigma\geq0\)</span>{% endraw %}. In this lemma covering centers are required to belong to {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[\mathbb E\sup_{t\in T}X_t\leq\inf_{\eta&gt;0}\left\{\eta\mathbb EC+\sigma\sqrt{2\log N(\eta,T,d)}\right\}.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Fix a finite {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}-cover with centers {% raw %}<span class="math inline">\(t_1,\ldots,t_N\in T\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, choose a center at distance at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}; the common Lipschitz event gives {% raw %}<span class="math inline">\(X_t\leq\max_jX_{t_j}+C\eta\)</span>{% endraw %}, simultaneously in {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Taking expectations and applying the finite subgaussian maximum bound proves the inequality for this {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Take a smallest cover and then the infimum over {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Total boundedness supplies a countable dense set; continuity of the Lipschitz paths makes the supremum equal almost surely to the supremum over this set, so it is measurable after completion. The same cover bound and any fixed coordinate show its integrability. ◻</p>
</div>
<p>We can then build on these tools if we wish to relax the requirement of the Lipschitz process. Specifically, in practical scenarios, the increments {% raw %}<span class="math inline">\(|X_t - X_s|\)</span>{% endraw %} are fluctuating for all pairs {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %}, with some (or most) being smaller than that in the worst-case scenario. A single global Lipschitz constant may overestimate most increments. Controlling increments at several distances leads to the chaining estimates developed later.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a> · Next: <a href="{% post_url 2022-10-08-stochastic-equicontinuity %}">Stochastic Equicontinuity</a></p></nav>

</div>
