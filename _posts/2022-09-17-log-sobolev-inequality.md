---
layout: "post"
title: "Log-Sobolev Inequality"
date: "2022-09-17"
tags: ["statistics", "empirical processes"]
excerpt: "As we have seen above, the method of tensorization allows us to derive useful and nontrivial bounds in a lot of scenarios."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
---

<div class="note-content" markdown="0">

<p>Entropy tensorization reduces a concentration problem to an inequality in one coordinate. For Gaussian measure, the needed estimate bounds entropy by the squared gradient. This post develops the geometric inequalities used in that argument, then derives the Gaussian log-Sobolev inequality and explains where the gradient enters.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="sec:log-sobolev" data-note-section="title">

</div>
<p>The proof begins with addition of sets and an integral inequality for log-concave functions. These facts allow us to compare a function with a small perturbation of itself under Gaussian measure. Expanding that comparison gives an entropy bound.</p>

<p>To begin, let {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} denote the Lebesgue measure on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Note the following result follows from properties of {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}.</p>

<div id="lem:lebesgue-measure-superadditive-A-B" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Suppose {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B\)</span>{% endraw %} are nonempty Borel measurable sets in {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\lambda(A + B) \geq \lambda(A) + \lambda(B)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(A + B = \{a + b : a \in A ~,~ b \in B\}\)</span>{% endraw %}.</p>

</div>
<div class="proof"><p><em>Proof.</em> A continuous image of a Borel set need not be Borel. Here {% raw %}<span class="math inline">\(A+B\)</span>{% endraw %} is analytic, hence measurable for completed Lebesgue measure. We use the theorem that analytic subsets of Polish spaces are universally measurable; see <a href="https://www.math.mcgill.ca/atserunyan/Courses/2015_S.Math595.CET/erg_class_notes.pdf">Tserunyan, Theorem 7.6</a>. For nonempty compact sets, translate separately so that {% raw %}<span class="math inline">\(\max A=0=\min B\)</span>{% endraw %}. Both sets then contain zero, so {% raw %}<span class="math inline">\(A\cup B\subset A+B\)</span>{% endraw %}, and their intersection has measure zero. Translation invariance gives the inequality. For general Borel sets, choose nonempty compact subsets with measures approaching the respective measures (or arbitrarily large measures in the infinite case), and use monotonicity. Nonemptiness is necessary: adding the empty set always gives the empty set. ◻</p></div>

<p>The following result is the main ingredient to results on <em>volume comparisons</em>.</p>

<div id="thm:precopa-leindler" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Précopa-Leindler).  Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be Lebesgue measurable functions on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} taking values in {% raw %}<span class="math inline">\([0,\infty]\)</span>{% endraw %}. For some {% raw %}<span class="math inline">\(\eta \in (0,1)\)</span>{% endraw %} and for all {% raw %}<span class="math inline">\(u, v \in \mathbb R^n\)</span>{% endraw %}, suppose </p>

{% raw %}<span id="eq:precopa-leindler-assumption"></span><div class="math display">\[\begin{aligned}
 
        \varphi(\eta u + (1-\eta)v) \geq f(u)^\eta g(v)^{1-\eta}
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> holds. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int \varphi \dif \lambda \geq \left( \int f \dif \lambda \right)^\eta \left( \int g \dif \lambda \right)^{1-\eta} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> We use the convention {% raw %}<span class="math inline">\(0\cdot\infty=0\)</span>{% endraw %} for the nonnegative products. Measurability can first be reduced to the Borel case: replace {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} by Borel minorants agreeing almost everywhere and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} by a Borel majorant agreeing almost everywhere. This preserves the pointwise hypothesis and all three integrals.</p>
<p>In dimension one, first suppose {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} are bounded and not identically zero. Set {% raw %}<span class="math inline">\(M=\sup f\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N=\sup g\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\tilde f=f/M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\tilde g=g/N\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\tilde\varphi=\varphi/(M^\eta N^{1-\eta})\)</span>{% endraw %}. The transformed functions still satisfy (1), and both suprema are one. For every {% raw %}<span class="math inline">\(0&lt;t&lt;1\)</span>{% endraw %}, the sets {% raw %}<span class="math inline">\(A_t=\{\tilde f&gt;t\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B_t=\{\tilde g&gt;t\}\)</span>{% endraw %} are nonempty, and</p>
{% raw %}<div class="math display">\[\eta A_t+(1-\eta)B_t\subset\{\tilde\varphi&gt;t\}.\]</div>{% endraw %}
<p>Lemma 1, including the scaling of Lebesgue measure, and the layer-cake formula therefore give</p>
{% raw %}<div class="math display">\[\int\tilde\varphi\,d\lambda\ge\int_0^1\!\bigl[\eta\lambda(A_t)+(1-\eta)\lambda(B_t)\bigr]dt
=\eta\int\tilde f+(1-\eta)\int\tilde g
\ge\left(\int\tilde f\right)^\eta\left(\int\tilde g\right)^{1-\eta}.\]</div>{% endraw %}
<p>Multiplying by {% raw %}<span class="math inline">\(M^\eta N^{1-\eta}\)</span>{% endraw %} proves the desired inequality. If either integral is zero, the conclusion is immediate. For unbounded functions apply this argument to {% raw %}<span class="math inline">\(f\wedge m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\wedge m\)</span>{% endraw %}, keeping {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} unchanged, and let {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}. Truncation to bounded intervals also handles infinite integrals without an indeterminate normalization.</p>
<p>For the induction step write points as {% raw %}<span class="math inline">\((u,a)\in\mathbb R^{n-1}\times\mathbb R\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(F(a)=\int f(u,a)du\)</span>{% endraw %}, {% raw %}<span class="math inline">\(G(b)=\int g(v,b)dv\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(H(c)=\int\varphi(w,c)dw\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %}, the induction hypothesis applied to the slices gives</p>
{% raw %}<div class="math display">\[H(\eta a+(1-\eta)b)\ge F(a)^\eta G(b)^{1-\eta}.\]</div>{% endraw %}
<p>The slice integrals are measurable by Tonelli. The one-dimensional result applied to {% raw %}<span class="math inline">\(F,G,H\)</span>{% endraw %}, followed by Tonelli again, proves the claim in dimension {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. ◻</p></div>

<p>Précopa–Leindler implies log-concavity of Gaussian measure on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}: a property we will use to compare the mass of translated convex sets.</p>

<div id="prop:gaussian-measures-log-concave" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong> (Gaussian measures on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} are log-concave).  Let {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} be a centred Gaussian measure on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Then, for any nonempty Borel sets {% raw %}<span class="math inline">\(A, B \subset \mathbb R^n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta \in [0,1]\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mu(\eta A + (1-\eta) B) \geq \mu(A)^{\eta} \mu(B)^{1-\eta} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> Interpret {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} on its completion; the linear image of {% raw %}<span class="math inline">\(A\times B\)</span>{% endraw %} is analytic and therefore measurable for this measure. The endpoint values {% raw %}<span class="math inline">\(\eta=0,1\)</span>{% endraw %} are immediate. If {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is a point mass at zero, the assertion follows directly. Otherwise let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be its supporting subspace. On {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, with its own Euclidean Lebesgue measure, {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} has density {% raw %}<span class="math inline">\(\psi(x)=c\exp(-\|\Gamma x\|^2/2)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} is the inverse square root of the covariance restricted to {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\log\psi=\log c-\|\Gamma x\|^2/2\)</span>{% endraw %} is concave.</p>
<p>First take compact {% raw %}<span class="math inline">\(K\subset A\cap V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L\subset B\cap V\)</span>{% endraw %}. Apply Theorem 2 within {% raw %}<span class="math inline">\(V\)</span>{% endraw %} to {% raw %}<span class="math inline">\(f=\psi\mathbf1_K\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g=\psi\mathbf1_L\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varphi=\psi\mathbf1_{\eta K+(1-\eta)L}\)</span>{% endraw %}. The hypothesis follows from log-concavity of {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}, and hence</p>
{% raw %}<div class="math display">\[\mu(\eta A+(1-\eta)B)\ge\mu(\eta K+(1-\eta)L)\ge\mu(K)^\eta\mu(L)^{1-\eta}.\]</div>{% endraw %}
<p>Inner regularity on {% raw %}<span class="math inline">\(V\)</span>{% endraw %} lets the last two measures approach {% raw %}<span class="math inline">\(\mu(A)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu(B)\)</span>{% endraw %}. If either is zero the inequality is immediate. This also avoids identifying intrinsic Lebesgue measure on a lower-dimensional subspace with the restriction of ambient Lebesgue measure. ◻</p></div>

<div id="lem:anderson" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong> (Anderson).  Suppose {% raw %}<span class="math inline">\(X = (g_1, \dots, g_n)\)</span>{% endraw %} is a centred, jointly normal vector in {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(C\)</span>{% endraw %} be a Borel measurable, convex, symmetric set in {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Then, for all {% raw %}<span class="math inline">\(x \in \mathbb R^n\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X + x \in C) \leq \mathbf P\,\,\!\!(X \in C) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(C\)</span>{% endraw %} is empty there is nothing to prove. Otherwise put {% raw %}<span class="math inline">\(A=C+x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=C-x\)</span>{% endraw %}. Symmetry of both {% raw %}<span class="math inline">\(C\)</span>{% endraw %} and the centered Gaussian law {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mu(A)=\mu(B)\)</span>{% endraw %}, while convexity gives {% raw %}<span class="math inline">\((A+B)/2=(C+C)/2=C\)</span>{% endraw %}. Gaussian log-concavity at {% raw %}<span class="math inline">\(\eta=1/2\)</span>{% endraw %} therefore yields {% raw %}<span class="math inline">\(\mu(C)\geq\sqrt{\mu(A)\mu(B)}=\mu(C-x)=\mathbb P(X+x\in C)\)</span>{% endraw %}. ◻</p>
</div>
<p>There are two useful direct consequences of all the constructions above.</p>

<div id="thm:brunn-minkowski" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong> (Brunn-Minkowski).  Let {% raw %}<span class="math inline">\(\operatorname{Vol}\)</span>{% endraw %} denote the volume on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Then, for any nonempty compact subsets {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Vol}(A+B)^{\frac1n} \geq \operatorname{Vol}(A)^{\frac1n} + \operatorname{Vol}(B)^{\frac1n} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> If {% raw %}<span class="math inline">\(a=\operatorname{Vol}(A)^{1/n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=\operatorname{Vol}(B)^{1/n}\)</span>{% endraw %} are positive, the sets {% raw %}<span class="math inline">\(A/a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B/b\)</span>{% endraw %} have unit volume. Apply Theorem 2 to their indicator functions with {% raw %}<span class="math inline">\(\eta=a/(a+b)\)</span>{% endraw %}:</p>
{% raw %}<div class="math display">\[\operatorname{Vol}\!\left(\eta\frac A a+(1-\eta)\frac B b\right)\ge1.\]</div>{% endraw %}
<p>The set inside the volume is {% raw %}<span class="math inline">\((A+B)/(a+b)\)</span>{% endraw %}, so rescaling proves the result. If one volume is zero, a translate of the other nonempty set is contained in {% raw %}<span class="math inline">\(A+B\)</span>{% endraw %}, which gives the same conclusion. ◻</p></div>

<div id="lem:khatri-sidak" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong> (Khatri-Sidak).  Let {% raw %}<span class="math inline">\(n \geq 2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_1, \dots, g_n\)</span>{% endraw %} be centred, jointly normal random variables. Then, for all {% raw %}<span class="math inline">\(x \geq 0\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} |g_i| \leq x \right) \geq \mathbf P\,\,\!\!\left( |g_1| \leq x \right) \mathbf P\,\,\!\!\left( \sup_{2 \leq i \leq n} |g_i| \leq x \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> More generally, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{1 \leq i \leq n} |g_i| \leq x \right) \geq \prod_{1 \leq i \leq n} \mathbf P\,\,\!\!\left( |g_i| \leq x \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> If {% raw %}<span class="math inline">\(\operatorname{Var}(g_1)=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(g_1=0\)</span>{% endraw %} almost surely and the first inequality is an equality. Otherwise Gaussian regression writes {% raw %}<span class="math inline">\((g_2,\ldots,g_n)=a g_1+Z\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is a centered Gaussian vector independent of {% raw %}<span class="math inline">\(g_1\)</span>{% endraw %}. For a symmetric convex Borel set {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(h(u)=P(Z+au\in C)\)</span>{% endraw %}. Gaussian log-concavity shows that {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is log-concave, and symmetry makes it even. Thus {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is nonincreasing on {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %}: if {% raw %}<span class="math inline">\(0\le u\le v\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(u\)</span>{% endraw %} as a convex combination of {% raw %}<span class="math inline">\(v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-v\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(\psi(t)=P(|g_1|\le t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\phi(t)=E[h(g_1)\mathbf1\{|g_1|\le t\}]\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h(t)\le\phi(t)/\psi(t)\)</span>{% endraw %}, because the latter is an average of values at {% raw %}<span class="math inline">\(|u|\le t\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f_1\)</span>{% endraw %} is the density of {% raw %}<span class="math inline">\(g_1\)</span>{% endraw %}, differentiation almost everywhere gives</p>
{% raw %}<div class="math display">\[\left(\frac\phi\psi\right)'(t)=\frac{2f_1(t)}{\psi(t)}\left(h(t)-\frac{\phi(t)}{\psi(t)}\right)\le0.\]</div>{% endraw %}
<p>The ratio is absolutely continuous on intervals bounded away from zero. Its limit as {% raw %}<span class="math inline">\(t\to\infty\)</span>{% endraw %} is {% raw %}<span class="math inline">\(P((g_2,\ldots,g_n)\in C)\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(C=[-x,x]^{n-1}\)</span>{% endraw %} proves the first inequality for {% raw %}<span class="math inline">\(x&gt;0\)</span>{% endraw %}; continuity from above gives {% raw %}<span class="math inline">\(x=0\)</span>{% endraw %}. Iteration proves the product bound. ◻</p></div>

<p>The discussions above give us the ability to derive <em>log-Sobolev inequality for Gaussian measures</em> on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. To do so, we make the notational change to how we discuss entropy of a nonnegative, real-valued function (before, {% raw %}<span class="math inline">\(\operatorname{Ent}(X)\)</span>{% endraw %} is a specific way of writing what follows): for any measurable, real-valued, nonnegative function on some measurable space, the <em>entropy of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</em> with respect to a probability measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} (defined on this measurable space) is written as {% raw %}<span class="math inline">\(\operatorname{Ent}_\mu (f) = \int f \log f \dif \mu - \left( \int f \dif \mu \right) \left( \log \int f \dif \mu \right)\)</span>{% endraw %}. The tensorization and variational formulas apply with this notation as well.</p>

<p>For Lemmas 7–9, take a nonnegative measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with finite mean and finite {% raw %}<span class="math inline">\(\int f\log^+f\,d\mu\)</span>{% endraw %} (with the product measure in Lemma 8). We use {% raw %}<span class="math inline">\(0\log0=0\)</span>{% endraw %}. In Lemma 7 the supremum can be taken over bounded measurable {% raw %}<span class="math inline">\(g\)</span>{% endraw %}; allowing unbounded {% raw %}<span class="math inline">\(g\)</span>{% endraw %} for which the integral is defined gives the same value.</p>
<div id="lem:variational-ent-mu" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong>.  </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f) = \sup \left\{ \int f g \dif \mu : \int e^g \dif \mu \leq 1 ~~\text{where } g \text{ is measurable} \right\} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(m=\int f\,d\mu=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f=0\)</span>{% endraw %} almost everywhere and both sides vanish. Otherwise put {% raw %}<span class="math inline">\(q=f/m\)</span>{% endraw %}, a probability density. For any admissible {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, Jensen under {% raw %}<span class="math inline">\(q\,d\mu\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[\int q(g-\log q)\,d\mu\leq\log\int_{q&gt;0}e^g\,d\mu\leq0.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\int fg\,d\mu\leq m\int q\log q\,d\mu=\operatorname{Ent}_\mu(f)\)</span>{% endraw %}. For the reverse bound, let {% raw %}<span class="math inline">\(h_N=\max(-N,\min(\log q,N))\)</span>{% endraw %}, taking {% raw %}<span class="math inline">\(\log0=-\infty\)</span>{% endraw %}, and normalize {% raw %}<span class="math inline">\(g_N=h_N-\log\int e^{h_N}d\mu\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\int e^{g_N}d\mu=1\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(e^{h_N}\leq q+1\)</span>{% endraw %} and it converges to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, its integral tends to one. Also {% raw %}<span class="math inline">\(q h_N\to q\log q\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}: the positive part is controlled by {% raw %}<span class="math inline">\(q\log^+q\)</span>{% endraw %}, and the negative part by the integrable bound {% raw %}<span class="math inline">\(1/e\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(\int fg_N\to\operatorname{Ent}_\mu(f)\)</span>{% endraw %}. The upper bound for unbounded admissible {% raw %}<span class="math inline">\(g\)</span>{% endraw %} follows by the same Jensen argument and truncation; {% raw %}<span class="math inline">\(qg^+\)</span>{% endraw %} is integrable since {% raw %}<span class="math inline">\(qg^+\leq q\log q-q+e^{g^+}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e^{g^+}\leq1+e^g\)</span>{% endraw %}. ◻</p>
</div>
<div id="lem:entropy-mu-tensorises" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>.  Let {% raw %}<span class="math inline">\(\mu_1, \dots, \mu_n\)</span>{% endraw %} be probability measures on some measurable space, {% raw %}<span class="math inline">\(P = \mu_1 \times \cdots \times \mu_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a measurable, real-valued, and nonnegative function of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} variables. With the understanding that {% raw %}<span class="math inline">\(\operatorname{Ent}_{\mu_i} (f)\)</span>{% endraw %} denotes the entropy of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} computed with respect to the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th variable (and {% raw %}<span class="math inline">\(\mu_i\)</span>{% endraw %}), we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent}_P (f) \leq \sum_{1 \leq i \leq n} \int \operatorname{Ent}_{\mu_i} (f) \dif P ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The two-coordinate identity is</p>
{% raw %}<div class="math display">\[\operatorname{Ent}_{\mu\otimes\nu}(f)=\int\operatorname{Ent}_\mu(f(\cdot,y))\,d\nu(y)+\operatorname{Ent}_\nu\!\left(\int f(x,\cdot)\,d\mu(x)\right).\]</div>{% endraw %}
<p>It follows by adding and subtracting the entropy of the coordinate mean. Convexity of the entropy functional, proved using the joint convexity of {% raw %}<span class="math inline">\((u,m)\mapsto u\log(u/m)\)</span>{% endraw %} in the preceding entropy note, bounds the last term by {% raw %}<span class="math inline">\(\int\operatorname{Ent}_\nu(f(x,\cdot))d\mu(x)\)</span>{% endraw %}. This proves the two-coordinate inequality. Inductively separate the last coordinate from the first {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %}, apply the same identity and convexity, then apply the induction hypothesis to each fixed last-coordinate slice. Fubini is justified by the stated logarithmic integrability and the bound {% raw %}<span class="math inline">\(u\log u\geq-1/e\)</span>{% endraw %}. Summing gives exactly the displayed {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-coordinate bound. ◻</p>
</div>
<div id="lem:variational-ent-mu-inf" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong>.  </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f) = \inf_{t > 0} \left( \int f \log f - (1 + \log t) f + t \dif \mu \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(m=\int f\,d\mu\)</span>{% endraw %}. The expression being minimized is {% raw %}<span class="math inline">\(\int f\log f\,d\mu-m(1+\log t)+t\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(m&gt;0\)</span>{% endraw %}, its derivative in {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} is {% raw %}<span class="math inline">\(1-m/t\)</span>{% endraw %}, negative below {% raw %}<span class="math inline">\(m\)</span>{% endraw %} and positive above it. The minimum is therefore attained at {% raw %}<span class="math inline">\(t=m\)</span>{% endraw %}, where the expression equals {% raw %}<span class="math inline">\(\operatorname{Ent}_\mu(f)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(m=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f=0\)</span>{% endraw %} almost everywhere and the expression is simply {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, whose infimum is zero as {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %}. This handles the boundary case without writing {% raw %}<span class="math inline">\(\log0\)</span>{% endraw %}. ◻</p>
</div>
<div id="thm:log-sobolev-gaussian-Rn" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong> (Log-Sobolev inequality for Gaussian measures on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}).  Let {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} be the standard Gaussian measure on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(f : \mathbb R^n \to \mathbb R\)</span>{% endraw %} be a {% raw %}<span class="math inline">\(\mathscr C^2\)</span>{% endraw %} function such that {% raw %}<span class="math inline">\(f^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\nabla f|^2\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-integrable, where {% raw %}<span class="math inline">\(\nabla f = (\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n})\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \operatorname{Ent}_\mu (f^2) \leq 2 \int |\nabla f|^2 \dif \mu ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Tensorization allows us to sum the one-coordinate gradient bounds. It is therefore sufficient to prove the statement for {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}, i.e. on the real-line. Since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is twice continuous differentiable, we first prove the inequality when {% raw %}<span class="math inline">\(f^2 = e^g\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is twice continuously differentiable with compact support; the approximation needed for general functions is given below. Therefore, if we set {% raw %}<span class="math inline">\(V(x) = \frac{x^2 + \ln 2\pi}{2}\)</span>{% endraw %}, then the standard normal density becomes {% raw %}<span class="math inline">\(e^{-V(x)}\)</span>{% endraw %}. So, for {% raw %}<span class="math inline">\(\lambda \in (0,1)\)</span>{% endraw %}, set </p>

{% raw %}<div class="math display">\[\begin{aligned}
        g_\lambda (z) = \sup_{u, v \in \mathbb R : \lambda u + (1-\lambda) v = z} \left( g(u) - \left( \lambda V(u) + (1-\lambda) V(v) - V(\lambda u + (1-\lambda)v) \right) \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Exponentiating, set {% raw %}<span class="math inline">\(\phi(z) = e^{g_\lambda (z) - V(z)}\)</span>{% endraw %}, so </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \phi(\lambda u + (1-\lambda)v) \geq e^{-(1-\lambda)V(v)} e^{\lambda(\frac{g(u)}{\lambda} - V(u))} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %}, {% raw %}<span class="math inline">\(e^{\frac{g}{\lambda} - V}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(e^{-V}\)</span>{% endraw %} satisfy the assumption of Précopa-Leindler, meaning we can apply the theorem to allow us to conclude </p>

{% raw %}<span id="eq:inequality-g-lambda-1"></span><div class="math display">\[\begin{aligned}
 
        \int e^{g_\lambda} \dif \mu \geq \left( \int e^{\frac{g}{\lambda}} \dif \mu \right)^{\lambda} ~.
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(A(\lambda)=\int e^{g/\lambda}d\mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H(\lambda)=A(\lambda)^\lambda\)</span>{% endraw %}. Boundedness of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} permits differentiation under the integral near one. Logarithmic differentiation gives</p>
{% raw %}<div class="math display">\[\frac{H'(\lambda)}{H(\lambda)}=\log A(\lambda)-\frac{\int g e^{g/\lambda}d\mu}{\lambda A(\lambda)},\qquad H'(1)=A(1)\log A(1)-\int ge^g d\mu=-\operatorname{Ent}_\mu(e^g).\]</div>{% endraw %}
<p> Taylor expanding about {% raw %}<span class="math inline">\(\lambda = 1\)</span>{% endraw %} gives </p>

{% raw %}<span id="eq:inequality-g-lambda-2"></span><div class="math display">\[\begin{aligned}
 
        \left( \int e^{\frac{g}{\lambda}} \dif \mu \right)^{\lambda} = \int e^g \dif \mu + (1-\lambda) \operatorname{Ent}_\mu (e^g) + O((1-\lambda)^2) ~,
    
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> which is valid as {% raw %}<span class="math inline">\(\lambda \to 1\)</span>{% endraw %}. To extract the gradient term from this comparison, it remains to bound {% raw %}<span class="math inline">\(\int e^{g_\lambda} \dif \mu\)</span>{% endraw %}. To do so, note that if we use the definition of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and make changes of variables {% raw %}<span class="math inline">\(h = z-v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta = \frac{1-\lambda}{\lambda}\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        g_\lambda (z) = \sup_{u,v \in \mathbb R : \lambda u + (1-\lambda)v = z} \left( g(u) - \frac{\lambda(1-\lambda)}{2} (u-v)^2 \right) = \sup_{h \in \mathbb R} \left( g(z+\eta h) - \frac{\eta h^2}{2} \right) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> and, because {% raw %}<span class="math inline">\(g&#x27;&#x27;\)</span>{% endraw %} is compactly supported and continuous, we have, for some constant {% raw %}<span class="math inline">\(d\)</span>{% endraw %} independent of {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        g(z + \eta h) \leq g(z) + g&#x27;(z) \eta h + d \eta^2 h^2 ~.
    
\end{aligned}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\eta&lt;1/(2d)\)</span>{% endraw %} (with no restriction if {% raw %}<span class="math inline">\(d=0\)</span>{% endraw %}), maximize the quadratic in {% raw %}<span class="math inline">\(h\)</span>{% endraw %} to obtain the explicit bound</p>
{% raw %}<div class="math display">\[g(z)\leq g_\lambda(z)\leq g(z)+\sup_h\{\eta g'(z)h-\eta(1/2-d\eta)h^2\}=g(z)+\frac{\eta(g'(z))^2}{2(1-2d\eta)}.\]</div>{% endraw %}
<p>The lower bound uses {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(g'\)</span>{% endraw %} is bounded, the last expression equals {% raw %}<span class="math inline">\(g(z)+\eta(g'(z))^2/2+O(\eta^2)\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(z\)</span>{% endraw %}. The supremum is measurable: continuity in {% raw %}<span class="math inline">\(h\)</span>{% endraw %} lets us take it over rational {% raw %}<span class="math inline">\(h\)</span>{% endraw %}.</p>
<p>Exponentiating and using the uniform bound gives</p>


{% raw %}<div class="math display">\[\begin{aligned}
        e^{g_\lambda (z)} \leq e^{g(z)} + \frac{\eta}{2} (g&#x27;(z))^2 e^{g(z)} + O(\eta^2) ~.
    
\end{aligned}\]</div>{% endraw %}
<p>Combine (2), (3), and the integrated upper bound. Subtract {% raw %}<span class="math inline">\(\int e^g d\mu\)</span>{% endraw %}, divide by {% raw %}<span class="math inline">\(1-\lambda&gt;0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\lambda\uparrow1\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\eta/(1-\lambda)=1/\lambda\to1\)</span>{% endraw %} and the uniform quadratic remainder divided by {% raw %}<span class="math inline">\(1-\lambda\)</span>{% endraw %} vanishes,</p>
{% raw %}<div class="math display">\[\operatorname{Ent}_\mu(e^g)\leq\frac12\int(g')^2e^g d\mu.\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(f=e^{g/2}\)</span>{% endraw %}, the chain rule gives {% raw %}<span class="math inline">\(4(f')^2=(g')^2e^g\)</span>{% endraw %}, proving the one-dimensional bound. Applying it to each coordinate slice and summing by Lemma 8 proves the corresponding bound in any finite dimension. The approximation below removes positivity and compact-support restrictions. ◻</p>


</div>

<p>For completeness, the approximation also covers zeros and signs of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. The argument for {% raw %}<span class="math inline">\(e^g\)</span>{% endraw %} works when {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is constant outside a compact set, since adding a constant only scales entropy and the gradient integral. For a smooth compactly supported function {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, apply it to {% raw %}<span class="math inline">\(u^2+\varepsilon\)</span>{% endraw %}. Its entropy is at most</p>
{% raw %}<div class="math display">\[\frac12\int\frac{\|\nabla(u^2+\varepsilon)\|^2}{u^2+\varepsilon}\,d\mu
=2\int\frac{u^2}{u^2+\varepsilon}\|\nabla u\|^2\,d\mu\le2\int\|\nabla u\|^2d\mu.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}; boundedness gives convergence of entropy. Finally take {% raw %}<span class="math inline">\(u_R=\chi_R f\)</span>{% endraw %}, where smooth cutoffs satisfy {% raw %}<span class="math inline">\(\chi_R=1\)</span>{% endraw %} on the ball of radius {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, vanish outside the ball of radius {% raw %}<span class="math inline">\(2R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\|\nabla\chi_R\|\le C/R\)</span>{% endraw %}. The assumed integrability gives {% raw %}<span class="math inline">\(u_R\to f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nabla u_R\to\nabla f\)</span>{% endraw %} in Gaussian {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. Fatou's lemma applied to {% raw %}<span class="math inline">\(u_R^2\log u_R^2+1/e\)</span>{% endraw %}, together with convergence of {% raw %}<span class="math inline">\(\int u_R^2d\mu\)</span>{% endraw %}, gives lower semicontinuity of entropy and proves Theorem 10 in full.</p>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a> · Next: <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a></p></nav>

</div>
