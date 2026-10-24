---
layout: "post"
title: "Rademacher and Gaussian Complexity"
date: "2022-12-03"
tags: ["statistics", "empirical processes"]
excerpt: "Rademacher and Gaussian Complexity. Notes on empirical processes."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/12/03/brief-digression-to-symmetrized-processes/", "/2022/12/06/gaussian-complexity/"]
---

<div class="note-content" markdown="0">

<p>Gaussian and Rademacher processes have comparable upper-bound techniques, but their lower bounds can differ. On the coordinate vectors, a random-sign maximum stays bounded while a Gaussian maximum grows. This example explains why a Rademacher version of Sudakov’s inequality needs an additional restriction. We then compare Gaussian complexity with Rademacher complexity directly and use Gaussian comparison to estimate matrix norms.</p>

<p>Here {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} are independent Rademacher signs and {% raw %}<span class="math inline">\(g_i\)</span>{% endraw %} are independent standard normal variables. We compare sums with these two kinds of multipliers; the <a href="{% post_url 2022-11-19-gaussian-process %}">Gaussian supremum bounds</a> will be useful.</p>

<span id="brief-digression-to-symmetrized-processes"></span>
<p>Let {% raw %}<span class="math inline">\(S(T)=\mathbb E_\varepsilon\sup_{t\in T}|\langle\varepsilon,t\rangle|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b(T)=\sup_{t\in T}\|t\|_\infty\)</span>{% endraw %}, for a nonempty bounded subset of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. Unlike a Gaussian maximum, the Rademacher maximum on {% raw %}<span class="math inline">\(T=\{e_1,\ldots,e_n\}\)</span>{% endraw %} is exactly one even though the Euclidean covering number at any fixed radius below {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} is {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. A Gaussian-style lower bound therefore needs an additional condition on individual coordinates.</p>

<div id="thm:sudakov-minorization-for-symmetrized" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p>Theorem 1 (Rademacher Sudakov bound). There exist universal constants {% raw %}<span class="math inline">\(c_*,C&gt;0\)</span>{% endraw %} such that, for every nonempty bounded {% raw %}<span class="math inline">\(T\subset\mathbb R^n\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, the condition</p>
</div>

<span id="eq:sudakov-minorization-symmetrized-as1"></span>
{% raw %}<div class="math display">\[b(T)S(T)\le c_*a^2\]</div>{% endraw %}

<p>implies {% raw %}<span class="math inline">\(a\sqrt{\log N(a,T,\|\cdot\|_2)}\le C S(T)\)</span>{% endraw %}. The constants are fixed independently of {% raw %}<span class="math inline">\(T,n,a\)</span>{% endraw %}. The product formulation also covers {% raw %}<span class="math inline">\(T=\{0\}\)</span>{% endraw %}, without dividing by a zero coordinate bound.</p>

<div id="lem:rademacher-process-norm-comparisons-ell2-ell1" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p>Lemma 2. For {% raw %}<span class="math inline">\(Z=\sum_i\varepsilon_it_i\)</span>{% endraw %},</p>
</div>

<span id="eq:rademacher-process-norm-comparisons-ell2-ell1"></span>
{% raw %}<div class="math display">\[\|Z\|_2\le\sqrt3\,\|Z\|_1.\]</div>{% endraw %}

<p>Proof. Independence and symmetry leave only terms with even multiplicities in the fourth moment:</p>

{% raw %}<div class="math display">\[\mathbb EZ^4=\sum_i t_i^4+6\sum_{i&lt;j}t_i^2t_j^2\le3\left(\sum_i t_i^2\right)^2=3(\mathbb EZ^2)^2.\]</div>{% endraw %}

<p>Hölder, applied to {% raw %}<span class="math inline">\(|Z|^{2/3}|Z|^{4/3}\)</span>{% endraw %} with exponents {% raw %}<span class="math inline">\(3/2,3\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(\mathbb EZ^2\le(\mathbb E|Z|)^{2/3}(\mathbb EZ^4)^{1/3}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\mathbb EZ^2&gt;0\)</span>{% endraw %}, divide by its two-thirds power and raise to the power {% raw %}<span class="math inline">\(3/2\)</span>{% endraw %}. If the second moment is zero the claim is immediate. In particular, {% raw %}<span class="math inline">\(\sup_{t\in T}\|t\|_2\le\sqrt3S(T)\)</span>{% endraw %}. ◻</p>

<div id="lem:mgf-standard-normal-bound" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p>Lemma 3 (Truncated Gaussian mgf). If {% raw %}<span class="math inline">\(g\sim \mathcal{N}(0,1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h=g\mathbf1\{|g|&gt;w\}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(w&gt;0\)</span>{% endraw %}, then for {% raw %}<span class="math inline">\(|\lambda|\le w/4\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb Ee^{\lambda h}\le1+4\lambda^2e^{-w^2/8}\le\exp(4\lambda^2e^{-w^2/8}).\]</div>{% endraw %}
</div>

<p>Proof. The mgf {% raw %}<span class="math inline">\(M\)</span>{% endraw %} has {% raw %}<span class="math inline">\(M(0)=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M'(0)=0\)</span>{% endraw %}, by symmetry. On {% raw %}<span class="math inline">\(|x|&gt;w\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\lambda|\le w/4\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\lambda x\le x^2/4\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[M''(\lambda)\le\frac1{\sqrt{2\pi}}\int_{|x|&gt;w}x^2e^{-x^2/4}\,dx\le\frac{e^{-w^2/8}}{\sqrt{2\pi}}\int_{\mathbb R}x^2e^{-x^2/8}\,dx=8e^{-w^2/8}.\]</div>{% endraw %}

<p>Integrating twice proves the bound, for positive and negative {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. All differentiation is justified by Gaussian exponential moments. This direct estimate avoids changing a tail domain to a smaller set, which would reverse the required inequality. ◻</p>

<span id="eq:sudakov-minorization-symmetrized-main-hurdle"></span>
<p>Proof of Theorem 1: local estimate. First let {% raw %}<span class="math inline">\(U\subset B_2(0,1)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(S=S(U)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=b(U)\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(bS\le c_0\)</span>{% endraw %}, for a sufficiently small universal {% raw %}<span class="math inline">\(c_0\)</span>{% endraw %}. We prove</p>

{% raw %}<div class="math display">\[\log N(1/2,U,\|\cdot\|_2)\le C_0S^2.\]</div>{% endraw %}

<p>Take any finite {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}-separated family {% raw %}<span class="math inline">\(V\subset U\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(m\ge2\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(L=\log m\)</span>{% endraw %}. Gaussian Sudakov gives {% raw %}<span class="math inline">\(c\sqrt L\le\mathbb E\max_{v\in V}|\langle g,v\rangle|\)</span>{% endraw %}, for a universal {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}. Decompose {% raw %}<span class="math inline">\(g_i=m_i+h_i\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(h_i=g_i\mathbf1\{|g_i|&gt;w\}\)</span>{% endraw %}. Conditional on their magnitudes, the {% raw %}<span class="math inline">\(m_i\)</span>{% endraw %} have independent symmetric signs (a zero magnitude causes no difficulty). The expected absolute supremum is a convex even function of each multiplier, hence nondecreasing in its magnitude. Since {% raw %}<span class="math inline">\(|m_i|\le w\)</span>{% endraw %}, its expectation is at most {% raw %}<span class="math inline">\(wS\)</span>{% endraw %}.</p>

<span id="eq:sudakov-minorization-symmetrized-main-estimate"></span>
<p>For the tail part, Lemma 3 and independence imply, for {% raw %}<span class="math inline">\(|\lambda|\le w/(4b)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\log\mathbb E\exp\!\left(\lambda\sum_i h_iv_i\right)\le4\lambda^2e^{-w^2/8}\sum_i v_i^2\le4\lambda^2e^{-w^2/8}.\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %}, the local claim is trivial. Otherwise log-sum-exp over {% raw %}<span class="math inline">\(2m\)</span>{% endraw %} signed sums, with {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} the smaller of a constant multiple of {% raw %}<span class="math inline">\(e^{w^2/16}\sqrt{\log(2m)}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w/(8b)\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[\mathbb E\max_{v\in V}\left|\sum_i h_iv_i\right|\le C\left[e^{-w^2/16}\sqrt L+\frac{bL}{w}\right].\]</div>{% endraw %}

<span id="eq:sudakov-minorization-symmetrized-step2"></span>
<p>Combining the two parts yields</p>

{% raw %}<div class="math display">\[c\le\frac{wS}{\sqrt L}+Ce^{-w^2/16}+C\frac{b\sqrt L}{w}.\]</div>{% endraw %}

<p>Here {% raw %}<span class="math inline">\(S&gt;0\)</span>{% endraw %}, because the separated family contains a nonzero vector and Lemma 2 applies. Set {% raw %}<span class="math inline">\(q=\sqrt L/S\)</span>{% endraw %}. Choose a fixed {% raw %}<span class="math inline">\(\kappa&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\kappa&lt;c/4\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(w=\kappa q\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(q\)</span>{% endraw %} exceeds a sufficiently large universal threshold, the middle term is below {% raw %}<span class="math inline">\(c/4\)</span>{% endraw %}. The last term is {% raw %}<span class="math inline">\(CbS/\kappa\)</span>{% endraw %}, below {% raw %}<span class="math inline">\(c/4\)</span>{% endraw %} when {% raw %}<span class="math inline">\(c_0\)</span>{% endraw %} is small enough. The first term is {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}. This contradicts the displayed inequality. Therefore {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is universally bounded, proving {% raw %}<span class="math inline">\(\log m\le C_0S^2\)</span>{% endraw %} for every such finite packing. A maximal packing covers {% raw %}<span class="math inline">\(U\)</span>{% endraw %} at radius {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, proving the local estimate.</p>

<p>Proof of Theorem 1: refinement. Fix {% raw %}<span class="math inline">\(t_0\in T\)</span>{% endraw %}. Lemma 2 gives {% raw %}<span class="math inline">\(T\subset B(t_0,R)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(R=2\sqrt3S(T)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(S(T)=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T=\{0\}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(a\ge R\)</span>{% endraw %}, one ball suffices. Otherwise successively halve {% raw %}<span class="math inline">\(R\)</span>{% endraw %} until the first radius {% raw %}<span class="math inline">\(r_k=R2^{-k}\le a\)</span>{% endraw %}; then {% raw %}<span class="math inline">\(a/2&lt;r_k\le a\)</span>{% endraw %}. At a parent ball of radius {% raw %}<span class="math inline">\(r&gt;a\)</span>{% endraw %} centered at {% raw %}<span class="math inline">\(t\in T\)</span>{% endraw %}, form</p>

{% raw %}<div class="math display">\[U_{t,r}=\{(u-t)/r:u\in T\cap B(t,r)\}\subset B_2(0,1).\]</div>{% endraw %}

<span id="eq:sudakov-minorization-symmetrized-covering-no-equivalence"></span>
{% raw %}<div class="math display">\[S(U_{t,r})\le\frac{2S(T)}r,\qquad b(U_{t,r})\le\frac{2b(T)}r,\qquad N(r/2,T\cap B(t,r))=N(1/2,U_{t,r}).\]</div>{% endraw %}

<p>Translation is essential in this step. The product of the first two bounds is at most {% raw %}<span class="math inline">\(4c_*a^2/r^2\le4c_*\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(c_*\le c_0/4\)</span>{% endraw %}. The local estimate then bounds the logarithm of each refinement count by {% raw %}<span class="math inline">\(4C_0S(T)^2/r^2\)</span>{% endraw %}. Centers can be chosen in their cells. Multiplying counts and summing the geometric series gives</p>

{% raw %}<div class="math display">\[\log N(a,T)\le C S(T)^2\sum_{j=0}^{k-1}(R2^{-j})^{-2}\le C'\frac{S(T)^2}{a^2}.\]</div>{% endraw %}

<p>The final inequality uses {% raw %}<span class="math inline">\(R2^{-(k-1)}&gt;a\)</span>{% endraw %}. The refinement-count estimate proves the covering-entropy bound, with the same absolute-supremum convention and all scale factors accounted for. ◻</p>

<h3 data-note-section="1" id="gaussian-complexity">1. Gaussian Complexity</h3>
<p>For comparison with one-sided suprema, define the Gaussian width {% raw %}<span class="math inline">\(\mathcal G(T)=\mathbb E\sup_{t\in T}\langle g,t\rangle\)</span>{% endraw %}. Bounded subsets of finite-dimensional Euclidean space have a countable dense subset and the linear processes are continuous, so these suprema are measurable. Absolute suprema correspond to replacing {% raw %}<span class="math inline">\(T\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T\cup(-T)\)</span>{% endraw %}.</p>

<div id="result-4" class="example" data-note-number="4" data-note-kind="Example">
<p><strong>Example 4 ({% raw %}<span class="math inline">\(\ell^q\)</span>{% endraw %}-balls).</strong> Let {% raw %}<span class="math inline">\(1\le q\le\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1/p+1/q=1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(B_q^d(1)=\{\theta:\|\theta\|_q\le1\}\)</span>{% endraw %}. Duality gives {% raw %}<span class="math inline">\(\mathcal G(B_q^d(1))=\mathbb{E}\|w\|_p\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(1&lt;q\le\infty\)</span>{% endraw %}, so that {% raw %}<span class="math inline">\(p&lt;\infty\)</span>{% endraw %}, Jensen and a choice of coordinate signs yield</p>
{% raw %}<div class="math display">\[d^{1/p}\sqrt{2/\pi}\le\mathcal G(B_q^d(1))\le d^{1/p}(\mathbb{E}|w_1|^p)^{1/p}.\]</div>{% endraw %}
<p>For the lower bound take {% raw %}<span class="math inline">\(\theta_i=d^{-1/q}\operatorname{sign}(w_i)\)</span>{% endraw %}; for the upper bound apply concavity of the {% raw %}<span class="math inline">\(p\)</span>{% endraw %}th root to {% raw %}<span class="math inline">\(\sum_i|w_i|^p\)</span>{% endraw %}. In particular {% raw %}<span class="math inline">\(\mathcal G(B_\infty^d(1))=d\sqrt{2/\pi}\)</span>{% endraw %}. At the remaining endpoint {% raw %}<span class="math inline">\(q=1\)</span>{% endraw %}, the exact expression is {% raw %}<span class="math inline">\(\mathbb{E}\max_i|w_i|\)</span>{% endraw %}, bounded above by {% raw %}<span class="math inline">\(\sqrt{2\log(2d)}\)</span>{% endraw %}, as proved below. A finite-{% raw %}<span class="math inline">\(p\)</span>{% endraw %} moment formula cannot be substituted at {% raw %}<span class="math inline">\(p=\infty\)</span>{% endraw %}.</p>

</div>
<div id="lem:rademacher-gaussian-complexity-relationship" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong> (Rademacher and Gaussian comparison). Let {% raw %}<span class="math inline">\(d\ge1\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(T\subset\mathbb R^d\)</span>{% endraw %} be nonempty and bounded. To match the one-sided Gaussian width defined above, write {% raw %}<span class="math inline">\(\mathcal R_+(T)=\mathbb{E}_\varepsilon\sup_{\theta\in T}\langle\varepsilon,\theta\rangle\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[\mathcal R_+(T)\le\sqrt{\frac\pi2}\mathcal G(T),\qquad
\mathcal G(T)\le\sqrt{2\log(2d)}\,\mathcal R_+(T).\]</div>{% endraw %}
<p>For the absolute-supremum convention used earlier, apply both bounds to {% raw %}<span class="math inline">\(T\cup(-T)\)</span>{% endraw %}. Both widths must use the same convention: a singleton already distinguishes the one-sided and absolute versions.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Write a standard Gaussian vector as {% raw %}<span class="math inline">\(w=\varepsilon\circ r\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(r_i=|w_i|\)</span>{% endraw %} are iid half-normal magnitudes and the signs are independent of the magnitudes. Put {% raw %}<span class="math inline">\(\varphi(r)=\mathbb{E}_\varepsilon\sup_{\theta\in T}\sum_i r_i\varepsilon_i\theta_i\)</span>{% endraw %}. This is convex, and {% raw %}<span class="math inline">\(\mathbb{E}r_i=\sqrt{2/\pi}\)</span>{% endraw %}. Jensen and homogeneity give</p>
{% raw %}<div class="math display">\[\mathcal G(T)=\mathbb{E}_r\varphi(r)\ge\varphi(\mathbb{E}r)=\sqrt{\frac2\pi}\,\mathcal R_+(T).\]</div>{% endraw %}
<p>For the other direction, sign symmetry makes {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} even in each coordinate. An even convex function is nondecreasing on the nonnegative half-line. Therefore, for {% raw %}<span class="math inline">\(M=\max_i r_i\)</span>{% endraw %}, coordinatewise comparison yields {% raw %}<span class="math inline">\(\varphi(r)\le\varphi(M\mathbf1)=M\mathcal R_+(T)\)</span>{% endraw %}. Finally, for {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E} M\le\frac1\lambda\log\sum_{i=1}^d\mathbb{E}(e^{\lambda w_i}+e^{-\lambda w_i})
=\frac{\log(2d)}\lambda+\frac\lambda2.\]</div>{% endraw %}
<p>Minimizing at {% raw %}<span class="math inline">\(\lambda=\sqrt{2\log(2d)}\)</span>{% endraw %} proves the upper bound, including {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}. The lower constant is attained for {% raw %}<span class="math inline">\(T=\{-1,1\}\)</span>{% endraw %} in dimension one. □</p>
</div>


<div id="lem:gaussian-contraction-inequality" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p>Lemma 6 (Gaussian contraction). Let {% raw %}<span class="math inline">\(T\subset\mathbb R^d\)</span>{% endraw %} be nonempty and bounded, and let each {% raw %}<span class="math inline">\(\varphi_j\)</span>{% endraw %} be 1-Lipschitz with {% raw %}<span class="math inline">\(\varphi_j(0)=0\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\mathcal G(\varphi(T))\le\mathcal G(T)\)</span>{% endraw %}.</p>
</div>

<p>Proof. The two indexed processes {% raw %}<span class="math inline">\(X_t=\langle g,\varphi(t)\rangle\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_t=\langle g,t\rangle\)</span>{% endraw %} are centered Gaussian, and</p>

{% raw %}<div class="math display">\[\mathbb E(X_t-X_s)^2=\sum_j(\varphi_j(t_j)-\varphi_j(s_j))^2\le\|t-s\|_2^2=\mathbb E(Y_t-Y_s)^2.\]</div>{% endraw %}

<p>Apply Sudakov–Fernique on finite subsets. A countable dense subset of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} determines both suprema because the maps are continuous. Finite maxima converge, and are dominated by an integrable constant times {% raw %}<span class="math inline">\(\|g\|_2\)</span>{% endraw %}, proving the assertion. The same finite-subset interpretation extends it to unbounded sets. ◻</p>

<div id="ex:subgaussian-matrix-ell-2" class="example" data-note-number="7" data-note-kind="Example">
<p>Example 7 (Subgaussian matrix norm). Let {% raw %}<span class="math inline">\(W\in\mathbb R^{n\times d}\)</span>{% endraw %} have independent centered entries with {% raw %}<span class="math inline">\(\mathbb Ee^{\lambda W_{ij}}\le e^{\lambda^2/2}\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\|W\|_{\mathrm{op}}\)</span>{% endraw %} for its largest singular value and {% raw %}<span class="math inline">\(\|W\|_F^2=\sum_j\sigma_j(W)^2\)</span>{% endraw %}. The operator and Frobenius norms need not agree. For the compact set {% raw %}<span class="math inline">\(\mathcal M=\{uv^\top:u\in S^{n-1},v\in S^{d-1}\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\|W\|_{\mathrm{op}}=\sup_{\Theta\in\mathcal M}\langle W,\Theta\rangle_F,\qquad \mathbb Ee^{\lambda\langle W,A\rangle_F}\le e^{\lambda^2\|A\|_F^2/2}.\]</div>{% endraw %}

<p>The first identity follows from singular vectors; the second follows by multiplying the independent entry mgfs. In particular the indexed process has Frobenius-subgaussian increments.</p>
</div>

<p>Choose {% raw %}<span class="math inline">\(\delta/2\)</span>{% endraw %}-nets of the two unit spheres with cardinalities at most {% raw %}<span class="math inline">\((1+4/\delta)^n\)</span>{% endraw %} and {% raw %}<span class="math inline">\((1+4/\delta)^d\)</span>{% endraw %}, respectively. The volumetric bound follows by placing disjoint balls of radius {% raw %}<span class="math inline">\(\delta/4\)</span>{% endraw %} around a maximal separated set and comparing their volumes with the ball of radius {% raw %}<span class="math inline">\(1+\delta/4\)</span>{% endraw %}. For unit vectors,</p>

{% raw %}<div class="math display">\[\|uv^\top-u'v'^\top\|_F\le\|(u-u')v^\top\|_F+\|u'(v-v')^\top\|_F\le\|u-u'\|_2+\|v-v'\|_2.\]</div>{% endraw %}

<p>The product net therefore gives an internal {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}-cover of {% raw %}<span class="math inline">\(\mathcal M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(N\le(1+4/\delta)^{n+d}\)</span>{% endraw %} centers. Comparing every matrix to its center gives</p>

<span id="eq:expected-spectral-norm-subgaussian-matrix-estimate"></span>
{% raw %}<div class="math display">\[\mathbb E\|W\|_{\mathrm{op}}\le\sqrt{2\log(2N)}+\mathbb E\sup_{\Theta\in\mathcal M}|\langle W,\Theta-\pi\Theta\rangle_F|.\]</div>{% endraw %}

<span id="eq:expected-sup-subgaussian-ell-2-norm-operator"></span>
<p>For any matrix {% raw %}<span class="math inline">\(A\)</span>{% endraw %} of rank at most two, its singular-value decomposition gives</p>

{% raw %}<div class="math display">\[|\langle W,A\rangle_F|\le\|W\|_{\mathrm{op}}\sum_j\sigma_j(A)\le\sqrt2\|W\|_{\mathrm{op}}\|A\|_F.\]</div>{% endraw %}

<p>Here {% raw %}<span class="math inline">\(\Theta-\pi\Theta\)</span>{% endraw %} has rank at most two and Frobenius norm at most {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. Thus the residual is at most {% raw %}<span class="math inline">\(\sqrt2\delta\mathbb E\|W\|_{\mathrm{op}}\)</span>{% endraw %}. This expectation is finite already, since it is at most {% raw %}<span class="math inline">\(\mathbb E\|W\|_F\le\sqrt{nd}\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\delta=1/(2\sqrt2)\)</span>{% endraw %} and absorb the residual to obtain</p>

{% raw %}<div class="math display">\[\mathbb E\|W\|_{\mathrm{op}}\le2\sqrt{2\{\log2+(n+d)\log(1+8\sqrt2)\}}\le C(\sqrt n+\sqrt d).\]</div>{% endraw %}

<p>This explicit finite-net calculation supplies the scaling without the erroneous Gram-matrix factorization or numerical simplification in the source.</p>

<div id="ex:gaussian-matrix-ell-2" class="example" data-note-number="8" data-note-kind="Example">
<p>Example 8 (Gaussian matrix norm). For independent {% raw %}<span class="math inline">\(\mathcal{N}(0,1)\)</span>{% endraw %} entries, the sharp leading upper bound is</p>

{% raw %}<div class="math display">\[\mathbb E\|W\|_{\mathrm{op}}\le\sqrt n+\sqrt d.\]</div>{% endraw %}

<p>To prove it, compare {% raw %}<span class="math inline">\(Z_{u,v}=u^\top Wv\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Y_{u,v}=\langle g,u\rangle+\langle h,v\rangle\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(g,h\)</span>{% endraw %} are independent standard Gaussian vectors. For {% raw %}<span class="math inline">\(a=\langle u,u'\rangle\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=\langle v,v'\rangle\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb E(Z_{u,v}-Z_{u',v'})^2=2-2ab,\qquad \mathbb E(Y_{u,v}-Y_{u',v'})^2=4-2a-2b.\]</div>{% endraw %}

<p>The second minus the first is {% raw %}<span class="math inline">\(2(1-a)(1-b)\ge0\)</span>{% endraw %}. Sudakov–Fernique therefore gives the comparison, first on finite subsets and then on the compact product of spheres by continuity and integrable Frobenius domination. Since {% raw %}<span class="math inline">\(\sup_{u,v}Y_{u,v}=\|g\|_2+\|h\|_2\)</span>{% endraw %}, Jensen proves the displayed bound.</p>

<p>Finally {% raw %}<span class="math inline">\(|\|W\|_{\mathrm{op}}-\|W'\|_{\mathrm{op}}|\le\|W-W'\|_F\)</span>{% endraw %}, so the operator norm is 1-Lipschitz in the independent Gaussian entries. Gaussian concentration gives, for {% raw %}<span class="math inline">\(t\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P\left(\frac{\|W\|_{\mathrm{op}}}{\sqrt n}&gt;1+\sqrt{d/n}+t\right)\le e^{-nt^2/2}.\]</div>{% endraw %}

<p>This uses the Gaussian Lipschitz concentration theorem, not the rank-two trace estimate. The leading constant one is necessary uniformly in dimensions: already for one column, {% raw %}<span class="math inline">\(\mathbb E\|g\|_2/\sqrt n\to1\)</span>{% endraw %}, by the law of large numbers and uniform integrability. Taking {% raw %}<span class="math inline">\(d=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, rules out any smaller universal coefficient multiplying {% raw %}<span class="math inline">\(\sqrt n+\sqrt d\)</span>{% endraw %}.</p>
</div>
<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-11-22-gaussian-comparison-and-sudakovs-inequality %}">Gaussian Comparison and Sudakov’s Inequality</a>; <a href="{% post_url 2022-10-11-chaining %}">Chaining</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-11-22-gaussian-comparison-and-sudakovs-inequality %}">Gaussian Comparison and Sudakov’s Inequality</a> · Next: <a href="{% post_url 2022-12-10-nonparametric-least-squares-and-rates-of-convergence %}">Nonparametric Least Squares and Rates of Convergence</a></p></nav>


</div>
