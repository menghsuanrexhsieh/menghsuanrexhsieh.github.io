---
layout: "post"
title: "Contiguity, Change of Measure, and M-Estimation"
date: "2022-05-07"
tags: ["statistics", "asymptotic theory"]
excerpt: "Contiguity becomes useful when the data-generating law changes with the sample size."
note_series: "Contiguity and M-estimation"
note_source: "assets/notes/Overleaf Projects (32 items)/M-Estimation and Contiguity/main.tex"
redirect_from: ["/2022/05/07/absolute-continuity-and-contiguity/", "/2022/06/04/the-argmax-theorem/"]
---

<div class="note-content" markdown="0">

<p>Contiguity becomes useful when the data-generating law changes with the sample size. A calculation made under one law can then remain valid under nearby alternatives, even though the limiting distribution of the statistic changes. We will keep the two tasks separate: transferring a negligible error and calculating a new limiting law.</p>

<p>We will start with a calibration problem, prove the three Le Cam lemmas, and then prove the argmax theorem. The last theorem answers a different question: how convergence of an entire objective function determines the limit of its maximizer. Together, these results explain how to derive an estimator’s law under local alternatives without repeating its analysis from the beginning.</p>

<h3 data-note-section="1" id="08-0-calibration-example">1. A calibration error that consistency cannot see</h3>
<p>Suppose a scale is used {% raw %}<span class="math inline">\(n\)</span>{% endraw %} times to weigh an object whose true weight has already been subtracted. The readings are independent with variance one. Under correct calibration their mean is zero; under a small calibration error their mean is {% raw %}<span class="math inline">\(h/\sqrt n\)</span>{% endraw %}. Write the laws of the <strong>whole sample</strong> as</p>

{% raw %}<div class="math display">\[
P_n=\mathcal{N}(0,1)^{\otimes n},\qquad
Q_{n,h}=\mathcal{N}(h/\sqrt n,1)^{\otimes n}.
\]</div>{% endraw %}
<p>Under both laws, {% raw %}<span class="math inline">\(\overline X_n\to0\)</span>{% endraw %} in probability. Consistency therefore gives the same answer in the two experiments. But the uncertainty in the average is also of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}. On that scale,</p>

{% raw %}<div class="math display">\[
Z_n\triangleq\sqrt n\,\overline X_n
\sim\begin{cases}
\mathcal{N}(0,1),&amp;\text{under }P_n,\\
\mathcal{N}(h,1),&amp;\text{under }Q_{n,h}.
\end{cases}
\]</div>{% endraw %}
<p>For example, the level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test that rejects when {% raw %}<span class="math inline">\(Z_n&gt;z_{1-\alpha}\)</span>{% endraw %} has power</p>

{% raw %}<div class="math display">\[
Q_{n,h}(Z_n&gt;z_{1-\alpha})
=1-\Phi(z_{1-\alpha}-h).
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal cdf and {% raw %}<span class="math inline">\(z_{1-\alpha}=\Phi^{-1}(1-\alpha)\)</span>{% endraw %}. The calibration error goes to zero, but its effect on rejection probability does not.</p>

<p>The normal calculation identifies the scale at which a vanishing calibration error still affects power. In a more complicated problem, we may have proved an expansion only under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
T_n=\frac1{\sqrt n}\sum_{i=1}^n\psi(X_i)+R_n,
\qquad R_n=o_{P_n}(1),
\]</div>{% endraw %}
<p>and want the law of {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}. There are two separate tasks. We must show that the remainder still vanishes under the alternative, and then find the alternative law of the leading term. Contiguity handles the first task; likelihood-ratio tilting handles the second.</p>

<h4 data-note-section="1.1" id="08-0-the-sample-likelihood-ratio-locates-the-relevant-scale">1.1. The sample likelihood ratio locates the relevant scale</h4>
<p>For a general shift {% raw %}<span class="math inline">\(\delta_n\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(a_n=\sqrt n\,\delta_n\)</span>{% endraw %}. Subtracting the two normal log densities gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log L_n
&amp;\triangleq\log\frac{dQ_n}{dP_n}(X_1,\ldots,X_n)\\
&amp;=-\frac12\sum_{i=1}^n\bigl((X_i-\delta_n)^2-X_i^2\bigr)\\
&amp;=\delta_n\sum_{i=1}^nX_i-\frac{n\delta_n^2}{2}
=a_nZ_n-\frac{a_n^2}{2}.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a_n=h\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}_{P_n}L_n^2=e^{h^2}\)</span>{% endraw %}. Cauchy–Schwarz consequently gives, for every sample event {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_{n,h}(A_n)
=\mathbb{E}_{P_n}[L_n\mathbf1_{A_n}]
\le e^{h^2/2}\sqrt{P_n(A_n)}.
\]</div>{% endraw %}
<p>The reverse likelihood ratio has the same second moment under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}, so the implication works in both directions. Any event becoming negligible under one experiment becomes negligible under the other. This remains true for bounded sequences {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %}, even if they do not converge.</p>

<p>To see why this scale is special, compare the total variation distance at smaller and larger displacements. With total variation defined as {% raw %}<span class="math inline">\(\sup_A|Q_n(A)-P_n(A)|\)</span>{% endraw %}, the likelihood-ratio rejection region gives</p>

{% raw %}<div class="math display">\[
\|Q_n-P_n\|_{\rm TV}=2\Phi(|a_n|/2)-1.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a_n&gt;0\)</span>{% endraw %}, the maximizing event is {% raw %}<span class="math inline">\(\{Z_n&gt;a_n/2\}\)</span>{% endraw %}: subtract its probabilities under {% raw %}<span class="math inline">\(\mathcal{N}(a_n,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal{N}(0,1)\)</span>{% endraw %}. Symmetry gives the same formula when {% raw %}<span class="math inline">\(a_n&lt;0\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(a_n\to0\)</span>{% endraw %}, the two experiments become close even in total variation. If {% raw %}<span class="math inline">\(a_n\to h\ne0\)</span>{% endraw %}, their distance stays positive, but their negligible events agree. If {% raw %}<span class="math inline">\(|a_n|\to\infty\)</span>{% endraw %}, the event {% raw %}<span class="math inline">\(\{\operatorname{sgn}(a_n)Z_n&gt;|a_n|/2\}\)</span>{% endraw %} has probability tending to zero under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and to one under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. Thus an alternative can be too close to detect, locally distinguishable, or consistently distinguishable, depending on its size relative to sampling error.</p>

<p><span id="basics"></span></p>

<h3 data-note-section="2" id="08-0-basics">2. General experiments and the direction of contiguity</h3>
<p>Let {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} be probability measures on {% raw %}<span class="math inline">\((\Omega_n,\mathcal A_n)\)</span>{% endraw %}. The sample spaces may vary with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}; no independence, density model, or Euclidean parameter is required here.</p>

<p><span id="result-7"></span></p>

<div id="contiguity-definition" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>. We write {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} if, for every sequence {% raw %}<span class="math inline">\(A_n\in\mathcal A_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
P_n(A_n)\to0\quad\Longrightarrow\quad Q_n(A_n)\to0.
\]</div>{% endraw %}
<p>The sequences are mutually contiguous when both {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P_n\lhd Q_n\)</span>{% endraw %} hold.</p>

</div>
<p>Keep the direction explicit: a statement proved negligible under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} transfers to {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} when {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}. The definition does not assert that probabilities of ordinary events, or limiting distributions, are equal.</p>

<p>An equivalent form is asymptotic uniform absolute continuity: for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} there are {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n_0\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
n\ge n_0,\quad P_n(A)&lt;\delta
\quad\Longrightarrow\quad Q_n(A)&lt;\varepsilon
\qquad(A\in\mathcal A_n).
\]</div>{% endraw %}
<p>To prove this from contiguity, suppose it fails. Choose increasing {% raw %}<span class="math inline">\(n_k\)</span>{% endraw %} and events {% raw %}<span class="math inline">\(A_{n_k}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P_{n_k}(A_{n_k})&lt;1/k\)</span>{% endraw %} but {% raw %}<span class="math inline">\(Q_{n_k}(A_{n_k})\ge\varepsilon\)</span>{% endraw %}, and use the empty event at other indices. This contradicts the definition. The converse follows by applying the displayed implication to any sequence whose {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probabilities vanish.</p>

<p>This also explains why absolute continuity separately at each {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is insufficient. The allowed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} could deteriorate with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. In the calibration example, normal sample laws are mutually absolutely continuous even when {% raw %}<span class="math inline">\(|a_n|\to\infty\)</span>{% endraw %} and the experiments separate completely.</p>

<p>Conversely, contiguity does not require finite-sample absolute continuity. On {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(P_n=\delta_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n=(1-1/n)\delta_0+n^{-1}\delta_1\)</span>{% endraw %}. Their total variation distance is {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}, so they are mutually contiguous, although {% raw %}<span class="math inline">\(Q_n\not\ll P_n\)</span>{% endraw %} for any finite {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>

<h4 data-note-section="2.1" id="08-0-likelihood-ratios-when-singular-parts-are-present">2.1. Likelihood ratios when singular parts are present</h4>
<p><span id="result-1"></span><span id="result-2"></span><span id="result-3"></span><span id="result-4"></span><span id="result-5"></span><span id="result-6"></span></p>

<p>Recall that {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %} means {% raw %}<span class="math inline">\(P(A)=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(Q(A)=0\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Two measures are mutually singular if there is a measurable set carrying all of one measure and none of the other. A pair of measures need be neither absolutely continuous in a given direction nor mutually singular; this is why we keep both parts of the decomposition below.</p>

<p>Set {% raw %}<span class="math inline">\(\mu_n=P_n+Q_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_n=dP_n/d\mu_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(q_n=dQ_n/d\mu_n\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
L_n=\frac{q_n}{p_n}\mathbf1_{\{p_n&gt;0\}},\qquad
R_n=\frac{p_n}{q_n}\mathbf1_{\{q_n&gt;0\}},\qquad
s_n=Q_n(p_n=0),
\]</div>{% endraw %}
<p>where the displayed ratios are set to zero when their denominators vanish. These are derivatives of the absolutely continuous parts. In particular, {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} need not equal {% raw %}<span class="math inline">\(1/L_n\)</span>{% endraw %} on the singular pieces.</p>

<p>For any measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_n(A)=\mathbb{E}_{P_n}[L_n\mathbf1_A]
       +Q_n(A\cap\{p_n=0\}),\qquad
\mathbb{E}_{P_n}L_n=1-s_n.
\]</div>{% endraw %}
<p>Indeed, the first term is {% raw %}<span class="math inline">\(\int_{A\cap\{p_n&gt;0\}}q_n\,d\mu_n\)</span>{% endraw %}; the second accounts for the rest. The first measure is absolutely continuous with respect to {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}, and the second is concentrated on a {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-null set, giving the Lebesgue decomposition. More generally, for bounded measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{Q_n}f(X_n)
=\mathbb{E}_{P_n}[f(X_n)L_n]
 +\int_{\{p_n=0\}}f(X_n)\,dQ_n.
\]</div>{% endraw %}
<p>The final term has absolute value at most {% raw %}<span class="math inline">\(\|f\|_\infty s_n\)</span>{% endraw %}. We will retain it in the proofs. Dropping it without an absolute-continuity assumption loses part of the alternative law. The measure-theoretic background is developed in the <a href="{% post_url 2021-11-29-the-radon-nikodym-theorem %}">Radon–Nikodym note</a>.</p>

<p><span id="result-9"></span></p>

<h3 data-note-section="3" id="08-0-le-cam-first">3. Le Cam’s first lemma: when likelihood limits retain all the mass</h3>
<div id="le-cam-first-lemma" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>. For the experiments and ratios above, the following statements are equivalent.</p>

<ol type="1">
<li><p>{% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %} and the likelihood ratios are uniformly integrable under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\lim_{K\to\infty}\sup_n
\mathbb{E}_{P_n}[L_n\mathbf1_{\{L_n&gt;K\}}]=0.
\]</div>{% endraw %}</li>
<li><p>Every subsequential distributional limit {% raw %}<span class="math inline">\(L\)</span>{% endraw %} of {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}.</p></li>
<li><p>Every subsequential distributional limit {% raw %}<span class="math inline">\(R\)</span>{% endraw %} of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\Pr(R&gt;0)=1\)</span>{% endraw %}.</p></li>
<li><p>For every sequence of measurable real statistics {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_n=o_{P_n}(1)\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(T_n=o_{Q_n}(1)\)</span>{% endraw %}.</p></li>
</ol>
<p>The quantifiers in 3 and 4 concern <strong>every</strong> convergent subsequence.</p>

</div>
<p>The likelihood ratio tells us how much alternative probability is attached to a sample that is rare under the reference law. There are two ways probability can be lost from a proposed likelihood limit: a nonvanishing singular part, or increasingly large ratios on increasingly rare events. Statement 2 rules out both.</p>

<p><span id="result-8"></span></p>

<p>When {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} are mutually absolutely continuous at every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, apply statement 2 in each direction: mutual contiguity is equivalent to uniform integrability of {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L_n^{-1}\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}.</p>

<h4 data-note-section="3.1" id="08-0-proof-contiguity-and-uniform-integrability">3.1. Proof: contiguity and uniform integrability</h4>
<p>Assume 1. Since {% raw %}<span class="math inline">\(P_n(p_n=0)=0\)</span>{% endraw %}, contiguity gives {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %}. If uniform integrability failed, there would be an {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, increasing indices {% raw %}<span class="math inline">\(n_k\)</span>{% endraw %}, and thresholds {% raw %}<span class="math inline">\(K_k\to\infty\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_{n_k}}[L_{n_k}\mathbf1_{\{L_{n_k}&gt;K_k\}}]
\ge\varepsilon.
\]</div>{% endraw %}
<p>The indices can be chosen increasing because each individual {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} is integrable. Markov’s inequality gives {% raw %}<span class="math inline">\(P_{n_k}(L_{n_k}&gt;K_k)\le1/K_k\)</span>{% endraw %}, whereas change of measure gives {% raw %}<span class="math inline">\(Q_{n_k}(L_{n_k}&gt;K_k)\ge\varepsilon\)</span>{% endraw %}. Taking empty events off this subsequence contradicts contiguity. Thus 1 implies 2.</p>

<p>Conversely, split a sample event according to whether {% raw %}<span class="math inline">\(L_n\le K\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
Q_n(A_n)\le s_n+K P_n(A_n)
  +\mathbb{E}_{P_n}[L_n\mathbf1_{\{L_n&gt;K\}}].
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(P_n(A_n)\to0\)</span>{% endraw %}, first let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} with {% raw %}<span class="math inline">\(K\)</span>{% endraw %} fixed, then let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. Statement 2 makes the right side vanish, proving 1.</p>

<h4 data-note-section="3.2" id="08-0-proof-why-the-limiting-expectation-must-be-one">3.2. Proof: why the limiting expectation must be one</h4>
<p>The ratios are tight under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} because {% raw %}<span class="math inline">\(P_n(L_n&gt;K)\le1/K\)</span>{% endraw %}. Suppose along some subsequence {% raw %}<span class="math inline">\(L_n\Rightarrow L\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, the bounded continuous truncation gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_n}(L_n\wedge K)\to\mathbb{E}(L\wedge K).
\]</div>{% endraw %}
<p>Under 2, the omitted tails vanish uniformly and {% raw %}<span class="math inline">\(\mathbb{E}_{P_n}L_n=1-s_n\to1\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} therefore yields {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}. This proves 2 implies 3.</p>

<p>For the converse, first show {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %}. Otherwise some subsequence has {% raw %}<span class="math inline">\(s_n\ge\varepsilon\)</span>{% endraw %}. Tightness supplies a further weakly convergent subsequence, and truncation implies</p>

{% raw %}<div class="math display">\[
\mathbb{E}L\le\liminf_n\mathbb{E}_{P_n}L_n\le1-\varepsilon,
\]</div>{% endraw %}
<p>contrary to 3. Thus all the means tend to one. Along any weakly convergent subsequence, 3 and the truncation identity now give</p>

{% raw %}<div class="math display">\[
\lim_n\mathbb{E}_{P_n}(L_n-K)_+
=1-\mathbb{E}(L\wedge K)\longrightarrow0
\quad\text{as }K\to\infty.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(x\mathbf1_{\{x&gt;2K\}}\le2(x-K)_+\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x\ge0\)</span>{% endraw %}, this implies uniform integrability along that subsequence; its finitely many initial terms cause no problem. If the entire sequence were not uniformly integrable, we could choose offending indices and thresholds as in the preceding proof and then extract a weakly convergent subsequence. It would still have the offending tails, contradicting what we just proved. Hence 3 implies 2.</p>

<p>For a concrete failure, let {% raw %}<span class="math inline">\(P_n(\{1\})=1/n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(Q_n=\delta_1\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(L_n=n\mathbf1_{\{1\}}\)</span>{% endraw %} has expectation one for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, but converges to zero in {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability. All the likelihood mass sits on an event whose reference probability vanishes. Expectations equal to one before taking limits are therefore not enough.</p>

<h4 data-note-section="3.3" id="08-0-proof-the-reverse-ratio-and-negligible-statistics">3.3. Proof: the reverse ratio and negligible statistics</h4>
<p>Assume 1 and let {% raw %}<span class="math inline">\(R_n\Rightarrow R\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} along a subsequence. Given {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, use asymptotic uniform absolute continuity to choose {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;t&lt;\delta\)</span>{% endraw %}, the event</p>

{% raw %}<div class="math display">\[
B_n(t)=\{q_n&gt;0,\ R_n&lt;t\}
\]</div>{% endraw %}
<p>has {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability at most {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(p_n&lt;tq_n\)</span>{% endraw %} there. Thus {% raw %}<span class="math inline">\(Q_n(R_n&lt;t)=Q_n(B_n(t))&lt;\varepsilon\)</span>{% endraw %} eventually. The open-set part of the portmanteau theorem gives {% raw %}<span class="math inline">\(\Pr(R&lt;t)\le\varepsilon\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\Pr(R=0)=0\)</span>{% endraw %}. This proves 4.</p>

<p>Conversely, suppose 4 holds and {% raw %}<span class="math inline">\(P_n(A_n)\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Q_n(A_n)\)</span>{% endraw %} failed to vanish, choose a subsequence bounded away from zero. Since {% raw %}<span class="math inline">\(\mathbb{E}_{Q_n}R_n\le1\)</span>{% endraw %}, extract a further subsequence with {% raw %}<span class="math inline">\(R_n\Rightarrow R\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_n(A_n)
\le Q_n(R_n\le t)
 +\frac1t\mathbb{E}_{Q_n}[R_n\mathbf1_{A_n}]
\le Q_n(R_n\le t)+\frac{P_n(A_n)}t.
\]</div>{% endraw %}
<p>The closed-set inequality bounds the limit superior by {% raw %}<span class="math inline">\(\Pr(R\le t)\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %} makes this zero by 4, a contradiction.</p>

<p>Finally, 1 implies 5 by applying contiguity to {% raw %}<span class="math inline">\(\{|T_n|&gt;\varepsilon\}\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(T_n=\mathbf1_{A_n}\)</span>{% endraw %} proves the converse. The same argument applies to norms of vector-valued remainders. This completes all the equivalences.</p>

<p><span id="result-10"></span></p>

<h4 data-note-section="3.4" id="08-0-the-lognormal-criterion">3.4. The lognormal criterion</h4>
<p>If, under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\log L_n\Rightarrow Z,
\qquad Z\sim\mathcal{N}(-\sigma^2/2,\sigma^2),
\]</div>{% endraw %}
<p>then {% raw %}<span class="math inline">\(L_n\Rightarrow e^Z\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\mathbb{E}e^Z=e^{-\sigma^2/2+\sigma^2/2}=1,
\qquad \Pr(e^Z&gt;0)=1.
\]</div>{% endraw %}
<p>A Gaussian log likelihood has the required exponential moment. The mean-one characterization gives {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}. Applying the positivity characterization with the roles of {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} interchanged gives {% raw %}<span class="math inline">\(P_n\lhd Q_n\)</span>{% endraw %}. This includes {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, where the limit is the constant one. The negative half-variance term is precisely what normalizes the limiting likelihood ratio.</p>

<h3 data-note-section="4" id="08-0-le-cam-second">4. Le Cam’s second lemma: from square-root likelihoods to log likelihoods</h3>
<p>The next issue is how to obtain that lognormal likelihood limit. Ordinary Taylor expansion of {% raw %}<span class="math inline">\(\log p_\theta\)</span>{% endraw %} can demand derivatives or domination conditions that are unnecessary. Square roots of densities already belong to an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} space, which gives a more flexible expansion.</p>

<p>We prove a Lindeberg form of the second lemma for independent, non-identically distributed observations. Its assumptions explicitly control the small increments and any singular mass. The general uniformly asymptotically negligible formulation and its truncation proof are given in <a href="https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch3-rev4b.pdf#page=29">Wellner’s Chapter 3, Lemma 3.3</a>. The version below includes the quadratic-mean differentiable i.i.d. application, which we then derive.</p>

<div id="le-cam-second-lemma" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>. Let {% raw %}<span class="math inline">\(P_n=\bigotimes_{i=1}^{k_n}P_{ni}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n=\bigotimes_{i=1}^{k_n}Q_{ni}\)</span>{% endraw %}, with coordinate densities {% raw %}<span class="math inline">\(p_{ni},q_{ni}\)</span>{% endraw %} relative to a common dominating measure for each coordinate. Under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
T_{ni}=2\left(\sqrt{\frac{q_{ni}(X_{ni})}{p_{ni}(X_{ni})}}-1\right),
\qquad s_{ni}=Q_{ni}(p_{ni}=0).
\]</div>{% endraw %}
<p>Suppose, for some finite {% raw %}<span class="math inline">\(\sigma^2\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_i s_{ni}\to0,\qquad
\sum_i\mathbb{E}_{P_n}T_{ni}^2\to\sigma^2,
\]</div>{% endraw %}
<p>and, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_i\mathbb{E}_{P_n}
 [T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}]\to0.
\]</div>{% endraw %}
<p>Then, writing {% raw %}<span class="math inline">\(W_n=\sum_iT_{ni}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L_n=dQ_n^a/dP_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
W_n&amp;\Rightarrow\mathcal{N}(-\sigma^2/4,\sigma^2),\\
\log L_n&amp;=W_n-\sigma^2/4+o_{P_n}(1)
\Rightarrow\mathcal{N}(-\sigma^2/2,\sigma^2).
\end{aligned}
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} are mutually contiguous.</p>

</div>
<p>The product likelihood and its singular part can be identified explicitly. The set {% raw %}<span class="math inline">\(A_n=\bigcap_i\{p_{ni}&gt;0\}\)</span>{% endraw %} has full {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability. On it the derivative of the absolutely continuous part of {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\prod_i(q_{ni}/p_{ni})\)</span>{% endraw %}; the remaining part is supported on the {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-null complement. Independence under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[Q_n(A_n^c)=1-\prod_i(1-s_{ni})\le\sum_i s_{ni}\longrightarrow0.\]</div>{% endraw %}

<p>This proves that coordinate support changes cannot leave a nonvanishing singular part in the product experiment. It also justifies the product formula for {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} used in the logarithm calculation.</p>
<h4 data-note-section="4.1" id="08-0-proof-normalization-determines-the-first-drift-term">4.1. Proof: normalization determines the first drift term</h4>
<p>All expectations in this proof are under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}. The definition gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}(1+T_{ni}/2)^2=1-s_{ni},
\qquad
\mathbb{E}T_{ni}=-\frac14\mathbb{E}T_{ni}^2-s_{ni}.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\sum_i\mathbb{E}T_{ni}\to-\sigma^2/4\)</span>{% endraw %}. We also need the variance of the centered sum. For any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\max_i\mathbb{E}T_{ni}^2
\le\varepsilon^2+
\sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}].
\]</div>{% endraw %}
<p>Taking the limit superior and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} shows that the largest second moment vanishes. Since {% raw %}<span class="math inline">\(\max_i s_{ni}\le\sum_i s_{ni}\to0\)</span>{% endraw %}, the largest absolute mean vanishes as well. Moreover,</p>

{% raw %}<div class="math display">\[
\sum_i(\mathbb{E}T_{ni})^2
\le\max_i|\mathbb{E}T_{ni}|\sum_i|\mathbb{E}T_{ni}|
\longrightarrow0.
\]</div>{% endraw %}
<p>The last sum is bounded by the normalization identity. Therefore {% raw %}<span class="math inline">\(\sum_i\operatorname{Var}(T_{ni})\to\sigma^2\)</span>{% endraw %}. The centered variables satisfy Lindeberg’s condition: eventually their mean shifts are smaller than {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\sum_i\mathbb{E}\bigl[(T_{ni}-\mathbb{E}T_{ni})^2
 \mathbf1_{\{|T_{ni}-\mathbb{E}T_{ni}|&gt;\varepsilon\}}\bigr]\\
&amp;\quad\le2\sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon/2\}}]
  +2\sum_i(\mathbb{E}T_{ni})^2\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>The <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">triangular-array CLT</a> now gives the stated limit of {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, the same conclusion follows directly from Chebyshev’s inequality.</p>

<h4 data-note-section="4.2" id="08-0-proof-the-quadratic-sum-is-stable-and-the-largest-increment-vanishes">4.2. Proof: the quadratic sum is stable and the largest increment vanishes</h4>
<p>For fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, truncate the squares at {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Independence gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(\sum_iT_{ni}^2
 \mathbf1_{\{|T_{ni}|\le\varepsilon\}}\right)
\le\varepsilon^2\sum_i\mathbb{E}T_{ni}^2.
\]</div>{% endraw %}
<p>The expected discarded sum tends to zero by Lindeberg’s condition. Thus, for any {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, Chebyshev and Markov bound the limit superior of {% raw %}<span class="math inline">\(\Pr(|\sum_iT_{ni}^2-\sigma^2|&gt;\eta)\)</span>{% endraw %} by a constant times {% raw %}<span class="math inline">\(\varepsilon^2\sigma^2/\eta^2\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves</p>

{% raw %}<div class="math display">\[
\sum_iT_{ni}^2\xrightarrow{P_n}\sigma^2.
\]</div>{% endraw %}
<p>Also, by a union bound,</p>

{% raw %}<div class="math display">\[
P_n\left(\max_i|T_{ni}|&gt;\varepsilon\right)
\le\frac1{\varepsilon^2}
 \sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}]
\longrightarrow0.
\]</div>{% endraw %}
<p>Both estimates are needed for the logarithm expansion: the sum of squares supplies the quadratic drift, while the maximum bound puts every increment in a common Taylor neighborhood.</p>

<h4 data-note-section="4.3" id="08-0-proof-the-logarithm-supplies-the-second-drift-term">4.3. Proof: the logarithm supplies the second drift term</h4>
<p>For {% raw %}<span class="math inline">\(|t|\le1\)</span>{% endraw %}, Taylor’s formula gives</p>

{% raw %}<div class="math display">\[
2\log(1+t/2)=t-\frac{t^2}{4}+r(t),
\qquad |r(t)|\le C|t|^3.
\]</div>{% endraw %}
<p>With probability tending to one all the {% raw %}<span class="math inline">\(T_{ni}\)</span>{% endraw %} lie in this range. On that event,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log L_n
&amp;=2\sum_i\log(1+T_{ni}/2)\\
&amp;=W_n-\frac14\sum_iT_{ni}^2+\sum_i r(T_{ni}),\\
\left|\sum_i r(T_{ni})\right|
&amp;\le C\max_i|T_{ni}|\sum_iT_{ni}^2=o_{P_n}(1).
\end{aligned}
\]</div>{% endraw %}
<p>In particular, zeros of the likelihood ratio cause no difficulty on this event. The quadratic term contributes another {% raw %}<span class="math inline">\(-\sigma^2/4\)</span>{% endraw %}, giving the total drift {% raw %}<span class="math inline">\(-\sigma^2/2\)</span>{% endraw %}. The first lemma’s lognormal criterion completes the proof.</p>

<h3 data-note-section="5" id="08-0-qmd-to-lan">5. How quadratic-mean differentiability produces LAN</h3>
<p>Let {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} be an interior point of a parameter set in {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} be densities relative to a fixed measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. The model is differentiable in quadratic mean at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} if there is a score {% raw %}<span class="math inline">\(\ell\in L^2(P_{\theta_0})^d\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\int\left(\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}}
 -\frac12t^\top\ell\sqrt{p_{\theta_0}}\right)^2d\mu
=o(\|t\|^2).
\]</div>{% endraw %}
<p>The derivative is taken in an integrated square-root metric. Pointwise derivatives of the density are one way to verify it, but are not part of the definition. See the companion notes on <a href="{% post_url 2023-04-08-quadratic-mean-differentiability %}">quadratic-mean differentiability</a> and <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">local asymptotic normality</a>.</p>

<div id="qmd-lan-theorem" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>. Under this assumption, {% raw %}<span class="math inline">\(\mathbb{E}_{\theta_0}\ell=0\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(I=\mathbb{E}_{\theta_0}[\ell\ell^\top]\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(h\in\mathbb R^d\)</span>{% endraw %}, with observations i.i.d. under {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log\frac{d(P_{\theta_0+h/\sqrt n}^{\otimes n})^a}
 {dP_{\theta_0}^{\otimes n}}
&amp;=h^\top\Delta_n-\frac12h^\top I h+o_{P_{\theta_0}^{\otimes n}}(1),\\
\Delta_n&amp;=\frac1{\sqrt n}\sum_{i=1}^n\ell(X_i)
\Rightarrow\mathcal{N}_d(0,I).
\end{aligned}
\]</div>{% endraw %}
<p>The two product laws are mutually contiguous. Positive definiteness of {% raw %}<span class="math inline">\(I\)</span>{% endraw %} is not needed for this conclusion; it is needed later when we invert {% raw %}<span class="math inline">\(I\)</span>{% endraw %}.</p>

</div>
<h4 data-note-section="5.1" id="08-0-proof-support-changes-means-and-the-l2-remainder">5.1. Proof: support changes, means, and the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} remainder</h4>
<p>Write {% raw %}<span class="math inline">\(p_0=p_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_t=p_{\theta_0+t}\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
T_t=2\left(\sqrt{p_t/p_0}-1\right)
\quad P_{\theta_0}\text{-a.s.},\qquad
s_t=\int_{\{p_0=0\}}p_t\,d\mu.
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{p_0=0\}\)</span>{% endraw %} the entire QMD integrand is {% raw %}<span class="math inline">\(p_t\)</span>{% endraw %}. On its complement, divide the square-root expansion by {% raw %}<span class="math inline">\(\sqrt{p_0}/2\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
s_t=o(\|t\|^2),\qquad
\mathbb{E}_0(T_t-t^\top\ell)^2=o(\|t\|^2),\qquad
\mathbb{E}_0T_t^2=t^\top I t+o(\|t\|^2).
\]</div>{% endraw %}
<p>The normalization identity from the second lemma gives {% raw %}<span class="math inline">\(\mathbb{E}_0T_t=-\mathbb{E}_0T_t^2/4-s_t=O(\|t\|^2)\)</span>{% endraw %}. On the other hand, Cauchy–Schwarz applied to the QMD remainder gives {% raw %}<span class="math inline">\(\mathbb{E}_0T_t=t^\top\mathbb{E}_0\ell+o(\|t\|)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(t\)</span>{% endraw %} approach zero along each coordinate direction. Comparing the two equations proves {% raw %}<span class="math inline">\(\mathbb{E}_0\ell=0\)</span>{% endraw %}.</p>

<p>Now fix {% raw %}<span class="math inline">\(h\)</span>{% endraw %} and take {% raw %}<span class="math inline">\(t=h/\sqrt n\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(V_n=\sqrt n\,T_{h/\sqrt n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=h^\top\ell\)</span>{% endraw %} as functions of one observation, we have {% raw %}<span class="math inline">\(V_n\to V\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2(P_{\theta_0})\)</span>{% endraw %}. In particular the squares are uniformly integrable. One can see the required tail estimate directly. For fixed {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_0[V_n^2\mathbf1_{\{|V_n|&gt;A\}}]
\le2\mathbb{E}_0(V_n-V)^2
 +2\mathbb{E}_0[V^2\mathbf1_{\{|V_n|&gt;A\}}].
\]</div>{% endraw %}
<p>In the second term split into {% raw %}<span class="math inline">\(\{|V|&gt;A/2\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{|V_n-V|&gt;A/2\}\)</span>{% endraw %}. The first part has arbitrarily small expectation for large {% raw %}<span class="math inline">\(A\)</span>{% endraw %}; for fixed {% raw %}<span class="math inline">\(A\)</span>{% endraw %} the second vanishes as {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, by {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} convergence and integrability of {% raw %}<span class="math inline">\(V^2\)</span>{% endraw %}. Finitely many initial {% raw %}<span class="math inline">\(n\)</span>{% endraw %} have integrable tails as well. Hence, for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
n\mathbb{E}_0[T_{h/\sqrt n}^2
 \mathbf1_{\{|T_{h/\sqrt n}|&gt;\varepsilon\}}]
=\mathbb{E}_0[V_n^2\mathbf1_{\{|V_n|&gt;\varepsilon\sqrt n\}}]
\longrightarrow0.
\]</div>{% endraw %}
<p>Also {% raw %}<span class="math inline">\(ns_{h/\sqrt n}\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\mathbb{E}_0T_{h/\sqrt n}^2\to h^\top I h\)</span>{% endraw %}. These verify every assumption of the second lemma.</p>

<p>To identify the random linear term, let</p>

{% raw %}<div class="math display">\[
D_{ni}=T_{h/\sqrt n}(X_i)-\frac{h^\top\ell(X_i)}{\sqrt n}.
\]</div>{% endraw %}
<p>Independence and QMD imply</p>

{% raw %}<div class="math display">\[
\operatorname{Var}_0\left(\sum_{i=1}^nD_{ni}\right)
\le n\mathbb{E}_0D_{n1}^2\to0,
\qquad
n\mathbb{E}_0D_{n1}
=-\frac n4\mathbb{E}_0T_{h/\sqrt n}^2-ns_{h/\sqrt n}
\to-\frac14h^\top I h.
\]</div>{% endraw %}
<p>It follows that {% raw %}<span class="math inline">\(W_n=h^\top\Delta_n-h^\top I h/4+o_P(1)\)</span>{% endraw %}. The second lemma subtracts the other quarter, and the multivariate CLT gives the law of {% raw %}<span class="math inline">\(\Delta_n\)</span>{% endraw %}. This proves the expansion and contiguity.</p>

<p>The result explains why smooth experiments have a Gaussian local approximation. For a Gaussian observation {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}_d(0,I)\)</span>{% endraw %}, tilting by {% raw %}<span class="math inline">\(\exp(h^\top\Delta-h^\top I h/2)\)</span>{% endraw %} changes its mean to {% raw %}<span class="math inline">\(Ih\)</span>{% endraw %}. The likelihood of the original sample has precisely this form to first order. The statement proved here is for fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}; it does not by itself give a remainder uniform over a compact collection of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}’s.</p>

<p><span id="result-11"></span></p>

<h3 data-note-section="6" id="08-0-le-cam-third">6. Le Cam’s third lemma: transfer the distribution by tilting</h3>
<div id="le-cam-third-lemma" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>. Suppose {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} take values in a metric space {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Assume ordinary weak convergence of measurable random elements,</p>

{% raw %}<div class="math display">\[
(X_n,L_n)\xRightarrow[P_n]{}(X,L).
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
\nu(B)\triangleq\mathbb{E}[\mathbf1_{\{X\in B\}}L]
\]</div>{% endraw %}
<p>defines a probability measure on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_n\xRightarrow[Q_n]{}\nu\)</span>{% endraw %}.</p>

</div>
<p>The first lemma gives {% raw %}<span class="math inline">\(L\ge0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}. Thus the formula is a probability measure: countable additivity follows from monotone convergence. It weights a limiting sample by its limiting likelihood ratio.</p>

<h4 data-note-section="6.1" id="08-0-proof-with-the-truncation-step-included">6.1. Proof with the truncation step included</h4>
<p>Take bounded continuous {% raw %}<span class="math inline">\(f:S\to\mathbb R\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, the function {% raw %}<span class="math inline">\((x,l)\mapsto f(x)(l\wedge K)\)</span>{% endraw %} is bounded and continuous on {% raw %}<span class="math inline">\(S\times[0,\infty)\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_n}[f(X_n)(L_n\wedge K)]
\to\mathbb{E}[f(X)(L\wedge K)].
\]</div>{% endraw %}
<p>The exact change-of-measure formula gives the bound</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\left|\mathbb{E}_{Q_n}f(X_n)
 -\mathbb{E}_{P_n}[f(X_n)(L_n\wedge K)]\right|\\
&amp;\qquad\le\|f\|_\infty\left(s_n+
 \mathbb{E}_{P_n}(L_n-K)_+\right).
\end{aligned}
\]</div>{% endraw %}
<p>By the first lemma, {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %} and the tail expectation is uniformly small for large {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. The corresponding limiting error is at most {% raw %}<span class="math inline">\(\|f\|_\infty\mathbb{E}(L-K)_+\)</span>{% endraw %}, which also vanishes. Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}, to obtain</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{Q_n}f(X_n)\to\mathbb{E}[f(X)L]=\int f\,d\nu.
\]</div>{% endraw %}
<p>This is the bounded-continuous-function characterization of weak convergence, completing the proof. Joint convergence is essential: the marginal limit of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} alone says nothing about which values receive the larger likelihood weights.</p>

<h4 data-note-section="6.2" id="08-0-calculate-the-gaussian-mean-shift">6.2. Calculate the Gaussian mean shift</h4>
<p>The most frequently used form has a jointly normal statistic and log likelihood. Suppose</p>

{% raw %}<div class="math display">\[
\begin{pmatrix}T_n\\ \log L_n\end{pmatrix}
\xRightarrow[P_n]{}
\begin{pmatrix}T\\ Z\end{pmatrix}
\sim\mathcal{N}_{k+1}\left(
 \begin{pmatrix}m\\-\sigma^2/2\end{pmatrix},
 \begin{pmatrix}\Sigma&amp;c\\c^\top&amp;\sigma^2\end{pmatrix}\right).
\]</div>{% endraw %}
<p>The first lemma supplies mutual contiguity. To calculate the tilted law of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, evaluate its characteristic function:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[e^{it^\top T}e^Z]
&amp;=\exp\left(it^\top m-\frac{\sigma^2}{2}
 +\frac12\bigl(-t^\top\Sigma t+2it^\top c+\sigma^2\bigr)\right)\\
&amp;=\exp\left(it^\top(m+c)-\frac12t^\top\Sigma t\right).
\end{aligned}
\]</div>{% endraw %}
<p>One can evaluate that transform even with singular covariance without a density or an inverse matrix. Represent {% raw %}<span class="math inline">\(T=m+AG\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z=-\sigma^2/2+b^\top G\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} a vector of independent standard normals, {% raw %}<span class="math inline">\(AA^\top=\Sigma\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Ab=c\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(b^\top b=\sigma^2\)</span>{% endraw %}. For a real pair {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %}, direct Gaussian integration gives {% raw %}<span class="math inline">\(\mathbb E e^{(u+iv)G_1}=\exp((u+iv)^2/2)\)</span>{% endraw %}. Multiplying these one-dimensional transforms gives</p>

{% raw %}<div class="math display">\[\mathbb E e^{it^\top T+Z}=e^{it^\top m-\sigma^2/2}\exp\{(b+iA^\top t)^\top(b+iA^\top t)/2\},\]</div>{% endraw %}

<p>which simplifies to the displayed characteristic function. The exponential is integrable because its modulus is {% raw %}<span class="math inline">\(e^Z\)</span>{% endraw %}, whose expectation is one.</p>
<p>The first equality follows by writing the jointly normal vector as an affine transformation of independent standard normals and using their exponential transform; no invertibility of its covariance matrix is needed. Therefore</p>

{% raw %}<div class="math display">\[
T_n\xRightarrow[Q_n]{}\mathcal{N}_k(m+c,\Sigma).
\]</div>{% endraw %}
<p>The shift is the covariance with the log likelihood, not its standard deviation. If a statistic is asymptotically uncorrelated with the score in a particular direction, its Gaussian limit cannot detect that local direction at first order.</p>

<p>For instance, suppose the earlier expansion has {% raw %}<span class="math inline">\(\mathbb{E}_0\psi=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}_0\|\psi\|^2&lt;\infty\)</span>{% endraw %}. Under the QMD alternatives, the joint CLT for {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
T_n\xRightarrow[Q_{n,h}]{}
\mathcal{N}_k(Ch,V),\qquad
C=\mathbb{E}_0[\psi\ell^\top],\quad
V=\mathbb{E}_0[\psi\psi^\top].
\]</div>{% endraw %}
<p>Here contiguity transfers the {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} remainder, and the third lemma shifts the leading term. In the scale-calibration example, {% raw %}<span class="math inline">\(\psi(x)=\ell(x)=x\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(C=V=1\)</span>{% endraw %} and the shift is exactly {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The same calculation underlies local power and the definition of <a href="{% post_url 2023-04-25-regular-estimators-limit-experiments-and-asymptotic-efficiency %}">regular estimators</a>.</p>

<p><span id="some-other-important-results"></span><span id="argmax-theorem"></span></p>

<h3 data-note-section="7" id="08-0-argmax-theorem">7. Why maximizers need a separate convergence theorem</h3>
<p>Suppose an estimator is defined by maximizing {% raw %}<span class="math inline">\(M_n(h)\)</span>{% endraw %}. Knowing the limit of {% raw %}<span class="math inline">\(M_n(h)\)</span>{% endraw %} at each fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %} does not control an optimization over all {% raw %}<span class="math inline">\(h\)</span>{% endraw %}: the maximizer can seek out a location where the approximation is poor. The argmax theorem combines uniform control on compact sets with a condition preventing the maximizer from escaping those sets.</p>

<p>First consider a deterministic compact metric space {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be upper semicontinuous and have a unique maximizer {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Upper semicontinuity means that {% raw %}<span class="math inline">\(h_j\to h\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\limsup_jM(h_j)\le M(h)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the closed set</p>

{% raw %}<div class="math display">\[
F_\varepsilon=\{h\in K:d(h,h^*)\ge\varepsilon\}
\]</div>{% endraw %}
<p>is compact. If nonempty, {% raw %}<span class="math inline">\(M\)</span>{% endraw %} attains its supremum there: take a maximizing sequence, extract a convergent subsequence, and use upper semicontinuity. Uniqueness therefore gives the strictly positive gap</p>

{% raw %}<div class="math display">\[
\gamma_\varepsilon
=M(h^*)-\sup_{F_\varepsilon}M&gt;0.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|M_n-M\|_K\le\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_n(\widehat h_n)\ge\sup_K M_n-r_n\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
M(h^*)-M(\widehat h_n)
&amp;=M(h^*)-M_n(h^*)
 +M_n(h^*)-M_n(\widehat h_n)
 +M_n(\widehat h_n)-M(\widehat h_n)\\
&amp;\le2\delta+r_n.
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(2\delta+r_n&lt;\gamma_\varepsilon\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(d(\widehat h_n,h^*)&lt;\varepsilon\)</span>{% endraw %}. This gap argument explains the theorem. A random limiting objective requires a distributional version of it, and a noncompact space requires localization.</p>

<h3 data-note-section="8" id="08-0-argmax-general">8. The argmax theorem on a metric space</h3>
<div id="metric-argmax-theorem" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong>. Let {% raw %}<span class="math inline">\(H\)</span>{% endraw %} be a metric space and {% raw %}<span class="math inline">\(M_n,M\)</span>{% endraw %} real-valued stochastic processes on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Assume the restrictions to compact sets are measurable random elements of {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
M_n|_K\Rightarrow M|_K
\quad\text{in the supremum norm for every compact }K\subset H.
\]</div>{% endraw %}
<p>Suppose that almost every path of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is upper semicontinuous and has a unique global maximizer {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %} is measurable and has a tight law. Let {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %} be measurable {% raw %}<span class="math inline">\(H\)</span>{% endraw %}-valued random elements satisfying</p>

{% raw %}<div class="math display">\[
M_n(\widehat h_n)\ge\sup_{h\in H}M_n(h)-r_n,
\qquad r_n\ge0,\quad r_n\xrightarrow{P}0.
\]</div>{% endraw %}
<p>Assume also compact containment: for each {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %} there is a compact {% raw %}<span class="math inline">\(K_\eta\subset H\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\limsup_n\Pr(\widehat h_n\notin K_\eta)&lt;\eta.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\widehat h_n\Rightarrow h^*\)</span>{% endraw %} in {% raw %}<span class="math inline">\(H\)</span>{% endraw %}.</p>

</div>
<p>Here {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %} consists of bounded functions on {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with norm {% raw %}<span class="math inline">\(\|f\|_K=\sup_{h\in K}|f(h)|\)</span>{% endraw %}. Convergence in this space is stronger than convergence of finite-dimensional distributions. We state the measurable version so that every probability in the proof is an ordinary probability. The outer-probability extension used for nonmeasurable empirical processes requires the corresponding weak-convergence framework; the measurability hypotheses must be replaced by the corresponding outer-probability assumptions.</p>

<h4 data-note-section="8.1" id="08-0-proof-step-1-localize-both-maximizers">8.1. Proof, step 1: localize both maximizers</h4>
<p>Fix a closed set {% raw %}<span class="math inline">\(F\subset H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Compact containment gives a compact set controlling {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %}; tightness gives another controlling {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Their union is compact, so there is a single nonempty compact {% raw %}<span class="math inline">\(K\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\limsup_n\Pr(\widehat h_n\notin K)&lt;\eta,
\qquad \Pr(h^*\notin K)&lt;\eta.
\]</div>{% endraw %}
<p>It is enough to control {% raw %}<span class="math inline">\(\Pr(\widehat h_n\in F\cap K)\)</span>{% endraw %}, because</p>

{% raw %}<div class="math display">\[
\Pr(\widehat h_n\in F)
\le\Pr(\widehat h_n\in F\cap K)+\Pr(\widehat h_n\notin K).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %} is empty, its probability is zero and the desired bound follows immediately. In the rest of the proof assume it is nonempty.</p>

<h4 data-note-section="8.2" id="08-0-proof-step-2-compare-suprema-through-a-continuous-map">8.2. Proof, step 2: compare suprema through a continuous map</h4>
<p>For any nonempty subset {% raw %}<span class="math inline">\(A\subset K\)</span>{% endraw %} and bounded functions {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\left|\sup_A f-\sup_A g\right|\le\|f-g\|_K.
\]</div>{% endraw %}
<p>Indeed {% raw %}<span class="math inline">\(f(h)\le g(h)+\|f-g\|_K\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\in A\)</span>{% endraw %}; take suprema, then interchange {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
D(f)\triangleq\sup_{F\cap K}f-\sup_K f
\]</div>{% endraw %}
<p>is a {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-Lipschitz real-valued function on {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %}. The continuous mapping theorem yields</p>

{% raw %}<div class="math display">\[
D_n\triangleq D(M_n|_K)\Rightarrow D(M|_K)\triangleq D.
\]</div>{% endraw %}
<p>Only the two supremum functionals enter this step; continuity of the argmax map or of the paths of {% raw %}<span class="math inline">\(M_n\)</span>{% endraw %} is not required. We apply the continuous mapping theorem to those suprema.</p>

<h4 data-note-section="8.3" id="08-0-proof-step-3-use-approximate-maximization-with-a-random-error">8.3. Proof, step 3: use approximate maximization with a random error</h4>
<p>On {% raw %}<span class="math inline">\(\{\widehat h_n\in F\cap K\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sup_{F\cap K}M_n
\ge M_n(\widehat h_n)
\ge\sup_H M_n-r_n
\ge\sup_K M_n-r_n.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(D_n\ge-r_n\)</span>{% endraw %} on that event. For every fixed {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\limsup_n\Pr(\widehat h_n\in F\cap K)
&amp;\le\limsup_n\Pr(D_n\ge-a)
 +\limsup_n\Pr(r_n&gt;a)\\
&amp;\le\Pr(D\ge-a).
\end{aligned}
\]</div>{% endraw %}
<p>The last line uses the portmanteau inequality for the closed interval {% raw %}<span class="math inline">\([-a,\infty)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r_n\to0\)</span>{% endraw %} in probability. Now let {% raw %}<span class="math inline">\(a\downarrow0\)</span>{% endraw %}. Continuity of probabilities along decreasing events gives the upper bound {% raw %}<span class="math inline">\(\Pr(D\ge0)\)</span>{% endraw %}. No assumption about an atom at zero is needed.</p>

<h4 data-note-section="8.4" id="08-0-proof-step-4-uniqueness-makes-the-limiting-gap-strict">8.4. Proof, step 4: uniqueness makes the limiting gap strict</h4>
<p>On the event {% raw %}<span class="math inline">\(\{h^*\in K\setminus F\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sup_K M=M(h^*)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %} is compact and the limiting path is upper semicontinuous, it attains its maximum on {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %}. That maximum is strictly below {% raw %}<span class="math inline">\(M(h^*)\)</span>{% endraw %} by uniqueness. Hence {% raw %}<span class="math inline">\(D&lt;0\)</span>{% endraw %} on this event, and</p>

{% raw %}<div class="math display">\[
\{D\ge0\}\subset\{h^*\in F\}\cup\{h^*\notin K\}
\quad\text{up to the null set of exceptional paths}.
\]</div>{% endraw %}
<p>Combining all four steps,</p>

{% raw %}<div class="math display">\[
\limsup_n\Pr(\widehat h_n\in F)
\le\Pr(h^*\in F)+\Pr(h^*\notin K)
 +\limsup_n\Pr(\widehat h_n\notin K)
\le\Pr(h^*\in F)+2\eta.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}. The inequality holds for every closed {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, so the portmanteau theorem proves {% raw %}<span class="math inline">\(\widehat h_n\Rightarrow h^*\)</span>{% endraw %}. This proves the theorem, including the localization step.</p>

<h4 data-note-section="8.5" id="08-0-what-breaks-if-the-assumptions-are-omitted">8.5. What breaks if the assumptions are omitted?</h4>
<p>Pointwise convergence can miss a moving spike even on a compact space. On {% raw %}<span class="math inline">\(H=[0,1]\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(M(h)=-h^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c_n=1/2+1/(n+2)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
M_n(h)=-h^2+2\mathbf1_{\{h=c_n\}}.
\]</div>{% endraw %}
<p>For every fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M_n(h)\to M(h)\)</span>{% endraw %}, since the distinct spike locations visit {% raw %}<span class="math inline">\(h\)</span>{% endraw %} at most once. Yet the maximizers {% raw %}<span class="math inline">\(c_n\)</span>{% endraw %} tend to {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, while the unique maximizer of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is zero. The supremum-norm error is always two.</p>

<p>Uniform convergence on each compact also does not prevent escape. On {% raw %}<span class="math inline">\(H=\mathbb R\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
M_n(h)=-h^2+(n^2+1)\mathbf1_{\{h=n\}}.
\]</div>{% endraw %}
<p>Every fixed compact eventually sees exactly {% raw %}<span class="math inline">\(-h^2\)</span>{% endraw %}, but the global maximizer is {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Compact containment is therefore a separate assertion to prove, usually through a rate bound or a bound on the objective outside a large ball.</p>

<h3 data-note-section="9" id="08-0-argmax-applications">9. Two applications: consistency and a local Gaussian law</h3>
<p>For consistency, let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be deterministic with a well-separated maximizer {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\gamma_\varepsilon\triangleq
M(\theta_0)-\sup_{d(\theta,\theta_0)\ge\varepsilon}M(\theta)&gt;0
\qquad(\varepsilon&gt;0).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|M_n-M\|_H=o_P(1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_n(\widehat\theta_n)\ge M_n(\theta_0)-r_n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(r_n=o_P(1)\)</span>{% endraw %} nonnegative, the deterministic gap calculation gives</p>

{% raw %}<div class="math display">\[
\Pr(d(\widehat\theta_n,\theta_0)\ge\varepsilon)
\le\Pr(2\|M_n-M\|_H+r_n\ge\gamma_\varepsilon)
\longrightarrow0.
\]</div>{% endraw %}
<p>This proves consistency in full. Global separation replaces compactness in this formulation. Alternatively, local uniform convergence, upper semicontinuity, uniqueness, and compact containment give consistency through the general argmax theorem. A constant distributional limit is also a probability limit: apply portmanteau to the closed set {% raw %}<span class="math inline">\(\{\theta:d(\theta,\theta_0)\ge\varepsilon\}\)</span>{% endraw %}.</p>

<p>For an empirical criterion {% raw %}<span class="math inline">\(M_n(\theta)=n^{-1}\sum_i m_\theta(X_i)\)</span>{% endraw %}, the stochastic part of this argument is a <a href="{% post_url 2022-07-02-uniform-laws-of-large-numbers-and-stochastic-equicontinuity %}">uniform law of large numbers</a>. Identification supplies the separation. These are separate pieces of an M-estimator consistency proof.</p>

<h4 data-note-section="9.1" id="08-0-complete-the-square-before-taking-the-argmax">9.1. Complete the square before taking the argmax</h4>
<p>For a limiting distribution, rescale around the true parameter. Suppose on {% raw %}<span class="math inline">\(H=\mathbb R^d\)</span>{% endraw %} the local criterion satisfies, uniformly on each compact set,</p>

{% raw %}<div class="math display">\[
\mathcal M_n(h)
=h^\top\Delta_n-\frac12h^\top I h+o_P(1),
\qquad \Delta_n\Rightarrow\Delta\sim\mathcal{N}_d(0,I),
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(I\)</span>{% endraw %} positive definite. For log likelihood, {% raw %}<span class="math inline">\(\mathcal M_n(h)\)</span>{% endraw %} is the log likelihood at {% raw %}<span class="math inline">\(\theta_0+h/\sqrt n\)</span>{% endraw %} minus its value at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. Assume the rescaled estimator {% raw %}<span class="math inline">\(\widehat h_n=\sqrt n(\widehat\theta_n-\theta_0)\)</span>{% endraw %} is an approximate maximizer of this criterion and satisfies compact containment. These assumptions include the needed local process convergence and rate control; fixed-{% raw %}<span class="math inline">\(h\)</span>{% endraw %} LAN alone does not supply them.</p>

<p>The limiting criterion can be written exactly as</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathcal M(h)
&amp;=h^\top\Delta-\frac12h^\top I h\\
&amp;=\frac12\Delta^\top I^{-1}\Delta
 -\frac12(h-I^{-1}\Delta)^\top I(h-I^{-1}\Delta).
\end{aligned}
\]</div>{% endraw %}
<p>It is continuous, tends to {% raw %}<span class="math inline">\(-\infty\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\|h\|\to\infty\)</span>{% endraw %}, and has the unique maximizer {% raw %}<span class="math inline">\(h^*=I^{-1}\Delta\)</span>{% endraw %}. The argmax theorem therefore gives</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat\theta_n-\theta_0)
\Rightarrow\mathcal{N}_d(0,I^{-1}).
\]</div>{% endraw %}
<p>We can also recover the stronger linear representation needed for change of measure. Let {% raw %}<span class="math inline">\(h_n^0=I^{-1}\Delta_n\)</span>{% endraw %}, which is tight. On a compact set containing both {% raw %}<span class="math inline">\(h_n^0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(e_n\)</span>{% endraw %} for the supremum error in the quadratic approximation. Approximate maximization and the completed square give</p>

{% raw %}<div class="math display">\[
\frac{\lambda_{\min}(I)}2\|\widehat h_n-h_n^0\|^2
\le2e_n+r_n.
\]</div>{% endraw %}
<p>The completed square turns the loss in objective value into a squared distance from the quadratic maximizer. Both approximation errors vanish on every fixed compact. Tightness makes the probability of leaving a sufficiently large compact arbitrarily small. Thus {% raw %}<span class="math inline">\(\widehat h_n=I^{-1}\Delta_n+o_P(1)\)</span>{% endraw %}.</p>

<p>Under a fixed local alternative {% raw %}<span class="math inline">\(\theta_0+h_0/\sqrt n\)</span>{% endraw %}, the first lemma transfers this remainder, and the third lemma changes the score limit to {% raw %}<span class="math inline">\(\mathcal{N}_d(Ih_0,I)\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sqrt n(\widehat\theta_n-\theta_0)
&amp;\xRightarrow[Q_{n,h_0}]{}\mathcal{N}_d(h_0,I^{-1}),\\
\sqrt n\left(\widehat\theta_n-\theta_0-\frac{h_0}{\sqrt n}\right)
&amp;\xRightarrow[Q_{n,h_0}]{}\mathcal{N}_d(0,I^{-1}).
\end{aligned}
\]</div>{% endraw %}
<p>This returns to the calibration problem in a general smooth model. The alternative shifts the center by an amount comparable to estimation error. The estimator’s centered local law is recovered by combining the score expansion, contiguity, likelihood tilting, and the geometry of the objective.</p>

<h3 data-note-section="10" id="08-0-sources-and-further-reading">10. Sources and further reading</h3>
<p>The first and third lemmas and their likelihood-ratio interpretation are treated in <span class="citation" data-cites="van_der_vaart1998asymptotic">(<a href="#ref-van_der_vaart1998asymptotic" role="doc-biblioref">A. W. van der Vaart 1998, vol. 3, chap. 6</a>)</span>; the QMD-to-LAN result is in Chapter 7. The metric-space argmax theorem is Theorem 3.2.2 of <span class="citation" data-cites="van_der_vaart_weak_2000">(<a href="#ref-van_der_vaart_weak_2000" role="doc-biblioref">Aad W. van der Vaart and Wellner 2000</a>)</span>. The proofs here spell out the truncation, singular-mass, and compact-localization steps in the conventions used throughout these notes.</p>

<p>Online author sources are <a href="https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch3-rev4b.pdf#page=27">Wellner’s lower-bounds notes, Section 3</a> and his <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf#page=96">Delft empirical-process notes, corrected June 1, 2005, Chapter 2, Section 2</a>. The latter gives the compact-set argument behind the argmax theorem. The <a href="{% post_url 2021-12-28-weak-convergence-tightness-and-metric-spaces %}">weak-convergence note</a> supplies the portmanteau and continuous-mapping results used above.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-van_der_vaart1998asymptotic" class="csl-entry" role="listitem">
Vaart, A. W. van der. 1998. <em>Asymptotic Statistics</em>. Vol. 3. Cambridge Series in Statistical and Probabilistic Mathematics. Cambridge University Press, Cambridge. <a href="https://doi.org/10.1017/CBO9780511802256">https://doi.org/10.1017/CBO9780511802256</a>.
</div>
<div id="ref-van_der_vaart_weak_2000" class="csl-entry" role="listitem">
Vaart, Aad W. van der, and Jon A. Wellner. 2000. <em>Weak Convergence and Empirical Processes: With Applications to Statistics</em>. Corr. 2. printing. Springer Series in Statistics. New York Berlin Heidelberg: Springer.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p></p></nav>

</div>
