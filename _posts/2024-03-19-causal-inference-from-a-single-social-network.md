---
layout: "post"
title: "Causal Inference from a Single Social Network"
date: "2024-03-19"
tags: ["econometrics", "networks"]
excerpt: "A policy applied to one person can change the outcomes of their contacts."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/03/19/causal-inference-for-social-network-data/", "/2024/04/04/network-structural-equations-and-identification/", "/2024/04/21/estimating-causal-parameters-on-a-network/"]
---

<div class="note-content" markdown="0">

<p>A policy applied to one person can change the outcomes of their contacts. A single observed network can therefore inform a population intervention, but its observations cannot be treated as independent. <span class="citation" data-cites="ogburn_causal_2024">Ogburn et al. (<a href="#ref-ogburn_causal_2024" role="doc-biblioref">2024</a>)</span> combine a causal model for such interventions with targeted estimation and a normal approximation for dependent observations. The three steps are identification of the intervention mean, correction for estimation of the outcome and exposure models, and control of the covariance and higher-order terms in the resulting network sum.</p>

<div id="10-59-identification-and-dependence-are-separate">

</div>
<h3 data-note-section="1" id="10-59-a-causal-model-for-one-observed-network">1. A causal model for one observed network</h3>
<p>Treat the observed graph as fixed. For person {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, observe baseline covariates {% raw %}<span class="math inline">\(C_i\)</span>{% endraw %}, exposure {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, and outcome {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(N_i\)</span>{% endraw %} contain {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and their contacts. The paper reduces the relevant covariates and exposures to known summaries</p>

{% raw %}<div class="math display">\[
W_i=s_{C,i}(C),\qquad V_i=s_{X,i}(X),
\]</div>{% endraw %}
<p>such as own exposure and the number of exposed contacts. The summary functions use the specified local neighborhoods. The structural equations are</p>

{% raw %}<div class="math display">\[
C_i=f_C(\varepsilon_{C,i}),\qquad
X_i=f_X(W_i,\varepsilon_{X,i}),\qquad
Y_i=f_Y(V_i,W_i,\varepsilon_{Y,i}).
\]</div>{% endraw %}
<p>The summary maps are substantive restrictions: two exposure vectors giving the same {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} must have the same effect on the outcome equation for {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, after accounting for {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %} and its disturbance. When degree or other characteristics change the response, they must be included in the summaries so that a common response function is appropriate.</p>

<p>The error vectors {% raw %}<span class="math inline">\(\varepsilon_C\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varepsilon_X\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon_Y\)</span>{% endraw %} are independent across the three stages. This is the no-unmeasured-confounding restriction. Within a stage, disturbances can be dependent locally. The paper allows such dependence among people separated by at most two ties, and assumes identical marginal error distributions within each stage. Its stronger alternative assumes independent baseline errors and conditionally independent exposure and outcome errors.</p>

<p>The distinction is substantive. A latent factor shared by nearby outcomes can be allowed. A latent factor that jointly affects exposures and outcomes violates the cross-stage independence assumption. For the normal approximation, dependence restrictions must control collections of variables: pairwise independence at large distances alone is not a dependency-graph assumption.</p>

<p>The paper states its main model for discrete variables. We use discrete exposures below, and a bounded outcome, rescaled to {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} when describing the logistic targeting step.</p>

<h3 data-note-section="2" id="10-59-define-the-intervention-before-changing-the-summaries">2. Define the intervention before changing the summaries</h3>
<p>Consider a static intervention setting the entire exposure vector to {% raw %}<span class="math inline">\(x^*=(x_1^*,\ldots,x_n^*)\)</span>{% endraw %}. It induces known summaries {% raw %}<span class="math inline">\(v_i^*=s_{X,i}(x^*)\)</span>{% endraw %} and counterfactual outcomes</p>

{% raw %}<div class="math display">\[
Y_i^*=f_Y(v_i^*,W_i,\varepsilon_{Y,i}).
\]</div>{% endraw %}
<p>The marginal intervention mean is</p>

{% raw %}<div class="math display">\[
\psi_n=\frac1n\sum_{i=1}^n\mathbb{E}[Y_i^*].
\]</div>{% endraw %}
<p>The expectation averages over the baseline population as well as outcome disturbances. A different target conditions on the realized baseline vector:</p>

{% raw %}<div class="math display">\[
\psi_n^C(C)=\frac1n\sum_{i=1}^n\mathbb{E}[Y_i^*\mid C].
\]</div>{% endraw %}
<p>Interventions should be specified on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and then mapped to {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Arbitrarily setting each neighborhood summary can request an impossible joint assignment: overlapping neighborhoods share exposure variables.</p>

<p>Let</p>

{% raw %}<div class="math display">\[
m(v,w)=\mathbb{E}[Y_i\mid V_i=v,W_i=w]
\]</div>{% endraw %}
<p>be the common conditional outcome mean implied by the structural model. Assume positivity: for each baseline configuration in the support, the observed exposure-summary law permits the value {% raw %}<span class="math inline">\(v_i^*\)</span>{% endraw %} required by the intervention. Quantitative positivity bounds will also be needed for estimation.</p>

<div id="network-identification" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Under the structural equations, cross-stage independence, and positivity,</p>

{% raw %}<div class="math display">\[
\psi_n=\frac1n\sum_i\mathbb{E}[m(v_i^*,W_i)],\qquad
\psi_n^C(C)=\frac1n\sum_i m(v_i^*,W_i).
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Conditional on {% raw %}<span class="math inline">\(C=c\)</span>{% endraw %}, the summary {% raw %}<span class="math inline">\(W_i=s_{C,i}(c)\)</span>{% endraw %} is fixed. Cross-stage independence leaves the distribution of {% raw %}<span class="math inline">\(\varepsilon_{Y,i}\)</span>{% endraw %} unchanged when exposure is set to {% raw %}<span class="math inline">\(x^*\)</span>{% endraw %}, and also when conditioning on an observed exposure summary. Consequently,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y_i^*\mid C=c]
=\mathbb{E}[f_Y(v_i^*,s_{C,i}(c),\varepsilon_{Y,i})]
=m(v_i^*,s_{C,i}(c)).
\]</div>{% endraw %}
<p>Positivity makes this value identifiable from the observed conditional mean. Averaging over {% raw %}<span class="math inline">\(i\)</span>{% endraw %} proves the conditional formula; integrating over the distribution of {% raw %}<span class="math inline">\(C\)</span>{% endraw %} proves the marginal formula.</p>

</div>
<p>Dependence across people does not invalidate these expectation identities. It changes how well their averages and the unknown function {% raw %}<span class="math inline">\(m\)</span>{% endraw %} can be estimated from one network.</p>

<h3 data-note-section="3" id="10-59-mixture-weights-and-the-estimating-equation">3. Mixture weights and the estimating equation</h3>
<p>Different vertices can have different distributions of {% raw %}<span class="math inline">\((V_i,W_i)\)</span>{% endraw %} because their neighborhoods differ. Let {% raw %}<span class="math inline">\(H_i\)</span>{% endraw %} be the distribution of {% raw %}<span class="math inline">\((V_i,W_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H_i^*\)</span>{% endraw %} that of {% raw %}<span class="math inline">\((v_i^*,W_i)\)</span>{% endraw %}. Define the mixtures</p>

{% raw %}<div class="math display">\[
\overline H=\frac1n\sum_iH_i,\qquad
\overline H^*=\frac1n\sum_iH_i^*.
\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(\overline H^*\ll\overline H\)</span>{% endraw %} and write</p>

{% raw %}<div class="math display">\[
q(v,w)=\frac{d\overline H^*}{d\overline H}(v,w).
\]</div>{% endraw %}
<p>For discrete variables this is the ratio of the two mixture probability masses. These are mixtures over vertices, not an assumption that vertices are identically distributed. The defining identity is</p>

{% raw %}<div class="math display">\[
\int a\,d\overline H^*=\int qa\,d\overline H
\]</div>{% endraw %}
<p>for integrable functions {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(\psi_n=\int m\,d\overline H^*\)</span>{% endraw %}.</p>

<p>For candidate functions {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, define the augmented sample average</p>

{% raw %}<div class="math display">\[
L_n(a,b)=\frac1n\sum_i
\left(a(v_i^*,W_i)+b(V_i,W_i)(Y_i-a(V_i,W_i))\right).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(Q_n(a,b)\)</span>{% endraw %} be its population expectation when {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} are treated as fixed functions. Then</p>

{% raw %}<div class="math display">\[
Q_n(a,b)=\int a\,d\overline H^*+\int b(m-a)\,d\overline H.
\]</div>{% endraw %}
<div id="network-double-robustness" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. For integrable candidate functions,</p>

{% raw %}<div class="math display">\[
Q_n(a,b)-\psi_n=\int(b-q)(m-a)\,d\overline H.
\]</div>{% endraw %}
<p>Thus the population estimating equation is unbiased if either {% raw %}<span class="math inline">\(a=m\)</span>{% endraw %} or {% raw %}<span class="math inline">\(b=q\)</span>{% endraw %}. Also,</p>

{% raw %}<div class="math display">\[
|Q_n(a,b)-\psi_n|
\leq\|b-q\|_{L^2(\overline H)}\,
\|a-m\|_{L^2(\overline H)}.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Subtract {% raw %}<span class="math inline">\(\int m\,d\overline H^*\)</span>{% endraw %} from {% raw %}<span class="math inline">\(Q_n(a,b)\)</span>{% endraw %} and replace the remaining integral against {% raw %}<span class="math inline">\(\overline H^*\)</span>{% endraw %} by one against {% raw %}<span class="math inline">\(q\,d\overline H\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
Q_n(a,b)-\psi_n
=\int q(a-m)\,d\overline H+\int b(m-a)\,d\overline H
=\int(b-q)(m-a)\,d\overline H.
\]</div>{% endraw %}
<p>Cauchy–Schwarz gives the bound.</p>

</div>
<p>This proves the algebra behind double robustness. Consistency of an estimated average also requires its stochastic error to vanish. Asymptotic normality requires that error and the product remainder to vanish at the faster scale set by the network variance.</p>

<p>The ratio is evaluated at the observed pair {% raw %}<span class="math inline">\((V_i,W_i)\)</span>{% endraw %} when weighting an observed residual. Evaluating its numerator at {% raw %}<span class="math inline">\(v_i^*\)</span>{% endraw %} instead would generally break the change-of-measure identity. The influence-function formula in the paper’s equation (5) uses the observed pair; the June 2022 author manuscript’s printed algorithm numerator with {% raw %}<span class="math inline">\(V_i^*\)</span>{% endraw %} should be read consistently with that formula.</p>

<h3 data-note-section="4" id="10-59-the-targeted-update">4. The targeted update</h3>
<p>Estimate {% raw %}<span class="math inline">\(m\)</span>{% endraw %} and the mixture ratio {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Write the initial fits as {% raw %}<span class="math inline">\(\widehat m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat q\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(0&lt;\widehat m&lt;1\)</span>{% endraw %} where it is evaluated and nonnegative weights {% raw %}<span class="math inline">\(\widehat q\)</span>{% endraw %}. The paper uses a weighted, intercept-only logistic fluctuation:</p>

{% raw %}<div class="math display">\[
\operatorname{logit}\widehat m_\epsilon(v,w)
=\operatorname{logit}\widehat m(v,w)+\epsilon.
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(\widehat\epsilon\)</span>{% endraw %} to minimize the weighted Bernoulli loss at observed {% raw %}<span class="math inline">\((V_i,W_i)\)</span>{% endraw %}, using weights {% raw %}<span class="math inline">\(\widehat q(V_i,W_i)\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\widetilde m=\widehat m_{\widehat\epsilon}\)</span>{% endraw %}. A finite interior solution satisfies</p>

{% raw %}<div class="math display">\[
\frac1n\sum_i\widehat q(V_i,W_i)
(Y_i-\widetilde m(V_i,W_i))=0.
\]</div>{% endraw %}
<p>This follows by differentiating the weighted logistic loss with respect to its intercept. The targeted estimate is</p>

{% raw %}<div class="math display">\[
\widehat\psi_n=\frac1n\sum_i\widetilde m(v_i^*,W_i).
\]</div>{% endraw %}
<p>The score equation gives the exact equality {% raw %}<span class="math inline">\(\widehat\psi_n=L_n(\widetilde m,\widehat q)\)</span>{% endraw %}. If the score is solved only approximately, its remaining value must be included in the estimator’s remainder and be negligible at the inferential scale.</p>

<p>The <a href="{% post_url 2024-01-13-network-tmle-structural-models-dimension-reduction-and-inference %}">network TMLE notes</a> develop the related structural-model construction. The two mixture distributions can be estimated through models for baseline covariates and exposure assignment. The paper also describes fitting mixture laws directly by pooling observed {% raw %}<span class="math inline">\((V_i,W_i)\)</span>{% endraw %} and intervention pairs {% raw %}<span class="math inline">\((v_i^*,W_i)\)</span>{% endraw %}. This is computationally convenient, but the paper explicitly leaves aspects of that direct approach under strong network dependence for further theoretical work. Pooling supplies a loss function; it does not make the observations independent or establish a nuisance convergence rate.</p>

<div id="10-59-matching-nuisance-rates-and-the-target">

</div>
<h3 data-note-section="5" id="10-59-the-expansion-and-the-required-nuisance-rates">5. The expansion and the required nuisance rates</h3>
<p>At the true functions, define</p>

{% raw %}<div class="math display">\[
\varphi_{n,i}=m(v_i^*,W_i)+q(V_i,W_i)(Y_i-m(V_i,W_i)),
\qquad
D_{n,i}=\varphi_{n,i}-\mathbb{E}[\varphi_{n,i}].
\]</div>{% endraw %}
<p>The vertex-specific means need not be equal, but their average is {% raw %}<span class="math inline">\(\psi_n\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[
L_n(m,q)-\psi_n=\frac1n\sum_iD_{n,i}.
\]</div>{% endraw %}
<p>Define the centered empirical-process difference</p>

{% raw %}<div class="math display">\[
\mathcal E_n=(L_n-Q_n)(\widetilde m,\widehat q)
-(L_n-Q_n)(m,q).
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} is evaluated at the fitted functions as a population functional; it is not a conditional expectation that treats the training observations as newly independent. Adding and subtracting {% raw %}<span class="math inline">\(Q_n(\widetilde m,\widehat q)\)</span>{% endraw %} gives the exact decomposition</p>

{% raw %}<div class="math display">\[
\widehat\psi_n-\psi_n
=\frac1n\sum_iD_{n,i}+\mathcal E_n
+\int(\widehat q-q)(m-\widetilde m)\,d\overline H.
\]</div>{% endraw %}
<p>Write</p>

{% raw %}<div class="math display">\[
s_n^2=\operatorname{Var}\left(\sum_iD_{n,i}\right)&gt;0,
\qquad a_n=\frac{s_n}{n}.
\]</div>{% endraw %}
<p>For inference at the actual standard-error scale {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %}, sufficient remainder conditions are</p>

{% raw %}<div class="math display">\[
\mathcal E_n=o_P(a_n),\qquad
\|\widehat q-q\|_{L^2(\overline H)}
\|\widetilde m-m\|_{L^2(\overline H)}=o_P(a_n).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %} is of order {% raw %}<span class="math inline">\(C_n^{-1/2}\)</span>{% endraw %}, both nuisance errors being {% raw %}<span class="math inline">\(o_P(C_n^{-1/4})\)</span>{% endraw %} suffices for the product condition. Merely being {% raw %}<span class="math inline">\(O_P(C_n^{-1/4})\)</span>{% endraw %} need not suffice. One nuisance can converge more slowly if the other converges correspondingly faster.</p>

<p>The paper’s appendix imposes uniform consistency of the updated outcome regression and ratio, uniformly bounded functions and ratio, and an entropy condition on their function class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} under the supremum metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\int_0^\eta\sqrt{\log N(\epsilon,\mathcal F,d)}\,d\epsilon&lt;\infty
\]</div>{% endraw %}
<p>for some {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. It uses network empirical-process bounds to control {% raw %}<span class="math inline">\(\mathcal E_n\)</span>{% endraw %}. The product identity above controls the separate population remainder. A rate for the exposure density alone does not establish a rate for the ratio when its numerator is also estimated; the ratio error appearing in the actual remainder must be controlled.</p>

<div id="10-59-the-main-result">

</div>
<div id="10-59-why-a-variance-bound-is-not-yet-a-clt">

</div>
<h3 data-note-section="6" id="10-59-the-normal-approximation-in-the-paper">6. The normal approximation in the paper</h3>
<p>Let {% raw %}<span class="math inline">\(K_{\max,n}\)</span>{% endraw %} denote maximum neighborhood size, with the harmless inclusion of the focal vertex in this notation. The paper’s Theorem 1 states, under its structural, positivity, nuisance, and dependence regularity conditions and {% raw %}<span class="math inline">\(K_{\max,n}^2/n\to0\)</span>{% endraw %}, that</p>

{% raw %}<div class="math display">\[
\sqrt{C_n}(\widehat\psi_n-\psi_n)
\xrightarrow{d}\mathcal{N}(0,\sigma^2)
\]</div>{% endraw %}
<p>for a normalization between the orders {% raw %}<span class="math inline">\(n/K_{\max,n}^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Its proof handles a dependent first-order sum using Stein’s method, after controlling the nuisance terms. A usable confidence interval requires a positive limiting variance and a consistent variance estimate.</p>

<p>The following argument spells out the normal-approximation conditions using the first-order contributions. It also identifies what must be verified before using a graph-degree bound as a CLT.</p>

<div id="network-stein-bound" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong>. Let {% raw %}<span class="math inline">\(U_1,\ldots,U_n\)</span>{% endraw %} be centered variables with {% raw %}<span class="math inline">\(W=\sum_iU_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(W)=1\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mathcal D_i\)</span>{% endraw %} contains {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U_i\)</span>{% endraw %} is independent of the collection {% raw %}<span class="math inline">\((U_j)_{j\notin\mathcal D_i}\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
T_i=\sum_{j\in\mathcal D_i}U_j,\qquad
Q=\sum_iU_iT_i.
\]</div>{% endraw %}
<p>Then the Wasserstein distance to {% raw %}<span class="math inline">\(Z\sim\mathcal{N}(0,1)\)</span>{% endraw %} obeys</p>

{% raw %}<div class="math display">\[
d_W(W,Z)\leq
\sum_i\mathbb{E}\left[|U_i|\left(\sum_{j\in\mathcal D_i}|U_j|\right)^2\right]
+\sqrt{\frac2\pi}\sqrt{\operatorname{Var}(Q)}.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For a function {% raw %}<span class="math inline">\(h\)</span>{% endraw %} with Lipschitz constant at most one, the standard normal Stein equation is</p>

{% raw %}<div class="math display">\[
f&#x27;(w)-wf(w)=h(w)-\mathbb{E}[h(Z)].
\]</div>{% endraw %}
<p>Its solution satisfies {% raw %}<span class="math inline">\(\|f&#x27;\|_\infty\leq\sqrt{2/\pi}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|f&#x27;&#x27;\|_\infty\leq2\)</span>{% endraw %}, the normal Stein solution bounds used in this method. Put {% raw %}<span class="math inline">\(W_i=W-T_i\)</span>{% endraw %}. Independence and centering give {% raw %}<span class="math inline">\(\mathbb{E}[U_if(W_i)]=0\)</span>{% endraw %}. Taylor expansion about {% raw %}<span class="math inline">\(W\)</span>{% endraw %} therefore yields</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Wf(W)]
=\mathbb{E}[Qf&#x27;(W)]+R,\qquad
|R|\leq\sum_i\mathbb{E}[|U_i|T_i^2].
\]</div>{% endraw %}
<p>Also {% raw %}<span class="math inline">\(\mathbb{E}[Q]=\operatorname{Var}(W)=1\)</span>{% endraw %}, since the omitted covariances vanish. Hence</p>

{% raw %}<div class="math display">\[
|\mathbb{E}[h(W)]-\mathbb{E}[h(Z)]|
\leq\|f&#x27;\|_\infty\mathbb{E}|Q-1|+|R|
\leq\sqrt{\frac2\pi}\sqrt{\operatorname{Var}(Q)}
+\sum_i\mathbb{E}[|U_i|T_i^2].
\]</div>{% endraw %}
<p>Bound {% raw %}<span class="math inline">\(|T_i|\)</span>{% endraw %} by the sum of absolute values and take the supremum over {% raw %}<span class="math inline">\(h\)</span>{% endraw %}.</p>

</div>
<p>The first term controls local triple products. The second controls fluctuations of a local quadratic form. Small pairwise covariances alone do not control either one.</p>

<p>For example, with uniformly bounded centered contributions, bounded dependency degree, and sum variance bounded below by a constant times {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the bound vanishes. There are {% raw %}<span class="math inline">\(O(n)\)</span>{% endraw %} local triples, each of normalized magnitude {% raw %}<span class="math inline">\(O(n^{-3/2})\)</span>{% endraw %}. There are {% raw %}<span class="math inline">\(O(n)\)</span>{% endraw %} local products in {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}, each correlated with only {% raw %}<span class="math inline">\(O(1)\)</span>{% endraw %} other products, giving {% raw %}<span class="math inline">\(\operatorname{Var}(Q)=O(n^{-1})\)</span>{% endraw %}. Both terms are therefore {% raw %}<span class="math inline">\(O(n^{-1/2})\)</span>{% endraw %}. Growing neighborhoods require the sharper counting and normalization conditions in the paper’s argument.</p>

<h3 data-note-section="7" id="10-59-conditional-layers-and-the-final-clt">7. Conditional layers and the final CLT</h3>
<p>The paper analyzes the first-order sum by separating its outcome, exposure, and baseline components. For {% raw %}<span class="math inline">\(\varphi_i=\varphi_{n,i}\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[
D_{Y,i}=\varphi_i-\mathbb{E}[\varphi_i\mid X,C],
\]</div>{% endraw %}
{% raw %}<div class="math display">\[
D_{X,i}=\mathbb{E}[\varphi_i\mid X,C]-\mathbb{E}[\varphi_i\mid C],
\qquad
D_{C,i}=\mathbb{E}[\varphi_i\mid C]-\mathbb{E}[\varphi_i].
\]</div>{% endraw %}
<p>Their sum is {% raw %}<span class="math inline">\(D_{n,i}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(S_Y,S_X,S_C\)</span>{% endraw %} be their sums over vertices. Successive conditional means are zero, so the three sums are orthogonal and</p>

{% raw %}<div class="math display">\[
s_n^2=\operatorname{Var}(S_Y)+\operatorname{Var}(S_X)+\operatorname{Var}(S_C).
\]</div>{% endraw %}
<p>In the static-intervention model with the true regression and cross-stage independent errors, the residual has conditional mean zero given {% raw %}<span class="math inline">\((X,C)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb{E}[\varphi_i\mid X,C]=m(v_i^*,W_i)\)</span>{% endraw %} and the exposure component {% raw %}<span class="math inline">\(D_{X,i}\)</span>{% endraw %} is zero. The three-layer notation is useful for the broader interventions treated in the paper.</p>

<div id="single-network-clt" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>. Suppose the two remainder conditions above hold. Suppose further that, for nonnegative constants {% raw %}<span class="math inline">\(\lambda_Y,\lambda_X,\lambda_C\)</span>{% endraw %} summing to one,</p>

{% raw %}<div class="math display">\[
\frac{\operatorname{Var}(S_Y\mid X,C)}{s_n^2}\xrightarrow{P}\lambda_Y,
\qquad
\frac{\operatorname{Var}(S_X\mid C)}{s_n^2}\xrightarrow{P}\lambda_X,
\qquad
\frac{\operatorname{Var}(S_C)}{s_n^2}\to\lambda_C.
\]</div>{% endraw %}
<p>For each positive-variance layer, assume its standardized sum satisfies the Stein bound above with a right side tending to zero: conditionally in probability for {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, and unconditionally for {% raw %}<span class="math inline">\(C\)</span>{% endraw %}. Assume layers with {% raw %}<span class="math inline">\(\lambda_j=0\)</span>{% endraw %} are negligible after division by {% raw %}<span class="math inline">\(s_n\)</span>{% endraw %}; a sufficient condition is {% raw %}<span class="math inline">\(\mathbb{E}[S_j^2]/s_n^2\to0\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\frac{\widehat\psi_n-\psi_n}{s_n/n}
\xrightarrow{d}\mathcal{N}(0,1).
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The Stein bounds and the conditional variance limits give, for each real {% raw %}<span class="math inline">\(t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\exp(itS_Y/s_n)\mid X,C]
\xrightarrow{P}\exp(-t^2\lambda_Y/2).
\]</div>{% endraw %}
<p>Characteristic functions are bounded by one, so this convergence also holds in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Multiply by the {% raw %}<span class="math inline">\((X,C)\)</span>{% endraw %}-measurable variable {% raw %}<span class="math inline">\(\exp(it(S_X+S_C)/s_n)\)</span>{% endraw %} and take expectations. The result differs by {% raw %}<span class="math inline">\(o(1)\)</span>{% endraw %} from</p>

{% raw %}<div class="math display">\[
\exp(-t^2\lambda_Y/2)\,
\mathbb{E}[\exp(it(S_X+S_C)/s_n)].
\]</div>{% endraw %}
<p>Apply the same argument conditional on {% raw %}<span class="math inline">\(C\)</span>{% endraw %} to the exposure term, then the unconditional CLT to the baseline term. The characteristic function converges to {% raw %}<span class="math inline">\(\exp(-t^2(\lambda_Y+\lambda_X+\lambda_C)/2)=\exp(-t^2/2)\)</span>{% endraw %}. Negligible layers have no effect. Thus {% raw %}<span class="math inline">\((S_Y+S_X+S_C)/s_n\)</span>{% endraw %} is asymptotically standard normal. The exact estimator expansion and the two {% raw %}<span class="math inline">\(o_P(s_n/n)\)</span>{% endraw %} remainder bounds complete the proof by Slutsky’s theorem.</p>

</div>
<p>This proof requires conditional normal approximation and stable conditional variance scales. Orthogonality alone would establish variance additivity, but would not establish a joint Gaussian limit. The theorem states these conditions explicitly so that the growing-degree result is not mistaken for a claim about arbitrary variables with the same maximum degree.</p>

<div id="10-59-why-squared-degree-appears">

</div>
<div id="10-59-the-variance-must-follow-the-graph">

</div>
<div id="10-59-building-the-dependence-graph-for-influence-contributions">

</div>
<div id="10-59-a-small-example-showing-the-missing-variance-term">

</div>
<div id="10-59-a-hub-can-violate-a-local-noise-argument">

</div>
<h3 data-note-section="8" id="10-59-normalization-and-variance-estimation">8. Normalization and variance estimation</h3>
<p>The relevant variance is</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(\frac1n\sum_iD_{n,i}\right)
=\frac1{n^2}\sum_{i,j}\operatorname{Cov}(D_{n,i},D_{n,j}).
\]</div>{% endraw %}
<p>Suppose, for a particular layer, contributions are functions of independent primitive disturbances in closed neighborhoods of size at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Two contributions can then be dependent when those neighborhoods overlap. In an undirected graph,</p>

{% raw %}<div class="math display">\[
\#\{j:N_i\cap N_j\ne\varnothing\}
\leq\sum_{v\in N_i}\#\{j:v\in N_j\}\leq K^2.
\]</div>{% endraw %}
<p>If each covariance is bounded in absolute value by {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, this gives variance at most {% raw %}<span class="math inline">\(MK^2/n\)</span>{% endraw %} for the average. This is the elementary reason a squared-neighborhood count appears. With locally dependent primitive disturbances, or summaries involving larger neighborhoods, the actual dependency sets must be constructed again; the social adjacency matrix cannot simply be substituted for them.</p>

<p>If the full sum variance satisfies {% raw %}<span class="math inline">\(cn\leq s_n^2\leq CnK^2\)</span>{% endraw %}, its reciprocal mean-variance normalization {% raw %}<span class="math inline">\(n^2/s_n^2\)</span>{% endraw %} lies between constant multiples of {% raw %}<span class="math inline">\(n/K^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The upper variance bound does not assert equality: covariance cancellations and weaker dependencies can produce a faster rate. The conditions in the CLT concern this actual variance, not a count of nodes labeled an effective sample size.</p>

<p>For inference, let {% raw %}<span class="math inline">\(\widehat V_n\)</span>{% endraw %} estimate {% raw %}<span class="math inline">\(s_n^2/n^2\)</span>{% endraw %} with relative consistency,</p>

{% raw %}<div class="math display">\[
\frac{\widehat V_n}{s_n^2/n^2}\xrightarrow{P}1.
\]</div>{% endraw %}
<p>The preceding theorem then gives the interval</p>

{% raw %}<div class="math display">\[
\widehat\psi_n\ \pm\ z_{1-\alpha/2}\sqrt{\widehat V_n}.
\]</div>{% endraw %}
<p>Keeping only the diagonal terms {% raw %}<span class="math inline">\(i=j\)</span>{% endraw %} generally misses network covariance. Centering also needs care: {% raw %}<span class="math inline">\(D_{n,i}\)</span>{% endraw %} uses the vertex-specific expectation of {% raw %}<span class="math inline">\(\varphi_{n,i}\)</span>{% endraw %}, which need not equal {% raw %}<span class="math inline">\(\psi_n\)</span>{% endraw %} at every vertex.</p>

<p>Under the stronger conditionally independent error model, the paper describes a plug-in variance and a parametric bootstrap. The bootstrap samples baseline covariates, generates exposures and outcomes in their causal order on the fixed graph, recomputes all neighborhood summaries, and refits the targeting step. It does not independently resample the overlapping summaries {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %}. Consistency of this variance procedure requires correct nuisance models; double robustness of the point-estimating equation does not by itself make the variance estimate doubly robust.</p>

<p>With latent within-stage dependence, the paper discusses block methods, parametric modeling of baseline dependence, and conditioning on {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, while noting unresolved implementation questions. For the conditional target {% raw %}<span class="math inline">\(\psi_n^C(C)\)</span>{% endraw %}, the baseline-distribution contribution is removed, and the weights, expansion, and variance must be derived under the conditional law. Treatment and outcome dependence remain. Choosing that target before fitting the estimator determines which sources of uncertainty belong in the reported interval.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-ogburn_causal_2024" class="csl-entry" role="listitem">
Ogburn, Elizabeth L., Oleg Sofrygin, Iván Díaz, and Mark J. Van Der Laan. 2024. <span>“Causal Inference for Social Network Data.”</span> <em>Journal of the American Statistical Association</em> 119 (545): 597–611. <a href="https://doi.org/10.1080/01621459.2022.2131557">https://doi.org/10.1080/01621459.2022.2131557</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-01-13-network-tmle-structural-models-dimension-reduction-and-inference %}">Network TMLE: Structural Models, Dimension Reduction, and Inference</a> · Next: <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">Two-Stage Experiments under Partial Interference: Effects, Variance, and Limits</a></p></nav>

</div>
